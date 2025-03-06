
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Twitter, Linkedin, Facebook, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Accueil", path: "/" },
    { name: "Services", path: "/#services" },
    { name: "À propos", path: "/#about" },
    { name: "Blog", path: "/#blog" },
    { name: "Contact", path: "/#contact" },
  ];

  const services = [
    { name: "Conseil et Orientation", path: "/#services" },
    { name: "Coaching Professionnel", path: "/#services" },
    { name: "Formation", path: "/#services" },
    { name: "Recrutement", path: "/#services" },
    { name: "Immigration", path: "/#services" },
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
                ConseilPro
              </span>
            </Link>
            <p className="text-muted-foreground mb-6">
              Cabinet de conseil spécialisé en orientation professionnelle, coaching, formation, recrutement et immigration.
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
            <h4 className="font-bold text-lg mb-6 text-brown">Liens rapides</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-muted-foreground hover:text-blue transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-blue">Nos services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="text-muted-foreground hover:text-brown transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 bg-gradient-to-r from-brown to-blue bg-clip-text text-transparent">Contact</h4>
            <address className="not-italic space-y-3 text-muted-foreground">
              <p>123 Avenue des Champs-Élysées</p>
              <p>75008 Paris, France</p>
              <p className="hover:text-blue">+33 1 23 45 67 89</p>
              <p className="hover:text-brown">contact@conseilpro.fr</p>
            </address>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/30 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} ConseilPro. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link to="/privacy" className="hover:text-brown">Politique de confidentialité</Link>
            <Link to="/terms" className="hover:text-blue">Conditions d'utilisation</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
