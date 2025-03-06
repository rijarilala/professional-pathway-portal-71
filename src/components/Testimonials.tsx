
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    content: "Le coaching professionnel m'a permis de reprendre confiance en moi et d'obtenir le poste que je convoitais depuis longtemps. Un accompagnement de qualité !",
    author: "Marie Dupont",
    position: "Directrice Marketing",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    content: "Grâce à leur accompagnement en immigration professionnelle, j'ai pu obtenir mon visa de travail et m'installer dans les meilleures conditions. Je recommande vivement leurs services.",
    author: "Jean Lambert",
    position: "Ingénieur Logiciel",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    id: 3,
    content: "Notre entreprise a fait appel à leurs services de recrutement et nous sommes pleinement satisfaits. Ils ont su comprendre nos besoins et nous proposer des candidats de qualité.",
    author: "Sophie Martin",
    position: "DRH, Groupe Innovant",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 bg-secondary/50 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(circle_500px_at_70%_100px,rgba(120,119,198,0.2),transparent)]"></div>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ce qu'en disent nos clients</h2>
          <p className="text-lg text-muted-foreground">
            Découvrez les témoignages de professionnels et d'entreprises qui ont fait confiance à notre expertise.
          </p>
        </div>

        <div className={cn("relative w-full overflow-hidden", isVisible ? "animate-fadeIn" : "opacity-0")}>
          <div 
            className="flex transition-transform duration-700 ease-in-out" 
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="min-w-full px-4"
              >
                <div className="glass-card max-w-3xl mx-auto p-8 md:p-12 text-center">
                  <div className="relative mb-8">
                    <div className="absolute -left-4 -top-4 text-6xl text-primary opacity-20">"</div>
                    <div className="absolute -right-4 -bottom-4 text-6xl text-primary opacity-20">"</div>
                    <p className="text-lg md:text-xl italic relative z-10">
                      {testimonial.content}
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author}
                      className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-white shadow-md" 
                    />
                    <div>
                      <h4 className="font-bold">{testimonial.author}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === activeIndex ? "bg-primary w-6" : "bg-primary/30"
                )}
                aria-label={`Voir le témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
