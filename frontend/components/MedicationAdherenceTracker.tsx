import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, TrendingUp, Plus } from 'lucide-react';
import { useMedicationAdherence } from '../contexts/MedicationAdherenceContext';
import { Medication } from '../contexts/PatientRecordsContext';

interface MedicationAdherenceTrackerProps {
  medications: Medication[];
}

export default function MedicationAdherenceTracker({ medications }: MedicationAdherenceTrackerProps) {
  const { getAdherenceForMedication, addAdherenceEntry } = useMedicationAdherence();
  const [expandedMed, setExpandedMed] = useState<string | null>(null);

  if (!medications || medications.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Medication Adherence
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500 text-center py-4">
            Add medications to your record to track adherence.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Medication Adherence
        </CardTitle>
        <CardDescription>
          Track whether you're taking your medications as prescribed
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {medications.map((med) => {
          const adherenceRate = getAdherenceForMedication(med.id, 30);

          return (
            <div key={med.id} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h4 className="font-semibold">{med.name}</h4>
                  <p className="text-sm text-gray-600">
                    {med.dosage} • {med.frequency}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">
                    {adherenceRate}%
                  </div>
                  <p className="text-xs text-gray-500">30-day rate</p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                <div
                  className="bg-green-600 h-2 rounded-full transition-all"
                  style={{ width: `${adherenceRate}%` }}
                />
              </div>

              {/* Quick action buttons */}
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1"
                  onClick={() => {
                    addAdherenceEntry(med.id, true);
                  }}
                >
                  <CheckCircle className="h-4 w-4 mr-1" />
                  Took it
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1"
                  onClick={() => {
                    addAdherenceEntry(med.id, false);
                  }}
                >
                  <XCircle className="h-4 w-4 mr-1" />
                  Missed
                </Button>
              </div>

              {/* Adherence status badge */}
              <div className="mt-2 flex gap-2">
                {adherenceRate >= 90 ? (
                  <Badge className="bg-green-100 text-green-800">Excellent</Badge>
                ) : adherenceRate >= 70 ? (
                  <Badge className="bg-yellow-100 text-yellow-800">Good</Badge>
                ) : adherenceRate >= 50 ? (
                  <Badge className="bg-orange-100 text-orange-800">Needs Improvement</Badge>
                ) : (
                  <Badge className="bg-red-100 text-red-800">At Risk</Badge>
                )}
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
