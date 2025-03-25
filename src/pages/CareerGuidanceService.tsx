
import React from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingButton from "@/components/BookingButton";
import EvaluationButton from "@/components/EvaluationButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  FileText, Users, ChevronRight, CheckCircle, Star, Trophy, 
  Briefcase, FileCheck, GraduationCap, Search, BookOpen, Calendar 
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CareerGuidanceService = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Success stories
  const successStories = [
    {
      name: currentLang === 'fr' ? "Marie Dupont" : "Mary Smith",
      position: currentLang === 'fr' ? "Directrice Marketing" : "Marketing Director",
      company: "TechCorp",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww",
      quote: currentLang === 'fr' 
        ? "Après plusieurs années dans le même poste, je voulais évoluer mais ne savais pas comment m'y prendre. ConseilPro m'a aidée à créer un CV percutant et une stratégie de carrière qui a abouti à une promotion en seulement 3 mois."
        : "After several years in the same position, I wanted to evolve but didn't know how to go about it. ConseilPro helped me create a compelling resume and a career strategy that resulted in a promotion in just 3 months."
    },
    {
      name: currentLang === 'fr' ? "Thomas Laurent" : "Thomas Lawrence",
      position: currentLang === 'fr' ? "Développeur Senior" : "Senior Developer",
      company: "InnovateSoft",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww",
      quote: currentLang === 'fr' 
        ? "En transition de carrière, je n'arrivais pas à valoriser mes compétences. L'équipe de ConseilPro a transformé mon approche, m'a aidé à rédiger une lettre de motivation convaincante et à préparer mes entretiens. Résultat : j'ai décroché mon poste de rêve !"
        : "In career transition, I couldn't highlight my skills effectively. ConseilPro's team transformed my approach, helped me write a convincing cover letter, and prepared me for interviews. Result: I landed my dream job!"
    },
    {
      name: currentLang === 'fr' ? "Sophie Martin" : "Sophie Martin",
      position: currentLang === 'fr' ? "Consultante RH" : "HR Consultant",
      company: "GlobalHR",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      quote: currentLang === 'fr' 
        ? "Jeune diplômée sans expérience, je ne savais pas comment me démarquer. ConseilPro m'a guidée dans l'élaboration d'un CV mettant en avant mes compétences académiques et m'a coachée pour mes premiers entretiens. J'ai trouvé un emploi en moins de 2 mois !"
        : "As a young graduate with no experience, I didn't know how to stand out. ConseilPro guided me in developing a resume highlighting my academic skills and coached me for my first interviews. I found a job in less than 2 months!"
    }
  ];

  // Services options
  const serviceOptions = [
    {
      id: "cv",
      title: currentLang === 'fr' ? "CV Optimisé" : "Resume Optimization",
      icon: <FileText className="h-6 w-6 text-primary" />,
      description: currentLang === 'fr' 
        ? "Création ou refonte complète de votre CV pour maximiser son impact et attirer l'attention des recruteurs."
        : "Creation or complete redesign of your resume to maximize its impact and attract recruiters' attention."
    },
    {
      id: "cover",
      title: currentLang === 'fr' ? "Lettre de Motivation" : "Cover Letter",
      icon: <FileCheck className="h-6 w-6 text-primary" />,
      description: currentLang === 'fr'
        ? "Rédaction de lettres de motivation personnalisées qui valorisent votre candidature et vous démarquent."
        : "Writing personalized cover letters that enhance your application and make you stand out."
    },
    {
      id: "coaching",
      title: currentLang === 'fr' ? "Coaching Entretien" : "Interview Coaching",
      icon: <Users className="h-6 w-6 text-primary" />,
      description: currentLang === 'fr'
        ? "Préparation intensive aux entretiens avec simulations et feedback détaillé pour booster votre confiance."
        : "Intensive interview preparation with simulations and detailed feedback to boost your confidence."
    },
    {
      id: "strategy",
      title: currentLang === 'fr' ? "Stratégie de Carrière" : "Career Strategy",
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      description: currentLang === 'fr'
        ? "Élaboration d'un plan de carrière personnalisé avec objectifs à court, moyen et long terme."
        : "Development of a personalized career plan with short, medium and long-term objectives."
    },
    {
      id: "linkedin",
      title: "LinkedIn Optimisation",
      icon: <Search className="h-6 w-6 text-primary" />,
      description: currentLang === 'fr'
        ? "Optimisation de votre profil professionnel pour attirer les recruteurs et développer votre réseau."
        : "Optimization of your professional profile to attract recruiters and develop your network."
    }
  ];

  // Process steps
  const processSteps = [
    {
      number: "01",
      title: currentLang === 'fr' ? "Consultation initiale" : "Initial consultation",
      description: currentLang === 'fr'
        ? "Nous analysons votre parcours, vos compétences et vos aspirations professionnelles."
        : "We analyze your background, skills and professional aspirations."
    },
    {
      number: "02",
      title: currentLang === 'fr' ? "Élaboration du plan" : "Plan development",
      description: currentLang === 'fr'
        ? "Nous créons une stratégie sur mesure pour atteindre vos objectifs professionnels."
        : "We create a customized strategy to achieve your professional goals."
    },
    {
      number: "03",
      title: currentLang === 'fr' ? "Création des documents" : "Document creation",
      description: currentLang === 'fr'
        ? "Nous rédigeons votre CV, lettre de motivation et optimisons votre présence en ligne."
        : "We write your resume, cover letter and optimize your online presence."
    },
    {
      number: "04",
      title: currentLang === 'fr' ? "Coaching personnalisé" : "Personalized coaching",
      description: currentLang === 'fr'
        ? "Nous vous préparons aux entretiens et vous donnons les clés pour convaincre."
        : "We prepare you for interviews and give you the keys to convince."
    },
    {
      number: "05",
      title: currentLang === 'fr' ? "Suivi et ajustements" : "Follow-up and adjustments",
      description: currentLang === 'fr'
        ? "Nous vous accompagnons tout au long du processus avec un suivi régulier."
        : "We support you throughout the process with regular follow-up."
    }
  ];

  // FAQ items
  const faqItems = [
    {
      question: currentLang === 'fr' 
        ? "Combien de temps faut-il pour créer un CV professionnel ?" 
        : "How long does it take to create a professional resume?",
      answer: currentLang === 'fr'
        ? "Nous pouvons livrer un CV professionnel en 3 à 5 jours ouvrables après notre consultation initiale. Pour les demandes urgentes, nous proposons un service accéléré."
        : "We can deliver a professional resume within 3-5 business days after our initial consultation. For urgent requests, we offer an expedited service."
    },
    {
      question: currentLang === 'fr' 
        ? "Comment se déroulent les séances de coaching pour les entretiens ?" 
        : "How do the interview coaching sessions work?",
      answer: currentLang === 'fr'
        ? "Nos séances de coaching comprennent des simulations d'entretiens, un feedback détaillé, et des techniques pour gérer le stress. Nous adaptons notre approche à votre secteur d'activité et au poste visé."
        : "Our coaching sessions include interview simulations, detailed feedback, and stress management techniques. We adapt our approach to your industry and target position."
    },
    {
      question: currentLang === 'fr' 
        ? "Proposez-vous des services pour les personnes en reconversion professionnelle ?" 
        : "Do you offer services for people in career transition?",
      answer: currentLang === 'fr'
        ? "Absolument ! Nous sommes spécialisés dans l'accompagnement des personnes en reconversion professionnelle. Nous vous aidons à identifier vos compétences transférables et à les valoriser efficacement."
        : "Absolutely! We specialize in supporting people in career transition. We help you identify your transferable skills and highlight them effectively."
    },
    {
      question: currentLang === 'fr' 
        ? "Puis-je obtenir des modifications après la livraison de mon CV ?" 
        : "Can I get modifications after my resume is delivered?",
      answer: currentLang === 'fr'
        ? "Oui, nous offrons jusqu'à deux séries de révisions gratuites dans les 14 jours suivant la livraison finale de votre CV."
        : "Yes, we offer up to two rounds of free revisions within 14 days of the final delivery of your resume."
    }
  ];

  // Stats
  const stats = [
    { number: "94%", label: currentLang === 'fr' ? "taux de satisfaction client" : "client satisfaction rate" },
    { number: "78%", label: currentLang === 'fr' ? "clients qui trouvent un emploi en moins de 3 mois" : "clients who find a job in less than 3 months" },
    { number: "850+", label: currentLang === 'fr' ? "CV professionnels créés en 2023" : "professional resumes created in 2023" },
    { number: "65%", label: currentLang === 'fr' ? "d'augmentation moyenne du taux de réponse après refonte du CV" : "average increase in response rate after resume redesign" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-blue/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 opacity-30">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2070&q=80" 
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
          
          <div className="container relative mx-auto px-6 z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="text-white"
              >
                <Badge variant="outline" className="text-white border-white/30 bg-white/10 backdrop-blur-sm mb-6">
                  <Star className="w-3.5 h-3.5 mr-1" />
                  <span>{currentLang === 'fr' ? 'Service Premium' : 'Premium Service'}</span>
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  {currentLang === 'fr' 
                    ? "Donnez un nouvel élan à votre carrière"
                    : "Give your career new momentum"}
                </h1>
                <p className="text-xl mb-8 text-white/90 leading-relaxed">
                  {currentLang === 'fr'
                    ? "Vous cherchez à postuler mais ne savez pas par où commencer? Nos experts vous accompagnent dans la création de CV percutants, de lettres de motivation convaincantes et vous préparent aux entretiens."
                    : "Looking to apply for jobs but don't know where to start? Our experts help you create impactful resumes, convincing cover letters and prepare you for interviews."}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    <Calendar className="mr-2 h-5 w-5" />
                    {currentLang === 'fr' ? "Consultation gratuite" : "Free consultation"}
                  </Button>
                  <Link to="#services">
                    <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                      {currentLang === 'fr' ? "Découvrir nos services" : "Discover our services"}
                    </Button>
                  </Link>
                </div>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="relative mx-auto lg:mx-0 max-w-lg"
              >
                <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/20">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1770&q=80" 
                    alt="Career Guidance" 
                    className="w-full h-auto aspect-[4/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white text-sm font-medium bg-primary/40 backdrop-blur-sm p-2 rounded inline-block">
                      {currentLang === 'fr' ? "Taux de réussite de 94%" : "94% success rate"}
                    </p>
                  </div>
                </div>
                
                {/* Floating card */}
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl max-w-[280px]">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Trophy className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">
                        {currentLang === 'fr' 
                          ? "Plus de 850 professionnels accompagnés" 
                          : "Over 850 professionals guided"}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {currentLang === 'fr' ? "En 2023" : "In 2023"}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="p-6 rounded-lg"
                >
                  <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-6 bg-white">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
                <Briefcase className="text-primary h-5 w-5" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {currentLang === 'fr' ? "Nos services d'accompagnement" : "Our guidance services"}
              </h2>
              <p className="text-lg text-muted-foreground">
                {currentLang === 'fr' 
                  ? "Des solutions personnalisées pour vous aider à avancer dans votre carrière et atteindre vos objectifs professionnels."
                  : "Personalized solutions to help you advance in your career and achieve your professional goals."}
              </p>
            </div>

            <Tabs defaultValue="cv" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 h-auto bg-muted mb-8">
                {serviceOptions.map((option) => (
                  <TabsTrigger 
                    key={option.id} 
                    value={option.id}
                    className="flex flex-col gap-2 py-4 h-auto data-[state=active]:bg-primary/10"
                  >
                    {option.icon}
                    <span>{option.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {serviceOptions.map((option) => (
                <TabsContent key={option.id} value={option.id}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-xl md:text-2xl">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          {option.icon}
                        </div>
                        {option.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <p className="text-muted-foreground mb-6">{option.description}</p>
                          <ul className="space-y-3">
                            {option.id === "cv" && [
                              currentLang === 'fr' ? "Analyse approfondie de votre parcours" : "In-depth analysis of your background",
                              currentLang === 'fr' ? "Mise en valeur de vos compétences clés" : "Highlighting your key skills",
                              currentLang === 'fr' ? "Design professionnel et adapté à votre secteur" : "Professional design adapted to your sector",
                              currentLang === 'fr' ? "Optimisation pour les ATS des recruteurs" : "Optimization for recruiters' ATS systems"
                            ].map((item, i) => (
                              <li key={i} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                            
                            {option.id === "cover" && [
                              currentLang === 'fr' ? "Personnalisation pour chaque offre d'emploi" : "Customization for each job offer",
                              currentLang === 'fr' ? "Structure persuasive et engageante" : "Persuasive and engaging structure",
                              currentLang === 'fr' ? "Mise en avant de votre motivation" : "Highlighting your motivation",
                              currentLang === 'fr' ? "Relecture et optimisation" : "Proofreading and optimization"
                            ].map((item, i) => (
                              <li key={i} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                            
                            {option.id === "coaching" && [
                              currentLang === 'fr' ? "Préparation aux questions difficiles" : "Preparation for difficult questions",
                              currentLang === 'fr' ? "Simulations d'entretiens vidéo" : "Video interview simulations",
                              currentLang === 'fr' ? "Feedback personnalisé et conseils d'amélioration" : "Personalized feedback and improvement tips",
                              currentLang === 'fr' ? "Techniques de gestion du stress" : "Stress management techniques"
                            ].map((item, i) => (
                              <li key={i} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                            
                            {option.id === "strategy" && [
                              currentLang === 'fr' ? "Évaluation de vos forces et faiblesses" : "Assessment of your strengths and weaknesses",
                              currentLang === 'fr' ? "Définition d'objectifs professionnels clairs" : "Definition of clear professional goals",
                              currentLang === 'fr' ? "Plan d'action personnalisé" : "Personalized action plan",
                              currentLang === 'fr' ? "Suivi régulier des progrès" : "Regular progress monitoring"
                            ].map((item, i) => (
                              <li key={i} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                            
                            {option.id === "linkedin" && [
                              currentLang === 'fr' ? "Photo et bannière professionnelles" : "Professional photo and banner",
                              currentLang === 'fr' ? "Rédaction d'un résumé percutant" : "Writing an impactful summary",
                              currentLang === 'fr' ? "Optimisation pour le référencement" : "Optimization for search engines",
                              currentLang === 'fr' ? "Stratégie de networking efficace" : "Effective networking strategy"
                            ].map((item, i) => (
                              <li key={i} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="rounded-lg overflow-hidden h-full">
                          {option.id === "cv" && (
                            <img 
                              src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1770&q=80" 
                              alt="CV Example"
                              className="w-full h-full object-cover"
                            />
                          )}
                          {option.id === "cover" && (
                            <img 
                              src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1674&q=80" 
                              alt="Cover Letter Example"
                              className="w-full h-full object-cover"
                            />
                          )}
                          {option.id === "coaching" && (
                            <img 
                              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1769&q=80" 
                              alt="Interview Coaching"
                              className="w-full h-full object-cover"
                            />
                          )}
                          {option.id === "strategy" && (
                            <img 
                              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1770&q=80" 
                              alt="Career Strategy"
                              className="w-full h-full object-cover"
                            />
                          )}
                          {option.id === "linkedin" && (
                            <img 
                              src="https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&w=1674&q=80" 
                              alt="LinkedIn Optimization"
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="bg-primary hover:bg-primary/90">
                        {currentLang === 'fr' ? "En savoir plus" : "Learn more"}
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
                <GraduationCap className="text-primary h-5 w-5" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {currentLang === 'fr' ? "Notre méthodologie" : "Our methodology"}
              </h2>
              <p className="text-lg text-muted-foreground">
                {currentLang === 'fr'
                  ? "Un processus structuré et éprouvé pour vous accompagner vers la réussite professionnelle."
                  : "A structured and proven process to guide you towards professional success."}
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-12"
              >
                {processSteps.map((step, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeInUp}
                    className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                  >
                    <div className="w-full md:w-1/2 md:text-right">
                      <div className={`md:p${index % 2 === 0 ? 'r' : 'l'}-8`}>
                        <div className="rounded-full w-16 h-16 flex items-center justify-center bg-primary/10 mb-6 mx-auto md:mx-0 md:ml-auto">
                          <span className="text-primary font-bold text-xl">{step.number}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                    <div className="z-10 w-14 h-14 flex items-center justify-center rounded-full bg-primary text-white shadow-lg hidden md:flex">
                      <span>{index + 1}</span>
                    </div>
                    <div className="w-full md:w-1/2 hidden md:block"></div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
                <Users className="text-primary h-5 w-5" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {currentLang === 'fr' ? "Histoires de réussite" : "Success stories"}
              </h2>
              <p className="text-lg text-muted-foreground">
                {currentLang === 'fr'
                  ? "Découvrez comment notre accompagnement a transformé la carrière de nos clients."
                  : "Discover how our guidance has transformed our clients' careers."}
              </p>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {successStories.map((story, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src={story.image} 
                      alt={story.name}
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div>
                        <h3 className="font-bold text-lg">{story.name}</h3>
                        <p className="text-sm text-muted-foreground">{story.position} @ {story.company}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic mb-4">"{story.quote}"</p>
                    <Separator className="mb-4" />
                    <Button variant="link" className="p-0 h-auto text-primary">
                      {currentLang === 'fr' ? "Lire l'histoire complète" : "Read full story"}
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
                <BookOpen className="text-primary h-5 w-5" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {currentLang === 'fr' ? "Questions fréquentes" : "Frequently asked questions"}
              </h2>
              <p className="text-lg text-muted-foreground">
                {currentLang === 'fr'
                  ? "Trouvez des réponses aux questions les plus courantes sur nos services d'accompagnement professionnel."
                  : "Find answers to the most common questions about our professional guidance services."}
              </p>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              {faqItems.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <h3 className="font-bold text-lg mb-3">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-4xl">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-gradient-to-r from-primary/10 to-blue/10 p-8 md:p-12 rounded-2xl text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {currentLang === 'fr' 
                  ? "Prêt à booster votre carrière ?" 
                  : "Ready to boost your career?"}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                {currentLang === 'fr'
                  ? "Prenez rendez-vous pour une consultation gratuite de 30 minutes et discutez de vos objectifs professionnels avec nos experts."
                  : "Schedule a free 30-minute consultation and discuss your professional goals with our experts."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Calendar className="mr-2 h-5 w-5" />
                  {currentLang === 'fr' ? "Consultation gratuite" : "Free consultation"}
                </Button>
                <Button size="lg" variant="outline">
                  {currentLang === 'fr' ? "Voir nos tarifs" : "View our pricing"}
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <BookingButton />
    </div>
  );
};

export default CareerGuidanceService;
