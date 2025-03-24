
export interface PreEvaluationFormProps {
  onClose: () => void;
}

export interface ResultScores {
  expressEntry: number;
  pnp: number;
  quebec: number;
  businessImmigration: number;
  studyPathway: number;
}

export type EvaluationStep = 1 | 2 | 3 | 4 | 5 | 6 | 7;
