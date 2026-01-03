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
    <form className="space-y-6">
      {/* Ligne 1 : Nom + Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="nom">Nom complet</Label>
          <Input
            type="text"
            id="nom"
            name="nom"
            placeholder="Votre nom"
            className="focus-visible:ring-brand-orange/50 focus-visible:border-brand-orange"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="vous@email.com"
            className="focus-visible:ring-brand-orange/50 focus-visible:border-brand-orange"
          />
        </div>
      </div>

      {/* Ligne 2 : Téléphone + Code Postal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="tel">Téléphone</Label>
          <Input
            type="tel"
            id="tel"
            name="tel"
            placeholder="06 .. .. .. .."
            className="focus-visible:ring-brand-orange/50 focus-visible:border-brand-orange"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cp">Code Postal</Label>
          <Input
            type="text"
            id="cp"
            name="cp"
            placeholder="67000"
            className="focus-visible:ring-brand-orange/50 focus-visible:border-brand-orange"
          />
        </div>
      </div>

      {/* Type de projet */}
      <div className="space-y-2">
        <Label htmlFor="type">Type de projet</Label>
        <Select name="type" value={typeProjet} onValueChange={setTypeProjet}>
          <SelectTrigger
            id="type"
            className="w-full focus-visible:ring-brand-orange/50 focus-visible:border-brand-orange"
          >
            <SelectValue placeholder="Sélectionnez un type de projet" />
          </SelectTrigger>
          <SelectContent>
            {typesProjet.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Message optionnel */}
      <div className="space-y-2">
        <Label htmlFor="message">Détails (Optionnel)</Label>
        <Textarea
          id="message"
          name="message"
          rows={3}
          className="focus-visible:ring-brand-orange/50 focus-visible:border-brand-orange"
        />
      </div>

      {/* Case RGPD */}
      <div className="flex items-start">
        <div className="flex h-5 items-center">
          <input
            id="rgpd"
            name="rgpd"
            type="checkbox"
            required
            className="h-4 w-4 rounded border-gray-300 text-brand-orange-dark focus:ring-brand-orange-dark focus-visible:ring-2 focus-visible:ring-brand-orange-dark focus-visible:ring-offset-2"
          />
        </div>
        <div className="ml-3 text-sm">
          <Label htmlFor="rgpd" className="text-muted-foreground font-normal cursor-pointer">
            J&apos;accepte que mes données soient utilisées pour me
            recontacter.
          </Label>
        </div>
      </div>

      {/* Bouton d'envoi */}
      <Button
        type="submit"
        size="lg"
        className="w-full bg-brand-orange-dark hover:bg-brand-orange text-white text-lg font-bold"
        aria-label="Recevoir mon devis gratuit"
      >
        Recevoir mon devis gratuit
      </Button>
    </form>
  );
}

