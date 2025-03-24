
import { FormData, EligibilityResult } from '../types';

export const calculateEligibility = (data: FormData): EligibilityResult => {
  let score = 0;
  const result: EligibilityResult = {
    isEligible: false,
    message: '',
    programs: {
      expressEntry: false,
      pnp: false,
      quebec: false,
      businessImmigration: false,
      studyPathway: false
    }
  };

  // Age scoring
  if (data.age === '18-29') {
    score += 25;
  } else if (data.age === '30-39') {
    score += 20;
  } else if (data.age === '40-44') {
    score += 15;
  } else if (data.age === '45+') {
    score += 5;
  }

  // Education scoring
  if (data.education === 'master-phd') {
    score += 25;
    result.programs.expressEntry = true;
    result.programs.quebec = true;
  } else if (data.education === 'bachelor') {
    score += 20;
    result.programs.expressEntry = true;
  } else if (data.education === 'college') {
    score += 15;
  } else if (data.education === 'highschool') {
    score += 5;
  }

  // Work Experience scoring
  if (data.workExperience === '5+') {
    score += 25;
    result.programs.expressEntry = true;
    result.programs.pnp = true;
  } else if (data.workExperience === '4-5') {
    score += 20;
    result.programs.expressEntry = true;
  } else if (data.workExperience === '1-3') {
    score += 15;
  } else if (data.workExperience === 'less-than-1') {
    score += 5;
  }

  // Language scoring
  if (data.languageFrench === 'fluent') {
    score += 15;
    result.programs.quebec = true;
  } else if (data.languageFrench === 'intermediate') {
    score += 10;
  }

  if (data.languageEnglish === 'fluent') {
    score += 15;
    result.programs.expressEntry = true;
  } else if (data.languageEnglish === 'intermediate') {
    score += 10;
  }

  // Job offer
  if (data.jobOffer) {
    score += 20;
    result.programs.pnp = true;
  }

  // Family in Canada
  if (data.familyInCanada) {
    score += 10;
    result.programs.pnp = true;
  }

  // Project in Canada
  if (data.projectInCanada.includes('study')) {
    result.programs.studyPathway = true;
  }
  
  if (data.projectInCanada.includes('work')) {
    // Work permits are easier to get in some cases
    score += 5;
  }
  
  if (data.projectInCanada.includes('permanent')) {
    // Shows intent for permanent residence
    score += 5;
  }

  // Final eligibility determination
  if (score >= 60) {
    result.isEligible = true;
    result.message = "Vous semblez éligible à plusieurs programmes d'immigration. Découvrez les prochaines étapes !";
  } else if (score >= 40) {
    result.isEligible = 'maybe';
    result.message = "Votre profil pourrait convenir à certaines catégories, contactez-nous pour une analyse approfondie.";
  } else {
    result.isEligible = false;
    result.message = "Vous ne remplissez pas actuellement les critères, mais d'autres options peuvent être envisageables.";
  }

  return result;
};
