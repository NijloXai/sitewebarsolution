/*
  Composant Hero de la page d'accueil.
  
  Affiche la section hero avec :
  - Animation 3D GridScan en arrière-plan
  - Badges de localisation et certifications
  - Titre principal et sous-titre
  - Boutons d'action (Devis gratuit, Accès Acheteurs Publics)
*/

import Link from "next/link";
import GridScan from "@/components/GridScan";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HomeHero() {
  return (
    <section className="relative bg-slate-900 overflow-hidden">
      {/* Animation 3D GridScan en arrière-plan */}
      <div className="absolute inset-0">
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#1e3a5f"
          gridScale={0.1}
          scanColor="#f97316"
          scanOpacity={0.5}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
          scanDuration={3.0}
          scanDelay={1.5}
        />
        {/* Overlay gradient pour améliorer la lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/70 to-slate-900/40" />
      </div>

      {/* Contenu du hero */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl">
          {/* Badges de localisation et certifications */}
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <Badge 
              variant="outline" 
              className="bg-brand-orange/20 text-brand-orange border-brand-orange/30 uppercase tracking-wide"
            >
              Strasbourg & Alsace
            </Badge>
            <div className="flex gap-2">
              <Badge variant="outline" className="text-white bg-white/10 border-white/20">
                RGE Qualibat
              </Badge>
              <Badge variant="outline" className="text-white bg-white/10 border-white/20">
                Décennale
              </Badge>
            </div>
          </div>

          {/* Titre principal - promesse de valeur */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Travaux de Plâtrerie, Isolation & Finitions.
          </h1>

          {/* Sous-titre explicatif */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 font-light">
            Votre interlocuteur unique pour la rénovation intérieure.
            Fiabilité technique, certifications RGE et respect strict des
            délais.
          </p>

          {/* Boutons d'action principaux */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-brand-orange-dark hover:bg-brand-orange text-white shadow-lg"
              aria-label="Demander un devis gratuit"
            >
              <a href="#contact">Demander un devis gratuit</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white hover:text-brand-blue backdrop-blur-sm"
            >
              <Link href="/marches-publics">Accès Acheteurs Publics</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

