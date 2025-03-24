
export interface FormData {
  age: string;
  education: string;
  workExperience: string;
  language: string;
  frenchLevel?: string;
  englishLevel?: string;
  familyInCanada: boolean;
  quebec: boolean;
  jobOffer: boolean;
  studyInCanada: boolean;
  businessExperience: boolean;
  netWorth: string;
}

export interface Scores {
  expressEntry: number;
  pnp: number;
  quebec: number;
  businessImmigration: number;
  studyPathway: number;
}

export const calculateResults = (data: FormData): Scores => {
  let expressEntryScore = 0;
  let pnpScore = 0;
  let quebecScore = 0;
  let businessScore = 0;
  let studyScore = 0;
  
  const age = parseInt(data.age);
  if (age >= 18 && age <= 35) {
    expressEntryScore += 25;
    pnpScore += 20;
    quebecScore += 25;
  } else if (age > 35 && age <= 45) {
    expressEntryScore += 15;
    pnpScore += 15;
    quebecScore += 15;
  } else if (age > 45) {
    expressEntryScore += 5;
    pnpScore += 10;
    quebecScore += 5;
  }
  
  if (data.education === "phd") {
    expressEntryScore += 25;
    pnpScore += 25;
    quebecScore += 25;
    studyScore += 10;
  } else if (data.education === "masters") {
    expressEntryScore += 23;
    pnpScore += 23;
    quebecScore += 23;
    studyScore += 8;
  } else if (data.education === "bachelors") {
    expressEntryScore += 20;
    pnpScore += 20;
    quebecScore += 20;
    studyScore += 6;
  } else if (data.education === "diploma") {
    expressEntryScore += 15;
    pnpScore += 18;
    quebecScore += 15;
    studyScore += 4;
  }
  
  if (data.workExperience === "more5") {
    expressEntryScore += 15;
    pnpScore += 15;
    quebecScore += 15;
    businessScore += 20;
  } else if (data.workExperience === "three5") {
    expressEntryScore += 13;
    pnpScore += 13;
    quebecScore += 13;
    businessScore += 15;
  } else if (data.workExperience === "one3") {
    expressEntryScore += 10;
    pnpScore += 10;
    quebecScore += 10;
    businessScore += 5;
  }
  
  if (data.language === "both") {
    expressEntryScore += 20;
    pnpScore += 15;
    quebecScore += 25;
  } else if (data.language === "english") {
    expressEntryScore += 18;
    pnpScore += 15;
    quebecScore += 5;
  } else if (data.language === "french") {
    expressEntryScore += 10;
    pnpScore += 10;
    quebecScore += 20;
  }
  
  if (data.familyInCanada) {
    expressEntryScore += 5;
    pnpScore += 10;
  }
  
  if (data.quebec) {
    quebecScore += 15;
  }
  
  if (data.jobOffer) {
    expressEntryScore += 10;
    pnpScore += 20;
  }
  
  if (data.studyInCanada) {
    expressEntryScore += 10;
    pnpScore += 10;
    quebecScore += 10;
    studyScore += 25;
  }
  
  if (data.businessExperience) {
    businessScore += 25;
  }
  
  const netWorth = parseInt(data.netWorth || "0");
  if (netWorth >= 300000) {
    businessScore += 20;
  } else if (netWorth >= 150000) {
    businessScore += 10;
  }
  
  const normalizeScore = (score: number, maxPossible: number) => 
    Math.min(Math.round((score / maxPossible) * 100), 100);
  
  return {
    expressEntry: normalizeScore(expressEntryScore, 100),
    pnp: normalizeScore(pnpScore, 100),
    quebec: normalizeScore(quebecScore, 100),
    businessImmigration: normalizeScore(businessScore, 100),
    studyPathway: normalizeScore(studyScore, 100),
  };
};
