import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface UserInfoStepProps {
  userInfo: { age: string; gender: string };
  onInfoChange: (field: 'age' | 'gender', value: string) => void;
}

export default function UserInfoStep({ userInfo, onInfoChange }: UserInfoStepProps) {
  const { t } = useLanguage();

  return (
    <Card className="max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>Basic Information</CardTitle>
        <CardDescription>This information helps tailor the assessment. It is not stored or shared.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
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
      </CardContent>
    </Card>
  );
}
