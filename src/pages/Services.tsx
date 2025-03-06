
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesComponent from "@/components/Services";
import BookingButton from "@/components/BookingButton";

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background overflow-hidden">
      <Header />
      <main className="flex-grow">
        <div className="pt-24 pb-12 px-6 bg-secondary/30">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Services</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Découvrez notre gamme complète de services professionnels adaptés à vos besoins
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
