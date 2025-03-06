
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingButton from "@/components/BookingButton";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez-Nous</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Notre équipe est à votre écoute pour répondre à toutes vos questions
            </p>
          </div>
        </div>

        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Nos Coordonnées</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Adresse</h3>
                      <p className="text-muted-foreground">
                        123 Avenue des Champs-Élysées<br />
                        75008 Paris, France
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Téléphone</h3>
                      <p className="text-muted-foreground">
                        +33 1 23 45 67 89
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-muted-foreground">
                        contact@conseilpro.fr
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Horaires d'ouverture</h3>
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047342344!2d2.2952556163440213!3d48.87065100762738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc4f8f3049b%3A0xcbb47907ba56de50!2sAv.%20des%20Champs-%C3%89lys%C3%A9es%2C%2075008%20Paris%2C%20France!5e0!3m2!1sen!2sus!4v1653395335835!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    title="Notre localisation"
                  ></iframe>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
                <form onSubmit={handleSubmit} className="space-y-6 glass-card p-8 rounded-xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">
                        Prénom
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
                        Nom
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
                      Email
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
                      Téléphone
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
                      Sujet
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm"
                    >
                      <option value="">Sélectionner un sujet</option>
                      <option value="orientation">Conseil et Orientation</option>
                      <option value="coaching">Coaching Professionnel</option>
                      <option value="formation">Formation</option>
                      <option value="recruitment">Recrutement</option>
                      <option value="immigration">Immigration</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
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
                    Envoyer
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
