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

interface TriageResult {
  disease: ComprehensiveDisease;
  confidence: number;
  refinedConfidence?: number;
  matchedSymptoms: string[];
  severity: string;
  riskScore: number;
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
      // Determine which detailed questions to ask
      const relevantQuestions = triageQuestions.filter(q => 
        q.relevantSymptoms.some(symptomKeyword => 
          selectedSymptoms.some(selected => selected.toLowerCase().includes(symptomKeyword))
        )
      );
      if (relevantQuestions.length > 0) {
        setQuestionsToAsk(relevantQuestions);
        setCurrentQuestionIndex(0);
        setStage('detailedQuestions');
      } else {
        analyzeSymptoms();
        setStage('results');
      }
    } else if (stage === 'detailedQuestions') {
      const q = questionsToAsk[currentQuestionIndex];
      const answer = answers[q.id];

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

      if (currentQuestionIndex < questionsToAsk.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        analyzeSymptoms();
        setStage('results');
      }
    }
  };

  const handleBack = () => {
    if (stage === 'results') setStage('detailedQuestions');
    else if (stage === 'detailedQuestions') {
      if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex(prev => prev - 1);
      } else {
        setStage('symptomSelection');
      }
    }
    else if (stage === 'symptomSelection') setStage('userInfo');
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
    const triageResults: TriageResult[] = [];
    let filteredDiseases = comprehensiveDiseases;

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
      
      const matchedSymptoms: string[] = [];
      let score = 0;
      
      selectedSymptoms.forEach(selectedSymptom => {
        const lowerSelected = selectedSymptom.toLowerCase();
        if (diseaseSymptoms.some(ds => ds.toLowerCase() === lowerSelected)) {
          matchedSymptoms.push(selectedSymptom);
          if (rareSymptoms.some(rs => rs.toLowerCase() === lowerSelected)) {
            score += 2.5;
          } else if (commonSymptoms.some(cs => cs.toLowerCase() === lowerSelected)) {
            score += 1.0;
          } else {
            score += 1.5;
          }
        }
      });

      if (matchedSymptoms.length > 0) {
        const maxPossibleScore = selectedSymptoms.reduce((acc, selectedSymptom) => {
          const lowerSelected = selectedSymptom.toLowerCase();
          if (rareSymptoms.some(rs => rs.toLowerCase() === lowerSelected)) return acc + 2.5;
          if (commonSymptoms.some(cs => cs.toLowerCase() === lowerSelected)) return acc + 1.0;
          return acc + 1.5;
        }, 0);

        let confidence = (score / Math.max(maxPossibleScore, 1)) * 100;

        const commonMatchedRatio = commonSymptoms.length > 0 ? (matchedSymptoms.filter(s => commonSymptoms.includes(s)).length / commonSymptoms.length) : 0;
        confidence += commonMatchedRatio * 20;

        const unmatchedPenalty = (selectedSymptoms.length - matchedSymptoms.length) * 5;
        confidence -= unmatchedPenalty;

        const prevalenceMultiplier = {
          'very-high': 1.2, 'high': 1.1, 'medium': 1.0, 'low': 0.9, 'rare': 0.8
        };
        confidence *= prevalenceMultiplier[disease.prevalenceInAfrica] || 1.0;

        if (userInfo.smoking === 'current' && disease.riskFactors.en.some(rf => rf.toLowerCase().includes('smoking'))) {
          confidence *= 1.1;
        }
        if (userInfo.chronic && disease.riskFactors.en.some(rf => ['diabetes', 'high blood pressure', 'heart disease'].some(c => rf.toLowerCase().includes(c)))) {
          confidence *= 1.1;
        }

        // Apply triage rules
        if (disease.triageRules) {
          Object.entries(answers).forEach(([questionId, answer]) => {
            if (disease.triageRules![questionId]?.[answer]) {
              confidence *= disease.triageRules![questionId][answer];
            }
          });
        }

        const severityScore = { 'emergency': 90, 'high': 70, 'medium': 50, 'low': 20 };
        let riskScore = severityScore[disease.severity] || 30;
        riskScore += matchedSymptoms.length * 2;
        if (userInfo.age && parseInt(userInfo.age) > 60 && disease.ageGroup === 'elderly') {
          riskScore += 10;
        }

        triageResults.push({
          disease,
          confidence: Math.min(95, Math.max(5, Math.round(confidence))),
          matchedSymptoms,
          severity: disease.severity,
          riskScore: Math.min(100, Math.round(riskScore))
        });
      }
    });

    const severityOrder = { 'emergency': 4, 'high': 3, 'medium': 2, 'low': 1 };
    triageResults.sort((a, b) => {
      if (a.confidence !== b.confidence) return b.confidence - a.confidence;
      if (a.riskScore !== b.riskScore) return b.riskScore - a.riskScore;
      const severityA = severityOrder[a.severity as keyof typeof severityOrder] || 0;
      const severityB = severityOrder[b.severity as keyof typeof severityOrder] || 0;
      return severityB - severityA;
    });

    setResults(triageResults.slice(0, 8));
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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl text-white shadow-lg">
                {getStageIcon()}
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
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
            results.length > 0 ? (
              <TriageResults results={results} onStartQuiz={startQuiz} />
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
            )
          )}

          <div className="mt-8 flex justify-between">
            <Button onClick={handleBack} disabled={stage === 'userInfo'}>
              <ArrowLeft className="h-4 w-4 mr-2" /> {t('common.back')}
            </Button>
            {stage !== 'results' ? (
              <Button onClick={handleNext} disabled={stage === 'symptomSelection' && selectedSymptoms.length === 0}>
                {stage === 'detailedQuestions' && currentQuestionIndex === questionsToAsk.length - 1 ? 'Analyze' : t('common.next')} <ArrowRight className="h-4 w-4 ml-2" />
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
