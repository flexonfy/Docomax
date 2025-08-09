import React, { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { bodyPartSymptoms } from '../../../data/symptomBodyMap';
import { useLanguage } from '../../../contexts/LanguageContext';

interface BodyMapProps {
  onSymptomSelect: (symptom: string) => void;
}

export default function BodyMap({ onSymptomSelect }: BodyMapProps) {
  const { language } = useLanguage();
  const [activePart, setActivePart] = useState<string | null>(null);

  const handlePartClick = (part: string) => {
    setActivePart(part);
  };

  const BodyPart = ({ id, d, label, x, y }: { id: string, d: string, label: string, x: number, y: number }) => (
    <Popover onOpenChange={(open) => !open && setActivePart(null)}>
      <PopoverTrigger asChild>
        <g>
          <path
            id={id}
            d={d}
            className="fill-blue-200/50 stroke-blue-400 stroke-2 hover:fill-blue-400/50 transition-all cursor-pointer"
            onClick={() => handlePartClick(id)}
          />
          <text x={x} y={y} className="text-xs font-semibold fill-gray-700 pointer-events-none" textAnchor="middle">{label}</text>
        </g>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="space-y-2">
          <h4 className="font-medium leading-none">{label} Symptoms</h4>
          <div className="max-h-48 overflow-y-auto">
            {(bodyPartSymptoms[id]?.[language] || []).map((symptom) => (
              <Button
                key={symptom}
                variant="ghost"
                size="sm"
                className="w-full justify-start"
                onClick={() => onSymptomSelect(symptom)}
              >
                {symptom}
              </Button>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );

  return (
    <div className="w-full flex justify-center">
      <svg viewBox="0 0 200 400" className="max-w-xs">
        <g id="body">
          <BodyPart id="head" d="M80,20 A20,25 0 1,1 120,20 L120,45 A20,25 0 1,1 80,45 Z" label="Head" x={100} y={35} />
          <BodyPart id="chest" d="M70,50 L130,50 L130,120 L70,120 Z" label="Chest" x={100} y={85} />
          <BodyPart id="abdomen" d="M75,120 L125,120 L125,180 L75,180 Z" label="Abdomen" x={100} y={150} />
          <BodyPart id="pelvis" d="M75,180 L125,180 L120,200 L80,200 Z" label="Pelvis" x={100} y={190} />
          {/* Arms */}
          <BodyPart id="arms" d="M50,55 L70,55 L70,150 L50,150 Z M130,55 L150,55 L150,150 L130,150 Z" label="Arms" x={60} y={100} />
          {/* Legs */}
          <BodyPart id="legs" d="M80,200 L100,200 L100,350 L80,350 Z M100,200 L120,200 L120,350 L100,350 Z" label="Legs" x={100} y={275} />
        </g>
      </svg>
    </div>
  );
}
