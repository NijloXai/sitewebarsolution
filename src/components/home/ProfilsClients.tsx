import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { profilsClients } from "@/lib/home-data";

export function ProfilsClients() {
  return (
    <section className="py-20 md:py-28 bg-white" id="profils">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre de la section */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-5 md:mb-6">
            À qui s&apos;adresse notre expertise ?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Des solutions adaptées aux contraintes techniques et
            administratives de chaque acteur.
          </p>
        </div>

        {/* Grille des 3 cartes profils */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {profilsClients.map((profil) => (
            <Card
              key={profil.id}
              className="group relative overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 ease-out flex flex-col focus-within:ring-2 focus-within:ring-brand-orange focus-within:ring-offset-2 border-2 border-gray-200 hover:border-brand-orange/50 bg-white pt-0"
              style={{
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
              }}
            >
              {/* Image de la carte */}
              <div className="relative h-52 md:h-56 overflow-hidden bg-gray-200">
                <Image
                  src={profil.image}
                  alt={profil.titre}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Gradient overlay pour améliorer la profondeur et l'esthétique */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500 ease-out" />
                {/* Overlay subtil en bas pour améliorer la transition avec le contenu */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/20 to-transparent" />
              </div>
              {/* Contenu de la carte */}
              <CardContent className="p-6 md:p-7 lg:p-8 flex-1 flex flex-col">
                {profil.badge && (
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="secondary" className="bg-brand-orange/10 text-brand-orange border-brand-orange/20 uppercase font-bold tracking-wide">
                      {profil.badge}
                    </Badge>
                  </div>
                )}
                <CardTitle className="text-xl md:text-2xl text-brand-blue-dark font-bold mb-3 md:mb-4 leading-tight group-hover:text-brand-orange transition-colors duration-300">
                  {profil.titre}
                </CardTitle>
                <CardDescription className="text-sm md:text-base text-gray-700 mb-5 md:mb-6 flex-1 leading-relaxed">
                  {profil.description}
                </CardDescription>
                <Link
                  href={profil.lien}
                  className="inline-flex items-center text-brand-orange font-bold hover:text-brand-orange-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 rounded transition-all duration-300 group/link mt-auto"
                  aria-label={`${profil.lienTexte} - ${profil.titre}`}
                >
                  {profil.lienTexte} <span className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300 ease-out" aria-hidden="true">→</span>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

