# Cartographie AR+SOLUTION

> Document généré automatiquement - Audit du projet le 5 janvier 2026

---

## Arborescence complète du projet

```
sitewebarsolution/
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css (319 lignes)
│   │   ├── layout.tsx (115 lignes)
│   │   ├── page.tsx (352 lignes) - Accueil
│   │   ├── a-propos/
│   │   │   └── page.tsx (796 lignes)
│   │   ├── contact/
│   │   │   └── page.tsx (586 lignes)
│   │   ├── faq/
│   │   │   └── page.tsx (585 lignes)
│   │   ├── marches-publics/
│   │   │   └── page.tsx (547 lignes)
│   │   ├── mentions-legales/
│   │   │   └── page.tsx (580 lignes)
│   │   ├── politique-confidentialite/
│   │   │   └── page.tsx (646 lignes)
│   │   ├── realisations/
│   │   │   ├── page.tsx (583 lignes)
│   │   │   └── [slug]/
│   │   │       └── page.tsx (799 lignes)
│   │   ├── ressources/
│   │   │   └── page.tsx (535 lignes)
│   │   └── services/
│   │       ├── page.tsx (562 lignes)
│   │       ├── amenagement/
│   │       │   └── page.tsx (480 lignes)
│   │       ├── enduits-finitions/
│   │       │   └── page.tsx (567 lignes)
│   │       ├── isolation/
│   │       │   └── page.tsx (563 lignes)
│   │       └── platrerie/
│   │           └── page.tsx (515 lignes)
│   ├── components/
│   │   ├── BeforeAfterSlider.tsx (150 lignes)
│   │   ├── ContactForm.tsx (135 lignes)
│   │   ├── CtaBlock.tsx (110 lignes)
│   │   ├── FAQ.tsx (45 lignes)
│   │   ├── Footer.tsx (120 lignes)
│   │   ├── GridScan.tsx (990 lignes)
│   │   ├── Header.tsx (416 lignes)
│   │   ├── Logo.tsx (127 lignes)
│   │   ├── TrustBar.tsx (56 lignes)
│   │   ├── home/
│   │   │   ├── AvisZoneIntervention.tsx (180 lignes)
│   │   │   ├── HomeHero.tsx (96 lignes)
│   │   │   ├── MarchesPublicsBlock.tsx (232 lignes)
│   │   │   ├── PourquoiChoisir.tsx (169 lignes)
│   │   │   ├── ProfilsClients.tsx (77 lignes)
│   │   │   ├── RealisationsSection.tsx (148 lignes)
│   │   │   └── ServicesPreview.tsx (151 lignes)
│   │   ├── icons/
│   │   │   ├── HomeIcons.tsx (532 lignes)
│   │   │   └── ServiceIcons.tsx (433 lignes)
│   │   ├── services/
│   │   │   ├── MarchesPublicsSection.tsx (357 lignes)
│   │   │   ├── MobileStickyBar.tsx (69 lignes)
│   │   │   ├── ServiceFAQSection.tsx (86 lignes)
│   │   │   ├── ServiceFeaturesGrid.tsx (192 lignes)
│   │   │   ├── ServiceHero.tsx (172 lignes)
│   │   │   ├── ServiceMethodSection.tsx (240 lignes)
│   │   │   ├── ServiceRealisationsSection.tsx (224 lignes)
│   │   │   └── ServiceStructuredData.tsx (241 lignes)
│   │   └── ui/
│   │       ├── accordion.tsx (76 lignes)
│   │       ├── badge.tsx (46 lignes)
│   │       ├── button.tsx (62 lignes)
│   │       ├── card.tsx (92 lignes)
│   │       ├── input.tsx (21 lignes)
│   │       ├── label.tsx (24 lignes)
│   │       ├── select.tsx (190 lignes)
│   │       ├── separator.tsx (28 lignes)
│   │       └── textarea.tsx (18 lignes)
│   └── lib/
│       ├── home-data.ts (291 lignes)
│       ├── services-data.tsx (406 lignes)
│       ├── services-helpers.tsx (175 lignes)
│       ├── services-metadata.ts (160 lignes)
│       └── utils.ts (9 lignes)
├── public/
│   └── (dossier inexistant)
├── components.json
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

---

## Pages (/app)

| Route | Fichier | Lignes | Description |
|-------|---------|--------|-------------|
| `/` | page.tsx | 352 | Page d'accueil - Hero, services, réalisations, avis, FAQ, CTA |
| `/a-propos` | a-propos/page.tsx | 796 | Présentation de l'entreprise, histoire, certifications |
| `/contact` | contact/page.tsx | 586 | Formulaire de devis, coordonnées, processus de contact |
| `/faq` | faq/page.tsx | 585 | Questions fréquentes avec filtres par catégorie |
| `/marches-publics` | marches-publics/page.tsx | 547 | Espace collectivités et acheteurs publics |
| `/mentions-legales` | mentions-legales/page.tsx | 580 | Informations légales, assurances, RGPD |
| `/politique-confidentialite` | politique-confidentialite/page.tsx | 646 | Politique de confidentialité et données |
| `/realisations` | realisations/page.tsx | 583 | Portfolio de projets avec filtres |
| `/realisations/[slug]` | realisations/[slug]/page.tsx | 799 | Page détaillée d'un projet |
| `/ressources` | ressources/page.tsx | 535 | Blog/ressources avec articles et conseils |
| `/services` | services/page.tsx | 562 | Hub des 4 services principaux |
| `/services/amenagement` | services/amenagement/page.tsx | 480 | Service peinture & aménagement |
| `/services/enduits-finitions` | services/enduits-finitions/page.tsx | 567 | Service enduits et finitions |
| `/services/isolation` | services/isolation/page.tsx | 563 | Service isolation thermique & phonique |
| `/services/platrerie` | services/platrerie/page.tsx | 515 | Service plâtrerie & faux-plafonds |

**Total pages : 15** | **Total lignes pages : ~8 545 lignes**

---

## Composants (/components)

### Communs (racine)

| Composant | Lignes | Description | Utilisé sur |
|-----------|--------|-------------|-------------|
| Header.tsx | 416 | Navigation principale, menu mobile, CTA | Toutes les pages |
| Footer.tsx | 120 | Pied de page avec GridScan, liens | Toutes les pages |
| CtaBlock.tsx | 110 | Bloc d'appel à l'action réutilisable | Pages services, À propos |
| FAQ.tsx | 45 | Accordéon FAQ simple | Accueil |
| TrustBar.tsx | 56 | Barre de chiffres clés/certifications | Accueil, Services |
| Logo.tsx | 127 | Logo SVG avec variantes | Header |
| GridScan.tsx | 990 | Animation 3D WebGL futuriste | Hero, Footer |
| BeforeAfterSlider.tsx | 150 | Slider avant/après interactif | Accueil, Réalisations |
| ContactForm.tsx | 135 | Formulaire de contact avec validation | Contact, Accueil |

**Total communs : 9 composants** | **~2 149 lignes**

### Home (/components/home)

| Composant | Lignes | Description |
|-----------|--------|-------------|
| HomeHero.tsx | 96 | Section hero de l'accueil avec GridScan |
| AvisZoneIntervention.tsx | 180 | Avis Google + zone d'intervention |
| MarchesPublicsBlock.tsx | 232 | Bloc Espace Collectivités |
| PourquoiChoisir.tsx | 169 | Arguments + méthode en 4 étapes |
| ProfilsClients.tsx | 77 | Cartes des 3 profils clients |
| RealisationsSection.tsx | 148 | Slider réalisations avant/après |
| ServicesPreview.tsx | 151 | Grille des 4 services |

**Total home : 7 composants** | **~1 053 lignes**

### Icons (/components/icons)

| Composant | Lignes | Description |
|-----------|--------|-------------|
| HomeIcons.tsx | 532 | Icônes SVG pour la page d'accueil |
| ServiceIcons.tsx | 433 | Icônes SVG pour les pages services |

**Total icons : 2 fichiers** | **~965 lignes**

### Services (/components/services)

| Composant | Lignes | Description |
|-----------|--------|-------------|
| ServiceHero.tsx | 172 | Hero réutilisable avec GridScan |
| ServiceFeaturesGrid.tsx | 192 | Grille de prestations/features |
| ServiceMethodSection.tsx | 240 | Section méthode en 4 étapes |
| ServiceRealisationsSection.tsx | 224 | Section réalisations |
| ServiceFAQSection.tsx | 86 | Section FAQ avec accordéon |
| MarchesPublicsSection.tsx | 357 | Section Espace Collectivités |
| MobileStickyBar.tsx | 69 | Barre CTA sticky mobile |
| ServiceStructuredData.tsx | 241 | Schémas JSON-LD pour SEO |

**Total services : 8 composants** | **~1 581 lignes**

### UI (/components/ui) - Shadcn/ui

| Composant | Lignes | Description |
|-----------|--------|-------------|
| accordion.tsx | 76 | Accordéon avec Radix |
| badge.tsx | 46 | Badge/tag stylisé |
| button.tsx | 62 | Bouton avec variantes |
| card.tsx | 92 | Carte avec header/content/footer |
| input.tsx | 21 | Champ de saisie |
| label.tsx | 24 | Label de formulaire |
| select.tsx | 190 | Select avec Radix |
| separator.tsx | 28 | Séparateur horizontal/vertical |
| textarea.tsx | 18 | Zone de texte |

**Total ui : 9 composants** | **~557 lignes**

---

## Données (/lib)

| Fichier | Lignes | Type | Description |
|---------|--------|------|-------------|
| home-data.ts | 291 | données | Données statiques de la page d'accueil |
| services-data.tsx | 406 | données | Données centralisées pour les services |
| services-helpers.tsx | 175 | utilitaire | Helpers communs (animations, icônes) |
| services-metadata.ts | 160 | métadonnées | Métadonnées SEO pour les services |
| utils.ts | 9 | utilitaire | Fonction cn() pour Tailwind |

**Total lib : 5 fichiers** | **~1 041 lignes**

---

## Statistiques globales

| Catégorie | Fichiers | Lignes |
|-----------|----------|--------|
| Pages (/app) | 15 | ~8 545 |
| Composants communs | 9 | ~2 149 |
| Composants home | 7 | ~1 053 |
| Composants icons | 2 | ~965 |
| Composants services | 8 | ~1 581 |
| Composants ui | 9 | ~557 |
| Données/lib | 5 | ~1 041 |
| **TOTAL** | **55** | **~15 891** |

---

## Technologies utilisées

- **Framework** : Next.js 14+ (App Router)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS + CSS Variables
- **Composants UI** : Shadcn/ui (Radix)
- **Animations 3D** : Three.js + postprocessing (GridScan)
- **Détection faciale** : face-api.js (optionnel)
- **Icônes** : SVG personnalisées + Lucide React
- **SEO** : Schema.org JSON-LD, OpenGraph, Twitter Cards

---

## Notes importantes

1. **Dossier `/public` inexistant** - Aucun asset statique (images, fonts) n'est présent. Les images utilisent des URLs externes (Unsplash).

2. **Composant GridScan** (990 lignes) - Composant le plus complexe du projet, implémente une animation WebGL 3D avec shaders personnalisés.

3. **Duplication d'icônes** - `HomeIcons.tsx` et `ServiceIcons.tsx` contiennent des icônes similaires. Potentiel de mutualisation.

4. **Pages volumineuses** - Plusieurs pages dépassent 500 lignes (notamment `realisations/[slug]` avec 799 lignes). Possibilité d'extraire des sections.





