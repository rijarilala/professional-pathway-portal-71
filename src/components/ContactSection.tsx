
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
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
        title: t("contact.messageSent"),
        description: t("contact.messageConfirmation"),
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone size={20} className="text-primary" />,
      title: t("contact.phone"),
      details: "+26134 60 874 37",
    },
    {
      icon: <Mail size={20} className="text-primary" />,
      title: t("common.email"),
      details: "contact@conseilpro.mg",
    },
    {
      icon: <MapPin size={20} className="text-primary" />,
      title: t("contact.address"),
      details: "Lot G100Bis Moramanga Ambony Moramanga 514, Madagascar",
    },
    {
      icon: <Clock size={20} className="text-primary" />,
      title: t("contact.hours"),
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("contact.title")}</h2>
          <p className="text-lg text-muted-foreground">
            {t("contact.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-card p-8 md:p-10 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">{t("contact.formTitle")}</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    {t("contact.name")} <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder={t("contact.name")}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    {t("common.email")} <span className="text-red-500">*</span>
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
                  {t("contact.subject")} <span className="text-red-500">*</span>
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder={t("contact.subject")}
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  {t("contact.message")} <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={t("contact.message")}
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
                {isSubmitting ? t("contact.sendingMessage") : t("contact.sendMessage")}
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">{t("contact.infoTitle")}</h3>
              <p className="text-muted-foreground mb-8">
                {t("contact.infoDescription")}
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
              <h4 className="font-bold mb-3">{t("contact.appointmentTitle")}</h4>
              <p className="text-sm text-muted-foreground mb-4">
                {t("contact.appointmentDescription")}
              </p>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                {t("contact.appointmentCta")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
