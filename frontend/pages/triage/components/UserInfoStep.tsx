import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { AlertCircle } from 'lucide-react';

interface UserInfoStepProps {
  userInfo: {
    age: string;
    gender: string;
    smoking: string;
    diabetes: boolean;
    hypertension: boolean;
    hiv: boolean;
    asthma: boolean;
    recentContact: boolean;
    recentTravel: boolean;
    malariaArea: boolean;
  };
  onInfoChange: (field: string, value: any) => void;
}

export default function UserInfoStep({ userInfo, onInfoChange }: UserInfoStepProps) {
  const { t } = useLanguage();

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
          <CardDescription>This helps us give you the most accurate assessment.</CardDescription>
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
                min="1"
                max="120"
              />
            </div>
            <div>
              <Label htmlFor="gender">{t('pages.triage.gender')}</Label>
              <Select value={userInfo.gender} onValueChange={(value) => onInfoChange('gender', value)}>
                <SelectTrigger id="gender">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Prefer not to say</SelectItem>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="smoking">Do you smoke?</Label>
            <Select value={userInfo.smoking} onValueChange={(value) => onInfoChange('smoking', value)}>
              <SelectTrigger id="smoking">
                <SelectValue placeholder="Select smoking status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="never">Never smoked</SelectItem>
                <SelectItem value="former">Stopped smoking</SelectItem>
                <SelectItem value="current">Currently smoking</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertCircle className="h-5 w-5 text-amber-600" />
            <span>Medical Conditions</span>
          </CardTitle>
          <CardDescription>Do you have any of these conditions?</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3 p-4 border rounded-lg bg-blue-50 border-blue-200">
            <div className="flex items-center space-x-3">
              <Checkbox
                id="diabetes"
                checked={userInfo.diabetes}
                onCheckedChange={(checked) => onInfoChange('diabetes', !!checked)}
              />
              <label htmlFor="diabetes" className="text-sm font-medium leading-none cursor-pointer">
                Diabetes
              </label>
            </div>

            <div className="flex items-center space-x-3">
              <Checkbox
                id="hypertension"
                checked={userInfo.hypertension}
                onCheckedChange={(checked) => onInfoChange('hypertension', !!checked)}
              />
              <label htmlFor="hypertension" className="text-sm font-medium leading-none cursor-pointer">
                High blood pressure
              </label>
            </div>

            <div className="flex items-center space-x-3">
              <Checkbox
                id="hiv"
                checked={userInfo.hiv}
                onCheckedChange={(checked) => onInfoChange('hiv', !!checked)}
              />
              <label htmlFor="hiv" className="text-sm font-medium leading-none cursor-pointer">
                HIV/AIDS
              </label>
            </div>

            <div className="flex items-center space-x-3">
              <Checkbox
                id="asthma"
                checked={userInfo.asthma}
                onCheckedChange={(checked) => onInfoChange('asthma', !!checked)}
              />
              <label htmlFor="asthma" className="text-sm font-medium leading-none cursor-pointer">
                Asthma or lung disease
              </label>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Exposure</CardTitle>
          <CardDescription>Have any of these happened recently?</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3 p-4 border rounded-lg bg-green-50 border-green-200">
            <div className="flex items-center space-x-3">
              <Checkbox
                id="recentContact"
                checked={userInfo.recentContact}
                onCheckedChange={(checked) => onInfoChange('recentContact', !!checked)}
              />
              <label htmlFor="recentContact" className="text-sm font-medium leading-none cursor-pointer">
                Contact with someone who is sick (last 2 weeks)
              </label>
            </div>

            <div className="flex items-center space-x-3">
              <Checkbox
                id="recentTravel"
                checked={userInfo.recentTravel}
                onCheckedChange={(checked) => onInfoChange('recentTravel', !!checked)}
              />
              <label htmlFor="recentTravel" className="text-sm font-medium leading-none cursor-pointer">
                Traveled to a different area (last month)
              </label>
            </div>

            <div className="flex items-center space-x-3">
              <Checkbox
                id="malariaArea"
                checked={userInfo.malariaArea}
                onCheckedChange={(checked) => onInfoChange('malariaArea', !!checked)}
              />
              <label htmlFor="malariaArea" className="text-sm font-medium leading-none cursor-pointer">
                Live in or recently visited a malaria area
              </label>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
