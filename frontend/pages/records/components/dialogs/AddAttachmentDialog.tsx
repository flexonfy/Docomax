import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../../../contexts/LanguageContext';
import { Attachment } from '../../../../contexts/PatientRecordsContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

interface AddAttachmentDialogProps {
  isOpen: boolean;
  onClose: () => void;
  patientId: string;
  addAttachment: (patientId: string, attachment: Omit<Attachment, 'id'>) => void;
}

const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf', 'text/plain', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export default function AddAttachmentDialog({ isOpen, onClose, patientId, addAttachment }: AddAttachmentDialogProps) {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [newAttachment, setNewAttachment] = useState({
    name: '',
    type: 'document' as 'image' | 'document' | 'xray' | 'report',
    description: '',
    file: null as File | null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [fileErrors, setFileErrors] = useState<string[]>([]);

  useEffect(() => {
    if (!isOpen) {
      setNewAttachment({ name: '', type: 'document', description: '', file: null });
      setFileErrors([]);
      setIsLoading(false);
    }
  }, [isOpen]);

  const validateFile = (file: File): string[] => {
    const errors: string[] = [];

    if (file.size > MAX_FILE_SIZE) {
      errors.push(`File size must be less than 10MB (current: ${(file.size / 1024 / 1024).toFixed(2)}MB)`);
    }

    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      errors.push('File type not allowed. Please upload an image, PDF, text, or Word document.');
    }

    return errors;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;

    if (file) {
      const errors = validateFile(file);
      setFileErrors(errors);

      if (errors.length === 0) {
        setNewAttachment(p => ({ ...p, file }));
      } else {
        setNewAttachment(p => ({ ...p, file: null }));
      }
    }
  };

  const handleSave = () => {
    if (!patientId || !newAttachment.name || !newAttachment.file) {
      toast({ title: t('common.error'), description: t('common.pleaseFillFields'), variant: "destructive" });
      return;
    }

    if (fileErrors.length > 0) {
      toast({ title: t('common.error'), description: 'Please fix file errors', variant: "destructive" });
      return;
    }

    setIsLoading(true);
    const reader = new FileReader();
    reader.readAsDataURL(newAttachment.file);
    reader.onload = () => {
      addAttachment(patientId, {
        name: newAttachment.name,
        type: newAttachment.type,
        date: new Date(),
        description: newAttachment.description,
        fileData: reader.result as string,
      });
      onClose();
      toast({ title: t('common.success'), description: 'Attachment added successfully' });
      setIsLoading(false);
    };
    reader.onerror = () => {
      toast({ title: t('common.error'), description: 'Failed to read file', variant: "destructive" });
      setIsLoading(false);
    };
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t('common.add')} {t('pages.records.files')}</DialogTitle>
          <DialogDescription>{t('pages.records.addAttachmentDesc')}</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div>
            <Label htmlFor="attachmentName">File Name</Label>
            <Input id="attachmentName" value={newAttachment.name} onChange={(e) => setNewAttachment(p => ({...p, name: e.target.value}))} disabled={isLoading} />
          </div>
          <div>
            <Label htmlFor="attachmentType">File Type</Label>
            <Select value={newAttachment.type} onValueChange={(v: any) => setNewAttachment(p => ({...p, type: v}))} disabled={isLoading}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="document">Document</SelectItem>
                <SelectItem value="image">Image</SelectItem>
                <SelectItem value="xray">X-Ray</SelectItem>
                <SelectItem value="report">Report</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="attachmentFile">Upload File</Label>
            <Input id="attachmentFile" type="file" onChange={handleFileChange} disabled={isLoading} />
            {fileErrors.length > 0 && (
              <div className="mt-2 text-sm text-red-600 space-y-1">
                {fileErrors.map((error, idx) => (
                  <p key={idx} className="error-message">{error}</p>
                ))}
              </div>
            )}
            {newAttachment.file && fileErrors.length === 0 && (
              <p className="mt-2 text-sm text-green-600 success-message">File selected: {newAttachment.file.name}</p>
            )}
          </div>
          <div>
            <Label htmlFor="attachmentDesc">Description</Label>
            <Textarea id="attachmentDesc" value={newAttachment.description} onChange={(e) => setNewAttachment(p => ({...p, description: e.target.value}))} disabled={isLoading} />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose} disabled={isLoading}>{t('common.cancel')}</Button>
          <Button onClick={handleSave} disabled={isLoading || !newAttachment.file || fileErrors.length > 0}>
            {isLoading ? 'Processing...' : t('common.save')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
