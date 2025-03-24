import React, { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { DialogClose } from "@/components/ui/dialog";
import { ListChecks, FileCheck, Award, Briefcase, GraduationCap, Globe, ChevronRight, ChevronLeft, RefreshCcw } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface PreEvaluationFormProps {
  onClose?: () => void;
}

const PreEvaluationForm: React.FC<PreEvaluationFormProps> = ({ onClose = () => {} }) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [results, setResults] = useState<null | {
    expressEntry: number;
    pnp: number;
    quebec: number;
    businessImmigration: number;
    studyPathway: number;
  }>(null);
  
  const totalSteps = 7;
  const progress = (step / totalSteps) * 100;
  
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
      setStep(step + 1);
    } else {
      calculateResults();
    }
  };

  const goToPreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const resetForm = () => {
    form.reset();
    setStep(1);
    setResults(null);
  };

  const calculateResults = () => {
    const data = form.getValues();
    
    let expressEntryScore = 0;
    let pnpScore = 0;
    let quebecScore = 0;
    let businessScore = 0;
    let studyScore = 0;
    
    const age = parseInt(data.age);
    if (age >= 18 && age <= 35) {
      expressEntryScore += 25;
      pnpScore += 20;
      quebecScore += 25;
    } else if (age > 35 && age <= 45) {
      expressEntryScore += 15;
      pnpScore += 15;
      quebecScore += 15;
    } else if (age > 45) {
      expressEntryScore += 5;
      pnpScore += 10;
      quebecScore += 5;
    }
    
    if (data.education === "phd") {
      expressEntryScore += 25;
      pnpScore += 25;
      quebecScore += 25;
      studyScore += 10;
    } else if (data.education === "masters") {
      expressEntryScore += 23;
      pnpScore += 23;
      quebecScore += 23;
      studyScore += 8;
    } else if (data.education === "bachelors") {
      expressEntryScore += 20;
      pnpScore += 20;
      quebecScore += 20;
      studyScore += 6;
    } else if (data.education === "diploma") {
      expressEntryScore += 15;
      pnpScore += 18;
      quebecScore += 15;
      studyScore += 4;
    }
    
    if (data.workExperience === "more5") {
      expressEntryScore += 15;
      pnpScore += 15;
      quebecScore += 15;
      businessScore += 20;
    } else if (data.workExperience === "three5") {
      expressEntryScore += 13;
      pnpScore += 13;
      quebecScore += 13;
      businessScore += 15;
    } else if (data.workExperience === "one3") {
      expressEntryScore += 10;
      pnpScore += 10;
      quebecScore += 10;
      businessScore += 5;
    }
    
    if (data.language === "both") {
      expressEntryScore += 20;
      pnpScore += 15;
      quebecScore += 25;
    } else if (data.language === "english") {
      expressEntryScore += 18;
      pnpScore += 15;
      quebecScore += 5;
    } else if (data.language === "french") {
      expressEntryScore += 10;
      pnpScore += 10;
      quebecScore += 20;
    }
    
    if (data.familyInCanada) {
      expressEntryScore += 5;
      pnpScore += 10;
    }
    
    if (data.quebec) {
      quebecScore += 15;
    }
    
    if (data.jobOffer) {
      expressEntryScore += 10;
      pnpScore += 20;
    }
    
    if (data.studyInCanada) {
      expressEntryScore += 10;
      pnpScore += 10;
      quebecScore += 10;
      studyScore += 25;
    }
    
    if (data.businessExperience) {
      businessScore += 25;
    }
    
    const netWorth = parseInt(data.netWorth || "0");
    if (netWorth >= 300000) {
      businessScore += 20;
    } else if (netWorth >= 150000) {
      businessScore += 10;
    }
    
    const normalizeScore = (score: number, maxPossible: number) => 
      Math.min(Math.round((score / maxPossible) * 100), 100);
    
    setResults({
      expressEntry: normalizeScore(expressEntryScore, 100),
      pnp: normalizeScore(pnpScore, 100),
      quebec: normalizeScore(quebecScore, 100),
      businessImmigration: normalizeScore(businessScore, 100),
      studyPathway: normalizeScore(studyScore, 100),
    });
    
    toast({
      title: currentLang === 'fr' ? "Évaluation terminée!" : "Evaluation completed!",
      description: currentLang === 'fr' 
        ? "Vos résultats sont maintenant disponibles." 
        : "Your results are now available.",
      duration: 5000,
    });
  };
  
  const renderResults = () => {
    if (!results) return null;
    
    const ResultItem = ({ 
      program, 
      score, 
      icon, 
      description 
    }: { 
      program: string; 
      score: number; 
      icon: React.ReactNode; 
      description: string;
    }) => (
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
    
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-6">
          {currentLang === 'fr' ? "Vos résultats d'éligibilité" : "Your Eligibility Results"}
        </h2>
        
        <ResultItem 
          program={currentLang === 'fr' ? "Entrée Express" : "Express Entry"} 
          score={results.expressEntry} 
          icon={<Globe className="h-5 w-5 text-primary" />}
          description={currentLang === 'fr' 
            ? "Programme fédéral pour les travailleurs qualifiés." 
            : "Federal program for skilled workers."
          }
        />
        
        <ResultItem 
          program={currentLang === 'fr' ? "Programme des Nominés Provinciaux" : "Provincial Nominee Program"} 
          score={results.pnp} 
          icon={<FileCheck className="h-5 w-5 text-primary" />}
          description={currentLang === 'fr' 
            ? "Programmes d'immigration spécifiques à chaque province." 
            : "Province-specific immigration programs."
          }
        />
        
        <ResultItem 
          program={currentLang === 'fr' ? "Immigration Québec" : "Quebec Immigration"} 
          score={results.quebec} 
          icon={<ListChecks className="h-5 w-5 text-primary" />}
          description={currentLang === 'fr' 
            ? "Programmes spécifiques pour immigrer au Québec." 
            : "Specific programs for immigrating to Quebec."
          }
        />
        
        <ResultItem 
          program={currentLang === 'fr' ? "Immigration d'Affaires" : "Business Immigration"} 
          score={results.businessImmigration} 
          icon={<Briefcase className="h-5 w-5 text-primary" />}
          description={currentLang === 'fr' 
            ? "Pour les entrepreneurs et investisseurs." 
            : "For entrepreneurs and investors."
          }
        />
        
        <ResultItem 
          program={currentLang === 'fr' ? "Voie des Études" : "Study Pathway"} 
          score={results.studyPathway} 
          icon={<GraduationCap className="h-5 w-5 text-primary" />}
          description={currentLang === 'fr' 
            ? "Immigration via les études au Canada." 
            : "Immigration through studying in Canada."
          }
        />
        
        <div className="border-t pt-4 mt-6">
          <p className="mb-4 font-medium">
            {currentLang === 'fr' 
              ? "Important : Cette évaluation ne constitue qu'une indication préliminaire. Pour une analyse précise de votre situation, nous vous recommandons de consulter un expert en immigration."
              : "Important: This assessment is only a preliminary indication. For an accurate analysis of your situation, we recommend consulting an immigration expert."
            }
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button onClick={resetForm} variant="outline" className="flex items-center gap-2">
              <RefreshCcw className="h-4 w-4" />
              {currentLang === 'fr' ? "Recommencer l'évaluation" : "Restart Assessment"}
            </Button>
            <DialogClose asChild>
              <Button onClick={onClose} className="flex items-center gap-2">
                {currentLang === 'fr' ? "Prendre rendez-vous avec un expert" : "Book with an Expert"}
              </Button>
            </DialogClose>
          </div>
        </div>
      </div>
    );
  };

  const renderFormStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h3 className="text-lg font-medium mb-4">
              {currentLang === 'fr' ? "Quel est votre âge ?" : "What is your age?"}
            </h3>
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="space-y-3"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="under18" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {currentLang === 'fr' ? "Moins de 18 ans" : "Under 18 years"}
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="18-25" />
                      </FormControl>
                      <FormLabel className="font-normal">18-25 {currentLang === 'fr' ? "ans" : "years"}</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="26-35" />
                      </FormControl>
                      <FormLabel className="font-normal">26-35 {currentLang === 'fr' ? "ans" : "years"}</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="36-45" />
                      </FormControl>
                      <FormLabel className="font-normal">36-45 {currentLang === 'fr' ? "ans" : "years"}</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="46-55" />
                      </FormControl>
                      <FormLabel className="font-normal">46-55 {currentLang === 'fr' ? "ans" : "years"}</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="over55" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {currentLang === 'fr' ? "Plus de 55 ans" : "Over 55 years"}
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormItem>
              )}
            />
          </div>
        );
      case 2:
        return (
          <div>
            <h3 className="text-lg font-medium mb-4">
              {currentLang === 'fr' 
                ? "Quel est votre plus haut niveau d'éducation ?" 
                : "What is your highest level of education?"}
            </h3>
            <FormField
              control={form.control}
              name="education"
              render={({ field }) => (
                <FormItem>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="space-y-3"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="highSchool" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {currentLang === 'fr' ? "Diplôme d'études secondaires" : "High School Diploma"}
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="diploma" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {currentLang === 'fr' 
                          ? "Diplôme d'études collégiales / Diplôme professionnel" 
                          : "College Diploma / Vocational Certificate"}
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="bachelors" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {currentLang === 'fr' ? "Baccalauréat (Licence)" : "Bachelor's Degree"}
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="masters" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {currentLang === 'fr' ? "Maîtrise (Master)" : "Master's Degree"}
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="phd" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {currentLang === 'fr' ? "Doctorat (PhD)" : "Doctorate (PhD)"}
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormItem>
              )}
            />
          </div>
        );
      case 3:
        return (
          <div>
            <h3 className="text-lg font-medium mb-4">
              {currentLang === 'fr' 
                ? "Combien d'années d'expérience professionnelle avez-vous ?" 
                : "How many years of work experience do you have?"}
            </h3>
            <FormField
              control={form.control}
              name="workExperience"
              render={({ field }) => (
                <FormItem>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="space-y-3"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="none" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {currentLang === 'fr' ? "Aucune expérience" : "No experience"}
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="less1" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {currentLang === 'fr' ? "Moins d'un an" : "Less than 1 year"}
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="one3" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {currentLang === 'fr' ? "1-3 ans" : "1-3 years"}
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="three5" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {currentLang === 'fr' ? "3-5 ans" : "3-5 years"}
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="more5" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {currentLang === 'fr' ? "Plus de 5 ans" : "More than 5 years"}
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormItem>
              )}
            />
          </div>
        );
      case 4:
        return (
          <div>
            <h3 className="text-lg font-medium mb-4">
              {currentLang === 'fr' 
                ? "Quelles langues parlez-vous ?" 
                : "Which languages do you speak?"}
            </h3>
            <FormField
              control={form.control}
              name="language"
              render={({ field }) => (
                <FormItem>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="space-y-3"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="english" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {currentLang === 'fr' ? "Anglais seulement" : "English only"}
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="french" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {currentLang === 'fr' ? "Français seulement" : "French only"}
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="both" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {currentLang === 'fr' ? "Anglais et Français" : "Both English and French"}
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="none" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {currentLang === 'fr' ? "Ni Anglais ni Français" : "Neither English nor French"}
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormItem>
              )}
            />
          </div>
        );
      case 5:
        return (
          <div>
            <h3 className="text-lg font-medium mb-6">
              {currentLang === 'fr' 
                ? "Information supplémentaire (Partie 1)" 
                : "Additional Information (Part 1)"}
            </h3>
            
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="familyInCanada"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        {currentLang === 'fr' 
                          ? "Avez-vous de la famille au Canada ?" 
                          : "Do you have family in Canada?"}
                      </FormLabel>
                      <FormDescription>
                        {currentLang === 'fr' 
                          ? "Parents, frères/sœurs, grands-parents, etc." 
                          : "Parents, siblings, grandparents, etc."}
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="quebec"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        {currentLang === 'fr' 
                          ? "Souhaitez-vous vous installer au Québec spécifiquement ?" 
                          : "Do you specifically want to settle in Quebec?"}
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="jobOffer"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        {currentLang === 'fr' 
                          ? "Avez-vous une offre d'emploi au Canada ?" 
                          : "Do you have a job offer in Canada?"}
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </div>
        );
      case 6:
        return (
          <div>
            <h3 className="text-lg font-medium mb-6">
              {currentLang === 'fr' 
                ? "Information supplémentaire (Partie 2)" 
                : "Additional Information (Part 2)"}
            </h3>
            
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="studyInCanada"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        {currentLang === 'fr' 
                          ? "Avez-vous étudié au Canada ?" 
                          : "Have you studied in Canada?"}
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="businessExperience"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        {currentLang === 'fr' 
                          ? "Avez-vous de l'expérience en affaires ou en entrepreneuriat ?" 
                          : "Do you have business or entrepreneurial experience?"}
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
            </div>
            
            <div className="mt-6">
              <FormField
                control={form.control}
                name="netWorth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {currentLang === 'fr' 
                        ? "Quelle est votre valeur nette approximative (en dollars canadiens) ?" 
                        : "What is your approximate net worth (in Canadian dollars)?"}
                    </FormLabel>
                    <FormDescription>
                      {currentLang === 'fr' 
                        ? "Cette information est pertinente pour les programmes d'immigration d'affaires." 
                        : "This information is relevant for business immigration programs."}
                    </FormDescription>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="space-y-3 mt-2"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="less50k" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {currentLang === 'fr' ? "Moins de 50 000 $" : "Less than $50,000"}
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="50k150k" />
                          </FormControl>
                          <FormLabel className="font-normal">$50,000 - $150,000</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="150k300k" />
                          </FormControl>
                          <FormLabel className="font-normal">$150,000 - $300,000</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="300k500k" />
                          </FormControl>
                          <FormLabel className="font-normal">$300,000 - $500,000</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="more500k" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {currentLang === 'fr' ? "Plus de 500 000 $" : "More than $500,000"}
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>
        );
      case 7:
        return (
          <div>
            <h3 className="text-lg font-medium mb-4">
              {currentLang === 'fr' 
                ? "Finalisez votre pré-évaluation" 
                : "Finalize your pre-evaluation"}
            </h3>
            <p className="mb-6 text-muted-foreground">
              {currentLang === 'fr' 
                ? "Vous avez presque terminé ! Cliquez sur 'Voir mes résultats' pour obtenir une première indication des programmes d'immigration qui pourraient vous convenir." 
                : "You're almost done! Click 'See my results' to get a first indication of which immigration programs might be suitable for you."}
            </p>
            
            <div className="bg-primary/10 p-4 rounded-lg mb-6">
              <p className="text-sm">
                {currentLang === 'fr' 
                  ? "Ceci est une évaluation préliminaire. Pour une analyse complète et personnalisée de votre situation, nous vous recommandons de consulter un expert en immigration." 
                  : "This is a preliminary assessment. For a complete and personalized analysis of your situation, we recommend consulting an immigration expert."}
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          {currentLang === 'fr' 
            ? "Pré-évaluation d'immigration" 
            : "Immigration Pre-Evaluation"}
        </h2>
        <DialogClose asChild>
          <Button variant="ghost" onClick={onClose} className="h-8 w-8 p-0">
            &times;
          </Button>
        </DialogClose>
      </div>
      
      {!results ? (
        <>
          <div className="mb-8">
            <div className="flex justify-between text-sm mb-1">
              <span>
                {currentLang === 'fr' ? "Étape" : "Step"} {step}/{totalSteps}
              </span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
          
          <form>
            {renderFormStep()}
            
            <div className="flex justify-between mt-8">
              {step > 1 && (
                <Button 
                  type="button" 
                  onClick={goToPreviousStep} 
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  {currentLang === 'fr' ? "Précédent" : "Previous"}
                </Button>
              )}
              
              <div className={step === 1 ? "ml-auto" : ""}>
                <Button 
                  type="button" 
                  onClick={goToNextStep}
                  className="flex items-center gap-2"
                >
                  {step < totalSteps 
                    ? (currentLang === 'fr' ? "Suivant" : "Next") 
                    : (currentLang === 'fr' ? "Voir mes résultats" : "See my results")
                  }
                  {step < totalSteps && <ChevronRight className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </form>
        </>
      ) : (
        renderResults()
      )}
    </div>
  );
};

export default PreEvaluationForm;

