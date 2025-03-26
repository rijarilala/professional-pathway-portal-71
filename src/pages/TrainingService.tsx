
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingButton from "@/components/BookingButton";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, FileText, GraduationCap, Users, BriefcaseBusiness, Award, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import EvaluationButton from "@/components/EvaluationButton";

const TrainingService = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background overflow-hidden">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 z-0"></div>
          <div className="absolute inset-0 opacity-30 z-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
              <defs>
                <pattern id="dotPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#8B5CF6" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dotPattern)" />
            </svg>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <motion.div 
                className="md:w-1/2 mb-10 md:mb-0"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                <span className="inline-block bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
                  {currentLang === 'fr' ? 'Service de Formation Professionnelle' : 'Professional Training Service'}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                  {currentLang === 'fr' 
                    ? 'Transformez vos compétences, construisez votre avenir' 
                    : 'Transform your skills, build your future'}
                </h1>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {currentLang === 'fr' 
                    ? 'Des formations personnalisées pour vous aider à développer vos compétences professionnelles, optimiser votre CV et réussir vos entretiens.' 
                    : 'Personalized training to help you develop your professional skills, optimize your resume, and succeed in your interviews.'}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-purple-600 hover:bg-purple-700" size="lg">
                    {currentLang === 'fr' ? 'Réserver une formation' : 'Book a training session'}
                  </Button>
                  <Button variant="outline" className="border-purple-200 text-purple-600" size="lg">
                    {currentLang === 'fr' ? 'Voir notre catalogue' : 'View our catalog'}
                  </Button>
                </div>
              </motion.div>
              
              <motion.div 
                className="md:w-1/2 md:pl-10"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <img 
                    src="/lovable-uploads/b1a6140e-28f2-45b4-95ac-daec5a660db0.png" 
                    alt={currentLang === 'fr' ? "Formation professionnelle" : "Professional training"} 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900/80 to-transparent p-6">
                    <p className="text-white font-medium">
                      {currentLang === 'fr' 
                        ? "+80% de nos stagiaires trouvent un emploi dans les 3 mois" 
                        : "+80% of our trainees find employment within 3 months"}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Training Programs */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <GraduationCap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                {currentLang === 'fr' ? 'Nos programmes de formation' : 'Our training programs'}
              </h2>
              <p className="text-lg text-gray-600">
                {currentLang === 'fr'
                  ? 'Des formations adaptées à vos besoins spécifiques pour vous aider à atteindre vos objectifs professionnels.'
                  : 'Training programs adapted to your specific needs to help you achieve your professional goals.'}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Program 1 */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {currentLang === 'fr' ? 'Optimisation de CV' : 'Resume Optimization'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {currentLang === 'fr'
                    ? 'Apprenez à créer un CV percutant qui attire l'attention des recruteurs et met en valeur vos compétences.'
                    : 'Learn how to create a compelling resume that grabs recruiters' attention and highlights your skills.'}
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    currentLang === 'fr' ? 'Structure efficace' : 'Effective structure',
                    currentLang === 'fr' ? 'Mots-clés pertinents' : 'Relevant keywords',
                    currentLang === 'fr' ? 'Mise en page professionnelle' : 'Professional layout',
                    currentLang === 'fr' ? 'Adaptation aux ATS' : 'ATS optimization'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full mt-2 border-purple-200 text-purple-600">
                  {currentLang === 'fr' ? 'En savoir plus' : 'Learn more'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              {/* Program 2 */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {currentLang === 'fr' ? 'Rédaction de Lettres de Motivation' : 'Cover Letter Writing'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {currentLang === 'fr'
                    ? 'Maîtrisez l'art de la lettre de motivation pour vous démarquer et décrocher plus d'entretiens.'
                    : 'Master the art of cover letter writing to stand out and secure more interviews.'}
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    currentLang === 'fr' ? 'Structure persuasive' : 'Persuasive structure',
                    currentLang === 'fr' ? 'Personnalisation efficace' : 'Effective personalization',
                    currentLang === 'fr' ? 'Ton professionnel' : 'Professional tone',
                    currentLang === 'fr' ? 'Mise en valeur des compétences' : 'Highlighting key skills'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full mt-2 border-purple-200 text-purple-600">
                  {currentLang === 'fr' ? 'En savoir plus' : 'Learn more'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              {/* Program 3 */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {currentLang === 'fr' ? 'Préparation aux Entretiens' : 'Interview Preparation'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {currentLang === 'fr'
                    ? 'Développez votre confiance et vos compétences pour réussir vos entretiens d'embauche.'
                    : 'Develop your confidence and skills to succeed in job interviews.'}
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    currentLang === 'fr' ? 'Questions fréquentes' : 'Common questions',
                    currentLang === 'fr' ? 'Simulation d\'entretien' : 'Interview simulation',
                    currentLang === 'fr' ? 'Communication non verbale' : 'Non-verbal communication',
                    currentLang === 'fr' ? 'Négociation salariale' : 'Salary negotiation'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full mt-2 border-purple-200 text-purple-600">
                  {currentLang === 'fr' ? 'En savoir plus' : 'Learn more'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Professional Success Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                <img 
                  src="/lovable-uploads/fedfb190-2d9d-40f4-b5a2-4aac71d52364.png" 
                  alt={currentLang === 'fr' ? "Succès professionnel" : "Professional success"} 
                  className="rounded-xl shadow-xl"
                />
              </div>
              
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  {currentLang === 'fr' 
                    ? 'Pourquoi nos formations sont différentes' 
                    : 'Why our training programs are different'}
                </h2>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <BriefcaseBusiness className="h-5 w-5 text-purple-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">
                        {currentLang === 'fr' ? 'Expertise du marché' : 'Market expertise'}
                      </h3>
                      <p className="text-gray-700">
                        {currentLang === 'fr'
                          ? 'Nos formateurs sont en contact permanent avec les recruteurs et connaissent les dernières tendances du marché de l'emploi.'
                          : 'Our trainers are in constant contact with recruiters and know the latest trends in the job market.'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <Users className="h-5 w-5 text-purple-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">
                        {currentLang === 'fr' ? 'Approche personnalisée' : 'Personalized approach'}
                      </h3>
                      <p className="text-gray-700">
                        {currentLang === 'fr'
                          ? 'Chaque formation est adaptée à votre profil, votre secteur d'activité et vos objectifs professionnels spécifiques.'
                          : 'Each training is adapted to your profile, your industry, and your specific professional goals.'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <Award className="h-5 w-5 text-purple-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">
                        {currentLang === 'fr' ? 'Résultats prouvés' : 'Proven results'}
                      </h3>
                      <p className="text-gray-700">
                        {currentLang === 'fr'
                          ? 'Plus de 80% de nos clients décrochent des entretiens dans le mois suivant leur formation avec nous.'
                          : 'More than 80% of our clients secure interviews within a month of completing our training programs.'}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button className="bg-purple-600 hover:bg-purple-700" size="lg">
                    {currentLang === 'fr' ? 'Découvrir nos témoignages' : 'View testimonials'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonial Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                {currentLang === 'fr' ? 'Ce que disent nos clients' : 'What our clients say'}
              </h2>
              <p className="text-lg text-gray-600">
                {currentLang === 'fr'
                  ? 'Découvrez les expériences de ceux qui ont transformé leur carrière grâce à nos formations.'
                  : 'Discover the experiences of those who have transformed their careers through our training programs.'}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center text-xl font-bold text-purple-700 mr-4">
                    S
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{currentLang === 'fr' ? 'Sophie L.' : 'Sophie L.'}</h4>
                    <p className="text-sm text-gray-600">{currentLang === 'fr' ? 'Responsable Marketing' : 'Marketing Manager'}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  {currentLang === 'fr'
                    ? '"La formation sur l\'optimisation de CV a complètement transformé ma recherche d\'emploi. Après avoir refait mon CV selon les conseils reçus, j\'ai obtenu 3 entretiens en une semaine alors que je cherchais depuis 2 mois sans succès."'
                    : '"The resume optimization training completely transformed my job search. After redoing my resume according to the advice received, I got 3 interviews in one week when I had been searching for 2 months without success."'}
                </p>
              </div>
              
              {/* Testimonial 2 */}
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center text-xl font-bold text-purple-700 mr-4">
                    M
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{currentLang === 'fr' ? 'Marc T.' : 'Mark T.'}</h4>
                    <p className="text-sm text-gray-600">{currentLang === 'fr' ? 'Ingénieur Logiciel' : 'Software Engineer'}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  {currentLang === 'fr'
                    ? '"Les simulations d\'entretien m\'ont aidé à gagner en confiance et à mieux articuler mes compétences. J\'ai réussi à décrocher un poste dans une entreprise de premier plan grâce à ces préparations."'
                    : '"The interview simulations helped me gain confidence and better articulate my skills. I managed to secure a position at a top company thanks to these preparations."'}
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 bg-purple-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {currentLang === 'fr' 
                ? 'Prêt à transformer votre carrière ?' 
                : 'Ready to transform your career?'}
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              {currentLang === 'fr'
                ? 'Nos formations vous donnent les outils et les compétences dont vous avez besoin pour réussir dans votre recherche d\'emploi.'
                : 'Our training programs give you the tools and skills you need to succeed in your job search.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-purple-700 hover:bg-gray-100" size="lg">
                {currentLang === 'fr' ? 'Réserver une formation' : 'Book a training session'}
              </Button>
              <EvaluationButton size="lg" className="border-white border-2 bg-transparent hover:bg-white/10" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BookingButton />
    </div>
  );
};

export default TrainingService;
