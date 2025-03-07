
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("navigation.home"), path: "/" },
    { name: t("navigation.services"), path: "/services" },
    { name: t("navigation.about"), path: "/about" },
    { name: t("navigation.blog"), path: "/blog" },
    { name: t("navigation.contact"), path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-brown/20"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold brown-blue-accent">
            ConseilPro
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-foreground/80 hover:text-blue font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <LanguageSwitcher />
          <Button className="bg-gradient-to-r from-brown to-blue hover:from-brown/90 hover:to-blue/90 text-white rounded-md shadow-md hover:shadow-lg transition-all">
            {t("common.appointment")}
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <button
            className="text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 pt-20 px-6 md:hidden transform transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-foreground/80 hover:text-blue font-medium text-lg py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            className="bg-gradient-to-r from-brown to-blue hover:from-brown/90 hover:to-blue/90 text-white w-full py-6 rounded-md shadow-md hover:shadow-lg transition-all mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t("common.appointment")}
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
