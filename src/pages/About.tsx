
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingButton from "@/components/BookingButton";
import { Users, Award, Clock, Briefcase } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-background overflow-hidden">
      <Header />
      <main className="flex-grow">
        <div className="pt-24 pb-12 px-6 bg-gradient-to-r from-brown/10 to-blue/10">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-brown to-blue bg-clip-text text-transparent">{t("about.title")}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("about.description")}
            </p>
          </div>
        </div>

        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-brown">{t("about.mission.title")}</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {t("about.mission.description1")}
                </p>
                <p className="text-lg text-muted-foreground">
                  {t("about.mission.description2")}
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Notre équipe en réunion" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gradient-to-r from-brown/5 to-blue/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-brown to-blue bg-clip-text text-transparent">{t("about.values.title")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Users className="h-10 w-10 text-brown" />,
                  titleKey: "about.values.excellence.title",
                  descriptionKey: "about.values.excellence.description"
                },
                {
                  icon: <Award className="h-10 w-10 text-blue" />,
                  titleKey: "about.values.listening.title",
                  descriptionKey: "about.values.listening.description"
                },
                {
                  icon: <Briefcase className="h-10 w-10 text-brown" />,
                  titleKey: "about.values.innovation.title",
                  descriptionKey: "about.values.innovation.description"
                },
                {
                  icon: <Clock className="h-10 w-10 text-blue" />,
                  titleKey: "about.values.commitment.title",
                  descriptionKey: "about.values.commitment.description"
                }
              ].map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover-lift">
                  <div className="rounded-full w-16 h-16 flex items-center justify-center bg-gradient-to-r from-brown/10 to-blue/10 mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{t(value.titleKey)}</h3>
                  <p className="text-muted-foreground">{t(value.descriptionKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-blue">{t("about.team.title")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Marie Dupont",
                  role: "Directrice & Coach Professionnelle",
                  image: "https://randomuser.me/api/portraits/women/44.jpg"
                },
                {
                  name: "Thomas Laurent",
                  role: "Consultant en Recrutement",
                  image: "https://randomuser.me/api/portraits/men/46.jpg"
                },
                {
                  name: "Sophie Martin",
                  role: "Spécialiste en Immigration",
                  image: "https://randomuser.me/api/portraits/women/65.jpg"
                },
                {
                  name: "Alexandre Petit",
                  role: "Responsable Formation",
                  image: "https://randomuser.me/api/portraits/men/36.jpg"
                },
                {
                  name: "Julie Moreau",
                  role: "Coach en Développement Personnel",
                  image: "https://randomuser.me/api/portraits/women/32.jpg"
                },
                {
                  name: "Paul Bernard",
                  role: "Conseiller en Orientation",
                  image: "https://randomuser.me/api/portraits/men/22.jpg"
                }
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover-lift border border-gradient-to-r from-brown/10 to-blue/10">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="bg-gradient-to-r from-brown to-blue bg-clip-text text-transparent">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BookingButton />
    </div>
  );
};

export default About;
