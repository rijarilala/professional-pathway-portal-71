
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

import StepHeader from "./StepHeader";
import NavigationButtons from "./NavigationButtons";
import ResultsView from "./ResultsView";
import StepDisplay from "./StepDisplay";
import { calculateResults } from "./utils/calculateScores";
import { PreEvaluationFormProps, ResultScores, EvaluationStep } from "./types";

const PreEvaluationForm: React.FC<PreEvaluationFormProps> = ({ onClose }) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const { toast } = useToast();
  const [step, setStep] = useState<EvaluationStep>(1);
  const [results, setResults] = useState<ResultScores | null>(null);
  
  const totalSteps = 7;
  
  const form = useForm({
    defaultValues: {
      age: "",
      education: "",
      workExperience: "",
      language: "",
      frenchLevel: "",
      englishLevel: "",
      familyInCanada: false,
      quebec: false,
      jobOffer: false,
      studyInCanada: false,
      businessExperience: false,
      netWorth: "",
    },
  });

  const goToNextStep = () => {
    if (step < totalSteps) {
      setStep((prev) => (prev < totalSteps ? (prev + 1) as EvaluationStep : prev));
    } else {
      calculateAndSetResults();
    }
  };

  const goToPreviousStep = () => {
    if (step > 1) {
      setStep((prev) => (prev > 1 ? (prev - 1) as EvaluationStep : prev));
    }
  };

  const resetForm = () => {
    form.reset();
    setStep(1);
    setResults(null);
  };

  const calculateAndSetResults = () => {
    const data = form.getValues();
    const calculatedResults = calculateResults(data);
    
    setResults(calculatedResults);
    
    toast({
      title: currentLang === 'fr' ? "Évaluation terminée!" : "Evaluation completed!",
      description: currentLang === 'fr' 
        ? "Vos résultats sont maintenant disponibles." 
        : "Your results are now available.",
      duration: 5000,
    });
  };
  
  // Language dependent UI texts
  const uiText = {
    header: {
      title: currentLang === 'fr' ? "Pré-évaluation d'immigration" : "Immigration Pre-Evaluation",
      step: currentLang === 'fr' ? "Étape" : "Step"
    },
    navigation: {
      previous: currentLang === 'fr' ? "Précédent" : "Previous",
      next: currentLang === 'fr' ? "Suivant" : "Next",
      seeResults: currentLang === 'fr' ? "Voir mes résultats" : "See my results"
    },
    steps: {
      age: {
        title: currentLang === 'fr' ? "Quel est votre âge ?" : "What is your age?",
        labels: {
          under18: currentLang === 'fr' ? "Moins de 18 ans" : "Under 18 years",
          age1825: "18-25",
          age2635: "26-35",
          age3645: "36-45",
          age4655: "46-55",
          over55: currentLang === 'fr' ? "Plus de 55 ans" : "Over 55 years",
          years: currentLang === 'fr' ? "ans" : "years"
        }
      },
      education: {
        title: currentLang === 'fr' ? "Quel est votre plus haut niveau d'éducation ?" : "What is your highest level of education?",
        labels: {
          highSchool: currentLang === 'fr' ? "Diplôme d'études secondaires" : "High School Diploma",
          diploma: currentLang === 'fr' ? "Diplôme d'études collégiales / Diplôme professionnel" : "College Diploma / Vocational Certificate",
          bachelors: currentLang === 'fr' ? "Baccalauréat (Licence)" : "Bachelor's Degree",
          masters: currentLang === 'fr' ? "Maîtrise (Master)" : "Master's Degree",
          phd: currentLang === 'fr' ? "Doctorat (PhD)" : "Doctorate (PhD)"
        }
      },
      workExperience: {
        title: currentLang === 'fr' ? "Combien d'années d'expérience professionnelle avez-vous ?" : "How many years of work experience do you have?",
        labels: {
          none: currentLang === 'fr' ? "Aucune expérience" : "No experience",
          lessThanOne: currentLang === 'fr' ? "Moins d'un an" : "Less than 1 year",
          oneToThree: currentLang === 'fr' ? "1-3 ans" : "1-3 years",
          threeToFive: currentLang === 'fr' ? "3-5 ans" : "3-5 years",
          moreThanFive: currentLang === 'fr' ? "Plus de 5 ans" : "More than 5 years"
        }
      },
      language: {
        title: currentLang === 'fr' ? "Quelles langues parlez-vous ?" : "Which languages do you speak?",
        labels: {
          englishOnly: currentLang === 'fr' ? "Anglais seulement" : "English only",
          frenchOnly: currentLang === 'fr' ? "Français seulement" : "French only",
          both: currentLang === 'fr' ? "Anglais et Français" : "Both English and French",
          neither: currentLang === 'fr' ? "Ni Anglais ni Français" : "Neither English nor French"
        }
      },
      additionalInfo1: {
        title: currentLang === 'fr' ? "Information supplémentaire (Partie 1)" : "Additional Information (Part 1)",
        labels: {
          family: {
            label: currentLang === 'fr' ? "Avez-vous de la famille au Canada ?" : "Do you have family in Canada?",
            description: currentLang === 'fr' ? "Parents, frères/sœurs, grands-parents, etc." : "Parents, siblings, grandparents, etc."
          },
          quebec: {
            label: currentLang === 'fr' ? "Souhaitez-vous vous installer au Québec spécifiquement ?" : "Do you specifically want to settle in Quebec?"
          },
          jobOffer: {
            label: currentLang === 'fr' ? "Avez-vous une offre d'emploi au Canada ?" : "Do you have a job offer in Canada?"
          }
        }
      },
      additionalInfo2: {
        title: currentLang === 'fr' ? "Information supplémentaire (Partie 2)" : "Additional Information (Part 2)",
        labels: {
          study: {
            label: currentLang === 'fr' ? "Avez-vous étudié au Canada ?" : "Have you studied in Canada?"
          },
          business: {
            label: currentLang === 'fr' ? "Avez-vous de l'expérience en affaires ou en entrepreneuriat ?" : "Do you have business or entrepreneurial experience?"
          },
          netWorth: {
            label: currentLang === 'fr' ? "Quelle est votre valeur nette approximative (en dollars canadiens) ?" : "What is your approximate net worth (in Canadian dollars)?",
            description: currentLang === 'fr' ? "Cette information est pertinente pour les programmes d'immigration d'affaires." : "This information is relevant for business immigration programs.",
            options: {
              less50k: currentLang === 'fr' ? "Moins de 50 000 $" : "Less than $50,000",
              from50kTo150k: "$50,000 - $150,000",
              from150kTo300k: "$150,000 - $300,000",
              from300kTo500k: "$300,000 - $500,000",
              more500k: currentLang === 'fr' ? "Plus de 500 000 $" : "More than $500,000"
            }
          }
        }
      },
      finalize: {
        title: currentLang === 'fr' ? "Finalisez votre pré-évaluation" : "Finalize your pre-evaluation",
        description: currentLang === 'fr' 
          ? "Vous avez presque terminé ! Cliquez sur 'Voir mes résultats' pour obtenir une première indication des programmes d'immigration qui pourraient vous convenir." 
          : "You're almost done! Click 'See my results' to get a first indication of which immigration programs might be suitable for you.",
        disclaimer: currentLang === 'fr' 
          ? "Ceci est une évaluation préliminaire. Pour une analyse complète et personnalisée de votre situation, nous vous recommandons de consulter un expert en immigration." 
          : "This is a preliminary assessment. For a complete and personalized analysis of your situation, we recommend consulting an immigration expert."
      }
    },
    results: {
      title: currentLang === 'fr' ? "Vos résultats d'éligibilité" : "Your Eligibility Results",
      programs: {
        expressEntry: currentLang === 'fr' ? "Entrée Express" : "Express Entry",
        pnp: currentLang === 'fr' ? "Programme des Nominés Provinciaux" : "Provincial Nominee Program",
        quebec: currentLang === 'fr' ? "Immigration Québec" : "Quebec Immigration",
        business: currentLang === 'fr' ? "Immigration d'Affaires" : "Business Immigration",
        study: currentLang === 'fr' ? "Voie des Études" : "Study Pathway"
      },
      descriptions: {
        expressEntry: currentLang === 'fr' ? "Programme fédéral pour les travailleurs qualifiés." : "Federal program for skilled workers.",
        pnp: currentLang === 'fr' ? "Programmes d'immigration spécifiques à chaque province." : "Province-specific immigration programs.",
        quebec: currentLang === 'fr' ? "Programmes spécifiques pour immigrer au Québec." : "Specific programs for immigrating to Quebec.",
        business: currentLang === 'fr' ? "Pour les entrepreneurs et investisseurs." : "For entrepreneurs and investors.",
        study: currentLang === 'fr' ? "Immigration via les études au Canada." : "Immigration through studying in Canada.",
        disclaimer: currentLang === 'fr' 
          ? "Important : Cette évaluation ne constitue qu'une indication préliminaire. Pour une analyse précise de votre situation, nous vous recommandons de consulter un expert en immigration."
          : "Important: This assessment is only a preliminary indication. For an accurate analysis of your situation, we recommend consulting an immigration expert."
      },
      buttons: {
        restart: currentLang === 'fr' ? "Recommencer l'évaluation" : "Restart Assessment",
        book: currentLang === 'fr' ? "Prendre rendez-vous avec un expert" : "Book with an Expert"
      }
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">{uiText.header.title}</h2>
        <Button variant="ghost" onClick={onClose} className="h-8 w-8 p-0">
          &times;
        </Button>
      </div>
      
      {!results ? (
        <>
          <StepHeader 
            step={step} 
            totalSteps={totalSteps} 
            label={{ step: uiText.header.step }} 
          />
          
          <form>
            <StepDisplay 
              step={step} 
              form={form} 
              language={{ steps: uiText.steps }} 
            />
            
            <NavigationButtons 
              step={step} 
              totalSteps={totalSteps} 
              goToPreviousStep={goToPreviousStep} 
              goToNextStep={goToNextStep} 
              labels={uiText.navigation} 
            />
          </form>
        </>
      ) : (
        <ResultsView 
          results={results} 
          resetForm={resetForm} 
          onClose={onClose} 
          language={uiText.results} 
        />
      )}
    </div>
  );
};

export default PreEvaluationForm;
