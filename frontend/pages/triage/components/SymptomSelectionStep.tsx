import React, { useState, useMemo } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { comprehensiveSymptoms } from '../../../data/comprehensiveDiseases';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Plus, X, Zap } from 'lucide-react';
import BodyMap from './BodyMap';

interface SymptomSelectionStepProps {
  selectedSymptoms: string[];
  onSymptomAdd: (symptom: string) => void;
  onSymptomRemove: (symptom: string) => void;
  onClearAll: () => void;
}

export default function SymptomSelectionStep({ selectedSymptoms, onSymptomAdd, onSymptomRemove, onClearAll }: SymptomSelectionStepProps) {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [showSymptomSearch, setShowSymptomSearch] = useState(false);

  const filteredSymptoms = useMemo(() => {
    return comprehensiveSymptoms[language].filter(symptom =>
      symptom.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !selectedSymptoms.includes(symptom)
    ).slice(0, 20);
  }, [language, searchTerm, selectedSymptoms]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>{t('pages.triage.selectSymptoms')}</CardTitle>
            <CardDescription>{t('pages.triage.chooseSymptoms')}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <Button
                variant="outline"
                onClick={() => setShowSymptomSearch(!showSymptomSearch)}
                className="w-full justify-start"
              >
                <Plus className="h-4 w-4 mr-2" />
                {t('pages.triage.addSymptom')}
              </Button>
              {showSymptomSearch && (
                <div className="absolute top-full left-0 right-0 z-10 mt-1 bg-white border rounded-lg shadow-xl">
                  <div className="p-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder={t('pages.triage.searchSymptoms')}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="max-h-48 overflow-y-auto">
                    {filteredSymptoms.map((symptom) => (
                      <button
                        key={symptom}
                        onClick={() => onSymptomAdd(symptom)}
                        className="w-full text-left px-3 py-2 hover:bg-gray-50 border-b last:border-b-0"
                      >
                        {symptom}
                      </button>
                    ))}
                    {filteredSymptoms.length === 0 && searchTerm && (
                      <div className="px-3 py-2 text-sm text-gray-500">{t('pages.triage.noSymptomsFound')}</div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <Label>{t('pages.triage.selectedSymptoms')} ({selectedSymptoms.length})</Label>
                {selectedSymptoms.length > 0 && (
                  <Button variant="ghost" size="sm" onClick={onClearAll} className="text-xs text-red-600">{t('pages.triage.clearAll')}</Button>
                )}
              </div>
              <div className="space-y-2 max-h-48 overflow-y-auto p-1">
                {selectedSymptoms.map((symptom) => (
                  <div key={symptom} className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-lg p-2">
                    <span className="text-sm text-blue-800">{symptom}</span>
                    <Button variant="ghost" size="sm" onClick={() => onSymptomRemove(symptom)} className="h-6 w-6 p-0 text-blue-600 hover:text-red-600">
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-orange-500" />
              <span>{t('pages.triage.commonSymptoms')}</span>
            </CardTitle>
            <CardDescription>{t('pages.triage.quickAdd')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {comprehensiveSymptoms[language].slice(0, 12).map((symptom) => (
                <Button
                  key={symptom}
                  variant={selectedSymptoms.includes(symptom) ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => selectedSymptoms.includes(symptom) ? onSymptomRemove(symptom) : onSymptomAdd(symptom)}
                >
                  {symptom}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <div>
        <BodyMap onSymptomSelect={onSymptomAdd} />
      </div>
    </div>
  );
}
