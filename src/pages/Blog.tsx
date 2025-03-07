
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingButton from "@/components/BookingButton";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const blogPosts = [
  {
    id: 1,
    title: "Comment réussir votre reconversion professionnelle en 5 étapes",
    excerpt: "Découvrez les étapes clés pour réussir votre reconversion professionnelle et donner un nouveau souffle à votre carrière.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "10 Juin 2023",
    author: "Marie Dupont",
    category: "Carrière"
  },
  {
    id: 2,
    title: "Les tendances du recrutement en 2023 : ce qui change pour les candidats",
    excerpt: "Le marché du travail évolue rapidement. Voici les nouvelles tendances de recrutement que tout candidat devrait connaître.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "25 Mai 2023",
    author: "Thomas Laurent",
    category: "Recrutement"
  },
  {
    id: 3,
    title: "Immigration professionnelle : les nouveaux programmes à connaître",
    excerpt: "Tour d'horizon des récents programmes d'immigration pour les professionnels qualifiés cherchant des opportunités à l'international.",
    image: "https://images.unsplash.com/photo-1526479307028-c29a9a3ca0ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "18 Mai 2023",
    author: "Sophie Martin",
    category: "Immigration"
  },
  {
    id: 4,
    title: "Comment le coaching peut transformer votre vie professionnelle",
    excerpt: "Le coaching professionnel est devenu un outil incontournable de développement de carrière. Découvrez comment il peut vous aider.",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "5 Mai 2023",
    author: "Julie Moreau",
    category: "Coaching"
  },
  {
    id: 5,
    title: "Les compétences les plus recherchées dans le monde post-pandémie",
    excerpt: "La pandémie a transformé le marché du travail. Voici les compétences qui font maintenant la différence pour les recruteurs.",
    image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "28 Avril 2023",
    author: "Alexandre Petit",
    category: "Formation"
  },
  {
    id: 6,
    title: "Comment choisir la bonne orientation professionnelle : guide pratique",
    excerpt: "Perdu(e) dans vos choix de carrière ? Ce guide vous aide à identifier vos talents et à trouver le métier qui vous correspond.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "15 Avril 2023",
    author: "Paul Bernard",
    category: "Orientation"
  }
];

const Blog = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-background overflow-hidden">
      <Header />
      <main className="flex-grow">
        <div className="pt-24 pb-12 px-6 bg-secondary/30">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("navigation.blog")}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Des articles, conseils et ressources pour vous accompagner dans votre parcours professionnel
            </p>
          </div>
        </div>

        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover-lift">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <span className="inline-flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mr-3">
                        {post.category}
                      </span>
                      <span className="flex items-center mr-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <Button variant="link" className="p-0 h-auto text-primary flex items-center">
                      {t("common.readMore")} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-md px-8 py-6 h-auto">
                {t("common.all")}
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BookingButton />
    </div>
  );
};

export default Blog;
