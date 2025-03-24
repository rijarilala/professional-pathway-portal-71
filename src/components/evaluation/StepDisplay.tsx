
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import AgeStep from './steps/AgeStep';
import EducationStep from './steps/EducationStep';
import WorkExperienceStep from './steps/WorkExperienceStep';
import LanguageStep from './steps/LanguageStep';
import AdditionalInfoStep1 from './steps/AdditionalInfoStep1';
import AdditionalInfoStep2 from './steps/AdditionalInfoStep2';
import FinalizeStep from './steps/FinalizeStep';
import { EvaluationStep } from './types';

interface StepDisplayProps {
  step: EvaluationStep;
  form: UseFormReturn<any>;
  language: {
    steps: {
      age: {
        title: string;
        labels: {
          under18: string;
          age1825: string;
          age2635: string;
          age3645: string;
          age4655: string;
          over55: string;
          years: string;
        };
      };
      education: {
        title: string;
        labels: {
          highSchool: string;
          diploma: string;
          bachelors: string;
          masters: string;
          phd: string;
        };
      };
      workExperience: {
        title: string;
        labels: {
          none: string;
          lessThanOne: string;
          oneToThree: string;
          threeToFive: string;
          moreThanFive: string;
        };
      };
      language: {
        title: string;
        labels: {
          englishOnly: string;
          frenchOnly: string;
          both: string;
          neither: string;
        };
      };
      additionalInfo1: {
        title: string;
        labels: {
          family: {
            label: string;
            description: string;
          };
          quebec: {
            label: string;
          };
          jobOffer: {
            label: string;
          };
        };
      };
      additionalInfo2: {
        title: string;
        labels: {
          study: {
            label: string;
          };
          business: {
            label: string;
          };
          netWorth: {
            label: string;
            description: string;
            options: {
              less50k: string;
              from50kTo150k: string;
              from150kTo300k: string;
              from300kTo500k: string;
              more500k: string;
            };
          };
        };
      };
      finalize: {
        title: string;
        description: string;
        disclaimer: string;
      };
    };
  };
}

const StepDisplay: React.FC<StepDisplayProps> = ({ step, form, language }) => {
  switch (step) {
    case 1:
      return <AgeStep form={form} />;
    case 2:
      return <EducationStep form={form} />;
    case 3:
      return <WorkExperienceStep form={form} />;
    case 4:
      return <LanguageStep form={form} />;
    case 5:
      return <AdditionalInfoStep1 form={form} />;
    case 6:
      return <AdditionalInfoStep2 form={form} />;
    case 7:
      return <FinalizeStep 
        title={language.steps.finalize.title} 
        description={language.steps.finalize.description} 
        disclaimer={language.steps.finalize.disclaimer} 
      />;
    default:
      return null;
  }
};

export default StepDisplay;
