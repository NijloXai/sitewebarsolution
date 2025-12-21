"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useState } from "react";

/* Options du formulaire de contact */
const typesProjet = [
  "Isolation & Plâtrerie",
  "Rénovation complète",
  "Peinture & Décoration",
  "Marché Public / Appel d'offre",
  "Autre",
];

export function ContactForm() {
  const [typeProjet, setTypeProjet] = useState<string>("");

  return (
    <form className="space-y-5 sm:space-y-6">
      {/* Ligne 1 : Nom + Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="space-y-2">
          <Label htmlFor="nom" className="text-sm sm:text-base font-semibold text-brand-blue">
            Nom complet
          </Label>
          <Input
            type="text"
            id="nom"
            name="nom"
            placeholder="Votre nom"
            className="h-10 sm:h-11 border-gray-300 focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:border-brand-orange transition-all duration-300 ease-in-out"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm sm:text-base font-semibold text-brand-blue">
            Email
          </Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="vous@email.com"
            className="h-10 sm:h-11 border-gray-300 focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:border-brand-orange transition-all duration-300 ease-in-out"
            required
          />
        </div>
      </div>

      {/* Ligne 2 : Téléphone + Code Postal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="space-y-2">
          <Label htmlFor="tel" className="text-sm sm:text-base font-semibold text-brand-blue">
            Téléphone
          </Label>
          <Input
            type="tel"
            id="tel"
            name="tel"
            placeholder="06 .. .. .. .."
            className="h-10 sm:h-11 border-gray-300 focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:border-brand-orange transition-all duration-300 ease-in-out"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cp" className="text-sm sm:text-base font-semibold text-brand-blue">
            Code Postal
          </Label>
          <Input
            type="text"
            id="cp"
            name="cp"
            placeholder="67000"
            className="h-10 sm:h-11 border-gray-300 focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:border-brand-orange transition-all duration-300 ease-in-out"
            required
          />
        </div>
      </div>

      {/* Type de projet */}
      <div className="space-y-2">
        <Label htmlFor="type" className="text-sm sm:text-base font-semibold text-brand-blue">
          Type de projet
        </Label>
        <Select name="type" value={typeProjet} onValueChange={setTypeProjet} required>
          <SelectTrigger
            id="type"
            className="w-full h-10 sm:h-11 border-gray-300 focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:border-brand-orange transition-all duration-300 ease-in-out"
          >
            <SelectValue placeholder="Sélectionnez un type de projet" />
          </SelectTrigger>
          <SelectContent>
            {typesProjet.map((type) => (
              <SelectItem key={type} value={type} className="focus:bg-brand-orange/10 focus:text-brand-orange">
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Message optionnel */}
      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm sm:text-base font-semibold text-brand-blue">
          Détails <span className="text-gray-500 font-normal">(Optionnel)</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          className="min-h-[100px] border-gray-300 focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:border-brand-orange transition-all duration-300 ease-in-out resize-none"
          placeholder="Décrivez votre projet en quelques mots..."
        />
      </div>

      {/* Case RGPD */}
      <div className="flex items-start gap-3 pt-2">
        <div className="flex h-5 items-center pt-0.5">
          <input
            id="rgpd"
            name="rgpd"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-brand-orange focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 cursor-pointer transition-all duration-300 ease-in-out"
            required
          />
        </div>
        <div className="flex-1">
          <Label htmlFor="rgpd" className="text-sm sm:text-base text-gray-600 font-normal cursor-pointer leading-relaxed">
            J&apos;accepte que mes données soient utilisées pour me
            recontacter.
          </Label>
        </div>
      </div>

      {/* Bouton d'envoi */}
      <Button
        type="submit"
        size="lg"
        className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white text-base sm:text-lg font-bold shadow-button-primary hover:shadow-button-primary-hover hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 ease-in-out focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 rounded-md h-12 sm:h-14 mt-6"
      >
        Recevoir mon devis gratuit
      </Button>
    </form>
  );
}


