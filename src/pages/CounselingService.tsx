
import React from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingButton from "@/components/BookingButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardCheck, Search, ListChecks, BadgeDollarSign, Users, Calendar, CheckCircle, Award, BriefcaseBusiness, Trophy, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CounselingService = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const pricingPlans = [
    {
      title: "services.counseling.pricing.basic.title",
      description: "services.counseling.pricing.basic.description",
      price: "services.counseling.pricing.basic.price",
      features: "services.counseling.pricing.basic.features",
      popular: false
    },
    {
      title: "services.counseling.pricing.standard.title",
      description: "services.counseling.pricing.standard.description",
      price: "services.counseling.pricing.standard.price",
      features: "services.counseling.pricing.standard.features",
      popular: true
    },
    {
      title: "services.counseling.pricing.premium.title",
      description: "services.counseling.pricing.premium.description",
      price: "services.counseling.pricing.premium.price",
      features: "services.counseling.pricing.premium.features",
      popular: false
    }
  ];

  // Testimonials to establish credibility
  const testimonials = [
    {
      quote: currentLang === 'fr' 
        ? "ConseilPro m'a guidé à travers mon parcours professionnel avec expertise et attention. Leur accompagnement m'a permis de trouver ma voie."
        : "ConseilPro guided me through my professional journey with expertise and care. Their support helped me find my way.",
      author: "Sophie Martin",
      position: currentLang === 'fr' ? "Responsable Marketing" : "Marketing Manager",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
    },
    {
      quote: currentLang === 'fr' 
        ? "Leur approche personnalisée et leurs conseils stratégiques ont été essentiels pour ma reconversion professionnelle."
        : "Their personalized approach and strategic advice were essential for my career change.",
      author: "Jean Dupont",
      position: currentLang === 'fr' ? "Ingénieur Système" : "System Engineer",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D"
    }
  ];

  // Stats to showcase success
  const stats = [
    { number: "94%", description: currentLang === 'fr' ? "de satisfaction client" : "client satisfaction" },
    { number: "850+", description: currentLang === 'fr' ? "clients accompagnés" : "clients assisted" },
    { number: "78%", description: currentLang === 'fr' ? "de reconversion réussie" : "successful career changes" },
    { number: "15+", description: currentLang === 'fr' ? "années d'expérience" : "years of experience" }
  ];

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

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section - Premium Design */}
        <section className="relative py-20 overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-brown/80 to-blue/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
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
                <div className="inline-block px-3 py-1 text-sm rounded-full bg-white/20 backdrop-blur-sm mb-6 border border-white/10">
                  <Star className="w-4 h-4 inline mr-1" />
                  <span>{currentLang === 'fr' ? 'Service Premium' : 'Premium Service'}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  {t("services.counseling.title")}
                </h1>
                <p className="text-lg mb-8 text-white/90">
                  {t("services.counseling.detailedDescription")}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-white text-brown hover:bg-white/90">
                    <Calendar className="mr-2 h-5 w-5" />
                    {t("services.bookConsultation")}
                  </Button>
                  <Link to="#pricing">
                    <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                      {t("services.viewPricing")}
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
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Professional Counseling" 
                    className="w-full h-auto aspect-[4/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-white text-sm font-medium">{currentLang === 'fr' ? 'Consultations disponibles' : 'Consultations available'}</span>
                    </div>
                  </div>
                </div>
                
                {/* Floating card */}
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl max-w-[240px]">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Trophy className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{currentLang === 'fr' ? "Reconnue comme agence d'élite" : "Recognized as Elite Agency"}</p>
                      <p className="text-xs text-muted-foreground">{currentLang === 'fr' ? "3 années consécutives" : "3 consecutive years"}</p>
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
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Section with modern design */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
                <CheckCircle className="text-primary h-5 w-5" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("services.counseling.featuresTitle")}</h2>
              <p className="text-lg text-muted-foreground">
                {t("services.counseling.featuresDescription")}
              </p>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
            >
              <motion.div variants={fadeInUp}>
                <Card className="border-primary/10 hover:shadow-lg transition-all group h-full">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <ClipboardCheck className="text-primary" size={24} />
                    </div>
                    <CardTitle>{t("services.counseling.features.assessment.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {t("services.counseling.features.assessment.description")}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="border-primary/10 hover:shadow-lg transition-all group h-full">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <ListChecks className="text-primary" size={24} />
                    </div>
                    <CardTitle>{t("services.counseling.features.tests.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {t("services.counseling.features.tests.description")}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="border-primary/10 hover:shadow-lg transition-all group h-full">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Search className="text-primary" size={24} />
                    </div>
                    <CardTitle>{t("services.counseling.features.market.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {t("services.counseling.features.market.description")}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="border-primary/10 hover:shadow-lg transition-all group h-full">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <ListChecks className="text-primary" size={24} />
                    </div>
                    <CardTitle>{t("services.counseling.features.plan.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {t("services.counseling.features.plan.description")}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials to establish credibility */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
                <Award className="text-primary h-5 w-5" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {currentLang === 'fr' ? "Ce que disent nos clients" : "What our clients say"}
              </h2>
              <p className="text-lg text-muted-foreground">
                {currentLang === 'fr' 
                  ? "Découvrez les témoignages de professionnels qui ont fait confiance à notre expertise."
                  : "Discover testimonials from professionals who trusted our expertise."}
              </p>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {testimonials.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 relative"
                >
                  <div className="absolute -top-4 -left-4 text-6xl text-primary/20">"</div>
                  <div className="relative z-10">
                    <p className="text-gray-700 mb-6 relative z-10">{item.quote}</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src={item.image} 
                          alt={item.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">{item.author}</p>
                        <p className="text-sm text-muted-foreground">{item.position}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process Section with visual timeline */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
                <BriefcaseBusiness className="text-primary h-5 w-5" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("services.counseling.processTitle")}</h2>
              <p className="text-lg text-muted-foreground">
                {t("services.counseling.processDescription")}
              </p>
            </div>

            <div className="relative">
              {/* Connecting line */}
              <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-primary/30 transform -translate-x-1/2 hidden md:block"></div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-16 relative"
              >
                <motion.div 
                  variants={fadeInUp}
                  className="flex flex-col md:flex-row items-center gap-8"
                >
                  <div className="w-full md:w-1/2 md:text-right">
                    <div className="md:pr-8">
                      <span className="inline-block px-2 py-1 rounded-md bg-primary/10 text-primary text-sm font-medium mb-2">
                        {currentLang === 'fr' ? 'Étape 1' : 'Step 1'}
                      </span>
                      <h3 className="text-xl font-bold mb-3">{t("services.counseling.process.step1.title")}</h3>
                      <p className="text-muted-foreground">{t("services.counseling.process.step1.description")}</p>
                    </div>
                  </div>
                  <div className="z-10 w-14 h-14 flex items-center justify-center rounded-full bg-primary text-white shadow-lg">
                    <span>1</span>
                  </div>
                  <div className="w-full md:w-1/2 hidden md:block"></div>
                </motion.div>

                <motion.div 
                  variants={fadeInUp}
                  className="flex flex-col md:flex-row items-center gap-8"
                >
                  <div className="w-full md:w-1/2 hidden md:block"></div>
                  <div className="z-10 w-14 h-14 flex items-center justify-center rounded-full bg-primary text-white shadow-lg">
                    <span>2</span>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="md:pl-8">
                      <span className="inline-block px-2 py-1 rounded-md bg-primary/10 text-primary text-sm font-medium mb-2">
                        {currentLang === 'fr' ? 'Étape 2' : 'Step 2'}
                      </span>
                      <h3 className="text-xl font-bold mb-3">{t("services.counseling.process.step2.title")}</h3>
                      <p className="text-muted-foreground">{t("services.counseling.process.step2.description")}</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  variants={fadeInUp}
                  className="flex flex-col md:flex-row items-center gap-8"
                >
                  <div className="w-full md:w-1/2 md:text-right">
                    <div className="md:pr-8">
                      <span className="inline-block px-2 py-1 rounded-md bg-primary/10 text-primary text-sm font-medium mb-2">
                        {currentLang === 'fr' ? 'Étape 3' : 'Step 3'}
                      </span>
                      <h3 className="text-xl font-bold mb-3">{t("services.counseling.process.step3.title")}</h3>
                      <p className="text-muted-foreground">{t("services.counseling.process.step3.description")}</p>
                    </div>
                  </div>
                  <div className="z-10 w-14 h-14 flex items-center justify-center rounded-full bg-primary text-white shadow-lg">
                    <span>3</span>
                  </div>
                  <div className="w-full md:w-1/2 hidden md:block"></div>
                </motion.div>

                <motion.div 
                  variants={fadeInUp}
                  className="flex flex-col md:flex-row items-center gap-8"
                >
                  <div className="w-full md:w-1/2 hidden md:block"></div>
                  <div className="z-10 w-14 h-14 flex items-center justify-center rounded-full bg-primary text-white shadow-lg">
                    <span>4</span>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="md:pl-8">
                      <span className="inline-block px-2 py-1 rounded-md bg-primary/10 text-primary text-sm font-medium mb-2">
                        {currentLang === 'fr' ? 'Étape 4' : 'Step 4'}
                      </span>
                      <h3 className="text-xl font-bold mb-3">{t("services.counseling.process.step4.title")}</h3>
                      <p className="text-muted-foreground">{t("services.counseling.process.step4.description")}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Interactive Image Gallery */}
        <section className="py-20 px-6 bg-brown/5">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {currentLang === 'fr' ? "Notre Environnement de Travail" : "Our Working Environment"}
              </h2>
              <p className="text-lg text-muted-foreground">
                {currentLang === 'fr' 
                  ? "Découvrez nos espaces de conseil conçus pour votre confort et votre réussite professionnelle."
                  : "Discover our counseling spaces designed for your comfort and professional success."}
              </p>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <motion.div variants={fadeInUp} className="md:col-span-2 rounded-xl overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
                  alt="Modern office space"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div variants={fadeInUp} className="rounded-xl overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
                  alt="Digital counseling"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div variants={fadeInUp} className="rounded-xl overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1738&q=80" 
                  alt="Career analysis tools"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div variants={fadeInUp} className="md:col-span-2 rounded-xl overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1744&q=80" 
                  alt="Coaching session"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-6 bg-white">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
                <BadgeDollarSign className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t("services.counseling.pricingTitle")}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t("services.counseling.pricingDescription")}
              </p>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {pricingPlans.map((plan, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className={`${plan.popular ? 'border-primary shadow-md relative' : 'border-gray-200'} h-full`}>
                    {plan.popular && (
                      <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm rounded-bl-lg rounded-tr-lg font-medium">
                        {t("services.counseling.pricing.popular")}
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle>{t(plan.title)}</CardTitle>
                      <CardDescription>{t(plan.description)}</CardDescription>
                      <div className="mt-6">
                        <span className="text-3xl font-bold">{t(plan.price)}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {t(plan.features, { returnObjects: true }) && 
                          Array.isArray(t(plan.features, { returnObjects: true })) &&
                          (t(plan.features, { returnObjects: true }) as string[]).map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <svg className="h-5 w-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span>{feature}</span>
                            </li>
                          ))
                        }
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : 'bg-gray-800 hover:bg-gray-700'}`}>
                        {t("services.counseling.pricing.selectPlan")}
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-primary/10 to-blue/10">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="bg-white p-10 rounded-2xl shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("services.counseling.ctaTitle")}</h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                {t("services.counseling.ctaDescription")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Calendar className="mr-2 h-5 w-5" />
                  {t("services.bookConsultation")}
                </Button>
                <Button size="lg" variant="outline">
                  <Users className="mr-2 h-5 w-5" />
                  {t("services.contactTeam")}
                </Button>
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

export default CounselingService;
