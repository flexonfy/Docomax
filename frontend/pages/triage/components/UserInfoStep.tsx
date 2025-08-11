import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

interface UserInfoStepProps {
  userInfo: { age: string; gender: string; riskFactors: { smoking: boolean; chronic: boolean; } };
  onInfoChange: (field: 'age' | 'gender' | 'riskFactors', value: any) => void;
}

export default function UserInfoStep({ userInfo, onInfoChange }: UserInfoStepProps) {
  const { t } = useLanguage();

  return (
    <Card className="max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>Basic Information</CardTitle>
        <CardDescription>This information helps tailor the assessment. It is not stored or shared.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="age">{t('common.age')}</Label>
            <Input
              id="age"
              type="number"
              value={userInfo.age}
              onChange={(e) => onInfoChange('age', e.target.value)}
              placeholder="e.g., 35"
            />
          </div>
          <div>
            <Label htmlFor="gender">{t('pages.triage.gender')}</Label>
            <Select value={userInfo.gender} onValueChange={(value) => onInfoChange('gender', value)}>
              <SelectTrigger id="gender">
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('pages.triage.allGenders')}</SelectItem>
                <SelectItem value="male">{t('common.male')}</SelectItem>
                <SelectItem value="female">{t('common.female')}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <Label>Risk Factors</Label>
          <div className="space-y-2 mt-2 p-4 border rounded-lg">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="smoking"
                checked={userInfo.riskFactors.smoking}
                onCheckedChange={(checked) => onInfoChange('riskFactors', { ...userInfo.riskFactors, smoking: !!checked })}
              />
              <label htmlFor="smoking" className="text-sm font-medium leading-none">
                Do you smoke?
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="chronic"
                checked={userInfo.riskFactors.chronic}
                onCheckedChange={(checked) => onInfoChange('riskFactors', { ...userInfo.riskFactors, chronic: !!checked })}
              />
              <label htmlFor="chronic" className="text-sm font-medium leading-none">
                Do you have known chronic conditions (e.g., diabetes, hypertension)?
              </label>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
