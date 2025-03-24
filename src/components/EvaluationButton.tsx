
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import PreEvaluationForm from "./PreEvaluationForm";
import { 
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";

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
          <Search className="mr-2 h-4 w-4" />
          Pré-évaluer mes options
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md md:max-w-xl overflow-y-auto">
        <PreEvaluationForm onClose={() => setIsOpen(false)} />
      </SheetContent>
    </Sheet>
  );
};

export default EvaluationButton;
