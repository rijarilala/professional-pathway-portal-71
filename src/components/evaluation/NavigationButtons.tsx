
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface NavigationButtonsProps {
  currentStep: number;
  totalSteps: number;
  goToPreviousStep: () => void;
  goToNextStep: () => void;
  isStepValid: boolean;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  currentStep,
  totalSteps,
  goToPreviousStep,
  goToNextStep,
  isStepValid
}) => {
  return (
    <div className="flex justify-between mt-8">
      {currentStep > 1 && (
        <Button 
          type="button" 
          onClick={goToPreviousStep} 
          variant="outline"
          className="flex items-center gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          Précédent
        </Button>
      )}
      
      <div className={currentStep === 1 ? "ml-auto" : ""}>
        <Button 
          type="button" 
          onClick={goToNextStep}
          className="flex items-center gap-2"
          disabled={!isStepValid}
        >
          {currentStep < totalSteps ? (
            <>
              Suivant
              <ChevronRight className="h-4 w-4" />
            </>
          ) : (
            "Voir les résultats"
          )}
        </Button>
      </div>
    </div>
  );
};

export default NavigationButtons;
