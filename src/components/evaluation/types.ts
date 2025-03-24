
export interface PreEvaluationFormProps {
  onClose: () => void;
}

export interface EligibilityResult {
  isEligible: boolean | 'maybe';
  message: string;
  programs: {
    expressEntry: boolean;
    pnp: boolean;
    quebec: boolean;
    businessImmigration: boolean;
    studyPathway: boolean;
  };
}

export type EvaluationStep = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface FormData {
  age: string;
  education: string;
  workExperience: string;
  languageFrench: string;
  languageEnglish: string;
  jobOffer: boolean;
  familyInCanada: boolean;
  projectInCanada: string[];
}
