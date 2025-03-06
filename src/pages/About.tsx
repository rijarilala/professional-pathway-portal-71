
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingButton from "@/components/BookingButton";
import { Users, Award, Clock, Briefcase } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background overflow-hidden">
      <Header />
      <main className="flex-grow">
        <div className="pt-24 pb-12 px-6 bg-gradient-to-r from-brown/10 to-blue/10">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-brown to-blue bg-clip-text text-transparent">À Propos de Nous</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Découvrez notre histoire, nos valeurs et notre vision pour vous accompagner vers la réussite
            </p>
          </div>
        </div>

        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-brown">Notre Mission</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Chez ConseilPro, notre mission est d'accompagner chaque individu et organisation 
                  dans l'atteinte de leurs objectifs professionnels. Nous croyons fermement au 
                  potentiel humain et à l'importance d'un accompagnement personnalisé pour révéler 
                  ce potentiel.
                </p>
                <p className="text-lg text-muted-foreground">
                  Fondée en 2015 par une équipe de consultants expérimentés, notre cabinet 
                  s'est développé autour de valeurs fortes : excellence, écoute, innovation et 
                  engagement envers nos clients.
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
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-brown to-blue bg-clip-text text-transparent">Nos Valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Users className="h-10 w-10 text-brown" />,
                  title: "Excellence",
                  description: "Nous visons l'excellence dans chacune de nos interventions, avec un souci constant de la qualité et de la pertinence."
                },
                {
                  icon: <Award className="h-10 w-10 text-blue" />,
                  title: "Écoute",
                  description: "Nous plaçons l'écoute au cœur de notre démarche pour comprendre parfaitement vos besoins et y répondre avec précision."
                },
                {
                  icon: <Briefcase className="h-10 w-10 text-brown" />,
                  title: "Innovation",
                  description: "Nous développons constamment de nouvelles approches et méthodes pour rester à la pointe des pratiques professionnelles."
                },
                {
                  icon: <Clock className="h-10 w-10 text-blue" />,
                  title: "Engagement",
                  description: "Nous nous engageons pleinement dans la réussite de vos projets, avec une implication totale à chaque étape."
                }
              ].map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover-lift">
                  <div className="rounded-full w-16 h-16 flex items-center justify-center bg-gradient-to-r from-brown/10 to-blue/10 mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-blue">Notre Équipe</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Marie Dupont",
                  role: "Directrice & Coach Professionnelle",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                },
                {
                  name: "Thomas Laurent",
                  role: "Consultant en Recrutement",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                },
                {
                  name: "Sophie Martin",
                  role: "Spécialiste en Immigration",
                  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                },
                {
                  name: "Alexandre Petit",
                  role: "Responsable Formation",
                  image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                },
                {
                  name: "Julie Moreau",
                  role: "Coach en Développement Personnel",
                  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                },
                {
                  name: "Paul Bernard",
                  role: "Conseiller en Orientation",
                  image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
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
