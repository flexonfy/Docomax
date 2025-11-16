import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { comprehensiveDiseases } from '../../data/comprehensiveDiseases';
import type { ComprehensiveDisease } from '../../data/diseases/types';
import { triageQuestions, TriageQuestion } from '../../data/triageQuestions';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose, DialogDescription } from '@/components/ui/dialog';
import { AlertTriangle, Brain, Stethoscope, User, ListChecks, FileQuestion, Sparkles, ArrowLeft, ArrowRight, RotateCcw, HelpCircle, AlertCircle, Zap } from 'lucide-react';
import UserInfoStep from './components/UserInfoStep';
import SymptomSelectionStep from './components/SymptomSelectionStep';
import TriageResults from './components/TriageResults';
import { useToast } from '@/components/ui/use-toast';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  calculateBayesianScore,
  detectSymptomConflicts,
  scoreSymptomCombinations,
  assessEmergencyLevel,
  generateReasoningExplanation,
  getBaselineConfidence,
  calculateRiskFactorBoost,
  type EnhancedDiseaseResult
} from '../../data/triageAlgorithm';
import { isRedFlagSymptom } from '../../data/symptomMetadata';
import { detectCriticalEmergency, checkDangerousSymptomCombinations, performComprehensiveSafetyCheck } from '../../data/safetyRules';

interface TriageResult extends EnhancedDiseaseResult {
  refinedConfidence?: number;
}

export default function Triage() {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [stage, setStage] = useState<'userInfo' | 'symptomSelection' | 'detailedQuestions' | 'results'>('userInfo');
  const [userInfo, setUserInfo] = useState({ age: '', gender: 'all', smoking: 'never', chronic: false });
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [results, setResults] = useState<TriageResult[]>([]);
  const [quizForDisease, setQuizForDisease] = useState<TriageResult | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, boolean>>({});

  // New state for detailed questions
  const [questionsToAsk, setQuestionsToAsk] = useState<TriageQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [refinementPhase, setRefinementPhase] = useState<'initial' | 'refining' | 'exploring'>('initial');

  const selectInitialQuestions = (symptoms: string[]): TriageQuestion[] => {
    // Get questions directly relevant to selected symptoms
    const relevantQuestions = triageQuestions.filter(q =>
      q.relevantSymptoms.some(symptomKeyword =>
        symptoms.some(selected => selected.toLowerCase().includes(symptomKeyword))
      )
    );

    // Always ask at least 3-5 questions to build diagnostic confidence
    // If fewer than 3 relevant questions, add general diagnostic questions
    if (relevantQuestions.length < 3) {
      // Add duration and severity-related questions
      const additionalQuestions = triageQuestions.filter(q =>
        q.id.includes('duration') || q.id.includes('fever') || q.id.includes('pain')
      );
      return [...relevantQuestions, ...additionalQuestions].slice(0, 5);
    }

    return relevantQuestions.slice(0, 5);
  };

  const handleNext = () => {
    if (stage === 'userInfo') {
      const ageNum = parseInt(userInfo.age);
      if (!userInfo.age || isNaN(ageNum) || ageNum < 1 || ageNum > 120) {
        toast({ title: "Invalid Age", description: "Please enter a valid age between 1 and 120.", variant: "destructive" });
        return;
      }
      setStage('symptomSelection');
    } else if (stage === 'symptomSelection') {
      if (selectedSymptoms.length === 0) {
        toast({ title: "Symptoms Required", description: "Please select at least one symptom to continue.", variant: "destructive" });
        return;
      }
      // Always transition to asking questions first, before showing results
      const questionsToAsk = selectInitialQuestions(selectedSymptoms);
      setQuestionsToAsk(questionsToAsk);
      setCurrentQuestionIndex(0);
      setAnswers({});
      setRefinementPhase('initial');
      setStage('detailedQuestions');
    } else if (stage === 'detailedQuestions') {
      const q = questionsToAsk[currentQuestionIndex];
      const answer = answers[q.id];

      // Validation for numeric inputs
      if (q.type === 'number' && answer) {
        const numAnswer = parseFloat(answer);
        if (q.id === 'fever_temp' && (numAnswer < 35 || numAnswer > 43)) {
          toast({ title: "Invalid Temperature", description: "Please enter a temperature between 35°C and 43°C.", variant: "destructive" });
          return;
        }
        if (q.id === 'diarrhea_frequency' && (numAnswer < 1 || numAnswer > 50)) {
          toast({ title: "Invalid Frequency", description: "Please enter a number between 1 and 50.", variant: "destructive" });
          return;
        }
      }

      // Move to next question or finalize
      if (currentQuestionIndex < questionsToAsk.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        // After all questions are answered, analyze and show results
        analyzeSymptoms();
        setStage('results');
      }
    }
  };

  const handleBack = () => {
    if (stage === 'results') {
      // From results, go back to refining questions only if in refining/exploring phase
      if (refinementPhase === 'refining' || refinementPhase === 'exploring') {
        setStage('detailedQuestions');
        setRefinementPhase('initial');
        setCurrentQuestionIndex(0);
      } else {
        // Reset and go back to symptoms
        setStage('symptomSelection');
        setRefinementPhase('initial');
      }
    }
    else if (stage === 'detailedQuestions') {
      if (currentQuestionIndex > 0) {
        // Go to previous question
        setCurrentQuestionIndex(prev => prev - 1);
      } else if (refinementPhase === 'initial') {
        // First question in initial phase - go back to symptom selection
        setStage('symptomSelection');
        setQuestionsToAsk([]);
        setAnswers({});
      } else {
        // Back from refinement phase - go to results
        setStage('results');
        setRefinementPhase('initial');
      }
    }
    else if (stage === 'symptomSelection') {
      setStage('userInfo');
    }
  };

  const handleSymptomAdd = (symptom: string) => {
    if (!selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const handleSymptomRemove = (symptom: string) => {
    setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptom));
  };

  const handleClearAll = () => {
    setSelectedSymptoms([]);
  };

  const handleAnswerChange = (questionId: string, value: any) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const analyzeSymptoms = () => {
    // SAFETY CHECK FIRST
    const safetyCheck = detectCriticalEmergency(selectedSymptoms);
    if (safetyCheck.requiresImmediateAction) {
      toast({
        title: safetyCheck.message,
        description: safetyCheck.actionRequired,
        variant: "destructive"
      });
    }

    const dangerousCombinations = checkDangerousSymptomCombinations(selectedSymptoms);
    dangerousCombinations.forEach(alert => {
      toast({
        title: '⚠️ Alert',
        description: alert,
        variant: "destructive"
      });
    });

    const triageResults: TriageResult[] = [];
    let filteredDiseases = comprehensiveDiseases;

    // Check for critical red flag symptoms
    const hasRedFlags = selectedSymptoms.some(s => isRedFlagSymptom(s));

    if (userInfo.age) {
      const ageNum = parseInt(userInfo.age);
      if (!isNaN(ageNum)) {
        filteredDiseases = filteredDiseases.filter(d => {
          if (d.ageGroup === 'all') return true;
          if (d.ageGroup === 'pediatric' && ageNum < 18) return true;
          if (d.ageGroup === 'adult' && ageNum >= 18 && ageNum < 65) return true;
          if (d.ageGroup === 'elderly' && ageNum >= 65) return true;
          return false;
        });
      }
    }
    if (userInfo.gender !== 'all') {
      filteredDiseases = filteredDiseases.filter(d => d.gender === userInfo.gender || d.gender === 'all');
    }

    filteredDiseases.forEach(disease => {
      const diseaseSymptoms = disease.symptoms?.[language] || disease.symptoms?.en || [];
      const commonSymptoms = disease.commonSymptoms?.[language] || disease.commonSymptoms?.en || [];
      const rareSymptoms = disease.rareSymptoms?.[language] || disease.rareSymptoms?.en || [];
      const diseaseRiskFactors = disease.riskFactors?.[language] || disease.riskFactors?.en || [];

      const matchedSymptoms: string[] = [];
      const unmatchedCommonSymptoms: string[] = [];
      let rareSymptomCount = 0;
      let commonSymptomCount = 0;

      // Find matched symptoms
      selectedSymptoms.forEach(selectedSymptom => {
        const lowerSelected = selectedSymptom.toLowerCase();
        const isMatched = diseaseSymptoms.some(ds => ds.toLowerCase() === lowerSelected);

        if (isMatched) {
          matchedSymptoms.push(selectedSymptom);
          if (rareSymptoms.some(rs => rs.toLowerCase() === lowerSelected)) {
            rareSymptomCount++;
          } else if (commonSymptoms.some(cs => cs.toLowerCase() === lowerSelected)) {
            commonSymptomCount++;
          }
        }
      });

      // Find unmatched common symptoms (would expect to see)
      commonSymptoms.forEach(cs => {
        if (!matchedSymptoms.some(ms => ms.toLowerCase() === cs.toLowerCase())) {
          unmatchedCommonSymptoms.push(cs);
        }
      });

      if (matchedSymptoms.length > 0) {
        // **PHASE 1: Enhanced Bayesian Score Calculation**
        const baselineConfidence = getBaselineConfidence(disease.id, disease.prevalenceInAfrica);

        const bayesianScore = calculateBayesianScore(
          matchedSymptoms.length,
          selectedSymptoms.length,
          diseaseSymptoms.length,
          baselineConfidence,
          commonSymptomCount,
          rareSymptomCount
        );

        // **Detect symptom conflicts**
        const conflictPenalty = detectSymptomConflicts(
          selectedSymptoms,
          commonSymptoms,
          rareSymptoms
        );

        // **Score symptom combinations**
        const { combinationBonus, matchedPattern } = scoreSymptomCombinations(
          selectedSymptoms,
          disease
        );

        // Risk factor boost
        const ageNum = userInfo.age ? parseInt(userInfo.age) : 30;
        const riskFactorBoost = calculateRiskFactorBoost(
          {
            smoking: userInfo.smoking as 'never' | 'former' | 'current',
            chronic: userInfo.chronic,
            age: ageNum,
          },
          diseaseRiskFactors,
          disease.ageGroup
        );

        // Apply triage rules if answers exist
        let triageRuleBoost = 1.0;
        if (disease.triageRules) {
          Object.entries(answers).forEach(([questionId, answer]) => {
            if (disease.triageRules![questionId]?.[answer]) {
              triageRuleBoost *= disease.triageRules![questionId][answer];
            }
          });
        }

        // Combine all factors
        let finalConfidence = bayesianScore;
        finalConfidence = Math.round(finalConfidence * conflictPenalty * combinationBonus * riskFactorBoost * triageRuleBoost);
        finalConfidence = Math.min(95, Math.max(5, finalConfidence));

        // **Calculate risk score (0-100)**
        const severityWeights = { 'emergency': 90, 'high': 70, 'medium': 50, 'low': 20 };
        let riskScore = severityWeights[disease.severity as keyof typeof severityWeights] || 30;
        riskScore += matchedSymptoms.length * 3;
        riskScore = Math.min(100, Math.round(riskScore));

        // **Assess emergency level**
        const emergencyLevel = assessEmergencyLevel(
          selectedSymptoms,
          disease,
          disease.severity,
          riskScore
        );

        // **Generate reasoning**
        const reasoning = generateReasoningExplanation(
          matchedSymptoms,
          unmatchedCommonSymptoms,
          diseaseRiskFactors.slice(0, 2),
          userInfo.age,
          userInfo.gender
        );

        triageResults.push({
          disease,
          baselineConfidence,
          bayesianScore,
          finalConfidence,
          matchedSymptoms,
          unmatchedCommonSymptoms,
          severity: disease.severity,
          riskScore,
          emergencyLevel,
          reasoning,
          confidence: finalConfidence,
        } as unknown as TriageResult);
      }
    });

    // IMPROVED SORTING: Balance confidence + emergency weight
    // Don't just rank by emergency - need actual diagnostic confidence
    const emergencyWeights = { 'critical': 3.0, 'emergent': 2.0, 'urgent': 1.0, 'routine': 0.3 };

    triageResults.sort((a, b) => {
      // Calculate composite score: (confidence * weight) + emergency_boost
      const emergencyWeightA = emergencyWeights[a.emergencyLevel as keyof typeof emergencyWeights] || 0;
      const emergencyWeightB = emergencyWeights[b.emergencyLevel as keyof typeof emergencyWeights] || 0;

      const compositeA = (a.finalConfidence / 100) * emergencyWeightA;
      const compositeB = (b.finalConfidence / 100) * emergencyWeightB;

      if (Math.abs(compositeA - compositeB) > 0.1) {
        return compositeB - compositeA;
      }

      // If composite scores are similar, sort by confidence
      if (a.finalConfidence !== b.finalConfidence) return b.finalConfidence - a.finalConfidence;

      // Then by risk score
      return b.riskScore - a.riskScore;
    });

    setResults(triageResults.slice(0, 10));
  };

  const startQuiz = (result: TriageResult) => {
    setQuizForDisease(result);
    setQuizAnswers({});
  };

  const handleQuizAnswer = (question: string, answer: boolean) => {
    setQuizAnswers(prev => ({ ...prev, [question]: answer }));
  };

  const refineConfidence = () => {
    if (!quizForDisease) return;
    let confidenceChange = 0;
    const questions = quizForDisease.disease.quizQuestions || [];
    
    questions.forEach(q => {
      const answer = quizAnswers[q.en];
      if (answer === true) {
        confidenceChange += q.isRiskFactor ? 5 : 10;
      } else if (answer === false) {
        confidenceChange -= q.isRiskFactor ? 0 : 15;
      }
    });

    const currentResult = results.find(r => r.disease.id === quizForDisease.disease.id);
    const originalConfidence = currentResult?.confidence || quizForDisease.confidence;

    const newConfidence = Math.min(98, Math.max(5, originalConfidence + confidenceChange));
    
    setResults(prevResults => {
      const newResults = prevResults.map(r => 
        r.disease.id === quizForDisease.disease.id 
          ? { ...r, refinedConfidence: newConfidence, confidence: originalConfidence }
          : r
      );
      newResults.sort((a, b) => (b.refinedConfidence || b.confidence) - (a.refinedConfidence || a.confidence));
      return newResults;
    });

    setQuizForDisease(null);
  };

  const resetTriage = () => {
    setStage('userInfo');
    setUserInfo({ age: '', gender: 'all', smoking: 'never', chronic: false });
    setSelectedSymptoms([]);
    setResults([]);
    setQuestionsToAsk([]);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setRefinementPhase('initial');
  };

  const askMoreQuestions = () => {
    // Generate follow-up questions based on top results
    if (results.length === 0) return;

    const topResult = results[0];
    const followUpQuestions = triageQuestions.filter(q =>
      q.relevantSymptoms.some(symptomKeyword =>
        topResult.disease.symptoms?.[language]?.some(s => s.toLowerCase().includes(symptomKeyword)) ||
        topResult.disease.commonSymptoms?.[language]?.some(s => s.toLowerCase().includes(symptomKeyword))
      ) && !answers[q.id]
    ).slice(0, 4); // Ask up to 4 follow-up questions

    if (followUpQuestions.length > 0) {
      setQuestionsToAsk(followUpQuestions);
      setCurrentQuestionIndex(0);
      setRefinementPhase('refining');
      setStage('detailedQuestions');
    } else {
      toast({ title: "No More Questions", description: "We've already asked all relevant follow-up questions.", variant: "default" });
    }
  };

  const exploreOtherPossibilities = () => {
    // Reset to explore other diagnoses
    setQuestionsToAsk([]);
    setCurrentQuestionIndex(0);
    setRefinementPhase('exploring');
    setStage('detailedQuestions');
    toast({ title: "Exploring Other Possibilities", description: "Let's refine the diagnosis further.", variant: "default" });
  };

  const renderCurrentQuestion = () => {
    if (stage !== 'detailedQuestions' || !questionsToAsk[currentQuestionIndex]) {
      return null;
    }
    const q = questionsToAsk[currentQuestionIndex];
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Question {currentQuestionIndex + 1} of {questionsToAsk.length}</CardTitle>
          <CardDescription>Please provide more details to help refine the assessment.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Label className="text-lg">{q.question[language]}</Label>
          {q.type === 'number' && (
            <Input
              type="number"
              value={answers[q.id] || ''}
              onChange={(e) => handleAnswerChange(q.id, e.target.value)}
              placeholder={q.unit}
            />
          )}
          {q.type === 'select' && q.options && (
            <Select
              value={answers[q.id] || ''}
              onValueChange={(value) => handleAnswerChange(q.id, value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                {q.options.map((opt, optIndex) => (
                  <SelectItem key={optIndex} value={opt.value}>{opt.label[language]}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
          {q.type === 'boolean' && (
            <div className="flex items-center space-x-4 pt-2">
              <Button variant={answers[q.id] === true ? 'default' : 'outline'} onClick={() => handleAnswerChange(q.id, true)} className="flex-1">{t('common.yes')}</Button>
              <Button variant={answers[q.id] === false ? 'default' : 'outline'} onClick={() => handleAnswerChange(q.id, false)} className="flex-1">{t('common.no')}</Button>
            </div>
          )}
        </CardContent>
      </Card>
    );
  };

  const getStageIcon = () => {
    switch(stage) {
      case 'userInfo': return <User className="h-8 w-8" />;
      case 'symptomSelection': return <ListChecks className="h-8 w-8" />;
      case 'detailedQuestions': return <FileQuestion className="h-8 w-8" />;
      case 'results': return <Brain className="h-8 w-8" />;
      default: return <Stethoscope className="h-8 w-8" />;
    }
  };

  const getStageTitle = () => {
    switch(stage) {
      case 'userInfo': return "Let's start with some basics";
      case 'symptomSelection': return "What symptoms are you experiencing?";
      case 'detailedQuestions': return "A few more questions...";
      case 'results': return "Analysis Results";
      default: return t('pages.triage.title');
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl text-white shadow-lg">
                {getStageIcon()}
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  {getStageTitle()}
                </h1>
                <p className="text-lg text-gray-600">{t('pages.triage.systemDescription')}</p>
              </div>
            </div>
          </div>

          {stage === 'userInfo' && <UserInfoStep userInfo={userInfo} onInfoChange={(field, value) => setUserInfo(prev => ({ ...prev, [field]: value }))} />}
          {stage === 'symptomSelection' && <SymptomSelectionStep selectedSymptoms={selectedSymptoms} onSymptomAdd={handleSymptomAdd} onSymptomRemove={handleSymptomRemove} onClearAll={handleClearAll} />}
          {stage === 'detailedQuestions' && renderCurrentQuestion()}
          {stage === 'results' && (
            <>
              {results.length > 0 && results.some(r => r.emergencyLevel === 'critical' || r.emergencyLevel === 'emergent') && (
                <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg shadow-md">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-6 w-6 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-red-900 mb-1">⚠️ Critical/Emergency Symptoms Detected</h3>
                      <p className="text-red-800 text-sm">
                        Based on your symptoms, you may need immediate medical attention. Please seek emergency care right away or call your local emergency number.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {results.length > 0 ? (
                <>
                  <TriageResults results={results} onStartQuiz={startQuiz} />
                  <div className="mt-8 space-y-4">
                    {results[0]?.finalConfidence && results[0].finalConfidence < 70 && (
                      <Card className="bg-blue-50 border border-blue-200 shadow-md">
                        <CardContent className="pt-6">
                          <p className="text-blue-900 mb-4">
                            We're {results[0].finalConfidence}% confident in our assessment. Let's ask a few more questions to refine the diagnosis.
                          </p>
                          <Button onClick={askMoreQuestions} className="w-full bg-blue-600 hover:bg-blue-700">
                            <FileQuestion className="h-4 w-4 mr-2" />
                            Ask More Questions
                          </Button>
                        </CardContent>
                      </Card>
                    )}
                    {results[0]?.finalConfidence && results[0].finalConfidence >= 70 && results.length > 1 && (
                      <Card className="bg-green-50 border border-green-200 shadow-md">
                        <CardContent className="pt-6">
                          <p className="text-green-900 mb-4">
                            We're quite confident ({results[0].finalConfidence}%) in our assessment. Would you like to explore other possibilities?
                          </p>
                          <Button onClick={exploreOtherPossibilities} variant="outline" className="w-full border-green-300 text-green-700 hover:bg-green-50">
                            <Sparkles className="h-4 w-4 mr-2" />
                            Want to Explore Other Possibilities?
                          </Button>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </>
              ) : (
                <Card className="text-center shadow-lg bg-white/90 backdrop-blur-sm">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mb-4">
                      <HelpCircle className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>{t('pages.triage.noMatchTitle')}</CardTitle>
                    <CardDescription>{t('pages.triage.noMatchDescription')}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{t('pages.triage.noMatchAdvice')}</p>
                    <ul className="list-disc list-inside text-left max-w-md mx-auto text-gray-600 space-y-2">
                      <li>{t('pages.triage.noMatchPoint1')}</li>
                      <li>{t('pages.triage.noMatchPoint2')}</li>
                      <li>{t('pages.triage.noMatchPoint3')}</li>
                    </ul>
                  </CardContent>
                </Card>
              )}
            </>
          )}

          <div className="mt-8 flex justify-between">
            <Button onClick={handleBack} disabled={stage === 'userInfo'}>
              <ArrowLeft className="h-4 w-4 mr-2" /> {t('common.back')}
            </Button>
            {stage !== 'results' ? (
              <Button onClick={handleNext} disabled={stage === 'symptomSelection' && selectedSymptoms.length === 0}>
                {stage === 'detailedQuestions' && currentQuestionIndex === questionsToAsk.length - 1
                  ? (refinementPhase === 'initial' ? 'Analyze Symptoms' : 'Refine Results')
                  : t('common.next')} <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button onClick={resetTriage}>
                <RotateCcw className="h-4 w-4 mr-2" /> Start Over
              </Button>
            )}
          </div>

          {stage === 'results' && (
            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6 shadow-lg">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-yellow-900 mb-2">{t('pages.triage.disclaimer')}</h3>
                  <p className="text-yellow-800 text-sm leading-relaxed">{t('pages.triage.disclaimerText')}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Dialog open={!!quizForDisease} onOpenChange={() => setQuizForDisease(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <FileQuestion className="h-5 w-5 text-blue-500" />
              <span>Follow-up for {quizForDisease?.disease.name[language]}</span>
            </DialogTitle>
            <DialogDescription>{t('pages.triage.quizDescription')}</DialogDescription>
          </DialogHeader>
          <div className="py-4 space-y-4">
            {quizForDisease?.disease.quizQuestions?.map((q, i) => (
              <div key={i} className="p-3 border rounded-lg">
                <p className="text-sm font-medium mb-2">{q[language]}</p>
                <div className="flex space-x-2">
                  <Button variant={quizAnswers[q.en] === true ? 'default' : 'outline'} onClick={() => handleQuizAnswer(q.en, true)} className="flex-1">{t('common.yes')}</Button>
                  <Button variant={quizAnswers[q.en] === false ? 'default' : 'outline'} onClick={() => handleQuizAnswer(q.en, false)} className="flex-1">{t('common.no')}</Button>
                </div>
              </div>
            ))}
          </div>
          <DialogFooter>
            <DialogClose asChild><Button variant="outline">{t('common.cancel')}</Button></DialogClose>
            <Button onClick={refineConfidence} disabled={Object.keys(quizAnswers).length !== quizForDisease?.disease.quizQuestions?.length}>
              <Sparkles className="h-4 w-4 mr-2" /> Recalculate Confidence
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
