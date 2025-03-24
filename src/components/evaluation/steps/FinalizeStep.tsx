
// This component is no longer used in our implementation
import React from 'react';

interface FinalizeStepProps {
  title: string;
  description: string;
  disclaimer: string;
}

const FinalizeStep: React.FC<FinalizeStepProps> = ({ title, description, disclaimer }) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4">{title}</h3>
      <p className="mb-6 text-muted-foreground">{description}</p>
      
      <div className="bg-primary/10 p-4 rounded-lg mb-6">
        <p className="text-sm">{disclaimer}</p>
      </div>
    </div>
  );
};

export default FinalizeStep;
