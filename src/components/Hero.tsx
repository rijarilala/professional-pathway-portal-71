
import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import image from './assets/collaboration.jpg';



const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

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
              {t("home.hero.badge")}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {t("home.hero.title").split(" ").map((word, i, arr) => 
                i === arr.length - 2 ? (
                  <React.Fragment key={i}>
                    <span className="bg-gradient-to-r from-brown to-blue bg-clip-text text-transparent">{word} </span>
                    {arr[arr.length - 1]}
                  </React.Fragment>
                ) : i < arr.length - 2 ? (
                  <React.Fragment key={i}>{word} </React.Fragment>
                ) : null
              )}
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              {t("home.hero.description")}
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
            
            <div className="flex items-center pt-8 space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-brown to-blue flex items-center justify-center text-white text-xs font-bold">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-medium">{t("home.hero.clientCount")}</p>
                <div className="flex text-yellow-500">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={cn("relative flex items-center justify-center", isVisible ? "animate-slideUp" : "opacity-0")}>
          <div className="relative w-full max-w-md">
            <div className="glass-card relative z-10 overflow-hidden rounded-2xl p-8">
              
               <img src={image}
                alt="Professional meeting" 
                className="w-full h-auto rounded-xl object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                <p className="font-semibold text-sm">{t("home.hero.approachTitle")}</p>
                <h3 className="text-xl font-bold mt-1">{t("home.hero.approachDesc")}</h3>
              </div>
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
