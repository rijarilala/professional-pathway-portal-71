
import React from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingButton from "@/components/BookingButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardCheck, Search, ListChecks, BadgeDollarSign, Users, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const CounselingService = () => {
  const { t } = useTranslation();

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

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-brown/10 to-blue/10 py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brown-dark">
                  {t("services.counseling.title")}
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  {t("services.counseling.detailedDescription")}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-brown to-blue text-white">
                    {t("services.bookConsultation")}
                  </Button>
                  <Link to="#pricing">
                    <Button variant="outline" size="lg">
                      {t("services.viewPricing")}
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative mx-auto lg:mx-0 max-w-md">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue/20 rounded-full blur-xl"></div>
                <div className="relative bg-white rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Professional Counseling" 
                    className="w-full h-auto aspect-[4/3] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("services.counseling.featuresTitle")}</h2>
              <p className="text-lg text-muted-foreground">
                {t("services.counseling.featuresDescription")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              <Card className="border-primary/10 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
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

              <Card className="border-primary/10 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
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

              <Card className="border-primary/10 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
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

              <Card className="border-primary/10 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
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
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("services.counseling.processTitle")}</h2>
              <p className="text-lg text-muted-foreground">
                {t("services.counseling.processDescription")}
              </p>
            </div>

            <div className="relative">
              {/* Connecting line */}
              <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-primary/20 transform -translate-x-1/2 hidden md:block"></div>
              
              <div className="space-y-12 relative">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-full md:w-1/2 md:text-right">
                    <div className="md:pr-8">
                      <h3 className="text-xl font-bold mb-3">{t("services.counseling.process.step1.title")}</h3>
                      <p className="text-muted-foreground">{t("services.counseling.process.step1.description")}</p>
                    </div>
                  </div>
                  <div className="z-10 w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white shadow-lg">
                    <span>1</span>
                  </div>
                  <div className="w-full md:w-1/2"></div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-full md:w-1/2"></div>
                  <div className="z-10 w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white shadow-lg">
                    <span>2</span>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="md:pl-8">
                      <h3 className="text-xl font-bold mb-3">{t("services.counseling.process.step2.title")}</h3>
                      <p className="text-muted-foreground">{t("services.counseling.process.step2.description")}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-full md:w-1/2 md:text-right">
                    <div className="md:pr-8">
                      <h3 className="text-xl font-bold mb-3">{t("services.counseling.process.step3.title")}</h3>
                      <p className="text-muted-foreground">{t("services.counseling.process.step3.description")}</p>
                    </div>
                  </div>
                  <div className="z-10 w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white shadow-lg">
                    <span>3</span>
                  </div>
                  <div className="w-full md:w-1/2"></div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-full md:w-1/2"></div>
                  <div className="z-10 w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white shadow-lg">
                    <span>4</span>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="md:pl-8">
                      <h3 className="text-xl font-bold mb-3">{t("services.counseling.process.step4.title")}</h3>
                      <p className="text-muted-foreground">{t("services.counseling.process.step4.description")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-3">
                <BadgeDollarSign className="h-8 w-8 text-primary" />
                {t("services.counseling.pricingTitle")}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t("services.counseling.pricingDescription")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <Card key={index} className={`${plan.popular ? 'border-primary shadow-md relative' : 'border-gray-200'}`}>
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
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-primary/10">
          <div className="max-w-4xl mx-auto text-center">
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
        </section>
      </main>
      <Footer />
      <BookingButton />
    </div>
  );
};

export default CounselingService;
