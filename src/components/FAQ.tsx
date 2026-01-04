"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

/* Questions fréquentes de la FAQ */
const faqItems = [
  {
    question: "Quels sont vos délais d'intervention ?",
    reponse:
      "Nos délais varient selon la charge, mais nous nous engageons à fournir un devis sous 48h. Pour les travaux, un planning précis est validé avant signature.",
  },
  {
    question: "Êtes-vous certifiés RGE pour les aides ?",
    reponse:
      "Oui, nous sommes certifiés RGE (Reconnu Garant de l'Environnement), ce qui vous rend éligible aux aides de l'État (MaPrimeRénov', CEE) pour les travaux d'isolation.",
  },
  {
    question: "Comment garantissez-vous la propreté du chantier ?",
    reponse:
      "La protection des sols et du mobilier est systématique avant tout démarrage. Un nettoyage est effectué chaque fin de journée.",
  },
];

export function FAQ() {
  return (
    <Accordion type="single" collapsible className="space-y-4">
      {faqItems.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="bg-white rounded-lg shadow-sm px-4"
        >
          <AccordionTrigger className="font-medium">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground text-sm">
            {item.reponse}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

