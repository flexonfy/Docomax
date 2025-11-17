import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useMode } from '../../contexts/ModeContext';
import { usePatientRecords } from '../../contexts/PatientRecordsContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { AlertTriangle, Plus, X, Shield, Pill, CheckCircle, Download } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Allergy {
  id: string;
  name: string;
  severity: 'mild' | 'moderate' | 'severe';
  reaction: string;
  onsetDate?: string;
  notes?: string;
}

interface Medication {
  id: string;
  name: string;
  dose: string;
  frequency: string;
  indication: string;
  startDate?: string;
  prescriber?: string;
  notes?: string;
}

interface CheckResult {
  hasConflict: boolean;
  conflicts: Array<{
    medicationId: string;
    medicationName: string;
    allergyName: string;
    allergyId: string;
    severity: string;
    recommendation: string;
  }>;
  warnings: string[];
}

const commonAllergens = [
  { name: 'Penicillin', category: 'Antibiotic' },
  { name: 'Sulfonamides', category: 'Antibiotic' },
  { name: 'Cephalosporins', category: 'Antibiotic' },
  { name: 'Aspirin', category: 'NSAID' },
  { name: 'Ibuprofen', category: 'NSAID' },
  { name: 'ACE Inhibitors', category: 'Cardiovascular' },
  { name: 'Statins', category: 'Cardiovascular' },
  { name: 'Beta-blockers', category: 'Cardiovascular' },
  { name: 'Warfarin', category: 'Anticoagulant' },
  { name: 'Contrast Dye (Iodine)', category: 'Imaging' },
  { name: 'Morphine', category: 'Opioid' },
  { name: 'Codeine', category: 'Opioid' },
  { name: 'Latex', category: 'Material' },
  { name: 'Pollen', category: 'Environmental' },
  { name: 'Nuts', category: 'Food' },
  { name: 'Shellfish', category: 'Food' },
  { name: 'Eggs', category: 'Food' },
  { name: 'Milk/Dairy', category: 'Food' }
];

const drugAllergyInteractions: Record<string, string[]> = {
  'Penicillin': ['Amoxicillin', 'Amoxil', 'Ampicillin'],
  'Sulfonamides': ['Trimethoprim', 'Sulfamethoxazole', 'Bactrim'],
  'Cephalosporins': ['Cephalexin', 'Ceftriaxone', 'Cefotaxime'],
  'Aspirin': ['Acetylsalicylic acid', 'ASA'],
  'Ibuprofen': ['Brufen', 'Advil', 'Nurofen'],
  'ACE Inhibitors': ['Lisinopril', 'Enalapril', 'Ramipril', 'Perindopril'],
  'Statins': ['Atorvastatin', 'Simvastatin', 'Pravastatin', 'Rosuvastatin'],
  'Beta-blockers': ['Atenolol', 'Metoprolol', 'Propranolol'],
  'Warfarin': ['Coumarin', 'Coumarin derivative'],
  'Morphine': ['Codeine', 'Diamorphine'],
  'Latex': ['Latex-containing supplies', 'Rubber gloves']
};

export default function AllergyMedicationReconciliation() {
  const { t } = useLanguage();
  const { mode } = useMode();
  const { patients } = usePatientRecords();
  const [allergies, setAllergies] = useState<Allergy[]>([]);
  const [medications, setMedications] = useState<Medication[]>([]);
  const [checkResults, setCheckResults] = useState<CheckResult | null>(null);

  const currentPatient = mode === 'personal' ? patients[0] : null;
  const hasAllergies = currentPatient?.allergies && currentPatient.allergies.length > 0;
  const hasMedications = currentPatient?.currentMedications && currentPatient.currentMedications.length > 0;

  const loadFromPatientRecord = () => {
    // Load allergies
    if (currentPatient?.allergies && currentPatient.allergies.length > 0) {
      const newAllergies: Allergy[] = currentPatient.allergies.map((allergyName, index) => ({
        id: `allergy-${index}`,
        name: allergyName,
        severity: 'moderate',
        reaction: 'Unknown reaction',
        notes: 'Loaded from patient record'
      }));
      setAllergies(newAllergies);
    }

    // Load medications
    if (currentPatient?.currentMedications && currentPatient.currentMedications.length > 0) {
      const newMedications: Medication[] = currentPatient.currentMedications.map((med) => ({
        id: med.id,
        name: med.name,
        dose: med.dosage,
        frequency: med.frequency,
        indication: 'Loaded from record',
        prescriber: med.prescribedBy,
        notes: med.notes || 'Loaded from patient record'
      }));
      setMedications(newMedications);
    }
  };

  // Allergy Form
  const [allergyForm, setAllergyForm] = useState({
    name: '',
    severity: 'moderate' as 'mild' | 'moderate' | 'severe',
    reaction: '',
    onsetDate: '',
    notes: ''
  });

  // Medication Form
  const [medicationForm, setMedicationForm] = useState({
    name: '',
    dose: '',
    frequency: '',
    indication: '',
    startDate: '',
    prescriber: '',
    notes: ''
  });

  const addAllergy = () => {
    if (!allergyForm.name || !allergyForm.reaction) return;

    const newAllergy: Allergy = {
      id: Date.now().toString(),
      ...allergyForm
    };

    setAllergies([...allergies, newAllergy]);
    setAllergyForm({
      name: '',
      severity: 'moderate',
      reaction: '',
      onsetDate: '',
      notes: ''
    });
  };

  const removeAllergy = (id: string) => {
    setAllergies(allergies.filter(a => a.id !== id));
    setCheckResults(null);
  };

  const addMedication = () => {
    if (!medicationForm.name || !medicationForm.dose || !medicationForm.frequency) return;

    const newMedication: Medication = {
      id: Date.now().toString(),
      ...medicationForm
    };

    setMedications([...medications, newMedication]);
    setMedicationForm({
      name: '',
      dose: '',
      frequency: '',
      indication: '',
      startDate: '',
      prescriber: '',
      notes: ''
    });
  };

  const removeMedication = (id: string) => {
    setMedications(medications.filter(m => m.id !== id));
    setCheckResults(null);
  };

  const checkAllergyInteractions = () => {
    const conflicts: CheckResult['conflicts'] = [];
    const warnings: string[] = [];

    medications.forEach(med => {
      allergies.forEach(allergy => {
        const relatedDrugs = drugAllergyInteractions[allergy.name] || [];
        
        // Check if medication name or alias matches allergy contraindication
        if (med.name.toLowerCase().includes(allergy.name.toLowerCase()) ||
            relatedDrugs.some(d => med.name.toLowerCase().includes(d.toLowerCase()))) {
          
          let recommendation = '';
          if (allergy.severity === 'severe') {
            recommendation = `CRITICAL: AVOID ${med.name}. Consider alternative class of medication. Document clearly in allergy section.`;
          } else if (allergy.severity === 'moderate') {
            recommendation = `Use with caution. Ensure pre-medication protocol (antihistamine ±corticosteroid). Monitor closely. Have emergency equipment available.`;
          } else {
            recommendation = `May use with monitoring. Patient education on monitoring for reaction.`;
          }

          conflicts.push({
            medicationId: med.id,
            medicationName: med.name,
            allergyName: allergy.name,
            allergyId: allergy.id,
            severity: allergy.severity,
            recommendation
          });
        }
      });
    });

    // Additional warnings
    if (medications.length === 0) {
      warnings.push('No medications entered for review');
    }
    if (allergies.length === 0) {
      warnings.push('No allergies documented - confirm allergy status with patient');
    }

    setCheckResults({
      hasConflict: conflicts.length > 0,
      conflicts,
      warnings
    });
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'severe':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'moderate':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'mild':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white">
              <Shield className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Allergy & Medication Reconciliation</h1>
              <p className="text-gray-600">Manage patient allergies and check for dangerous drug-allergy interactions</p>
            </div>
          </div>
        </div>

        {/* Safety Notice */}
        <Card className="mb-6 border-red-300 bg-red-50">
          <CardContent className="p-4 flex gap-3 pt-4">
            <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-red-800">
              <p className="font-semibold mb-1">PATIENT SAFETY CRITICAL</p>
              <p>This tool helps identify potential drug-allergy conflicts. However, always verify allergies directly with the patient and check comprehensive drug databases before dispensing or administering medications. Some interactions may not be captured.</p>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Allergies Section */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Known Allergies
                  </CardTitle>
                  {hasAllergies && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={loadFromPatientRecord}
                      className="ml-2"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Load
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="allergyName">Allergen Name</Label>
                    <Select value={allergyForm.name} onValueChange={(v) => setAllergyForm({ ...allergyForm, name: v })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select or type allergen" />
                      </SelectTrigger>
                      <SelectContent>
                        {commonAllergens.map(allergen => (
                          <SelectItem key={allergen.name} value={allergen.name}>
                            {allergen.name} ({allergen.category})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <input
                      type="text"
                      placeholder="Or type custom allergen"
                      value={allergyForm.name}
                      onChange={(e) => setAllergyForm({ ...allergyForm, name: e.target.value })}
                      className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md text-sm"
                    />
                  </div>

                  <div>
                    <Label htmlFor="reaction">Reaction Description</Label>
                    <Textarea
                      id="reaction"
                      placeholder="e.g., Anaphylaxis, rash, respiratory distress..."
                      value={allergyForm.reaction}
                      onChange={(e) => setAllergyForm({ ...allergyForm, reaction: e.target.value })}
                      className="text-sm"
                    />
                  </div>

                  <div>
                    <Label htmlFor="severity">Severity</Label>
                    <Select value={allergyForm.severity} onValueChange={(v: any) => setAllergyForm({ ...allergyForm, severity: v })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mild">Mild (Minor symptoms)</SelectItem>
                        <SelectItem value="moderate">Moderate (Significant symptoms)</SelectItem>
                        <SelectItem value="severe">Severe (Life-threatening)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="onsetDate">Onset Date (Optional)</Label>
                    <Input
                      id="onsetDate"
                      type="date"
                      value={allergyForm.onsetDate}
                      onChange={(e) => setAllergyForm({ ...allergyForm, onsetDate: e.target.value })}
                    />
                  </div>

                  <Button onClick={addAllergy} className="w-full bg-purple-600 hover:bg-purple-700">
                    <Plus className="h-4 w-4 mr-2" /> Add Allergy
                  </Button>
                </div>

                {/* Allergies List */}
                <div className="space-y-2 mt-6 border-t pt-4">
                  {allergies.length === 0 ? (
                    <p className="text-sm text-gray-500 text-center py-4">No allergies added yet</p>
                  ) : (
                    allergies.map(allergy => (
                      <div key={allergy.id} className={`p-3 rounded-lg border-l-4 ${getSeverityColor(allergy.severity)}`}>
                        <div className="flex justify-between items-start gap-2">
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-sm">{allergy.name}</div>
                            <div className="text-xs mt-1">{allergy.reaction}</div>
                            {allergy.notes && <div className="text-xs mt-1 opacity-70">{allergy.notes}</div>}
                          </div>
                          <button
                            onClick={() => removeAllergy(allergy.id)}
                            className="p-1 hover:bg-red-100 rounded"
                          >
                            <X className="h-4 w-4 text-red-600" />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Medications Section */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Pill className="h-5 w-5" />
                  Current Medications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="medName">Medication Name</Label>
                    <Input
                      id="medName"
                      placeholder="e.g., Amoxicillin, Metformin"
                      value={medicationForm.name}
                      onChange={(e) => setMedicationForm({ ...medicationForm, name: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Label htmlFor="dose">Dose</Label>
                      <Input
                        id="dose"
                        placeholder="e.g., 500mg"
                        value={medicationForm.dose}
                        onChange={(e) => setMedicationForm({ ...medicationForm, dose: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="frequency">Frequency</Label>
                      <Input
                        id="frequency"
                        placeholder="e.g., TDS"
                        value={medicationForm.frequency}
                        onChange={(e) => setMedicationForm({ ...medicationForm, frequency: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="indication">Indication</Label>
                    <Input
                      id="indication"
                      placeholder="e.g., Infection, Hypertension"
                      value={medicationForm.indication}
                      onChange={(e) => setMedicationForm({ ...medicationForm, indication: e.target.value })}
                    />
                  </div>

                  <Button onClick={addMedication} className="w-full bg-blue-600 hover:bg-blue-700">
                    <Plus className="h-4 w-4 mr-2" /> Add Medication
                  </Button>
                </div>

                {/* Medications List */}
                <div className="space-y-2 mt-6 border-t pt-4">
                  {medications.length === 0 ? (
                    <p className="text-sm text-gray-500 text-center py-4">No medications added yet</p>
                  ) : (
                    medications.map(med => (
                      <div key={med.id} className="p-3 rounded-lg border-l-4 border-l-blue-500 bg-blue-50">
                        <div className="flex justify-between items-start gap-2">
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-sm">{med.name}</div>
                            <div className="text-xs mt-1 text-gray-700">{med.dose} {med.frequency}</div>
                            {med.indication && <div className="text-xs mt-1 text-gray-600">For: {med.indication}</div>}
                          </div>
                          <button
                            onClick={() => removeMedication(med.id)}
                            className="p-1 hover:bg-red-100 rounded"
                          >
                            <X className="h-4 w-4 text-red-600" />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Safety Check Results
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  onClick={checkAllergyInteractions}
                  className="w-full bg-green-600 hover:bg-green-700"
                  disabled={medications.length === 0 && allergies.length === 0}
                >
                  Run Safety Check
                </Button>

                {checkResults && (
                  <div className="space-y-4 border-t pt-4">
                    {checkResults.hasConflict ? (
                      <div className="bg-red-50 border border-red-300 p-4 rounded-lg">
                        <div className="flex items-start gap-2 mb-3">
                          <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="font-semibold text-red-900">⚠️ CONFLICTS FOUND</div>
                            <p className="text-sm text-red-800 mt-1">{checkResults.conflicts.length} potential drug-allergy conflict(s)</p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          {checkResults.conflicts.map((conflict, idx) => (
                            <div key={idx} className="bg-white p-3 rounded border-l-4 border-l-red-600">
                              <div className="font-semibold text-sm text-gray-900 mb-1">
                                {conflict.medicationName} ↔ {conflict.allergyName}
                              </div>
                              <Badge className={getSeverityColor(conflict.severity)}>
                                {conflict.severity.toUpperCase()}
                              </Badge>
                              <p className="text-xs text-gray-700 mt-2">{conflict.recommendation}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : checkResults.conflicts.length === 0 ? (
                      <div className="bg-green-50 border border-green-300 p-4 rounded-lg">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="font-semibold text-green-900">✓ No Conflicts Detected</div>
                            <p className="text-sm text-green-800 mt-1">Current medications appear compatible with documented allergies.</p>
                          </div>
                        </div>
                      </div>
                    ) : null}

                    {checkResults.warnings.length > 0 && (
                      <div className="bg-amber-50 border border-amber-300 p-3 rounded-lg">
                        <div className="font-semibold text-amber-900 text-sm mb-2">⚠️ Warnings</div>
                        {checkResults.warnings.map((warning, idx) => (
                          <p key={idx} className="text-xs text-amber-800">• {warning}</p>
                        ))}
                      </div>
                    )}

                    <div className="bg-blue-50 border border-blue-300 p-3 rounded-lg text-xs text-blue-800">
                      <p className="font-semibold mb-1">💡 Tip</p>
                      <p>Always verify allergies directly with patient. Cross-reference with comprehensive drug databases before prescribing.</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Info Section */}
        <Card className="mt-8 shadow-lg">
          <CardHeader>
            <CardTitle>About Drug-Allergy Interactions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <p>Drug-allergy interactions can range from minor adverse effects to life-threatening anaphylaxis. This tool flags potential conflicts between documented allergies and prescribed medications.</p>
            <div>
              <div className="font-semibold text-gray-900 mb-2">Common Drug Classes to Monitor</div>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Beta-lactam antibiotics (Penicillins, Cephalosporins) - Cross-reactivity important</li>
                <li>NSAIDs - Often cause reactions in aspirin-allergic patients</li>
                <li>Contrast media - Iodine-based contrast poses risk in iodine allergy</li>
                <li>Anesthetic agents - Multiple potential allergens</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
