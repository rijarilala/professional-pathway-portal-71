
import React, { useEffect, useRef } from "react";
import { Briefcase, Book, Users, Award, GitBranch } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: "Conseil et Orientation Professionnelle",
    description: "Accompagnement personnalisé pour identifier vos compétences et définir votre projet professionnel.",
    features: ["Bilan de compétences", "Tests d'orientation", "Analyse de marché", "Plan d'action personnalisé"],
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "Coaching ",
    description: "Développez votre potentiel et atteignez vos objectifs grâce à un coaching sur mesure.",
    features: ["Développement personnel", "Leadership", "Préparation aux entretiens", "Gestion de carrière"],
  },
  {
    icon: <Book className="h-10 w-10 text-primary" />,
    title: "Formation",
    description: "Des formations adaptées aux besoins des professionnels et des entreprises.",
    features: ["Soft skills", "Management", "Communication", "Marketing digital"],
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Recrutement",
    description: "Solution complète pour les entreprises et les candidats en recherche d'emploi.",
    features: ["Analyse de poste", "Recherche de candidats", "Évaluation", "Intégration"],
  },
  {
    icon: <GitBranch className="h-10 w-10 text-primary" />,
    title: "Immigration",
    description: "Accompagnement dans vos démarches d'immigration professionnelle.",
    features: ["Analyse d'éligibilité", "Préparation du dossier", "Suivi des procédures", "Intégration locale"],
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
          }
        });
      },
      { threshold: 0.1 }
    );

    const childElements = sectionRef.current?.querySelectorAll(".service-card");
    childElements?.forEach((el) => observer.observe(el));

    return () => {
      childElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="services" className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/3 left-0 right-0 h-[500px] bg-[radial-gradient(circle_800px_at_100%_200px,rgba(120,119,198,0.1),transparent)]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Nos Services Professionnels</h2>
          <p className="text-lg text-muted-foreground">
            Découvrez notre gamme complète de services conçus pour accompagner votre réussite professionnelle à chaque étape.
          </p>
        </div>

        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={cn(
                "service-card opacity-0 hover-lift bg-white rounded-xl p-8 shadow-sm border border-gray-100",
                index % 3 === 0 ? "animate-delay-100" : index % 3 === 1 ? "animate-delay-200" : "animate-delay-300"
              )}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="rounded-full w-16 h-16 flex items-center justify-center bg-primary/10 mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
