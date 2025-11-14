import React, { useState } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { ComprehensiveDisease } from '../../../data/diseases/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { AlertTriangle, CheckCircle, Clock, Info, Shield, Sparkles, Stethoscope, TestTube, Heart, Activity, Zap, Lightbulb } from 'lucide-react';
import type { EnhancedDiseaseResult } from '../../../data/triageAlgorithm';

interface TriageResult extends EnhancedDiseaseResult {
  refinedConfidence?: number;
}

interface TriageResultsProps {
  results: TriageResult[];
  onStartQuiz: (result: TriageResult) => void;
}

export default function TriageResults({ results, onStartQuiz }: TriageResultsProps) {
  const { t, language } = useLanguage();
  const [showDetailsFor, setShowDetailsFor] = useState<TriageResult | null>(null);

  const getEmergencyIcon = (level: string) => {
    switch (level) {
      case 'critical': return <Zap className="h-5 w-5 text-red-600" />;
      case 'emergent': return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case 'urgent': return <AlertTriangle className="h-5 w-5 text-orange-500" />;
      case 'routine': return <CheckCircle className="h-5 w-5 text-green-500" />;
      default: return <Info className="h-5 w-5 text-blue-500" />;
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'emergency': return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case 'high': return <AlertTriangle className="h-5 w-5 text-orange-500" />;
      case 'medium': return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'low': return <CheckCircle className="h-5 w-5 text-green-500" />;
      default: return <Info className="h-5 w-5 text-blue-500" />;
    }
  };

  const getEmergencyColor = (level: string) => {
    switch (level) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'emergent': return 'bg-red-50 text-red-700 border-red-200';
      case 'urgent': return 'bg-orange-50 text-orange-700 border-orange-200';
      case 'routine': return 'bg-green-50 text-green-700 border-green-200';
      default: return 'bg-blue-50 text-blue-700 border-blue-200';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'emergency': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  const getRiskColor = (riskScore: number) => {
    if (riskScore >= 80) return 'bg-red-100 text-red-800 border-red-200';
    if (riskScore >= 60) return 'bg-orange-100 text-orange-800 border-orange-200';
    if (riskScore >= 40) return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    return 'bg-green-100 text-green-800 border-green-200';
  };

  const getRecommendation = (severity: string, riskScore: number) => {
    if (severity === 'emergency' || riskScore >= 80) return t('pages.triage.seekImmediate');
    if (severity === 'high' || riskScore >= 60) return t('pages.triage.consultDoctor');
    if (severity === 'medium' || riskScore >= 40) return t('pages.triage.monitor');
    return t('pages.triage.selfCare');
  };

  return (
    <>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Differential Diagnosis</h2>
        {results.map((result, index) => (
          <Card key={result.disease.id} className={`border-l-4 shadow-lg ${getSeverityColor(result.severity).replace('bg-', 'border-l-').replace('-100', '-500').replace(' text-red-800', '')}`}>
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <CardTitle className="flex items-center space-x-2 text-lg">
                  {getSeverityIcon(result.severity)}
                  <span>{result.disease.name?.[language] || result.disease.name?.en}</span>
                  {index === 0 && <Badge variant="secondary" className="animate-pulse">{t('pages.triage.mostLikely')}</Badge>}
                </CardTitle>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="outline" className="flex items-center">
                    {result.refinedConfidence && <Sparkles className="h-3 w-3 mr-1 text-yellow-500" />}
                    {t('pages.triage.confidence')}: 
                    {result.refinedConfidence ? (
                      <>
                        <span className="line-through text-gray-500 mr-1">{result.confidence}%</span>
                        <span className="font-bold">{result.refinedConfidence}%</span>
                      </>
                    ) : (
                      `${result.confidence}%`
                    )}
                  </Badge>
                  <Badge className={getRiskColor(result.riskScore)}>{t('pages.triage.risk')}: {result.riskScore}%</Badge>
                  <Badge className={getSeverityColor(result.severity)}>{result.severity.toUpperCase()}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">{t('pages.triage.matchedSymptoms')}:</h4>
                <div className="flex flex-wrap gap-1">
                  {result.matchedSymptoms.map((symptom, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-orange-50 text-orange-800">{symptom}</Badge>
                  ))}
                </div>
              </div>
              <div className={`p-3 rounded-lg border ${getSeverityColor(result.severity)}`}>
                <h4 className="font-semibold mb-1 text-sm">{t('pages.triage.recommendations')}:</h4>
                <p className="text-sm">{getRecommendation(result.severity, result.riskScore)}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {result.disease.quizQuestions && result.disease.quizQuestions.length > 0 && (
                  <Button onClick={() => onStartQuiz(result)} size="sm" variant="outline" className="flex-1">
                    <Sparkles className="h-4 w-4 mr-2 text-yellow-500" />
                    Refine with Follow-up Questions
                  </Button>
                )}
                <Button onClick={() => setShowDetailsFor(result)} size="sm" variant="outline" className="flex-1">
                  <Info className="h-4 w-4 mr-2" />
                  More Info
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!showDetailsFor} onOpenChange={() => setShowDetailsFor(null)}>
        <DialogContent className="max-w-3xl">
          {showDetailsFor && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{showDetailsFor.disease.name[language]}</DialogTitle>
                <DialogDescription>
                  Detailed information about {showDetailsFor.disease.name[language]}.
                </DialogDescription>
              </DialogHeader>
              <div className="max-h-[70vh] overflow-y-auto pr-4 space-y-6">
                <div className="space-y-2">
                  <h3 className="font-semibold flex items-center"><Stethoscope className="h-4 w-4 mr-2" />All Symptoms</h3>
                  <p className="text-xs text-gray-500">Symptoms you selected are highlighted.</p>
                  <div className="flex flex-wrap gap-1">
                    {showDetailsFor.disease.symptoms[language].map((symptom, idx) => (
                      <Badge key={idx} variant={showDetailsFor.matchedSymptoms.includes(symptom) ? "default" : "outline"}>
                        {symptom}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold flex items-center"><Info className="h-4 w-4 mr-2" />Causes</h3>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    {showDetailsFor.disease.causes[language].map((cause, idx) => <li key={idx}>{cause}</li>)}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold flex items-center"><AlertTriangle className="h-4 w-4 mr-2" />Risk Factors</h3>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    {showDetailsFor.disease.riskFactors[language].map((factor, idx) => <li key={idx}>{factor}</li>)}
                  </ul>
                </div>

                {showDetailsFor.disease.possibleTests && (
                  <div className="space-y-2">
                    <h3 className="font-semibold flex items-center"><TestTube className="h-4 w-4 mr-2" />Possible Medical Tests</h3>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                      {(showDetailsFor.disease.possibleTests?.[language] || showDetailsFor.disease.possibleTests?.en || []).map((test, idx) => <li key={idx}>{test}</li>)}
                    </ul>
                  </div>
                )}

                <div className="space-y-2">
                  <h3 className="font-semibold flex items-center"><Heart className="h-4 w-4 mr-2" />Treatment</h3>
                  <p className="text-sm text-gray-700">{showDetailsFor.disease.treatment[language]}</p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold flex items-center"><Shield className="h-4 w-4 mr-2" />Prevention</h3>
                  <p className="text-sm text-gray-700">{showDetailsFor.disease.prevention[language]}</p>
                </div>

                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <h3 className="font-semibold flex items-center text-red-800"><AlertTriangle className="h-4 w-4 mr-2" />When to Seek Help</h3>
                  <p className="text-sm text-red-700 mt-1">{showDetailsFor.disease.whenToSeekHelp[language]}</p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold flex items-center"><Activity className="h-4 w-4 mr-2" />Possible Complications</h3>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    {showDetailsFor.disease.complications[language].map((comp, idx) => <li key={idx}>{comp}</li>)}
                  </ul>
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                </DialogClose>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
