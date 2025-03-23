
import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t, i18n } = useTranslation();
  
  const currentLang = i18n.language;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-100 to-white"></div>
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(circle_500px_at_50%_200px,rgba(30,144,255,0.3),transparent)]"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 py-12">
        <div className="flex flex-col justify-center">
          <div className={cn("space-y-6", isVisible ? "animate-fadeIn" : "opacity-0")}>
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-blue-100 text-blue-800 font-medium">
              <span className="animate-pulse mr-1.5 h-2 w-2 rounded-full bg-blue"></span>
              {currentLang === 'fr' ? 'Cabinet de Conseil Professionnel' : 'Professional Consulting Firm'}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {currentLang === 'fr' ? 'Votre passerelle vers un avenir au Canada 🌍🇨🇦' : 'Your gateway to a future in Canada 🌍🇨🇦'}
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              {currentLang === 'fr' ? 
                'ConseilPro, basé à Moramanga, Madagascar, est votre partenaire de confiance pour concrétiser votre projet d\'immigration et de carrière au Canada. Spécialistes en mobilité internationale et orientation professionnelle, nous accompagnons les particuliers et les professionnels dans toutes les étapes de leur démarche, en mettant à leur disposition une expertise pointue et un suivi personnalisé.' : 
                'ConseilPro, based in Moramanga, Madagascar, is your trusted partner to realize your immigration and career project in Canada. Specialists in international mobility and professional guidance, we support individuals and professionals in all stages of their journey, providing them with in-depth expertise and personalized follow-up.'}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-brown hover:bg-brown/90 text-white rounded-md h-12 px-6 text-base shadow-md hover:shadow-lg transition-all">
                {t("home.hero.cta")}
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button variant="outline" className="h-12 px-6 text-base border-blue text-blue hover:bg-blue/5">
                {t("home.hero.secondaryCta")}
              </Button>
            </div>
            
            <div className="flex flex-col space-y-4 pt-8">
              <h3 className="font-bold text-xl">
                {currentLang === 'fr' ? 'Pourquoi choisir ConseilPro ?' : 'Why choose ConseilPro?'}
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✅</span>
                  <p className="text-sm">
                    {currentLang === 'fr' ? 
                      'Une expertise dédiée à votre réussite – Nous maîtrisons les différentes voies d\'immigration et sélectionnons la meilleure stratégie pour optimiser vos chances d\'admission.' : 
                      'Expertise dedicated to your success – We master the different immigration pathways and select the best strategy to optimize your chances of admission.'}
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✅</span>
                  <p className="text-sm">
                    {currentLang === 'fr' ? 
                      'Un accompagnement complet – De l\'évaluation de votre profil à la constitution de votre dossier, en passant par la préparation aux entretiens et la mise en relation avec des employeurs potentiels.' : 
                      'Comprehensive support – From profile evaluation to file preparation, interview preparation, and connecting you with potential employers.'}
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✅</span>
                  <p className="text-sm">
                    {currentLang === 'fr' ? 
                      'Un service accessible et transparent – Des formules adaptées à chaque besoin, avec un suivi rigoureux et une communication claire tout au long du processus.' : 
                      'Accessible and transparent service – Solutions adapted to each need, with rigorous follow-up and clear communication throughout the process.'}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h3 className="font-bold text-lg text-blue-800">
                {currentLang === 'fr' ? 'Ouvrez les portes du Canada avec nous' : 'Open the doors to Canada with us'}
              </h3>
              <p className="mt-2 text-blue-700">
                {currentLang === 'fr' ? 
                  'Que vous souhaitiez étudier, travailler ou vous établir définitivement au Québec ou dans une autre province canadienne, notre équipe est à vos côtés pour transformer votre projet en réalité.' : 
                  'Whether you wish to study, work, or permanently settle in Quebec or another Canadian province, our team is by your side to turn your project into reality.'}
              </p>
            </div>
          </div>
        </div>
        
        <div className={cn("relative flex items-center justify-center", isVisible ? "animate-slideUp" : "opacity-0")}>
          <div className="relative w-full max-w-md">
            <div className="glass-card relative z-10 overflow-hidden rounded-2xl p-8">
              <img 
                src="/lovable-uploads/fedfb190-2d9d-40f4-b5a2-4aac71d52364.png" 
                alt="Professional meeting" 
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brown/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
