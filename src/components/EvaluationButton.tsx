
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ClipboardCheck } from "lucide-react";
import { 
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import PreEvaluationForm from "./evaluation/PreEvaluationForm";

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          size={size} 
          variant={variant}
          className={className}
        >
          <ClipboardCheck className="mr-2 h-4 w-4" />
          Évaluer mon éligibilité
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md md:max-w-xl lg:max-w-2xl overflow-y-auto">
        <PreEvaluationForm onClose={() => setIsOpen(false)} />
      </SheetContent>
    </Sheet>
  );
};

export default EvaluationButton;
