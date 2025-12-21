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
    <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
      {faqItems.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="bg-white rounded-xl border border-gray-200/60 shadow-md hover:shadow-lg hover:shadow-brand-orange/10 transition-all duration-300 ease-in-out hover:-translate-y-0.5 focus-within:ring-2 focus-within:ring-brand-orange focus-within:ring-offset-2 focus-within:ring-opacity-50 focus-within:outline-none px-4 sm:px-6 py-2"
        >
          <AccordionTrigger className="font-semibold text-brand-blue hover:text-brand-orange transition-colors duration-300 ease-in-out text-left py-4 sm:py-5">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 text-sm sm:text-base leading-relaxed pb-4 sm:pb-5 pt-0">
            {item.reponse}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}


