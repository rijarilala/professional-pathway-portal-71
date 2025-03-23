
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import PreEvaluationForm from "./PreEvaluationForm";

interface EvaluationButtonProps {
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

const EvaluationButton: React.FC<EvaluationButtonProps> = ({ size = "lg", className }) => {
  const [showForm, setShowForm] = useState(false);
  
  const openForm = () => {
    setShowForm(true);
  };
  
  const closeForm = () => {
    setShowForm(false);
  };
  
  return (
    <>
      <Button 
        size={size} 
        onClick={openForm}
        className={className}
      >
        <Search className="mr-2 h-4 w-4" />
        Pré-évaluer mes options
      </Button>
      
      {showForm && <PreEvaluationForm onClose={closeForm} />}
    </>
  );
};

export default EvaluationButton;
