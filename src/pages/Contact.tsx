
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingButton from "@/components/BookingButton";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    toast({
      title: t("contact.messageSent"),
      description: t("contact.messageConfirmation"),
    });
    
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen flex flex-col bg-background overflow-hidden">
      <Header />
      <main className="flex-grow">
        <div className="pt-24 pb-12 px-6 bg-secondary/30">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("contact.title")}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("contact.description")}
            </p>
          </div>
        </div>

        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">{t("contact.infoTitle")}</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{t("contact.address")}</h3>
                      <p className="text-muted-foreground">
                       Lot G100Bis Moramanga Ambony<br />
                        Moramanga 514, Madagascar
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{t("contact.phone")}</h3>
                      <p className="text-muted-foreground">
                        +261 34 60 874 37
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{t("common.email")}</h3>
                      <p className="text-muted-foreground">
                        contact@conseilpro.mg
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{t("contact.hours")}</h3>
                      <p className="text-muted-foreground">
                        Lundi - Vendredi: 9h00 - 18h00<br />
                        Samedi: 10h00 - 15h00<br />
                        Dimanche: Fermé
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-xl overflow-hidden h-80 shadow-md">
                  <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d429.10654408498664!2d48.230839623752026!3d-18.950970242475105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d-18.950748994971885!2d48.23115250967815!5e1!3m2!1sfr!2smg!4v1741287253971!5m2!1sfr!2smg" 
                  width="800" 
                  height="600"  style={{ border: 0 }}  
                  allowFullScreen 
                  loading="lazy" 
                  ></iframe>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6">{t("contact.formTitle")}</h2>
                <form onSubmit={handleSubmit} className="space-y-6 glass-card p-8 rounded-xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">
                        {t("booking.fullName").split(" ")[0]}
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        {t("booking.fullName").split(" ")[1] || "Nom"}
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      {t("common.email")}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      {t("contact.phone")}
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      {t("contact.subject")}
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm"
                    >
                      <option value="">Sélectionner un sujet</option>
                      <option value="orientation">{t("services.counseling.title")}</option>
                      <option value="coaching">{t("services.coaching.title")}</option>
                      <option value="formation">{t("services.training.title")}</option>
                      <option value="recruitment">{t("services.recruitment.title")}</option>
                      <option value="immigration">{t("services.immigration.title")}</option>
                      <option value="other">{t("common.all")}</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      {t("contact.message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm"
                    ></textarea>
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                    {t("contact.sendMessage")}
                  </Button>
                </form>
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

export default Contact;
