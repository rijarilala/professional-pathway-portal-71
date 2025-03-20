
import React, { useEffect, useRef } from "react";
import { Briefcase, Book, Users, Award, GitBranch, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  
  // On va générer les services à partir des clés de traduction
  const services = [
    {
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      titleKey: "services.counseling.title",
      descriptionKey: "services.counseling.description",
      featuresKey: "services.counseling.features",
      path: "/services/counseling"
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      titleKey: "services.coaching.title",
      descriptionKey: "services.coaching.description",
      featuresKey: "services.coaching.features",
    },
    {
      icon: <Book className="h-10 w-10 text-primary" />,
      titleKey: "services.training.title",
      descriptionKey: "services.training.description",
      featuresKey: "services.training.features",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      titleKey: "services.recruitment.title",
      descriptionKey: "services.recruitment.description",
      featuresKey: "services.recruitment.features",
    },
    {
      icon: <GitBranch className="h-10 w-10 text-primary" />,
      titleKey: "services.immigration.title",
      descriptionKey: "services.immigration.description",
      featuresKey: "services.immigration.features",
    },
  ];
  
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("home.services.title")}</h2>
          <p className="text-lg text-muted-foreground">
            {t("home.services.description")}
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
              
              <h3 className="text-xl font-bold mb-3">{t(service.titleKey)}</h3>
              <p className="text-muted-foreground mb-6">{t(service.descriptionKey)}</p>
              
              <ul className="space-y-2 mb-6">
                {t(service.featuresKey, { returnObjects: true }) && 
                  Array.isArray(t(service.featuresKey, { returnObjects: true })) &&
                  (t(service.featuresKey, { returnObjects: true }) as string[]).map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))
                }
              </ul>
              
              {service.path && (
                <Link to={service.path}>
                  <Button variant="outline" className="w-full flex items-center justify-center gap-2 border-primary/30 text-primary hover:bg-primary/10 hover:text-primary">
                    {t("services.viewDetails")}
                    <ChevronRight size={16} />
                  </Button>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
