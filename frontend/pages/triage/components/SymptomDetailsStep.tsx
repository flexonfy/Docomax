import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { symptomQuestions } from '../../../data/symptomQuestions';

interface SymptomDetailsStepProps {
  selectedSymptoms: string[];
  symptomDetails: Record<string, any>;
  onDetailChange: (symptom: string, detail: string, value: any) => void;
}

export default function SymptomDetailsStep({ selectedSymptoms, symptomDetails, onDetailChange }: SymptomDetailsStepProps) {
  const { t, language } = useLanguage();

  const getQuestionKey = (symptom: string) => {
    const lowerSymptom = symptom.toLowerCase();
    return Object.keys(symptomQuestions).find(key => lowerSymptom.includes(key)) || null;
  };

  const symptomsWithQuestions = selectedSymptoms.filter(symptom => {
    const key = getQuestionKey(symptom);
    return key && symptomQuestions[key]?.length > 0;
  });

  if (symptomsWithQuestions.length === 0) {
    return (
      <Card>
        <CardContent className="p-6 text-center">
          <p className="text-gray-600">No further details are needed for the selected symptoms. You can proceed to the next step.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {symptomsWithQuestions.map(symptom => {
        const questionKey = getQuestionKey(symptom)!;
        const questions = symptomQuestions[questionKey];

        return (
          <Card key={symptom}>
            <CardHeader>
              <CardTitle>{symptom}</CardTitle>
              <CardDescription>Please provide more details about this symptom.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {questions.map((q, index) => (
                <div key={index}>
                  <Label>{q.question[language]}</Label>
                  {q.type === 'number' && (
                    <Input
                      type="number"
                      value={symptomDetails[symptom]?.[q.question.en] || ''}
                      onChange={(e) => onDetailChange(symptom, q.question.en, e.target.value)}
                      placeholder={q.unit}
                    />
                  )}
                  {q.type === 'select' && q.options && (
                    <Select
                      value={symptomDetails[symptom]?.[q.question.en] || ''}
                      onValueChange={(value) => onDetailChange(symptom, q.question.en, value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        {q.options.map((opt, optIndex) => (
                          <SelectItem key={optIndex} value={opt.en}>{opt[language]}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                  {q.type === 'boolean' && (
                    <div className="flex items-center space-x-2 mt-2">
                      <Checkbox
                        id={`${symptom}-${index}`}
                        checked={symptomDetails[symptom]?.[q.question.en] || false}
                        onCheckedChange={(checked) => onDetailChange(symptom, q.question.en, checked)}
                      />
                      <label htmlFor={`${symptom}-${index}`} className="text-sm font-medium leading-none">
                        Yes
                      </label>
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
