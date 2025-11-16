import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertTriangle, Droplets, Users, Info } from 'lucide-react';

interface EGFRResult {
  eGFR: number;
  stage: string;
  stageName: string;
  stageColor: string;
  description: string;
  managementGuidance: string;
  creatinineUnit: string;
}

export default function KidneyFunctionCalculator() {
  const { t } = useLanguage();
  const [serum, setSerum] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [creatinineUnit, setCreatinineUnit] = useState<'mg/dL' | 'μmol/L'>('mg/dL');
  const [result, setResult] = useState<EGFRResult | null>(null);
  const [showFormula, setShowFormula] = useState(false);

  const getCKDEpiFormula = (creatinine: number, age: number, isFemale: boolean): number => {
    // CKD-EPI 2021 equation (most current)
    const kappa = isFemale ? 0.7 : 0.9;
    const alpha = isFemale ? -0.241 : -0.302;
    const creatinineRatio = creatinine / kappa;

    let eGFR = 142 * Math.pow(creatinineRatio, alpha) * Math.pow(0.9938, age);

    // Female adjustment
    if (isFemale) {
      eGFR = eGFR * 1.012;
    }

    return Math.max(Math.round(eGFR * 10) / 10, 0);
  };

  const getStageInfo = (eGFR: number): Omit<EGFRResult, 'eGFR' | 'creatinineUnit'> => {
    if (eGFR >= 90) {
      return {
        stage: 'G1',
        stageName: 'Normal or High',
        stageColor: 'bg-green-100 text-green-800 border-green-200',
        description: 'eGFR ≥ 90 mL/min/1.73m² - Normal kidney function',
        managementGuidance: 'Maintain healthy lifestyle. Monitor blood pressure and blood glucose. Avoid NSAIDs if possible.'
      };
    } else if (eGFR >= 60) {
      return {
        stage: 'G2',
        stageName: 'Mildly Decreased',
        stageColor: 'bg-yellow-100 text-yellow-800 border-yellow-200',
        description: 'eGFR 60-89 mL/min/1.73m² - Mild decrease in kidney function',
        managementGuidance: 'Regular monitoring. Manage cardiovascular risk factors. Screen for proteinuria. Caution with medication dosing.'
      };
    } else if (eGFR >= 45) {
      return {
        stage: 'G3a',
        stageName: 'Mildly to Moderately Decreased',
        stageColor: 'bg-orange-100 text-orange-800 border-orange-200',
        description: 'eGFR 45-59 mL/min/1.73m² - Mild to moderate decrease',
        managementGuidance: 'More frequent monitoring (every 6-12 months). Adjust medication doses. Manage anemia and mineral metabolism. Screen for complications.'
      };
    } else if (eGFR >= 30) {
      return {
        stage: 'G3b',
        stageName: 'Moderately Decreased',
        stageColor: 'bg-red-100 text-red-800 border-red-200',
        description: 'eGFR 30-44 mL/min/1.73m² - Moderate decrease in kidney function',
        managementGuidance: 'Frequent monitoring (every 3-6 months). Adjust all medications. Manage blood pressure <120 mmHg. Prepare for renal replacement therapy.'
      };
    } else if (eGFR >= 15) {
      return {
        stage: 'G4',
        stageName: 'Severely Decreased',
        stageColor: 'bg-red-200 text-red-900 border-red-300',
        description: 'eGFR 15-29 mL/min/1.73m² - Severe decrease in kidney function',
        managementGuidance: 'Monthly monitoring. Refer to nephrologist. Aggressive management of complications. Plan renal replacement therapy options (dialysis/transplant).'
      };
    } else {
      return {
        stage: 'G5',
        stageName: 'Kidney Failure',
        stageColor: 'bg-red-300 text-red-950 border-red-400',
        description: 'eGFR < 15 mL/min/1.73m² - Kidney failure requiring renal replacement therapy',
        managementGuidance: 'URGENT: Patient requires renal replacement therapy (dialysis or transplant). Close nephrology follow-up. Screen for complications and comorbidities.'
      };
    }
  };

  const handleCalculate = () => {
    if (!serum || !age) {
      return;
    }

    let creatinineValue = parseFloat(serum);
    if (isNaN(creatinineValue) || creatinineValue <= 0) {
      return;
    }

    // Convert to mg/dL if in μmol/L
    if (creatinineUnit === 'μmol/L') {
      creatinineValue = creatinineValue / 88.4;
    }

    const ageNum = parseFloat(age);
    const isFemale = gender === 'female';
    const eGFR = getCKDEpiFormula(creatinineValue, ageNum, isFemale);

    const stageInfo = getStageInfo(eGFR);

    setResult({
      ...stageInfo,
      eGFR,
      creatinineUnit
    });
  };

  const handleReset = () => {
    setSerum('');
    setAge('');
    setWeight('');
    setGender('male');
    setCreatinineUnit('mg/dL');
    setResult(null);
    setShowFormula(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white">
              <Droplets className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">eGFR & Kidney Function</h1>
              <p className="text-gray-600">CKD-EPI 2021 Equation Calculator</p>
            </div>
          </div>
        </div>

        {/* Warning Banner */}
        <Card className="mb-6 border-yellow-200 bg-yellow-50">
          <CardContent className="p-4 flex gap-3">
            <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-yellow-800">
              <p className="font-semibold mb-1">Clinical Use Notice</p>
              <p>This calculator uses the CKD-EPI 2021 equation and is for educational purposes. Always confirm results with laboratory values and clinical judgment. Consider factors like muscle mass, diet, and medications.</p>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Input Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Patient Information
              </CardTitle>
              <CardDescription>Enter serum creatinine and patient demographics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="creatinine">Serum Creatinine</Label>
                <div className="flex gap-2">
                  <Input
                    id="creatinine"
                    type="number"
                    step="0.1"
                    placeholder="e.g., 1.2"
                    value={serum}
                    onChange={(e) => setSerum(e.target.value)}
                    className="flex-1"
                  />
                  <Select value={creatinineUnit} onValueChange={(v: any) => setCreatinineUnit(v)}>
                    <SelectTrigger className="w-28">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mg/dL">mg/dL</SelectItem>
                      <SelectItem value="μmol/L">μmol/L</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="age">Age (years)</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="e.g., 45"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="gender">Gender</Label>
                  <Select value={gender} onValueChange={(v: any) => setGender(v)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="weight">Weight (kg) - Optional</Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="e.g., 70"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
                <p className="text-xs text-gray-500 mt-1">For dose adjustment calculations</p>
              </div>

              <div className="flex gap-2 pt-4">
                <Button onClick={handleCalculate} className="flex-1 bg-blue-600 hover:bg-blue-700">
                  Calculate eGFR
                </Button>
                <Button onClick={handleReset} variant="outline" className="flex-1">
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          {result && (
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Results</span>
                  <Badge className={result.stageColor}>{result.stage}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
                  <div className="text-sm text-gray-600">Estimated Glomerular Filtration Rate</div>
                  <div className="text-4xl font-bold text-blue-600">{result.eGFR}</div>
                  <div className="text-xs text-gray-500">mL/min/1.73m²</div>
                </div>

                <div>
                  <div className="font-semibold text-gray-900 mb-1">{result.stageName}</div>
                  <p className="text-sm text-gray-700">{result.description}</p>
                </div>

                <div className="bg-amber-50 border border-amber-200 p-3 rounded-lg">
                  <div className="font-semibold text-sm text-amber-900 mb-2">Management Guidance</div>
                  <p className="text-sm text-amber-800">{result.managementGuidance}</p>
                </div>

                <div className="pt-4 border-t">
                  <button
                    onClick={() => setShowFormula(!showFormula)}
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                  >
                    {showFormula ? '▼' : '▶'} Show Calculation Details
                  </button>
                  {showFormula && (
                    <div className="mt-3 p-3 bg-gray-50 rounded text-xs font-mono text-gray-700 space-y-2">
                      <div>Formula: CKD-EPI 2021</div>
                      <div>Creatinine: {result.creatinineUnit === 'mg/dL' ? serum : (parseFloat(serum) / 88.4).toFixed(2)} mg/dL</div>
                      <div>Age: {age} years</div>
                      <div>Gender: {gender}</div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* CKD Stages Reference */}
        <Card className="mt-8 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5" />
              CKD Stages Reference (KDIGO)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="grid gap-3">
                <div className="flex justify-between items-start p-3 bg-green-50 rounded border border-green-200">
                  <div>
                    <div className="font-semibold text-green-900">G1 - Normal or High</div>
                    <div className="text-sm text-green-700">eGFR ≥ 90 mL/min/1.73m²</div>
                  </div>
                </div>
                <div className="flex justify-between items-start p-3 bg-yellow-50 rounded border border-yellow-200">
                  <div>
                    <div className="font-semibold text-yellow-900">G2 - Mildly Decreased</div>
                    <div className="text-sm text-yellow-700">eGFR 60-89 mL/min/1.73m²</div>
                  </div>
                </div>
                <div className="flex justify-between items-start p-3 bg-orange-50 rounded border border-orange-200">
                  <div>
                    <div className="font-semibold text-orange-900">G3a - Mild to Moderate Decrease</div>
                    <div className="text-sm text-orange-700">eGFR 45-59 mL/min/1.73m²</div>
                  </div>
                </div>
                <div className="flex justify-between items-start p-3 bg-orange-100 rounded border border-orange-300">
                  <div>
                    <div className="font-semibold text-orange-950">G3b - Moderate Decrease</div>
                    <div className="text-sm text-orange-900">eGFR 30-44 mL/min/1.73m²</div>
                  </div>
                </div>
                <div className="flex justify-between items-start p-3 bg-red-100 rounded border border-red-300">
                  <div>
                    <div className="font-semibold text-red-900">G4 - Severely Decreased</div>
                    <div className="text-sm text-red-800">eGFR 15-29 mL/min/1.73m²</div>
                  </div>
                </div>
                <div className="flex justify-between items-start p-3 bg-red-200 rounded border border-red-400">
                  <div>
                    <div className="font-semibold text-red-950">G5 - Kidney Failure</div>
                    <div className="text-sm text-red-900">eGFR {'<'} 15 mL/min/1.73m²</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Info Section */}
        <Card className="mt-8 shadow-lg">
          <CardHeader>
            <CardTitle>About this Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div>
              <div className="font-semibold text-gray-900 mb-1">Formula Used</div>
              <p className="text-gray-700">CKD-EPI 2021 Creatinine equation - the most current standard for eGFR estimation in adults</p>
            </div>
            <div>
              <div className="font-semibold text-gray-900 mb-1">Important Notes</div>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Results should be interpreted with clinical context</li>
                <li>Consider muscle mass, age, diet, and comorbidities</li>
                <li>Acute changes in creatinine may not reflect true kidney function</li>
                <li>Always confirm with laboratory values and clinical judgment</li>
                <li>Refer to nephrology if eGFR {'<'} 30 mL/min/1.73m²</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-gray-900 mb-1">Medication Dosing</div>
              <p className="text-gray-700">Use eGFR to adjust medication doses. Many drugs require dose reduction in kidney disease. Always check drug references.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
