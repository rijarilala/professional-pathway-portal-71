import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Globe, MapPin, UserCheck, Briefcase, GraduationCap, Search, ListChecks } from "lucide-react";
import BookingButton from "@/components/BookingButton";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import EvaluationButton from "@/components/EvaluationButton";

const ImmigrationService = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Réalisez votre projet d'installation durable au Canada</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Le statut de résident permanent est une opportunité précieuse pour celles et ceux qui souhaitent bâtir leur avenir au Canada. 
                Il vous permet de vous établir librement dans la ville et province de votre choix, d'y vivre, d'y travailler et d'y étudier en toute sérénité, 
                tout en ouvrant la voie à la citoyenneté canadienne.
              </p>
              <EvaluationButton />
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">Notre expertise à votre service</h2>
              <p className="text-lg text-muted-foreground mb-10 text-center">
                Que vous envisagiez de vous installer au Canada, 
                notre équipe vous accompagne à chaque étape de votre parcours d'immigration. 
                De l'évaluation de votre admissibilité à la soumission de votre dossier, 
                nous vous offrons une prise en charge complète et personnalisée pour maximiser vos chances de succès.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-primary/5 p-6 rounded-lg text-center">
                  <div className="flex justify-center items-center mb-4">
                    <Check className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Un accompagnement sur mesure</h3>
                </div>
                
                <div className="bg-primary/5 p-6 rounded-lg text-center">
                  <div className="flex justify-center items-center mb-4">
                    <Check className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Une prise en charge clé en main</h3>
                </div>
                
                <div className="bg-primary/5 p-6 rounded-lg text-center">
                  <div className="flex justify-center items-center mb-4">
                    <Check className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Des stratégies optimisées pour votre sélection</h3>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Votre avenir au Canada commence ici</h3>
                <p className="text-lg mb-8">
                  Découvrez dès maintenant vos options et laissez-nous vous guider vers une installation réussie.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2">
                <MapPin className="h-6 w-6 text-primary" />
                Explorez nos services
              </h2>
              
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full p-3 bg-primary/10">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Entrée Express (hors Québec)</h3>
                      <p className="text-muted-foreground">
                        Le système Entrée Express permet aux travailleurs qualifiés de s'installer au Canada (hors Québec). 
                        Notre équipe vous aide à naviguer ce processus compétitif pour maximiser vos chances de sélection.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full p-3 bg-primary/10">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Programme de l'Expérience Québécoise (PEQ)</h3>
                      <p className="text-muted-foreground">
                        Le PEQ est destiné aux travailleurs temporaires et étudiants internationaux diplômés du Québec. 
                        Nous vous guidons à travers ce processus simplifié d'immigration permanente au Québec.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full p-3 bg-primary/10">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Programme Régulier des Travailleurs Qualifiés (PRTQ)</h3>
                      <p className="text-muted-foreground">
                        Le PRTQ s'adresse aux travailleurs qualifiés souhaitant s'installer au Québec. 
                        Notre expertise vous aide à naviguer ce programme et à préparer un dossier solide.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full p-3 bg-primary/10">
                      <UserCheck className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Accès à la citoyenneté canadienne</h3>
                      <p className="text-muted-foreground">
                        Après avoir obtenu votre résidence permanente, nous pouvons vous accompagner dans votre parcours vers la citoyenneté canadienne. 
                        Notre équipe vous guide à travers chaque étape du processus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-primary/10">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block p-3 bg-primary/20 rounded-full mb-6">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Évaluez dès maintenant vos options et lancez votre projet !</h2>
              <p className="text-lg mb-8">
                Prenez rendez-vous pour une consultation personnalisée afin d'évaluer votre éligibilité 
                et découvrir la meilleure stratégie pour votre projet d'immigration au Canada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact">Prendre rendez-vous</Link>
                </Button>
                <EvaluationButton size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 hover:text-primary" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BookingButton />
    </div>
  );
};

export default ImmigrationService;
