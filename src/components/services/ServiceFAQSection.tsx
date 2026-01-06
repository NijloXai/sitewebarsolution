import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export interface FAQItem {
  question: string;
  reponse: string;
}

interface ServiceFAQSectionProps {
  /** Titre principal de la section FAQ */
  title?: string;
  /** Liste des questions et réponses */
  items: readonly FAQItem[];
  /** Classe CSS personnalisée pour le conteneur */
  className?: string;
  /** Style de fond de la section */
  variant?: "white" | "gray" | "blue";
}

/**
 * Composant réutilisable pour afficher une section FAQ sur les pages de services.
 * 
 * @example
 * ```tsx
 * <ServiceFAQSection
 *   title="Questions fréquentes"
 *   items={[
 *     { question: "Quel délai?", reponse: "48h" }
 *   ]}
 * />
 * ```
 */
export default function ServiceFAQSection({
  title = "Questions fréquentes",
  items,
  className = "",
  variant = "white",
}: ServiceFAQSectionProps) {
  const backgroundClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    blue: "bg-brand-blue text-white",
  };

  const titleColorClasses = {
    white: "text-brand-blue",
    gray: "text-brand-blue",
    blue: "text-white",
  };

  return (
    <section className={`py-16 md:py-24 ${backgroundClasses[variant]} ${className}`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 ${titleColorClasses[variant]}`}
        >
          {title}
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger
                className={`text-left font-semibold ${
                  variant === "blue"
                    ? "text-white hover:text-white/90"
                    : "text-slate-800"
                }`}
              >
                {item.question}
              </AccordionTrigger>
              <AccordionContent
                className={`text-sm leading-relaxed ${
                  variant === "blue" ? "text-white/90" : "text-gray-600"
                }`}
              >
                {item.reponse}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

