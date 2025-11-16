import { ComprehensiveDisease } from './diseases/types';
import { cardiovascularDiseases } from './diseases/cardiovascular';
import { chronicDiseases } from './diseases/chronic';
import { digestiveDiseases } from './diseases/digestive';
import { endocrineDiseases } from './diseases/endocrine';
import { geneticDiseases } from './diseases/genetic';
import { infectiousDiseases } from './diseases/infectious';
import { maternalDiseases } from './diseases/maternal';
import { mentalDiseases } from './diseases/mental';
import { neurologicalDiseases } from './diseases/neurological';
import { pediatricDiseases } from './diseases/pediatric';
import { respiratoryDiseases } from './diseases/respiratory';
import { skinDiseases } from './diseases/skin';
import { autoimmuneDiseases } from './diseases/autoimmune';
import { oncologicalDiseases } from './diseases/oncological';
import { hematologicDiseases } from './diseases/hematologic';
import { genitourinaryDiseases } from './diseases/genitourinary';
import { entDiseases } from './diseases/ent';
import { ophthalmologicalDiseases } from './diseases/ophthalmological';
import { musculoskeletalDiseases } from './diseases/musculoskeletal';
import { urologicalDiseases } from './diseases/urological';
import { metabolicDiseases } from './diseases/metabolic';
import { tropicalDiseases } from './diseases/tropical';
import { rareGeneticDiseases } from './diseases/rare-genetic';
import { sleepDisorders } from './diseases/sleep-disorders';
import { painSyndromes } from './diseases/pain-syndromes';
import { occupationalDiseases } from './diseases/occupational';
import { inflammatoryDiseases } from './diseases/inflammatory';
import { expandedInfectiousDiseases } from './diseases/expanded-infectious';
import { nutritionalMetabolicDiseases } from './diseases/nutritional-metabolic';
import { mentalHealthExpanded } from './diseases/mental-expanded';
import { diverseConditions } from './diseases/diverse-conditions';
import { cancerOncologyDiseases } from './diseases/cancer-oncology';
import { emergencyAcuteDiseases } from './diseases/emergency-acute';
import { comprehensiveConditions } from './diseases/comprehensive-conditions';
import { cardiologyExpanded } from './diseases/cardiology-expanded';
import { megaConditions } from './diseases/mega-conditions';
import { neurologyFull } from './diseases/neurology-full';
import { gastroenterologyFull } from './diseases/gastroenterology-full';
import { respiratoryBulk } from './diseases/respiratory-bulk';
import { rheumatologyDiseases } from './diseases/rheumatology';
import { endocrinologyDiseases } from './diseases/endocrinology';
import { infectiousFullDiseases } from './diseases/infectious-full';
import { pediatricsFullDiseases } from './diseases/pediatrics-full';
import { dermatologyFullDiseases } from './diseases/dermatology-full';
import { ophthalmologyFullDiseases } from './diseases/ophthalmology-full';
import { psychiatryFullDiseases } from './diseases/psychiatry-full';
import { oncologyExpandedDiseases } from './diseases/oncology-expanded';
import { neurologyAdvancedDiseases } from './diseases/neurology-advanced';
import { cardiologyComplexDiseases } from './diseases/cardiology-complex';
import { gastroenterologyAdvancedDiseases } from './diseases/gastroenterology-advanced';
import { hematologyCompleteDiseases } from './diseases/hematology-complete';
import { immunologyCompleteDiseases } from './diseases/immunology-complete';
import { urologyCompleteDiseases } from './diseases/urology-complete';
import { pulmonaryCompleteDiseases } from './diseases/pulmonary-complete';
import { musculoskeletalCompleteDiseases } from './diseases/musculoskeletal-complete';
import { infectiousExpandedDiseases } from './diseases/infectious-expanded';
import { mixedConditionsMegaDiseases } from './diseases/mixed-conditions-mega';
import { endocrinologyMegaDiseases } from './diseases/endocrinology-mega';
import { geneticRareDiseases } from './diseases/genetic-rare-diseases';
import { metabolicNutritionalDiseases } from './diseases/metabolic-nutritional-disorders';
import { infectiousTropicalDiseases } from './diseases/infectious-tropical-diseases';
import { dermatologicalAdvancedDiseases } from './diseases/dermatological-advanced';
import { surgicalAcuteConditions } from './diseases/surgical-acute-conditions';
import { comprehensiveClinicalConditions } from './diseases/comprehensive-clinical-conditions';
import { oncologyHematologyCombined } from './diseases/oncology-hematology-combined';

export const comprehensiveDiseases: ComprehensiveDisease[] = [
  ...infectiousDiseases,
  ...respiratoryDiseases,
  ...cardiovascularDiseases,
  ...chronicDiseases,
  ...geneticDiseases,
  ...mentalDiseases,
  ...digestiveDiseases,
  ...neurologicalDiseases,
  ...skinDiseases,
  ...maternalDiseases,
  ...pediatricDiseases,
  ...endocrineDiseases,
  ...autoimmuneDiseases,
  ...oncologicalDiseases,
  ...hematologicDiseases,
  ...genitourinaryDiseases,
  ...entDiseases,
  ...ophthalmologicalDiseases,
  ...musculoskeletalDiseases,
  ...urologicalDiseases,
  ...metabolicDiseases,
  ...tropicalDiseases,
  ...rareGeneticDiseases,
  ...sleepDisorders,
  ...painSyndromes,
  ...occupationalDiseases,
  ...inflammatoryDiseases,
  ...expandedInfectiousDiseases,
  ...nutritionalMetabolicDiseases,
  ...mentalHealthExpanded,
  ...diverseConditions,
  ...cancerOncologyDiseases,
  ...emergencyAcuteDiseases,
  ...comprehensiveConditions,
  ...cardiologyExpanded,
  ...megaConditions,
  ...neurologyFull,
  ...gastroenterologyFull,
  ...respiratoryBulk,
  ...rheumatologyDiseases,
  ...endocrinologyDiseases,
  ...infectiousFullDiseases,
  ...pediatricsFullDiseases,
  ...dermatologyFullDiseases,
  ...ophthalmologyFullDiseases,
  ...psychiatryFullDiseases,
  ...oncologyExpandedDiseases,
  ...neurologyAdvancedDiseases,
  ...cardiologyComplexDiseases,
  ...gastroenterologyAdvancedDiseases,
  ...hematologyCompleteDiseases,
  ...immunologyCompleteDiseases,
  ...urologyCompleteDiseases,
  ...pulmonaryCompleteDiseases,
  ...musculoskeletalCompleteDiseases,
  ...infectiousExpandedDiseases,
  ...mixedConditionsMegaDiseases,
  ...endocrinologyMegaDiseases,
  ...geneticRareDiseases,
  ...metabolicNutritionalDiseases,
  ...infectiousTropicalDiseases,
  ...dermatologicalAdvancedDiseases,
  ...surgicalAcuteConditions,
  ...comprehensiveClinicalConditions,
  ...oncologyHematologyCombined,
];

const enSymptoms = new Set<string>();
const frSymptoms = new Set<string>();
const swSymptoms = new Set<string>();

comprehensiveDiseases.forEach(disease => {
  disease.symptoms.en.forEach(symptom => enSymptoms.add(symptom));
  disease.symptoms.fr.forEach(symptom => frSymptoms.add(symptom));
  disease.symptoms.sw.forEach(symptom => swSymptoms.add(symptom));
});

export const comprehensiveSymptoms = {
  en: Array.from(enSymptoms).sort(),
  fr: Array.from(frSymptoms).sort(),
  sw: Array.from(swSymptoms).sort()
};

export const categories = [...new Set(comprehensiveDiseases.map(d => d.category))].sort();
export const sources = [...new Set(comprehensiveDiseases.map(d => d.source))].sort();

export function searchComprehensiveDiseases(term: string): ComprehensiveDisease[] {
  const lowerCaseTerm = term.toLowerCase();
  if (!lowerCaseTerm) return comprehensiveDiseases;

  return comprehensiveDiseases.filter(disease => {
    // Search in name
    if (disease.name.en.toLowerCase().includes(lowerCaseTerm) ||
        disease.name.fr.toLowerCase().includes(lowerCaseTerm) ||
        disease.name.sw.toLowerCase().includes(lowerCaseTerm)) {
      return true;
    }

    // Search in symptoms
    if (disease.symptoms.en.some(s => s.toLowerCase().includes(lowerCaseTerm)) ||
        disease.symptoms.fr.some(s => s.toLowerCase().includes(lowerCaseTerm)) ||
        disease.symptoms.sw.some(s => s.toLowerCase().includes(lowerCaseTerm))) {
      return true;
    }
    
    // Search in category
    if (disease.category.toLowerCase().includes(lowerCaseTerm)) {
      return true;
    }

    return false;
  });
}
