import React, { useEffect } from 'react';
import { useLanguage } from '../../../../contexts/LanguageContext';
import { PatientRecord } from '../../../../contexts/PatientRecordsContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { useFormValidation } from '../../../../lib/hooks/useFormValidation';
import { validators, validateAge } from '../../../../lib/validation';

interface AddPatientDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (patient: Omit<PatientRecord, 'id' | 'visits' | 'vaccinations' | 'labResults' | 'attachments' | 'referrals' | 'currentMedications' | 'createdAt' | 'updatedAt'>) => void;
}

export default function AddPatientDialog({ isOpen, onClose, onSave }: AddPatientDialogProps) {
  const { t } = useLanguage();
  const { toast } = useToast();

  const initialValues = {
    name: '',
    age: '',
    gender: 'male' as 'male' | 'female',
    phone: '',
    emergencyContact: '',
    emergencyContactPhone: '',
    address: '',
    bloodType: '',
    allergies: '',
    chronicConditions: '',
    insuranceInfo: '',
    occupation: '',
    maritalStatus: 'single' as 'single' | 'married' | 'divorced' | 'widowed',
    nextOfKin: ''
  };

  const validationRules = {
    name: [
      (value) => validators.required(value, t('common.name')),
      (value) => validators.minLength(2)(value, t('common.name'))
    ],
    age: [
      (value) => validators.required(value, t('common.age')),
      validateAge
    ],
    phone: [
      (value) => value ? validators.phone(value, t('common.phone')) : null
    ],
    emergencyContactPhone: [
      (value) => value ? validators.phone(value, t('pages.records.emergencyContactPhone')) : null
    ]
  };

  const { values, errors, isSubmitting, handleChange, handleSubmit, reset, getFieldError } = useFormValidation({
    initialValues,
    validationRules,
    onSubmit: async (formData) => {
      onSave({
        name: formData.name,
        age: parseInt(formData.age),
        gender: formData.gender,
        phone: formData.phone || undefined,
        emergencyContact: formData.emergencyContact || undefined,
        emergencyContactPhone: formData.emergencyContactPhone || undefined,
        address: formData.address || undefined,
        bloodType: formData.bloodType || undefined,
        allergies: formData.allergies ? formData.allergies.split(',').map((a: string) => a.trim()) : undefined,
        chronicConditions: formData.chronicConditions ? formData.chronicConditions.split(',').map((c: string) => c.trim()) : undefined,
        insuranceInfo: formData.insuranceInfo || undefined,
        occupation: formData.occupation || undefined,
        maritalStatus: formData.maritalStatus,
        nextOfKin: formData.nextOfKin || undefined,
      });

      toast({ title: t('common.success'), description: t('pages.records.patientAdded') });
      onClose();
      reset();
    }
  });

  useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [isOpen, reset]);

  const getFieldErrorClass = (fieldName: string) => {
    const error = getFieldError(fieldName);
    return error ? 'border-red-500' : '';
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-white/95 backdrop-blur-sm max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{t('pages.records.addPatient')}</DialogTitle>
          <DialogDescription>{t('pages.records.addPatientDesc')}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit()}>
          <div className="space-y-4 py-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">{t('common.name')} *</Label>
                <Input
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  placeholder={t('pages.records.enterPatientName')}
                  className={getFieldErrorClass('name')}
                />
                {getFieldError('name') && (
                  <p className="text-red-500 text-sm mt-1">{getFieldError('name')}</p>
                )}
              </div>
              <div>
                <Label htmlFor="age">{t('common.age')} *</Label>
                <Input
                  id="age"
                  name="age"
                  type="number"
                  value={values.age}
                  onChange={handleChange}
                  placeholder={t('common.age')}
                  className={getFieldErrorClass('age')}
                />
                {getFieldError('age') && (
                  <p className="text-red-500 text-sm mt-1">{getFieldError('age')}</p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label>{t('pages.triage.gender')}</Label>
                <Select value={values.gender} onValueChange={(value: 'male' | 'female') => {
                  const event = { target: { name: 'gender', value } } as any;
                  handleChange(event);
                }}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">{t('common.male')}</SelectItem>
                    <SelectItem value="female">{t('common.female')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="bloodType">{t('common.bloodType')}</Label>
                <Select value={values.bloodType} onValueChange={(value) => {
                  const event = { target: { name: 'bloodType', value } } as any;
                  handleChange(event);
                }}>
                  <SelectTrigger><SelectValue placeholder={t('pages.records.selectBloodType')} /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="A+">A+</SelectItem><SelectItem value="A-">A-</SelectItem><SelectItem value="B+">B+</SelectItem><SelectItem value="B-">B-</SelectItem><SelectItem value="AB+">AB+</SelectItem><SelectItem value="AB-">AB-</SelectItem><SelectItem value="O+">O+</SelectItem><SelectItem value="O-">O-</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">{t('common.phone')}</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  placeholder={t('pages.records.phoneNumber')}
                  className={getFieldErrorClass('phone')}
                />
                {getFieldError('phone') && (
                  <p className="text-red-500 text-sm mt-1">{getFieldError('phone')}</p>
                )}
              </div>
              <div>
                <Label htmlFor="occupation">{t('pages.records.occupation')}</Label>
                <Input
                  id="occupation"
                  name="occupation"
                  value={values.occupation}
                  onChange={handleChange}
                  placeholder={t('pages.records.occupation')}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="address">{t('address')}</Label>
              <Input
                id="address"
                name="address"
                value={values.address}
                onChange={handleChange}
                placeholder={t('pages.records.fullAddress')}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="emergency">{t('pages.records.emergencyContact')}</Label>
                <Input
                  id="emergency"
                  name="emergencyContact"
                  value={values.emergencyContact}
                  onChange={handleChange}
                  placeholder={t('pages.records.emergencyContactName')}
                />
              </div>
              <div>
                <Label htmlFor="emergencyPhone">{t('pages.records.emergencyContactPhone')}</Label>
                <Input
                  id="emergencyPhone"
                  name="emergencyContactPhone"
                  value={values.emergencyContactPhone}
                  onChange={handleChange}
                  placeholder={t('pages.records.emergencyContactPhone')}
                  className={getFieldErrorClass('emergencyContactPhone')}
                />
                {getFieldError('emergencyContactPhone') && (
                  <p className="text-red-500 text-sm mt-1">{getFieldError('emergencyContactPhone')}</p>
                )}
              </div>
            </div>
            <div>
              <Label htmlFor="allergies">{t('common.allergies')} ({t('common.commaSeparated')})</Label>
              <Input
                id="allergies"
                name="allergies"
                value={values.allergies}
                onChange={handleChange}
                placeholder={t('pages.records.allergiesPlaceholder')}
              />
            </div>
            <div>
              <Label htmlFor="chronicConditions">{t('pages.records.chronicConditions')}</Label>
              <Input
                id="chronicConditions"
                name="chronicConditions"
                value={values.chronicConditions}
                onChange={handleChange}
                placeholder={t('pages.records.chronicPlaceholder')}
              />
            </div>
            <div>
              <Label htmlFor="insurance">{t('pages.records.insuranceInfo')}</Label>
              <Input
                id="insurance"
                name="insuranceInfo"
                value={values.insuranceInfo}
                onChange={handleChange}
                placeholder={t('pages.records.insurancePlaceholder')}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>{t('common.cancel')}</Button>
            <Button type="submit" disabled={isSubmitting}>{isSubmitting ? t('common.saving') : t('common.save')}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
