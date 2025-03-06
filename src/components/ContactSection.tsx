
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message envoyé !",
        description: "Nous vous contacterons dans les plus brefs délais.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone size={20} className="text-primary" />,
      title: "Téléphone",
      details: "+26134 60 874 37",
    },
    {
      icon: <Mail size={20} className="text-primary" />,
      title: "Email",
      details: "contact@conseilpro.mg",
    },
    {
      icon: <MapPin size={20} className="text-primary" />,
      title: "Adresse",
      details: "Lot G100Bis Moramanga Ambony Moramanga 514, Madagascar",
    },
    {
      icon: <Clock size={20} className="text-primary" />,
      title: "Horaires",
      details: "Lun - Ven: 9h - 18h",
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-[radial-gradient(circle_800px_at_30%_700px,rgba(120,119,198,0.15),transparent)]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contactez-nous</h2>
          <p className="text-lg text-muted-foreground">
            Vous avez une question ou souhaitez prendre rendez-vous ? N'hésitez pas à nous contacter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-card p-8 md:p-10 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Envoyez-nous un message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nom complet <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Sujet <span className="text-red-500">*</span>
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Objet de votre message"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Votre message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px]"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full h-12 bg-primary hover:bg-primary/90 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Nos coordonnées</h3>
              <p className="text-muted-foreground mb-8">
                N'hésitez pas à nous contacter pour toute information ou pour prendre rendez-vous. Notre équipe est à votre disposition pour répondre à vos questions.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{info.title}</h4>
                      <p className="text-muted-foreground">{info.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-xl mt-8 lg:mt-0">
              <h4 className="font-bold mb-3">Prenez rendez-vous en ligne</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Réservez directement un créneau pour une consultation avec l'un de nos experts.
              </p>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Réserver maintenant
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
