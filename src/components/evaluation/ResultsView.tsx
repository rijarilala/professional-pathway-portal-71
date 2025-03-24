
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check, AlertTriangle, X, RefreshCcw, Calendar } from "lucide-react";
import { EligibilityResult } from './types';
import { Link } from "react-router-dom";

interface ResultsViewProps {
  results: EligibilityResult;
  resetForm: () => void;
  onClose: () => void;
  onContactRequest: () => void;
}

const ResultsView: React.FC<ResultsViewProps> = ({ 
  results, 
  resetForm, 
  onClose,
  onContactRequest
}) => {
  const getStatusIcon = () => {
    if (results.isEligible === true) {
      return <Check className="h-8 w-8 text-green-500" />;
    } else if (results.isEligible === 'maybe') {
      return <AlertTriangle className="h-8 w-8 text-amber-500" />;
    } else {
      return <X className="h-8 w-8 text-red-500" />;
    }
  };
  
  const getStatusColor = () => {
    if (results.isEligible === true) {
      return "bg-green-50 border-green-200";
    } else if (results.isEligible === 'maybe') {
      return "bg-amber-50 border-amber-200";
    } else {
      return "bg-red-50 border-red-200";
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Résultats de votre évaluation</h2>
      
      <div className={`p-6 rounded-lg border ${getStatusColor()} flex items-start gap-4`}>
        <div className="mt-1">
          {getStatusIcon()}
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">
            {results.isEligible === true 
              ? "Profil favorable" 
              : results.isEligible === 'maybe' 
                ? "Profil à potentiel" 
                : "Profil à développer"}
          </h3>
          <p className="text-gray-700">{results.message}</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Programmes potentiellement accessibles :</h3>
        
        {results.programs.expressEntry && (
          <div className="p-4 border rounded-lg bg-white">
            <div className="flex items-center gap-2 mb-1">
              <Check className="h-4 w-4 text-green-500" />
              <h4 className="font-medium">Entrée Express</h4>
            </div>
            <p className="text-sm text-gray-600 ml-6">Programme fédéral pour les travailleurs qualifiés.</p>
          </div>
        )}
        
        {results.programs.pnp && (
          <div className="p-4 border rounded-lg bg-white">
            <div className="flex items-center gap-2 mb-1">
              <Check className="h-4 w-4 text-green-500" />
              <h4 className="font-medium">Programme des Nominés Provinciaux (PNP)</h4>
            </div>
            <p className="text-sm text-gray-600 ml-6">Programmes d'immigration spécifiques à chaque province.</p>
          </div>
        )}
        
        {results.programs.quebec && (
          <div className="p-4 border rounded-lg bg-white">
            <div className="flex items-center gap-2 mb-1">
              <Check className="h-4 w-4 text-green-500" />
              <h4 className="font-medium">Immigration Québec (PEQ/PRTQ)</h4>
            </div>
            <p className="text-sm text-gray-600 ml-6">Programmes spécifiques pour immigrer au Québec.</p>
          </div>
        )}
        
        {results.programs.studyPathway && (
          <div className="p-4 border rounded-lg bg-white">
            <div className="flex items-center gap-2 mb-1">
              <Check className="h-4 w-4 text-green-500" />
              <h4 className="font-medium">Voie des Études</h4>
            </div>
            <p className="text-sm text-gray-600 ml-6">Immigration via les études au Canada.</p>
          </div>
        )}
        
        {!results.programs.expressEntry && 
         !results.programs.pnp && 
         !results.programs.quebec && 
         !results.programs.studyPathway && 
         !results.programs.businessImmigration && (
          <div className="p-4 border rounded-lg bg-white">
            <p className="text-gray-600">Aucun programme ne correspond à votre profil actuel. Contactez-nous pour explorer d'autres options.</p>
          </div>
        )}
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg border mt-6">
        <p className="text-sm mb-4 italic">
          Note: Cette évaluation est un indicateur préliminaire basé sur vos réponses. Pour une analyse complète et personnalisée de votre situation, nous vous recommandons de consulter un expert en immigration.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <Button onClick={resetForm} variant="outline" className="flex items-center gap-2">
          <RefreshCcw className="h-4 w-4" />
          Recommencer l'évaluation
        </Button>
        <Button onClick={onContactRequest} className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          Prendre rendez-vous avec un expert
        </Button>
      </div>
    </div>
  );
};

export default ResultsView;
