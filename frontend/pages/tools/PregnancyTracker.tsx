import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Baby, Calendar, Heart, AlertTriangle, CheckCircle } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

interface CalculationResult {
  mode: 'pregnancy' | 'ovulation';
  dueDate?: Date;
  pregnancyWeeks?: number;
  pregnancyDays?: number;
  nextOvulation?: Date;
  fertileStart?: Date;
  fertileEnd?: Date;
  nextPeriod?: Date;
  trimester?: 'first' | 'second' | 'third';
}

const trimesterInfo = {
  first: {
    name: 'First Trimester',
    weeks: '1-12',
    color: 'pink',
    description: 'Organ development begins - critical period',
    milestones: [
      'Heart begins beating (around week 6)',
      'Brain and spinal cord form',
      'Limbs begin to develop',
      'Sex organs form'
    ],
    screenings: [
      'Dating ultrasound',
      'First trimester screening (blood tests + nuchal scan)',
      'Combined screening for chromosomal abnormalities'
    ],
    warnings: [
      'Vaginal bleeding or spotting - seek urgent care',
      'Severe abdominal pain',
      'Loss of pregnancy symptoms suddenly',
      'Dizziness or fainting',
      'Any signs of infection (fever, chills)'
    ],
    care: [
      'Book first prenatal appointment with midwife/doctor',
      'Start prenatal vitamins with folic acid',
      'Reduce caffeine intake',
      'Avoid smoking, alcohol, and recreational drugs',
      'Manage nausea with frequent small meals',
      'Increase rest and sleep'
    ]
  },
  second: {
    name: 'Second Trimester',
    weeks: '13-27',
    color: 'purple',
    description: 'Rapid growth phase - best trimester for many',
    milestones: [
      'Baby movements felt (quickening)',
      'Sex can often be determined',
      'Hair, eyelashes, and eyebrows form',
      'Hearing develops - baby can hear voices'
    ],
    screenings: [
      'Mid-pregnancy ultrasound (anomaly scan)',
      'Glucose tolerance test (gestational diabetes)',
      'Triple screen or quad screen for chromosomal abnormalities',
      'Blood pressure monitoring'
    ],
    warnings: [
      'Vaginal bleeding or heavy discharge',
      'Persistent abdominal or pelvic pain',
      'Leakage of fluid (possible rupture of membranes)',
      'Absence of fetal movement after 20 weeks',
      'Severe headaches with visual changes'
    ],
    care: [
      'Continue prenatal appointments every 4 weeks',
      'Start maternity clothes as needed',
      'Pelvic floor exercises daily',
      'Adequate calcium and iron intake',
      'Regular moderate exercise (walking, swimming)',
      'Sleep on left side for better circulation'
    ]
  },
  third: {
    name: 'Third Trimester',
    weeks: '28-40',
    color: 'blue',
    description: 'Final preparation - baby is viable now',
    milestones: [
      'Baby settles into head-down position',
      'Lungs mature for breathing outside womb',
      'Eyes open and respond to light',
      'Full-length body movements and kicks'
    ],
    screenings: [
      'Growth ultrasound (if needed)',
      'Group B Streptococcus (GBS) test',
      'Anemia and blood pressure checks',
      'Fetal monitoring if complications'
    ],
    warnings: [
      'Regular contractions becoming closer (labor signs)',
      'Rupture of membranes (gush of fluid)',
      'Vaginal bleeding more than spotting',
      'Severe swelling of face, hands, or feet',
      'Severe headache, vision changes, or chest pain (preeclampsia)'
    ],
    care: [
      'Prenatal appointments every 1-2 weeks',
      'Prepare birth plan and hospital bag',
      'Learn labor and birth techniques',
      'Monitor baby kicks (non-stress tests if needed)',
      'Rest and stay hydrated',
      'Avoid heavy lifting and strenuous activity'
    ]
  }
};

export default function PregnancyTracker() {
  const { t } = useLanguage();
  const [trackerMode, setTrackerMode] = useState<'pregnancy' | 'ovulation'>('pregnancy');
  const [lastPeriod, setLastPeriod] = useState('');
  const [cycleLength, setCycleLength] = useState('28');
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [expandedTrimester, setExpandedTrimester] = useState<string | null>(null);

  const calculate = () => {
    if (!lastPeriod) return;

    const lmpDate = new Date(lastPeriod);
    const today = new Date();
    
    if (trackerMode === 'pregnancy') {
      const dueDate = new Date(lmpDate);
      dueDate.setDate(lmpDate.getDate() + 280);

      const daysSinceLMP = Math.floor((today.getTime() - lmpDate.getTime()) / (1000 * 60 * 60 * 24));
      const pregnancyWeeks = Math.floor(daysSinceLMP / 7);
      const pregnancyDays = daysSinceLMP % 7;

      let trimester: 'first' | 'second' | 'third' = 'first';
      if (pregnancyWeeks > 27) {
        trimester = 'third';
      } else if (pregnancyWeeks > 12) {
        trimester = 'second';
      }

      setResult({
        mode: 'pregnancy',
        dueDate,
        pregnancyWeeks,
        pregnancyDays,
        trimester
      });
      setExpandedTrimester(trimester);
    } else {
      const cycleDays = parseInt(cycleLength) || 28;
      let nextPeriod = new Date(lmpDate);
      while (nextPeriod <= today) {
        nextPeriod.setDate(nextPeriod.getDate() + cycleDays);
      }

      const nextOvulation = new Date(nextPeriod);
      nextOvulation.setDate(nextPeriod.getDate() - 14);

      const fertileStart = new Date(nextOvulation);
      fertileStart.setDate(fertileStart.getDate() - 5);
      const fertileEnd = new Date(nextOvulation);

      setResult({
        mode: 'ovulation',
        nextOvulation,
        fertileStart,
        fertileEnd,
        nextPeriod,
      });
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl text-white">
              <Baby className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Pregnancy & Fertility Tracker</h1>
              <p className="text-gray-600">Comprehensive pregnancy tracking with trimester guides and care checklists</p>
            </div>
          </div>
        </div>

        {/* Medical Disclaimer */}
        <Card className="mb-6 border-yellow-300 bg-yellow-50">
          <CardContent className="p-4 flex gap-3 pt-4">
            <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-yellow-800">
              <p className="font-semibold mb-1">Important Medical Notice</p>
              <p>This calculator is for educational purposes. Due date estimates can vary by ±2 weeks. Always confirm with your healthcare provider through proper ultrasound dating. Seek immediate medical attention for warning signs.</p>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Calculate Your Dates</CardTitle>
              <CardDescription>Enter your last menstrual period (LMP) date</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ToggleGroup
                type="single"
                value={trackerMode}
                onValueChange={(value) => {
                  if (value) {
                    setTrackerMode(value as 'pregnancy' | 'ovulation');
                    setResult(null);
                  }
                }}
                className="grid grid-cols-2"
              >
                <ToggleGroupItem value="pregnancy">
                  <Baby className="h-4 w-4 mr-2" />
                  Pregnancy Mode
                </ToggleGroupItem>
                <ToggleGroupItem value="ovulation">
                  <Calendar className="h-4 w-4 mr-2" />
                  Fertility Mode
                </ToggleGroupItem>
              </ToggleGroup>

              <div>
                <Label htmlFor="lastPeriod">Last Menstrual Period (LMP)</Label>
                <Input
                  id="lastPeriod"
                  type="date"
                  value={lastPeriod}
                  onChange={(e) => setLastPeriod(e.target.value)}
                />
                <p className="text-xs text-gray-500 mt-1">First day of your last period</p>
              </div>

              {trackerMode === 'ovulation' && (
                <div>
                  <Label htmlFor="cycleLength">Average Cycle Length (days)</Label>
                  <Input
                    id="cycleLength"
                    type="number"
                    value={cycleLength}
                    onChange={(e) => setCycleLength(e.target.value)}
                    placeholder="28"
                  />
                  <p className="text-xs text-gray-500 mt-1">Default: 28 days</p>
                </div>
              )}

              <Button 
                onClick={calculate}
                disabled={!lastPeriod}
                className="w-full bg-pink-600 hover:bg-pink-700"
              >
                Calculate
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          {result && (
            <div className="space-y-6">
              {result.mode === 'pregnancy' && result.dueDate && (
                <Card className="shadow-lg border-l-4 border-l-pink-500">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Baby className="h-5 w-5 text-pink-500" />
                      Pregnancy Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">Current Pregnancy Duration</div>
                      <div className="text-3xl font-bold text-pink-600">
                        {result.pregnancyWeeks} weeks {result.pregnancyDays} days
                      </div>
                    </div>

                    <div>
                      <div className="text-sm text-gray-600 mb-2">Expected Due Date</div>
                      <div className="text-xl font-semibold text-gray-900">
                        {formatDate(result.dueDate)}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Due date ±2 weeks</p>
                    </div>

                    <div>
                      <div className="text-sm text-gray-600 mb-2">Current Trimester</div>
                      <Badge className={`bg-${result.trimester === 'first' ? 'pink' : result.trimester === 'second' ? 'purple' : 'blue'}-100 text-${result.trimester === 'first' ? 'pink' : result.trimester === 'second' ? 'purple' : 'blue'}-800`}>
                        {result.trimester === 'first' ? '1st' : result.trimester === 'second' ? '2nd' : '3rd'} Trimester
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              )}

              {result.mode === 'ovulation' && result.nextOvulation && (
                <Card className="shadow-lg border-l-4 border-l-blue-500">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-blue-500" />
                      Fertility Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="font-semibold text-gray-900 mb-2">Fertile Window</div>
                      <div className="text-lg text-gray-700">
                        {formatDate(result.fertileStart!)} to {formatDate(result.fertileEnd!)}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">5 days before ovulation + ovulation day</p>
                    </div>

                    <div>
                      <div className="font-semibold text-gray-900 mb-2">Expected Ovulation</div>
                      <div className="text-lg text-gray-700">
                        {formatDate(result.nextOvulation)}
                      </div>
                    </div>

                    <div>
                      <div className="font-semibold text-gray-900 mb-2">Next Period</div>
                      <div className="text-lg text-gray-700">
                        {formatDate(result.nextPeriod!)}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </div>

        {/* Trimester Guides */}
        {result?.mode === 'pregnancy' && result.trimester && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Trimester Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.entries(trimesterInfo).map(([key, info]) => (
                <Card 
                  key={key}
                  className={`cursor-pointer transition-all shadow-lg ${
                    expandedTrimester === key ? 'ring-2 ring-' + info.color + '-500' : ''
                  }`}
                  onClick={() => setExpandedTrimester(expandedTrimester === key ? null : key)}
                >
                  <CardHeader className={`bg-gradient-to-r from-${info.color}-50 to-${info.color}-100 rounded-t-lg`}>
                    <CardTitle className={`text-lg text-${info.color}-900`}>{info.name}</CardTitle>
                    <CardDescription className={`text-${info.color}-700`}>Weeks {info.weeks}</CardDescription>
                  </CardHeader>
                  {expandedTrimester === key && (
                    <CardContent className="space-y-4 pt-4">
                      <div>
                        <div className="font-semibold text-gray-900 mb-2">Fetal Milestones</div>
                        <ul className="space-y-1">
                          {info.milestones.map((milestone, idx) => (
                            <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              {milestone}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div className="font-semibold text-gray-900 mb-2">Recommended Screenings</div>
                        <ul className="space-y-1">
                          {info.screenings.map((screening, idx) => (
                            <li key={idx} className="text-sm text-gray-700">• {screening}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-red-50 p-3 rounded border-l-4 border-l-red-500">
                        <div className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4" />
                          Warning Signs - Seek Care If You Experience:
                        </div>
                        <ul className="space-y-1">
                          {info.warnings.map((warning, idx) => (
                            <li key={idx} className="text-sm text-red-800">• {warning}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-blue-50 p-3 rounded border-l-4 border-l-blue-500">
                        <div className="font-semibold text-blue-900 mb-2">Self-Care Checklist</div>
                        <ul className="space-y-1">
                          {info.care.map((item, idx) => (
                            <li key={idx} className="text-sm text-blue-800 flex items-start gap-2">
                              <input type="checkbox" className="mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* General Pregnancy Care */}
        <Card className="mt-8 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-600" />
              Important Pregnancy Care
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-3 rounded border-l-4 border-l-green-500">
                <div className="font-semibold text-green-900 mb-2">✓ Do's</div>
                <ul className="text-green-800 space-y-1">
                  <li>• Attend all prenatal appointments</li>
                  <li>• Take prenatal vitamins with folic acid</li>
                  <li>• Eat nutritious, balanced meals</li>
                  <li>• Stay hydrated (8-10 glasses daily)</li>
                  <li>• Get adequate sleep and rest</li>
                  <li>• Moderate exercise (walking, swimming)</li>
                  <li>• Inform healthcare provider of all symptoms</li>
                </ul>
              </div>

              <div className="bg-red-50 p-3 rounded border-l-4 border-l-red-500">
                <div className="font-semibold text-red-900 mb-2">✗ Don'ts</div>
                <ul className="text-red-800 space-y-1">
                  <li>• NO smoking or secondhand smoke</li>
                  <li>• NO alcohol or recreational drugs</li>
                  <li>• NO unpasteurized dairy products</li>
                  <li>• NO raw or undercooked meats</li>
                  <li>• NO high-impact exercise</li>
                  <li>• NO unnecessary X-rays or medications</li>
                  <li>• NO contact with cat litter or toxoplasmosis risk</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
