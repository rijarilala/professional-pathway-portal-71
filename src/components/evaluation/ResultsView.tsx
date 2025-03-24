
import React from 'react';
import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";
import { Globe, FileCheck, ListChecks, Briefcase, GraduationCap } from "lucide-react";
import ResultItem from './ResultItem';
import { ResultScores } from './types';

interface ResultsViewProps {
  results: ResultScores;
  resetForm: () => void;
  onClose: () => void;
  language: {
    title: string;
    programs: {
      expressEntry: string;
      pnp: string;
      quebec: string;
      business: string;
      study: string;
    };
    descriptions: {
      expressEntry: string;
      pnp: string;
      quebec: string;
      business: string;
      study: string;
      disclaimer: string;
    };
    buttons: {
      restart: string;
      book: string;
    };
  };
}

const ResultsView: React.FC<ResultsViewProps> = ({ 
  results, 
  resetForm, 
  onClose,
  language 
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-6">{language.title}</h2>
      
      <ResultItem 
        program={language.programs.expressEntry} 
        score={results.expressEntry} 
        icon={<Globe className="h-5 w-5 text-primary" />}
        description={language.descriptions.expressEntry}
      />
      
      <ResultItem 
        program={language.programs.pnp} 
        score={results.pnp} 
        icon={<FileCheck className="h-5 w-5 text-primary" />}
        description={language.descriptions.pnp}
      />
      
      <ResultItem 
        program={language.programs.quebec} 
        score={results.quebec} 
        icon={<ListChecks className="h-5 w-5 text-primary" />}
        description={language.descriptions.quebec}
      />
      
      <ResultItem 
        program={language.programs.business} 
        score={results.businessImmigration} 
        icon={<Briefcase className="h-5 w-5 text-primary" />}
        description={language.descriptions.business}
      />
      
      <ResultItem 
        program={language.programs.study} 
        score={results.studyPathway} 
        icon={<GraduationCap className="h-5 w-5 text-primary" />}
        description={language.descriptions.study}
      />
      
      <div className="border-t pt-4 mt-6">
        <p className="mb-4 font-medium">
          {language.descriptions.disclaimer}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button onClick={resetForm} variant="outline" className="flex items-center gap-2">
            <RefreshCcw className="h-4 w-4" />
            {language.buttons.restart}
          </Button>
          <Button onClick={onClose} className="flex items-center gap-2">
            {language.buttons.book}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultsView;
