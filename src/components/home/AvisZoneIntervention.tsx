import Image from "next/image";
import { avisClients, villesIntervention } from "@/lib/home-data";

export function AvisZoneIntervention() {
  return (
    <section className="py-16 bg-white" id="avis" role="region" aria-labelledby="avis-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Colonne gauche : Avis Google */}
          <div>
            <h2 id="avis-title" className="text-2xl font-bold text-brand-blue mb-6">
              Ce que disent nos clients
            </h2>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              {/* Note globale */}
              <div className="flex items-center mb-4" role="group" aria-label="Note moyenne: 4.8 sur 5 étoiles">
                <div className="flex items-center gap-0.5" role="img" aria-label="5 étoiles sur 5, note moyenne de 4.8">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-brand-orange-dark"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 font-bold text-gray-900" aria-label="Note de 4.8 sur 5">4.8/5</span>
                <span className="ml-2 text-sm text-gray-500">
                  sur Google Avis
                </span>
              </div>

              {/* Liste des avis avec structure sémantique améliorée */}
              <div className="space-y-5" role="list" aria-label="Liste des avis clients" aria-live="polite">
                {avisClients.map((avis, index) => (
                  <article 
                    key={index}
                    className="group relative overflow-hidden shadow-md hover:shadow-xl border border-gray-200 hover:border-brand-orange/30 transition-all duration-300 ease-out hover:-translate-y-1 bg-white rounded-lg focus-within:ring-2 focus-within:ring-brand-orange-dark focus-within:ring-offset-2"
                    style={{
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                    }}
                    itemScope
                    itemType="https://schema.org/Review"
                    role="listitem"
                    aria-labelledby={`avis-auteur-${index}`}
                  >
                    <div className="p-6">
                      {/* Note de l'avis individuel avec microdonnées */}
                      <div 
                        itemProp="reviewRating" 
                        itemScope 
                        itemType="https://schema.org/Rating" 
                        className="mb-3"
                        aria-label={`Note: ${avis.note} sur 5 étoiles`}
                      >
                        <meta itemProp="ratingValue" content={avis.note.toString()} />
                        <meta itemProp="bestRating" content="5" />
                        <div className="flex items-center gap-0.5" role="img" aria-label={`${avis.note} étoiles sur 5`}>
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${i < avis.note ? 'text-brand-orange-dark' : 'text-gray-300'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      {/* Citation de l'avis */}
                      <blockquote 
                        className="not-italic text-gray-700 text-base leading-relaxed mb-4 border-l-4 border-brand-orange-dark pl-4"
                        itemProp="reviewBody"
                      >
                        {avis.texte}
                      </blockquote>
                      {/* Auteur, localisation et date de l'avis */}
                      <footer className="text-sm text-gray-600 font-semibold">
                        <cite className="not-italic" id={`avis-auteur-${index}`}>
                          <span itemProp="author" itemScope itemType="https://schema.org/Person">
                            <span itemProp="name">{avis.auteur}</span>
                          </span>
                          <span className="text-gray-500 font-normal" itemProp="locationCreated" itemScope itemType="https://schema.org/Place">
                            <span className="sr-only">, </span>
                            <span itemProp="name">({avis.ville})</span>
                          </span>
                        </cite>
                        {avis.date && (
                          <time 
                            itemProp="datePublished" 
                            dateTime={avis.date}
                            className="block text-xs text-gray-500 mt-1 font-normal"
                          >
                            {new Date(avis.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
                          </time>
                        )}
                      </footer>
                      {/* Service évalué avec microdonnées */}
                      <div itemProp="itemReviewed" itemScope itemType="https://schema.org/Service" className="sr-only">
                        <meta itemProp="name" content="AR+SOLUTION - Travaux de Plâtrerie, Isolation & Finitions" />
                        <meta itemProp="description" content="Entreprise de rénovation intérieure spécialisée en plâtrerie, isolation et finitions à Strasbourg et dans le Bas-Rhin" />
                      </div>
                    </div>
                    {/* Ligne décorative au survol */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange-dark via-brand-orange to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                  </article>
                ))}
              </div>
              <div className="text-center mt-6">
                <a
                  href="#avis"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm text-brand-blue font-semibold hover:text-brand-orange-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange-dark focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 rounded-md transition-all duration-300 hover:bg-orange-50 focus-visible:bg-orange-50 underline decoration-2 underline-offset-2 group/link"
                  aria-label="Voir tous les avis clients sur Google Avis"
                  aria-describedby="avis-description"
                >
                  <span>Voir tous les avis</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
              <span id="avis-description" className="sr-only">Ouvre la section des avis clients avec la note moyenne de 4.8 sur 5 étoiles</span>
            </div>
          </div>

          {/* Colonne droite : Zone d'intervention */}
          <div>
            <h2 className="text-2xl font-bold text-brand-blue mb-6">
              Zone d&apos;intervention
            </h2>
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 h-full">
              <p className="text-gray-700 mb-4">
                Basée à <strong>Strasbourg</strong>, notre équipe intervient
                dans tout le <strong>Bas-Rhin (67)</strong> pour vos projets
                de rénovation.
              </p>
              {/* Liste des villes */}
              <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-6">
                {villesIntervention.map((ville) => (
                  <li key={ville} className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-2" />
                    {ville}
                  </li>
                ))}
              </ul>
              {/* Placeholder carte */}
              <div className="relative w-full h-32 bg-gray-200 rounded overflow-hidden">
                <Image
                  src="https://placehold.co/600x200?text=Carte+Alsace+Strasbourg"
                  alt="Carte Zone Intervention"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-60"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

