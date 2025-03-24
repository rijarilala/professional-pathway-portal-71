
import React from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import PreEvaluationForm from "./PreEvaluationForm";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface EvaluationButtonProps {
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  className?: string;
}

const EvaluationButton: React.FC<EvaluationButtonProps> = ({ 
  size = "lg", 
  variant = "default", 
  className 
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          size={size} 
          variant={variant}
          className={className}
        >
          <Search className="mr-2 h-4 w-4" />
          Pré-évaluer mes options
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <PreEvaluationForm />
      </DialogContent>
    </Dialog>
  );
};

export default EvaluationButton;
