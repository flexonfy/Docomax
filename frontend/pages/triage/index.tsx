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
  const [userInfo, setUserInfo] = useState({ age: '', gender: 'all' });
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
      
      let commonMatches = 0;
      let rareMatches = 0;
      let totalMatches = 0;

      selectedSymptoms.forEach(selectedSymptom => {
        if (diseaseSymptoms.some(ds => ds.toLowerCase() === selectedSymptom.toLowerCase())) {
          matchedSymptoms.push(selectedSymptom);
          totalMatches++;
          if (commonSymptoms.some(cs => cs.toLowerCase() === selectedSymptom.toLowerCase())) commonMatches++;
          if (rareSymptoms.some(rs => rs.toLowerCase() === selectedSymptom.toLowerCase())) rareMatches++;
        }
      });

      if (matchedSymptoms.length > 0) {
        let baseConfidence = (totalMatches / Math.max(diseaseSymptoms.length, selectedSymptoms.length, 1)) * 100;
        baseConfidence += (commonMatches * 15) + (rareMatches * 25);
        const unmatchedCount = selectedSymptoms.length - totalMatches;
        if (unmatchedCount > 0) baseConfidence -= (unmatchedCount * 10);
        if (disease.prevalenceInAfrica === 'very-high') baseConfidence *= 1.4;
        else if (disease.prevalenceInAfrica === 'high') baseConfidence *= 1.2;

        let riskScore = 0;
        switch (disease.severity) {
          case 'emergency': riskScore = 90; break;
          case 'high': riskScore = 70; break;
          case 'medium': riskScore = 50; break;
          case 'low': riskScore = 30; break;
        }
        riskScore += (commonMatches * 2) + (rareMatches * 3);

        const confidence = Math.min(95, Math.max(5, Math.round(baseConfidence)));
        riskScore = Math.min(100, riskScore);

        triageResults.push({ disease, confidence, matchedSymptoms, severity: disease.severity, riskScore });
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
      if (answer === true) confidenceChange += q.isRiskFactor ? 10 : 15;
      else if (answer === false && !q.isRiskFactor) confidenceChange -= 10;
    });
    const newConfidence = Math.min(98, Math.max(5, quizForDisease.confidence + confidenceChange));
    setResults(prevResults => prevResults.map(r => r.disease.id === quizForDisease.disease.id ? { ...r, refinedConfidence: newConfidence } : r));
    setQuizForDisease(null);
  };

  const resetTriage = () => {
    setCurrentStep(1);
    setUserInfo({ age: '', gender: 'all' });
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
