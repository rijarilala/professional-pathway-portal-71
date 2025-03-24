
import React from 'react';
import { Progress } from "@/components/ui/progress";

interface ResultItemProps {
  program: string;
  score: number;
  icon: React.ReactNode;
  description: string;
}

const ResultItem: React.FC<ResultItemProps> = ({ program, score, icon, description }) => {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {icon}
          <h3 className="font-semibold">{program}</h3>
        </div>
        <span className="font-medium">{score}%</span>
      </div>
      <Progress value={score} className="h-3 mb-2" />
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default ResultItem;
