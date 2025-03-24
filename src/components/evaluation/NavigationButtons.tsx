
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface NavigationButtonsProps {
  step: number;
  totalSteps: number;
  goToPreviousStep: () => void;
  goToNextStep: () => void;
  labels: {
    previous: string;
    next: string;
    seeResults: string;
  };
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  step,
  totalSteps,
  goToPreviousStep,
  goToNextStep,
  labels
}) => {
  return (
    <div className="flex justify-between mt-8">
      {step > 1 && (
        <Button 
          type="button" 
          onClick={goToPreviousStep} 
          variant="outline"
          className="flex items-center gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          {labels.previous}
        </Button>
      )}
      
      <div className={step === 1 ? "ml-auto" : ""}>
        <Button 
          type="button" 
          onClick={goToNextStep}
          className="flex items-center gap-2"
        >
          {step < totalSteps ? labels.next : labels.seeResults}
          {step < totalSteps && <ChevronRight className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
};

export default NavigationButtons;
