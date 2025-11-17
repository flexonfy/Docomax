import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertTriangle, Activity, Thermometer, Wind, Zap, AlertCircle } from 'lucide-react';

interface NEWS2Result {
  totalScore: number;
  riskLevel: string;
  riskColor: string;
  actionRequired: string;
  details: string;
  scoreBreakdown: {
    respiration: number;
    spO2: number;
    temperature: number;
    systolic: number;
    heartRate: number;
    consciousness: number;
  };
}

export default function NEWS2Calculator() {
  const { t } = useLanguage();
  const [respirationRate, setRespirationRate] = useState('');
  const [spO2, setSpO2] = useState('');
  const [spO2Scale, setSpO2Scale] = useState<'1' | '2'>('1'); // Scale 1 or Scale 2 for hypoxemic patients
  const [temperature, setTemperature] = useState('');
  const [systolicBP, setSystolicBP] = useState('');
  const [heartRate, setHeartRate] = useState('');
  const [consciousness, setConsciousness] = useState('alert');
  const [result, setResult] = useState<NEWS2Result | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const getRespirationScore = (rr: number): number => {
    if (rr <= 8) return 3;
    if (rr <= 11) return 1;
    if (rr <= 20) return 0;
    if (rr <= 24) return 2;
    return 3;
  };

  const getSpO2Score = (spo2: number, scale: string): number => {
    if (scale === '2') {
      // Scale 2 for hypoxemic patients (COPD, etc.)
      if (spo2 <= 83) return 3;
      if (spo2 <= 85) return 2;
      if (spo2 <= 87) return 1;
      if (spo2 <= 92) return 0;
      if (spo2 <= 94) return 1;
      if (spo2 <= 96) return 2;
      return 3;
    } else {
      // Scale 1 (standard)
      if (spo2 <= 91) return 3;
      if (spo2 <= 93) return 2;
      if (spo2 <= 94) return 1;
      if (spo2 <= 96) return 0;
      return 3;
    }
  };

  const getTemperatureScore = (temp: number): number => {
    if (temp <= 35.0) return 3;
    if (temp <= 36.0) return 1;
    if (temp <= 38.0) return 0;
    if (temp <= 39.0) return 1;
    return 2;
  };

  const getSystolicScore = (sys: number): number => {
    if (sys <= 90) return 3;
    if (sys <= 100) return 2;
    if (sys <= 110) return 1;
    if (sys <= 219) return 0;
    return 3;
  };

  const getHeartRateScore = (hr: number): number => {
    if (hr <= 40) return 3;
    if (hr <= 50) return 1;
    if (hr <= 100) return 0;
    if (hr <= 110) return 1;
    if (hr <= 130) return 2;
    return 3;
  };

  const getConsciousnessScore = (cons: string): number => {
    return cons === 'alert' ? 0 : 3;
  };

  const getRiskLevel = (totalScore: number): Omit<NEWS2Result, 'totalScore' | 'scoreBreakdown'> => {
    if (totalScore <= 4) {
      return {
        riskLevel: 'Low Risk',
        riskColor: 'bg-green-100 text-green-800 border-green-200',
        actionRequired: 'Routine Care',
        details: 'Patient is clinically stable. Continue routine monitoring as per local policy. Reassess as clinically indicated.'
      };
    } else if (totalScore <= 6) {
      return {
        riskLevel: 'Medium Risk',
        riskColor: 'bg-amber-100 text-amber-800 border-amber-200',
        actionRequired: 'Increased Monitoring',
        details: 'Close monitoring required. Inform medical team. Consider measurement every 4-6 hours. Review regularly for deterioration.'
      };
    } else if (totalScore <= 8) {
      return {
        riskLevel: 'High Risk',
        riskColor: 'bg-orange-100 text-orange-800 border-orange-200',
        actionRequired: 'Urgent Review',
        details: 'Inform medical team immediately. Measurement at least hourly. Patient may require escalation of care, IV access, or transfer to higher acuity setting.'
      };
    } else {
      return {
        riskLevel: 'Critical Risk',
        riskColor: 'bg-red-100 text-red-800 border-red-300',
        actionRequired: 'EMERGENCY - Call for Help',
        details: 'URGENT: Consider emergency call (resuscitation team/emergency services). Continuous monitoring. Immediate physician/senior staff assessment required.'
      };
    }
  };

  const handleCalculate = () => {
    const rr = respirationRate ? parseFloat(respirationRate) : null;
    const spo2Val = spO2 ? parseFloat(spO2) : null;
    const temp = temperature ? parseFloat(temperature) : null;
    const sys = systolicBP ? parseFloat(systolicBP) : null;
    const hr = heartRate ? parseFloat(heartRate) : null;

    if (rr === null || spo2Val === null || temp === null || sys === null || hr === null) {
      return;
    }

    const rrScore = getRespirationScore(rr);
    const spo2Score = getSpO2Score(spo2Val, spO2Scale);
    const tempScore = getTemperatureScore(temp);
    const sysScore = getSystolicScore(sys);
    const hrScore = getHeartRateScore(hr);
    const consScore = getConsciousnessScore(consciousness);

    const totalScore = rrScore + spo2Score + tempScore + sysScore + hrScore + consScore;
    const riskInfo = getRiskLevel(totalScore);

    setResult({
      totalScore,
      ...riskInfo,
      scoreBreakdown: {
        respiration: rrScore,
        spO2: spo2Score,
        temperature: tempScore,
        systolic: sysScore,
        heartRate: hrScore,
        consciousness: consScore
      }
    });
  };

  const handleReset = () => {
    setRespirationRate('');
    setSpO2('');
    setSpO2Scale('1');
    setTemperature('');
    setSystolicBP('');
    setHeartRate('');
    setConsciousness('alert');
    setResult(null);
    setShowDetails(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl text-white">
              <Activity className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">NEWS2 Score</h1>
              <p className="text-gray-600">National Early Warning Score 2 - Patient Deterioration Alert System</p>
            </div>
          </div>
        </div>

        {/* Critical Notice */}
        <Card className="mb-6 border-red-300 bg-red-50">
          <CardContent className="p-4 flex gap-3">
            <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-red-800">
              <p className="font-semibold mb-1">CRITICAL CLINICAL TOOL</p>
              <p>This is an evidence-based triage tool to identify patients at risk of deterioration. Use alongside clinical judgment. If score is HIGH/CRITICAL, escalate immediately to senior staff and emergency services as indicated.</p>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Input Form */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wind className="h-5 w-5" />
                  Vital Signs
                </CardTitle>
                <CardDescription>Enter current vital signs measurements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="rr">Respiration Rate (breaths/min)</Label>
                  <Input
                    id="rr"
                    type="number"
                    placeholder="e.g., 18"
                    value={respirationRate}
                    onChange={(e) => setRespirationRate(e.target.value)}
                  />
                  <p className="text-xs text-gray-500 mt-1">Normal: 12-20</p>
                </div>

                <div>
                  <Label htmlFor="spo2">Oxygen Saturation (SpO₂) %</Label>
                  <div className="flex gap-2">
                    <Input
                      id="spo2"
                      type="number"
                      step="0.1"
                      placeholder="e.g., 97"
                      value={spO2}
                      onChange={(e) => setSpO2(e.target.value)}
                      className="flex-1"
                    />
                    <Select value={spO2Scale} onValueChange={setSpO2Scale}>
                      <SelectTrigger className="w-24">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Scale 1</SelectItem>
                        <SelectItem value="2">Scale 2*</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Scale 2 for hypoxemic patients (COPD, etc.)</p>
                </div>

                <div>
                  <Label htmlFor="temp">Temperature (°C)</Label>
                  <Input
                    id="temp"
                    type="number"
                    step="0.1"
                    placeholder="e.g., 37.0"
                    value={temperature}
                    onChange={(e) => setTemperature(e.target.value)}
                  />
                  <p className="text-xs text-gray-500 mt-1">Normal: 36.1-38.0</p>
                </div>

                <div>
                  <Label htmlFor="systolic">Systolic Blood Pressure (mmHg)</Label>
                  <Input
                    id="systolic"
                    type="number"
                    placeholder="e.g., 120"
                    value={systolicBP}
                    onChange={(e) => setSystolicBP(e.target.value)}
                  />
                  <p className="text-xs text-gray-500 mt-1">Normal: 100-220</p>
                </div>

                <div>
                  <Label htmlFor="hr">Heart Rate (beats/min)</Label>
                  <Input
                    id="hr"
                    type="number"
                    placeholder="e.g., 72"
                    value={heartRate}
                    onChange={(e) => setHeartRate(e.target.value)}
                  />
                  <p className="text-xs text-gray-500 mt-1">Normal: 51-100</p>
                </div>

                <div>
                  <Label htmlFor="consciousness">Level of Consciousness</Label>
                  <Select value={consciousness} onValueChange={setConsciousness}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="alert">Alert (A)</SelectItem>
                      <SelectItem value="verbal">Responds to Verbal (V)</SelectItem>
                      <SelectItem value="pain">Responds to Pain (P)</SelectItem>
                      <SelectItem value="unresponsive">Unresponsive (U)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button onClick={handleCalculate} className="flex-1 bg-red-600 hover:bg-red-700">
                    Calculate NEWS2
                  </Button>
                  <Button onClick={handleReset} variant="outline" className="flex-1">
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          {result && (
            <div className="space-y-6">
              <Card className="shadow-lg border-l-4 border-l-red-600">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>NEWS2 Score</span>
                    <Badge className={result.riskColor}>{result.riskLevel}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-lg border border-red-200">
                    <div className="text-sm text-gray-600">Total NEWS2 Score</div>
                    <div className="text-5xl font-bold text-red-600">{result.totalScore}</div>
                    <div className="text-xs text-gray-500 mt-2">Out of maximum possible: 20</div>
                  </div>

                  <div className={`p-4 rounded-lg border-2 ${result.riskColor}`}>
                    <div className="font-bold text-lg mb-2">{result.actionRequired}</div>
                    <p className="text-sm">{result.details}</p>
                  </div>

                  <div>
                    <button
                      onClick={() => setShowDetails(!showDetails)}
                      className="text-sm text-red-600 hover:text-red-700 font-medium flex items-center gap-1"
                    >
                      {showDetails ? '▼' : '▶'} Score Breakdown
                    </button>
                    {showDetails && (
                      <div className="mt-3 p-3 bg-gray-50 rounded space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Respiration Rate:</span>
                          <span className="font-semibold">{result.scoreBreakdown.respiration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>SpO₂:</span>
                          <span className="font-semibold">{result.scoreBreakdown.spO2}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Temperature:</span>
                          <span className="font-semibold">{result.scoreBreakdown.temperature}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Systolic BP:</span>
                          <span className="font-semibold">{result.scoreBreakdown.systolic}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Heart Rate:</span>
                          <span className="font-semibold">{result.scoreBreakdown.heartRate}</span>
                        </div>
                        <div className="flex justify-between border-t pt-2">
                          <span>Consciousness:</span>
                          <span className="font-semibold">{result.scoreBreakdown.consciousness}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {result.totalScore >= 7 && (
                <Card className="border-red-300 bg-red-50">
                  <CardContent className="p-4 flex gap-3 pt-4">
                    <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-red-800">
                      <p className="font-semibold mb-1">ESCALATION REQUIRED</p>
                      <p>This patient is at HIGH or CRITICAL risk. Inform the medical team immediately. Consider transfer to higher acuity setting. Continue monitoring closely.</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </div>

        {/* Reference Card */}
        <Card className="mt-8 shadow-lg">
          <CardHeader>
            <CardTitle>Risk Categories & Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 bg-green-50 border border-green-200 rounded">
                <div className="font-semibold text-green-900">Score 0-4 (LOW RISK)</div>
                <div className="text-sm text-green-700">Routine monitoring as per local policy. Continue current care.</div>
              </div>
              <div className="p-3 bg-amber-50 border border-amber-200 rounded">
                <div className="font-semibold text-amber-900">Score 5-6 (MEDIUM RISK)</div>
                <div className="text-sm text-amber-700">Close observation required. Assess every 4-6 hours. Inform medical team. Review for escalation.</div>
              </div>
              <div className="p-3 bg-orange-50 border border-orange-200 rounded">
                <div className="font-semibold text-orange-900">Score 7-8 (HIGH RISK)</div>
                <div className="text-sm text-orange-700">Urgent review by medical team. Hourly monitoring minimum. Likely escalation needed. IV access, advanced monitoring, possible transfer.</div>
              </div>
              <div className="p-3 bg-red-50 border border-red-300 rounded">
                <div className="font-semibold text-red-900">Score {'>'} 8 (CRITICAL RISK)</div>
                <div className="text-sm text-red-700">EMERGENCY: Call for immediate help (resuscitation team/emergency services). Continuous monitoring. Senior physician assessment urgently required.</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* About Section */}
        <Card className="mt-8 shadow-lg">
          <CardHeader>
            <CardTitle>About NEWS2</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <p className="text-gray-700">The National Early Warning Score 2 (NEWS2) is an evidence-based system used to identify and assess acutely ill patients in hospital settings. It combines vital sign measurement with a score-based system to quantify clinical deterioration.</p>
            <div>
              <div className="font-semibold text-gray-900 mb-1">Key Components</div>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Respiration rate (3 point scale)</li>
                <li>Oxygen saturation with optional Scale 2 for hypoxemic patients</li>
                <li>Temperature (3 point scale)</li>
                <li>Systolic blood pressure (3 point scale)</li>
                <li>Heart rate (3 point scale)</li>
                <li>Level of consciousness (AVPU scale)</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-gray-900 mb-1">Clinical Use</div>
              <p>NEWS2 should be calculated frequently in acute care settings (at least every 4-12 hours depending on patient stability). Repeated measurements help identify trends in deterioration.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
