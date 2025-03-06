
import React, { useState } from "react";
import { CalendarClock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const BookingButton = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const services = [
    "Conseil et Orientation",
    "Coaching Professionnel",
    "Formation",
    "Recrutement",
    "Immigration",
  ];

  const availableDates = [
    "Lundi, 10 Juillet - 10:00",
    "Lundi, 10 Juillet - 14:00",
    "Mardi, 11 Juillet - 11:00",
    "Mercredi, 12 Juillet - 9:00",
    "Mercredi, 12 Juillet - 16:00",
    "Jeudi, 13 Juillet - 10:00",
    "Vendredi, 14 Juillet - 14:00",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Rendez-vous confirmé !",
        description: `Votre rendez-vous pour ${selectedService} le ${selectedDate} a été confirmé.`,
      });
      setOpen(false);
      // Reset form
      setSelectedService("");
      setSelectedDate("");
      setName("");
      setEmail("");
      setPhone("");
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="fixed bottom-6 right-6 z-30 rounded-full shadow-lg px-6 h-14 bg-primary hover:bg-primary/90 flex items-center gap-2">
          <CalendarClock className="h-5 w-5" />
          <span>Prendre RDV</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md glass-card">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Réserver un rendez-vous</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="space-y-2">
            <label htmlFor="service" className="text-sm font-medium">
              Service souhaité
            </label>
            <select
              id="service"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              required
              className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm"
            >
              <option value="" disabled>Sélectionnez un service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="date" className="text-sm font-medium">
              Date et heure
            </label>
            <select
              id="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              required
              className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm"
            >
              <option value="" disabled>Sélectionnez une date</option>
              {availableDates.map((date) => (
                <option key={date} value={date}>
                  {date}
                </option>
              ))}
            </select>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Nom complet
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Votre nom"
              required
              className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.com"
              required
              className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Téléphone
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Votre numéro de téléphone"
              required
              className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm"
            />
          </div>
          
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white mt-4">
            Confirmer le rendez-vous
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingButton;
