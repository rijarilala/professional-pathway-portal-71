import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Twitter, Linkedin, Facebook, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  const quickLinks = [
    { nameKey: "navigation.home", path: "/" },
    { nameKey: "navigation.services", path: "/services" },
    { nameKey: "navigation.about", path: "/about" },
    { nameKey: "navigation.blog", path: "/blog" },
    { nameKey: "navigation.contact", path: "/contact" },
  ];

  const services = [
    { nameKey: "services.counseling.title", path: "/services" },
    { nameKey: "services.coaching.title", path: "/services" },
    { nameKey: "services.training.title", path: "/services" },
    { nameKey: "services.recruitment.title", path: "/services" },
    { nameKey: "services.immigration.title", path: "/services" },
  ];

  const socialLinks = [
    { icon: <Facebook size={18} />, path: "#", label: "Facebook" },
    { icon: <Twitter size={18} />, path: "#", label: "Twitter" },
    { icon: <Linkedin size={18} />, path: "#", label: "LinkedIn" },
    { icon: <Instagram size={18} />, path: "#", label: "Instagram" },
    { icon: <Mail size={18} />, path: "#", label: "Email" },
  ];

  return (
    <footer className="bg-gradient-to-r from-brown/5 to-blue/5 pt-16 pb-8 px-6 border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-brown to-blue bg-clip-text text-transparent">
                Great Pathway
              </span>
            </Link>
            <p className="text-muted-foreground mb-6">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  aria-label={link.label}
                  className="w-8 h-8 rounded-full bg-gradient-to-r from-brown/10 to-blue/10 hover:from-brown/20 hover:to-blue/20 flex items-center justify-center text-blue transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-brown">{t("footer.quickLinks")}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-muted-foreground hover:text-blue transition-colors"
                  >
                    {t(link.nameKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-blue">{t("footer.ourServices")}</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="text-muted-foreground hover:text-brown transition-colors"
                  >
                    {t(service.nameKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 bg-gradient-to-r from-brown to-blue bg-clip-text text-transparent">{t("footer.contact")}</h4>
            <address className="not-italic space-y-3 text-muted-foreground">
            Lot G100Bis Moramanga Ambony<br />
            Moramanga 514, Madagascar
              <p className="hover:text-blue">+261 34 60 874 37</p>
              <p className="hover:text-brown">contact@conseilpro.mg</p>
            </address>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/30 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Great Pathway. {t("footer.rights")}</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link to="/privacy" className="hover:text-brown">{t("footer.privacy")}</Link>
            <Link to="/terms" className="hover:text-blue">{t("footer.terms")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
