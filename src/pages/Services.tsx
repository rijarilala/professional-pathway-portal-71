
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesComponent from "@/components/Services";
import BookingButton from "@/components/BookingButton";
import { useTranslation } from "react-i18next";

const ServicesPage = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen flex flex-col bg-background overflow-hidden">
      <Header />
      <main className="flex-grow">
        <div className="pt-24 pb-12 px-6 bg-brown/10">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brown-dark">{t("services.title")}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("services.description")}
            </p>
          </div>
        </div>
        <ServicesComponent />
      </main>
      <Footer />
      <BookingButton />
    </div>
  );
};

export default ServicesPage;
