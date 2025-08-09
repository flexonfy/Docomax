import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { ComprehensiveDisease } from '../../../data/diseases/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertTriangle, CheckCircle, Clock, Info, Shield, Sparkles, Stethoscope, TestTube } from 'lucide-react';

interface TriageResult {
  disease: ComprehensiveDisease;
  confidence: number;
  refinedConfidence?: number;
  matchedSymptoms: string[];
  severity: string;
  riskScore: number;
}

interface TriageResultsProps {
  results: TriageResult[];
  onStartQuiz: (result: TriageResult) => void;
}

export default function TriageResults({ results, onStartQuiz }: TriageResultsProps) {
  const { t, language } = useLanguage();

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'emergency': return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case 'high': return <AlertTriangle className="h-5 w-5 text-orange-500" />;
      case 'medium': return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'low': return <CheckCircle className="h-5 w-5 text-green-500" />;
      default: return <Info className="h-5 w-5 text-blue-500" />;
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
                  {t('pages.triage.confidence')}: {result.refinedConfidence ? `${result.refinedConfidence}%` : `${result.confidence}%`}
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
            {result.disease.possibleTests && (
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm flex items-center"><TestTube className="h-4 w-4 mr-2" />Possible Medical Tests:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  {(result.disease.possibleTests?.[language] || result.disease.possibleTests?.en || []).map((test, idx) => <li key={idx}>{test}</li>)}
                </ul>
              </div>
            )}
            {result.disease.quizQuestions && result.disease.quizQuestions.length > 0 && (
              <Button onClick={() => onStartQuiz(result)} size="sm" variant="outline" className="w-full">
                <Sparkles className="h-4 w-4 mr-2 text-yellow-500" />
                Refine with Follow-up Questions
              </Button>
            )}
          </CardContent>
        </Card>
      ))}
      <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6 shadow-lg">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="h-6 w-6 text-yellow-600 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-yellow-900 mb-2">{t('pages.triage.disclaimer')}</h3>
            <p className="text-yellow-800 text-sm leading-relaxed">{t('pages.triage.disclaimerText')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
