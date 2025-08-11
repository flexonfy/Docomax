import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { comprehensiveDiseases } from '../../data/comprehensiveDiseases';
import type { ComprehensiveDisease } from '../../data/diseases/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose, DialogDescription } from '@/components/ui/dialog';
import { AlertTriangle, Brain, Stethoscope, User, ListChecks, FileQuestion, Sparkles, ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react';
import StepIndicator from './components/StepIndicator';
import UserInfoStep from './components/UserInfoStep';
import SymptomSelectionStep from './components/SymptomSelectionStep';
import SymptomDetailsStep from './components/SymptomDetailsStep';
import TriageResults from './components/TriageResults';
import { useToast } from '@/components/ui/use-toast';

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
  const [currentStep, setCurrentStep] = useState(1);
  const [userInfo, setUserInfo] = useState({ age: '', gender: 'all', riskFactors: { smoking: false, chronic: false } });
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [symptomDetails, setSymptomDetails] = useState<Record<string, any>>({});
  const [results, setResults] = useState<TriageResult[]>([]);
  const [quizForDisease, setQuizForDisease] = useState<TriageResult | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, boolean>>({});

  const steps = [
    { id: 1, name: 'User Info' },
    { id: 2, name: 'Symptoms' },
    { id: 3, name: 'Details' },
    { id: 4, name: 'Results' },
  ];

  const handleNext = () => {
    if (currentStep === 1 && (!userInfo.age || parseInt(userInfo.age) <= 0)) {
      toast({
        title: "Information Required",
        description: "Please enter a valid age to proceed.",
        variant: "destructive",
      });
      return;
    }
    if (currentStep === 2 && selectedSymptoms.length === 0) {
      toast({
        title: "Symptoms Required",
        description: "Please select at least one symptom to continue.",
        variant: "destructive",
      });
      return;
    }
    if (currentStep === 3) {
      analyzeSymptoms();
    }
    setCurrentStep(prev => Math.min(prev + 1, steps.length));
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSymptomAdd = (symptom: string) => {
    if (!selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const handleSymptomRemove = (symptom: string) => {
    setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptom));
    const newDetails = { ...symptomDetails };
    delete newDetails[symptom];
    setSymptomDetails(newDetails);
  };

  const handleClearAll = () => {
    setSelectedSymptoms([]);
    setSymptomDetails({});
  };

  const handleDetailChange = (symptom: string, detail: string, value: any) => {
    setSymptomDetails(prev => ({
      ...prev,
      [symptom]: {
        ...prev[symptom],
        [detail]: value
      }
    }));
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
            score += 2.5; // Rare symptoms are highly indicative
          } else if (commonSymptoms.some(cs => cs.toLowerCase() === lowerSelected)) {
            score += 1.0; // Common symptoms are expected
          } else {
            score += 1.5; // Other symptoms
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

        if (userInfo.riskFactors.smoking && disease.riskFactors.en.some(rf => rf.toLowerCase().includes('smoking'))) {
          confidence *= 1.05;
        }
        if (userInfo.riskFactors.chronic && disease.riskFactors.en.some(rf => ['diabetes', 'high blood pressure', 'heart disease'].some(c => rf.toLowerCase().includes(c)))) {
          confidence *= 1.1;
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
    setCurrentStep(1);
    setUserInfo({ age: '', gender: 'all', riskFactors: { smoking: false, chronic: false } });
    setSelectedSymptoms([]);
    setSymptomDetails({});
    setResults([]);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl text-white shadow-lg">
                <Stethoscope className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  {t('pages.triage.title')}
                </h1>
                <p className="text-lg text-gray-600">{t('pages.triage.aiDescription')}</p>
              </div>
            </div>
            <div className="mt-6">
              <StepIndicator current={currentStep} steps={steps} />
            </div>
          </div>

          {currentStep === 1 && <UserInfoStep userInfo={userInfo} onInfoChange={(field, value) => setUserInfo(prev => ({ ...prev, [field]: value }))} />}
          {currentStep === 2 && <SymptomSelectionStep selectedSymptoms={selectedSymptoms} onSymptomAdd={handleSymptomAdd} onSymptomRemove={handleSymptomRemove} onClearAll={handleClearAll} />}
          {currentStep === 3 && <SymptomDetailsStep selectedSymptoms={selectedSymptoms} symptomDetails={symptomDetails} onDetailChange={handleDetailChange} />}
          {currentStep === 4 && <TriageResults results={results} onStartQuiz={startQuiz} />}

          <div className="mt-8 flex justify-between">
            <Button onClick={handleBack} disabled={currentStep === 1}>
              <ArrowLeft className="h-4 w-4 mr-2" /> {t('common.back')}
            </Button>
            {currentStep < steps.length ? (
              <Button onClick={handleNext} disabled={currentStep === 2 && selectedSymptoms.length === 0}>
                {t('common.next')} <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button onClick={resetTriage}>
                <RotateCcw className="h-4 w-4 mr-2" /> Start Over
              </Button>
            )}
          </div>

          {currentStep === 4 && (
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
