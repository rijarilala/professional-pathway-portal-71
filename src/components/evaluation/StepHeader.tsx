
import React from 'react';
import { Progress } from "@/components/ui/progress";

interface StepHeaderProps {
  step: number;
  totalSteps: number;
  label: {
    step: string;
  };
}

const StepHeader: React.FC<StepHeaderProps> = ({ step, totalSteps, label }) => {
  const progress = (step / totalSteps) * 100;
  
  return (
    <div className="mb-8">
      <div className="flex justify-between text-sm mb-1">
        <span>
          {label.step} {step}/{totalSteps}
        </span>
        <span>{Math.round(progress)}%</span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
};

export default StepHeader;
