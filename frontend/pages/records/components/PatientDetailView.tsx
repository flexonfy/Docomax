import React, { useState } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { PatientRecord, Visit, Appointment } from '../../../contexts/PatientRecordsContext';
import { useMedicationAdherence } from '../../../contexts/MedicationAdherenceContext';
import { useVitalsTracking } from '../../../contexts/VitalsTrackingContext';
import { useMedicationReminders } from '../../../contexts/MedicationRemindersContext';
import { useAppointmentReminders } from '../../../contexts/AppointmentRemindersContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter, DialogClose, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, User, Edit, Trash2, Download, Check, X, TrendingUp, Activity, Heart, Clock, Bell } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface PatientDetailViewProps {
  patient: PatientRecord;
  recordActions: any;
  isPersonalView?: boolean;
  onDeleteProfile?: () => void;
  onAddVisit: () => void;
  onEditVisit: (visit: Visit) => void;
  onAddVaccination: () => void;
  onAddLabResult: () => void;
  onAddAttachment: () => void;
  onAddMedication: () => void;
  onAddReferral: () => void;
  onExportPDF: (patient: PatientRecord) => void;
  appointments: Appointment[];
  onAddAppointment: () => void;
  onUpdateAppointment: (id: string, updates: Partial<Appointment>) => void;
  onDeleteAppointment: (id: string) => void;
}

export default function PatientDetailView({ 
  patient, 
  recordActions, 
  isPersonalView = false, 
  onDeleteProfile,
  onAddVisit,
  onEditVisit,
  onAddVaccination,
  onAddLabResult,
  onAddAttachment,
  onAddMedication,
  onAddReferral,
  onExportPDF,
  appointments,
  onAddAppointment,
  onUpdateAppointment,
  onDeleteAppointment
}: PatientDetailViewProps) {
  const { t } = useLanguage();
  const { toast } = useToast();
  const { addAdherenceEntry, getAdherenceForMedication } = useMedicationAdherence();
  const { addVitalEntry, getPatientVitals, deleteVitalEntry, getLatestVitals } = useVitalsTracking();
  const { addReminder, updateReminder, deleteReminder, getRemindersForPatient, requestNotificationPermission } = useMedicationReminders();
  const [activeTab, setActiveTab] = useState('overview');
  const [showVitalForm, setShowVitalForm] = useState(false);
  const [vitalForm, setVitalForm] = useState({
    temperature: '',
    heartRate: '',
    bloodPressure: '',
    respiratoryRate: '',
    oxygenSaturation: '',
    weight: '',
    notes: ''
  });
  const [showReminderForm, setShowReminderForm] = useState(false);
  const [selectedMedicationForReminder, setSelectedMedicationForReminder] = useState<string>('');
  const [reminderForm, setReminderForm] = useState({
    time: '09:00',
    frequency: 'daily' as const,
    daysOfWeek: [0, 1, 2, 3, 4, 5, 6],
    notes: ''
  });

  const {
    deleteVisit, deleteVaccination, deleteLabResult, deleteAttachment, deleteMedication, deleteReferral
  } = recordActions;

  const patientAppointments = appointments.filter(a => a.patientId === patient.id);
  const upcomingAppointments = patientAppointments.filter(a => !a.completed && new Date(a.date) > new Date()).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const pastAppointments = patientAppointments.filter(a => a.completed || new Date(a.date) <= new Date()).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const handleDelete = (action: Function, ...args: any[]) => {
    action(...args);
    toast({ title: t('common.success'), description: t('common.delete') });
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-lg bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl text-white">
                <User className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-xl">{patient.name}</CardTitle>
                <CardDescription>
                  {patient.age} {t('common.years')} • {t(`common.${patient.gender}`)}
                  {patient.bloodType && ` • ${t('common.bloodType')}: ${patient.bloodType}`}
                </CardDescription>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {isPersonalView && (
                <Button variant="outline" size="sm" onClick={() => onExportPDF(patient)}>
                  <Download className="h-4 w-4 mr-2" />
                  {t('pages.records.exportPDF')}
                </Button>
              )}
              {isPersonalView && onDeleteProfile && (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="destructive" size="sm">
                      <Trash2 className="h-4 w-4 mr-2" />
                      {t('pages.records.deleteProfile')}
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{t('pages.records.confirmDeleteProfile')}</DialogTitle>
                      <DialogDescription>
                        {t('pages.records.deleteProfileDesc')}
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button variant="outline">{t('common.cancel')}</Button>
                      </DialogClose>
                      <Button variant="destructive" onClick={onDeleteProfile}>
                        {t('pages.records.yesDelete')}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              )}
            </div>
          </div>
        </CardHeader>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="w-full overflow-x-auto pb-2 border-b">
          <TabsList className="w-max">
            <TabsTrigger value="overview">{t('pages.records.overview')}</TabsTrigger>
            {!isPersonalView && <TabsTrigger value="visits">{t('pages.records.visits')}</TabsTrigger>}
            <TabsTrigger value="appointments">{t('common.appointments')}</TabsTrigger>
            <TabsTrigger value="vaccinations">{t('pages.records.vaccines')}</TabsTrigger>
            <TabsTrigger value="labs">{t('pages.records.labResults')}</TabsTrigger>
            <TabsTrigger value="medications">{t('pages.records.medications')}</TabsTrigger>
            {patient.currentMedications && patient.currentMedications.length > 0 && (
              <TabsTrigger value="adherence">Medication Adherence</TabsTrigger>
            )}
            {isPersonalView && patient.currentMedications && patient.currentMedications.length > 0 && (
              <TabsTrigger value="reminders">Reminders</TabsTrigger>
            )}
            <TabsTrigger value="vitals">Vital Signs</TabsTrigger>
            {!isPersonalView && <TabsTrigger value="referrals">{t('pages.records.referrals')}</TabsTrigger>}
            <TabsTrigger value="attachments">{t('pages.records.files')}</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="overview" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Key Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div><strong>{t('common.phone')}:</strong> {patient.phone || 'N/A'}</div>
                  <div><strong>{t('address')}:</strong> {patient.address || 'N/A'}</div>
                  <div><strong>{t('pages.records.emergencyContact')}:</strong> {patient.emergencyContact || 'N/A'}</div>
                  <div><strong>{t('pages.records.emergencyContactPhone')}:</strong> {patient.emergencyContactPhone || 'N/A'}</div>
                  <div className="md:col-span-2"><strong>{t('common.allergies')}:</strong> {patient.allergies?.join(', ') || 'None'}</div>
                  <div className="md:col-span-2"><strong>{t('pages.records.chronicConditions')}:</strong> {patient.chronicConditions?.join(', ') || 'None'}</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t('pages.records.healthSummary')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span>{t('pages.home.upcomingAppointments')}</span>
                    <Badge variant="secondary">{appointments.filter(a => a.patientId === patient.id && !a.completed && new Date(a.date) > new Date()).length}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>{t('pages.records.medications')}</span>
                    <Badge variant="secondary">{patient.currentMedications?.length || 0}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>{t('common.allergies')}</span>
                    <Badge variant="secondary">{patient.allergies?.length || 0}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>{t('pages.records.chronicConditions')}</span>
                    <Badge variant="secondary">{patient.chronicConditions?.length || 0}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {!isPersonalView && (
          <TabsContent value="visits" className="mt-4">
            <div className="flex justify-end mb-4">
              <Button size="sm" onClick={onAddVisit}><Plus className="h-4 w-4 mr-2" />{t('pages.records.addVisit')}</Button>
            </div>
            {patient.visits && patient.visits.length > 0 ? (
              patient.visits.map(visit => (
                <Card key={visit.id} className="mb-4">
                  <CardHeader>
                    <CardTitle>{visit.chiefComplaint}</CardTitle>
                    <CardDescription>{new Date(visit.date).toLocaleDateString()}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{t('pages.records.diagnosis')}: {visit.diagnosis || 'N/A'}</p>
                    <Button size="sm" variant="outline" className="mt-2 mr-2" onClick={() => onEditVisit(visit)}>
                      <Edit className="h-4 w-4 mr-2" /> {t('common.edit')}
                    </Button>
                    <Button size="sm" variant="destructive" className="mt-2" onClick={() => handleDelete(deleteVisit, patient.id, visit.id)}>
                      <Trash2 className="h-4 w-4 mr-2" /> {t('pages.records.deleteVisit')}
                    </Button>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="text-center text-gray-500 py-4">No visits recorded yet.</p>
            )}
          </TabsContent>
        )}

        <TabsContent value="appointments" className="mt-4">
          <div className="flex justify-end mb-4">
            <Button size="sm" onClick={onAddAppointment}><Plus className="h-4 w-4 mr-2" />{t('common.addAppointment')}</Button>
          </div>
          {patientAppointments.length > 0 ? (
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">{t('pages.home.upcomingAppointments')}</h3>
                {upcomingAppointments.length > 0 ? upcomingAppointments.map(app => (
                  <Card key={app.id} className="mb-2">
                    <CardContent className="p-3 flex justify-between items-center">
                      <div>
                        <p className="font-medium">{app.title}</p>
                        <p className="text-sm text-gray-500">{new Date(app.date).toLocaleString()}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" onClick={() => onUpdateAppointment(app.id, { completed: true })}><Check className="h-4 w-4 mr-1" /> {t('pages.records.markComplete')}</Button>
                        <Button size="sm" variant="destructive" onClick={() => onDeleteAppointment(app.id)}><Trash2 className="h-4 w-4" /></Button>
                      </div>
                    </CardContent>
                  </Card>
                )) : <p className="text-sm text-gray-500">{t('pages.home.noAppointments')}</p>}
              </div>
              <div>
                <h3 className="font-semibold mb-2">Past Appointments</h3>
                {pastAppointments.length > 0 ? pastAppointments.map(app => (
                  <Card key={app.id} className="mb-2 bg-gray-50 opacity-70">
                    <CardContent className="p-3 flex justify-between items-center">
                      <div>
                        <p className="font-medium line-through">{app.title}</p>
                        <p className="text-sm text-gray-500">{new Date(app.date).toLocaleString()}</p>
                      </div>
                      <Button size="sm" variant="destructive" onClick={() => onDeleteAppointment(app.id)}><Trash2 className="h-4 w-4" /></Button>
                    </CardContent>
                  </Card>
                )) : <p className="text-sm text-gray-500">No past appointments.</p>}
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-500 py-4">{t('pages.home.noAppointments')}</p>
          )}
        </TabsContent>

        <TabsContent value="vaccinations" className="mt-4">
          <div className="flex justify-end mb-4">
            <Button size="sm" onClick={onAddVaccination}><Plus className="h-4 w-4 mr-2" />{t('common.add')} {t('pages.records.vaccines')}</Button>
          </div>
          {(patient.vaccinations && patient.vaccinations.length > 0) ? (
            patient.vaccinations.map(vaccine => (
              <Card key={vaccine.id} className="mb-4">
                <CardHeader>
                  <CardTitle>{vaccine.vaccine}</CardTitle>
                  <CardDescription>{new Date(vaccine.date).toLocaleDateString()}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(deleteVaccination, patient.id, vaccine.id)}>
                    <Trash2 className="h-4 w-4 mr-2" /> {t('pages.records.deleteVaccination')}
                  </Button>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-center text-gray-500 py-4">No vaccinations recorded yet.</p>
          )}
        </TabsContent>

        <TabsContent value="labs" className="mt-4">
          <div className="flex justify-end mb-4">
            <Button size="sm" onClick={onAddLabResult}><Plus className="h-4 w-4 mr-2" />{t('common.add')} {t('pages.records.labResults')}</Button>
          </div>
          {(patient.labResults && patient.labResults.length > 0) ? (
            patient.labResults.map(lab => (
              <Card key={lab.id} className="mb-4">
                <CardHeader>
                  <CardTitle>{lab.testName}</CardTitle>
                  <CardDescription>{new Date(lab.date).toLocaleDateString()}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(deleteLabResult, patient.id, lab.id)}>
                    <Trash2 className="h-4 w-4 mr-2" /> {t('pages.records.deleteLabResult')}
                  </Button>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-center text-gray-500 py-4">No lab results recorded yet.</p>
          )}
        </TabsContent>

        <TabsContent value="medications" className="mt-4">
          <div className="flex justify-end mb-4">
            <Button size="sm" onClick={onAddMedication}><Plus className="h-4 w-4 mr-2" />{t('common.add')} {t('pages.records.medications')}</Button>
          </div>
          {(patient.currentMedications && patient.currentMedications.length > 0) ? (
            patient.currentMedications.map(med => (
              <Card key={med.id} className="mb-4">
                <CardHeader>
                  <CardTitle>{med.name}</CardTitle>
                  <CardDescription>{med.dosage} - {med.frequency}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(deleteMedication, patient.id, med.id)}>
                    <Trash2 className="h-4 w-4 mr-2" /> {t('pages.records.deleteMedication')}
                  </Button>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-center text-gray-500 py-4">No medications recorded yet.</p>
          )}
        </TabsContent>

        {patient.currentMedications && patient.currentMedications.length > 0 && (
          <TabsContent value="adherence" className="mt-4">
            <div className="space-y-4">
              {patient.currentMedications.map(med => {
                const adherencePercentage = getAdherenceForMedication(med.id);
                const adherenceColor = adherencePercentage >= 80 ? 'text-green-600' : adherencePercentage >= 50 ? 'text-yellow-600' : 'text-red-600';

                return (
                  <Card key={med.id} className="overflow-hidden">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg">{med.name}</CardTitle>
                          <CardDescription>{med.dosage} - {med.frequency}</CardDescription>
                        </div>
                        <div className="text-right">
                          <div className={`text-3xl font-bold ${adherenceColor}`}>{adherencePercentage}%</div>
                          <p className="text-xs text-gray-500">30-day adherence</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full transition-all ${
                              adherencePercentage >= 80 ? 'bg-green-600' :
                              adherencePercentage >= 50 ? 'bg-yellow-600' :
                              'bg-red-600'
                            }`}
                            style={{ width: `${adherencePercentage}%` }}
                          />
                        </div>

                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 bg-green-50 border-green-300 hover:bg-green-100"
                            onClick={() => {
                              addAdherenceEntry(med.id, true);
                              toast({
                                title: 'Marked as taken',
                                description: `${med.name} marked as taken today.`
                              });
                            }}
                          >
                            <Check className="h-4 w-4 mr-2" /> Taken Today
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 bg-red-50 border-red-300 hover:bg-red-100"
                            onClick={() => {
                              addAdherenceEntry(med.id, false);
                              toast({
                                title: 'Marked as missed',
                                description: `${med.name} marked as missed today.`
                              });
                            }}
                          >
                            <X className="h-4 w-4 mr-2" /> Missed Today
                          </Button>
                        </div>

                        <div className="text-xs text-gray-600 bg-blue-50 p-2 rounded">
                          <div className="flex items-center gap-1 mb-1">
                            <TrendingUp className="h-3 w-3" />
                            <span className="font-semibold">Adherence Trend</span>
                          </div>
                          <p>Click "Taken Today" or "Missed Today" to log today's adherence. Adherence is calculated based on the last 30 days of tracking.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        )}

        {isPersonalView && patient.currentMedications && patient.currentMedications.length > 0 && (
          <TabsContent value="reminders" className="mt-4">
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Bell className="h-5 w-5 text-blue-600" />
                      <CardTitle>Medication Reminders</CardTitle>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => {
                        requestNotificationPermission();
                        setShowReminderForm(!showReminderForm);
                      }}
                    >
                      <Plus className="h-4 w-4 mr-2" /> New Reminder
                    </Button>
                  </div>
                </CardHeader>
                {showReminderForm && (
                  <CardContent>
                    <div className="space-y-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Medication</label>
                        <select
                          value={selectedMedicationForReminder}
                          onChange={(e) => setSelectedMedicationForReminder(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        >
                          <option value="">Select a medication</option>
                          {patient.currentMedications?.map(med => (
                            <option key={med.id} value={med.id}>
                              {med.name} ({med.dosage})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Time</label>
                          <input
                            type="time"
                            value={reminderForm.time}
                            onChange={(e) => setReminderForm({...reminderForm, time: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-1">Frequency</label>
                          <select
                            value={reminderForm.frequency}
                            onChange={(e) => setReminderForm({...reminderForm, frequency: e.target.value as any})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          >
                            <option value="once">Once</option>
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                          </select>
                        </div>
                      </div>

                      {reminderForm.frequency === 'weekly' && (
                        <div>
                          <label className="block text-sm font-medium mb-2">Days of Week</label>
                          <div className="flex flex-wrap gap-2">
                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                              <button
                                key={index}
                                onClick={() => {
                                  const newDays = reminderForm.daysOfWeek.includes(index)
                                    ? reminderForm.daysOfWeek.filter(d => d !== index)
                                    : [...reminderForm.daysOfWeek, index];
                                  setReminderForm({...reminderForm, daysOfWeek: newDays});
                                }}
                                className={`px-3 py-2 rounded text-sm font-medium transition ${
                                  reminderForm.daysOfWeek.includes(index)
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                              >
                                {day}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      <div>
                        <label className="block text-sm font-medium mb-1">Notes</label>
                        <textarea
                          placeholder="Any additional notes..."
                          value={reminderForm.notes}
                          onChange={(e) => setReminderForm({...reminderForm, notes: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          rows={2}
                        />
                      </div>

                      <div className="flex gap-2">
                        <Button
                          onClick={() => {
                            if (!selectedMedicationForReminder) {
                              toast({title: 'Error', description: 'Please select a medication'});
                              return;
                            }

                            const selectedMed = patient.currentMedications?.find(m => m.id === selectedMedicationForReminder);
                            if (selectedMed) {
                              addReminder({
                                medicationId: selectedMedicationForReminder,
                                medicationName: selectedMed.name,
                                patientId: patient.id,
                                time: reminderForm.time,
                                frequency: reminderForm.frequency,
                                daysOfWeek: reminderForm.frequency === 'weekly' ? reminderForm.daysOfWeek : undefined,
                                enabled: true,
                                notes: reminderForm.notes
                              });
                              setReminderForm({time: '09:00', frequency: 'daily', daysOfWeek: [0,1,2,3,4,5,6], notes: ''});
                              setSelectedMedicationForReminder('');
                              setShowReminderForm(false);
                              toast({title: 'Reminder created', description: 'Medication reminder has been set up.'});
                            }
                          }}
                          size="sm"
                        >
                          <Check className="h-4 w-4 mr-2" /> Create Reminder
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => setShowReminderForm(false)}
                          size="sm"
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Active Reminders
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {getRemindersForPatient(patient.id).length > 0 ? (
                    <div className="space-y-3">
                      {getRemindersForPatient(patient.id).map(reminder => (
                        <div key={reminder.id} className="border rounded-lg p-3 bg-gray-50">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <p className="font-medium">{reminder.medicationName}</p>
                              <p className="text-sm text-gray-600">{reminder.time} • {reminder.frequency}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => updateReminder(reminder.id, {enabled: !reminder.enabled})}
                                className={`px-3 py-1 rounded text-sm font-medium transition ${
                                  reminder.enabled
                                    ? 'bg-green-100 text-green-700'
                                    : 'bg-gray-200 text-gray-700'
                                }`}
                              >
                                {reminder.enabled ? 'On' : 'Off'}
                              </button>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => {
                                  deleteReminder(reminder.id);
                                  toast({title: 'Reminder deleted'});
                                }}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          {reminder.frequency === 'weekly' && reminder.daysOfWeek && (
                            <div className="text-xs text-gray-600 mb-1">
                              Days: {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
                                .filter((_, i) => reminder.daysOfWeek?.includes(i))
                                .join(', ')}
                            </div>
                          )}
                          {reminder.notes && (
                            <p className="text-xs text-gray-600 italic">{reminder.notes}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-gray-500 py-4">No reminders set up yet. Click "New Reminder" to get started.</p>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        )}

        {!isPersonalView && (
          <TabsContent value="referrals" className="mt-4">
            <div className="flex justify-end mb-4">
              <Button size="sm" onClick={onAddReferral}><Plus className="h-4 w-4 mr-2" />{t('common.add')} {t('pages.records.referrals')}</Button>
            </div>
            {(patient.referrals && patient.referrals.length > 0) ? (
              patient.referrals.map(referral => (
                <Card key={referral.id} className="mb-4">
                  <CardHeader>
                    <CardTitle>{t('pages.records.referralTo')} {referral.referredTo}</CardTitle>
                    <CardDescription>{new Date(referral.date).toLocaleDateString()}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p><strong>{t('pages.records.reason')}</strong> {referral.reason}</p>
                    {referral.notes && <p><strong>{t('common.notes')}:</strong> {referral.notes}</p>}
                    <Button size="sm" variant="destructive" className="mt-2" onClick={() => handleDelete(deleteReferral, patient.id, referral.id)}>
                      <Trash2 className="h-4 w-4 mr-2" /> {t('pages.records.deleteReferral')}
                    </Button>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="text-center text-gray-500 py-4">No referrals recorded yet.</p>
            )}
          </TabsContent>
        )}

        <TabsContent value="vitals" className="mt-4">
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-600" />
                    <CardTitle>Record Vital Signs</CardTitle>
                  </div>
                  <Button
                    size="sm"
                    onClick={() => setShowVitalForm(!showVitalForm)}
                  >
                    <Plus className="h-4 w-4 mr-2" /> New Entry
                  </Button>
                </div>
              </CardHeader>
              {showVitalForm && (
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Temperature (°C)</label>
                      <input
                        type="number"
                        step="0.1"
                        placeholder="36.5"
                        value={vitalForm.temperature}
                        onChange={(e) => setVitalForm({...vitalForm, temperature: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Heart Rate (bpm)</label>
                      <input
                        type="number"
                        placeholder="70"
                        value={vitalForm.heartRate}
                        onChange={(e) => setVitalForm({...vitalForm, heartRate: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Blood Pressure (mmHg)</label>
                      <input
                        type="text"
                        placeholder="120/80"
                        value={vitalForm.bloodPressure}
                        onChange={(e) => setVitalForm({...vitalForm, bloodPressure: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Respiratory Rate (breaths/min)</label>
                      <input
                        type="number"
                        placeholder="16"
                        value={vitalForm.respiratoryRate}
                        onChange={(e) => setVitalForm({...vitalForm, respiratoryRate: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Oxygen Saturation (%)</label>
                      <input
                        type="number"
                        placeholder="98"
                        min="0"
                        max="100"
                        value={vitalForm.oxygenSaturation}
                        onChange={(e) => setVitalForm({...vitalForm, oxygenSaturation: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Weight (kg)</label>
                      <input
                        type="number"
                        step="0.1"
                        placeholder="70"
                        value={vitalForm.weight}
                        onChange={(e) => setVitalForm({...vitalForm, weight: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-1">Notes</label>
                      <textarea
                        placeholder="Any additional notes..."
                        value={vitalForm.notes}
                        onChange={(e) => setVitalForm({...vitalForm, notes: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        rows={3}
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => {
                        const entry: any = {};
                        if (vitalForm.temperature) entry.temperature = parseFloat(vitalForm.temperature);
                        if (vitalForm.heartRate) entry.heartRate = parseInt(vitalForm.heartRate);
                        if (vitalForm.bloodPressure) entry.bloodPressure = vitalForm.bloodPressure;
                        if (vitalForm.respiratoryRate) entry.respiratoryRate = parseInt(vitalForm.respiratoryRate);
                        if (vitalForm.oxygenSaturation) entry.oxygenSaturation = parseInt(vitalForm.oxygenSaturation);
                        if (vitalForm.weight) entry.weight = parseFloat(vitalForm.weight);
                        if (vitalForm.notes) entry.notes = vitalForm.notes;

                        addVitalEntry(patient.id, entry);
                        setVitalForm({temperature: '', heartRate: '', bloodPressure: '', respiratoryRate: '', oxygenSaturation: '', weight: '', notes: ''});
                        setShowVitalForm(false);
                        toast({title: 'Vital signs recorded', description: 'New vital signs entry has been saved.'});
                      }}
                      size="sm"
                    >
                      <Check className="h-4 w-4 mr-2" /> Save Entry
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setShowVitalForm(false)}
                      size="sm"
                    >
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              )}
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Vital Signs History (Last 30 Days)
                </CardTitle>
              </CardHeader>
              <CardContent>
                {getPatientVitals(patient.id).length > 0 ? (
                  <div className="space-y-3">
                    {getPatientVitals(patient.id).reverse().map(vital => (
                      <div key={vital.id} className="border rounded-lg p-3 bg-gray-50">
                        <div className="flex justify-between items-start mb-2">
                          <div className="text-sm text-gray-600">
                            {new Date(vital.date).toLocaleString()}
                          </div>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => {
                              deleteVitalEntry(vital.id);
                              toast({title: 'Entry deleted'});
                            }}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                          {vital.temperature && (
                            <div>
                              <span className="text-gray-600">Temp:</span>
                              <span className="font-medium ml-1">{vital.temperature}°C</span>
                            </div>
                          )}
                          {vital.heartRate && (
                            <div>
                              <span className="text-gray-600">HR:</span>
                              <span className="font-medium ml-1">{vital.heartRate} bpm</span>
                            </div>
                          )}
                          {vital.bloodPressure && (
                            <div>
                              <span className="text-gray-600">BP:</span>
                              <span className="font-medium ml-1">{vital.bloodPressure}</span>
                            </div>
                          )}
                          {vital.respiratoryRate && (
                            <div>
                              <span className="text-gray-600">RR:</span>
                              <span className="font-medium ml-1">{vital.respiratoryRate} br/min</span>
                            </div>
                          )}
                          {vital.oxygenSaturation && (
                            <div>
                              <span className="text-gray-600">O₂:</span>
                              <span className="font-medium ml-1">{vital.oxygenSaturation}%</span>
                            </div>
                          )}
                          {vital.weight && (
                            <div>
                              <span className="text-gray-600">Weight:</span>
                              <span className="font-medium ml-1">{vital.weight} kg</span>
                            </div>
                          )}
                        </div>
                        {vital.notes && (
                          <p className="text-xs text-gray-600 mt-2 italic">{vital.notes}</p>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-gray-500 py-4">No vital signs recorded yet. Click "New Entry" to start tracking.</p>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="attachments" className="mt-4">
          <div className="flex justify-end mb-4">
            <Button size="sm" onClick={onAddAttachment}><Plus className="h-4 w-4 mr-2" />{t('common.add')} {t('pages.records.files')}</Button>
          </div>
          {(patient.attachments && patient.attachments.length > 0) ? (
            patient.attachments.map(attachment => (
              <Card key={attachment.id} className="mb-4">
                <CardHeader>
                  <CardTitle>{attachment.name}</CardTitle>
                  <CardDescription>{attachment.type}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(deleteAttachment, patient.id, attachment.id)}>
                    <Trash2 className="h-4 w-4 mr-2" /> {t('pages.records.deleteAttachment')}
                  </Button>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-center text-gray-500 py-4">No files attached yet.</p>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
