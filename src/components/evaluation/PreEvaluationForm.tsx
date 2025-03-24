
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Form } from "@/components/ui/form";

import StepHeader from "./StepHeader";
import NavigationButtons from "./NavigationButtons";
import ResultsView from "./ResultsView";
import AgeStep from "./steps/AgeStep";
import EducationStep from "./steps/EducationStep";
import WorkExperienceStep from "./steps/WorkExperienceStep";
import LanguageSkillsStep from "./steps/LanguageSkillsStep";
import JobAndFamilyStep from "./steps/JobAndFamilyStep";
import ProjectStep from "./steps/ProjectStep";
import { calculateEligibility } from "./utils/calculateEligibility";
import { PreEvaluationFormProps, EligibilityResult, FormData } from "./types";

const PreEvaluationForm: React.FC<PreEvaluationFormProps> = ({ onClose }) => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [results, setResults] = useState<EligibilityResult | null>(null);
  
  const totalSteps = 5;
  
  const form = useForm<FormData>({
    defaultValues: {
      age: "",
      education: "",
      workExperience: "",
      languageFrench: "",
      languageEnglish: "",
      jobOffer: false,
      familyInCanada: false,
      projectInCanada: [],
    }
  });

  const watchedFields = {
    1: form.watch("age"),
    2: form.watch("education"),
    3: form.watch("workExperience"),
    4: [form.watch("languageFrench"), form.watch("languageEnglish")],
    5: form.watch("projectInCanada")
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return !!watchedFields[1];
      case 2:
        return !!watchedFields[2];
      case 3:
        return !!watchedFields[3];
      case 4:
        return !!watchedFields[4][0] || !!watchedFields[4][1];
      case 5:
        return (watchedFields[5] as string[])?.length > 0;
      default:
        return true;
    }
  };
  
  const goToNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    } else {
      calculateAndShowResults();
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const resetForm = () => {
    form.reset();
    setCurrentStep(1);
    setResults(null);
  };

  const calculateAndShowResults = () => {
    const data = form.getValues();
    const eligibilityResults = calculateEligibility(data);
    
    setResults(eligibilityResults);
    
    toast({
      title: "Évaluation terminée !",
      description: "Vos résultats sont maintenant disponibles.",
      duration: 5000,
    });
  };
  
  const handleContactRequest = () => {
    onClose();
    toast({
      title: "Demande envoyée !",
      description: "Nous vous contacterons dans les plus brefs délais.",
      duration: 5000,
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Évaluez votre admissibilité à l'immigration canadienne</h2>
        <Button variant="ghost" onClick={onClose} className="h-8 w-8 p-0">
          &times;
        </Button>
      </div>
      
      {!results ? (
        <>
          <StepHeader 
            currentStep={currentStep} 
            totalSteps={totalSteps}
          />
          
          <Form {...form}>
            <form>
              {currentStep === 1 && <AgeStep form={form} />}
              {currentStep === 2 && <EducationStep form={form} />}
              {currentStep === 3 && <WorkExperienceStep form={form} />}
              {currentStep === 4 && <LanguageSkillsStep form={form} />}
              {currentStep === 5 && <ProjectStep form={form} />}
              
              <NavigationButtons 
                currentStep={currentStep} 
                totalSteps={totalSteps} 
                goToPreviousStep={goToPreviousStep} 
                goToNextStep={goToNextStep}
                isStepValid={isStepValid()}
              />
            </form>
          </Form>
        </>
      ) : (
        <ResultsView 
          results={results} 
          resetForm={resetForm} 
          onClose={onClose}
          onContactRequest={handleContactRequest}
        />
      )}
    </div>
  );
};

export default PreEvaluationForm;
