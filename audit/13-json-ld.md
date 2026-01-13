# Audit des Données Structurées JSON-LD

**Date de l'audit** : 6 janvier 2026  
**Objectif** : Vérifier la présence et la conformité des schémas JSON-LD pour le référencement SEO

---

## 📊 Résumé par page

| Page | Schémas requis | État |
|------|----------------|------|
| `/` (Accueil) | Organization, LocalBusiness, WebSite + SearchAction | ✅ Complet |
| `/services` | Service, BreadcrumbList, FAQPage | ✅ Complet |
| `/services/platrerie` | Service, BreadcrumbList, FAQPage | ✅ Complet |
| `/services/isolation` | Service, BreadcrumbList, FAQPage | ✅ Complet |
| `/services/enduits-finitions` | Service, BreadcrumbList, FAQPage | ✅ Complet |
| `/services/amenagement` | Service, BreadcrumbList, FAQPage | ✅ Complet |
| `/realisations` | CollectionPage, ItemList, BreadcrumbList | ✅ Complet |
| `/contact` | ContactPage, LocalBusiness | ✅ Complet |
| `/faq` | FAQPage, BreadcrumbList | ✅ Complet |

---

## 📄 Détail par page

### Page d'accueil (`/`)

**Fichier** : `src/app/page.tsx`

**Schémas implémentés** :

#### 1. Organization ✅
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AR+SOLUTION",
  "legalName": "AR+SOLUTION",
  "url": "https://ar-solution.fr",
  "logo": "https://ar-solution.fr/logo.png",
  "description": "Expert en rénovation, plâtrerie et isolation à Strasbourg...",
  "foundingDate": "2006",
  "contactPoint": {...},
  "address": {...}
}
```

#### 2. LocalBusiness ✅
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "AR+SOLUTION",
  "telephone": "+33-3-88-00-00-00",
  "email": "contact@ar-solution.fr",
  "address": {...},
  "geo": {...},
  "openingHoursSpecification": [...],
  "areaServed": {...},
  "hasOfferCatalog": {...},
  "aggregateRating": {...}
}
```

#### 3. WebSite + SearchAction ✅
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "AR+SOLUTION",
  "url": "https://ar-solution.fr",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://ar-solution.fr/recherche?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

#### 4. Service (dynamique pour chaque service) ✅
#### 5. Review (dynamique pour chaque avis client) ✅

---

### Pages Services (`/services/*`)

**Fichier composant** : `src/components/services/ServiceStructuredData.tsx`

Ce composant réutilisable génère automatiquement les schémas suivants :

#### 1. LocalBusiness ✅
- ID unique : `#localbusiness` pour référencement croisé
- Informations complètes de l'entreprise

#### 2. Service ✅
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "[Nom du service]",
  "description": "[Description]",
  "provider": {"@type": "LocalBusiness", "@id": "#localbusiness"},
  "areaServed": {"@type": "City", "name": "Strasbourg"},
  "url": "[URL complète]",
  "serviceType": "[Type]"
}
```

#### 3. FAQPage ✅ (si FAQ fournie)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "...", "acceptedAnswer": {...}}
  ]
}
```

#### 4. BreadcrumbList ✅
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Accueil", "item": "/"},
    {"@type": "ListItem", "position": 2, "name": "Services", "item": "/services"},
    {"@type": "ListItem", "position": 3, "name": "[Service]", "item": "/services/[slug]"}
  ]
}
```

---

### Page Réalisations (`/realisations`)

**Fichier** : `src/app/realisations/page.tsx`

#### 1. CollectionPage + ItemList ✅
```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Nos Réalisations | Portfolio Plâtrerie & Isolation",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "item": {...}}
    ]
  },
  "breadcrumb": {...}
}
```

---

### Page Contact (`/contact`)

**Fichier** : `src/app/contact/page.tsx`

#### 1. ContactPage ✅
```json
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact & Devis Gratuit | AR+SOLUTION",
  "mainEntity": {
    "@type": "Organization",
    "name": "AR+SOLUTION",
    "telephone": "+33388000000",
    "email": "contact@ar-solution.fr",
    "address": {...},
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {...},
      "geoRadius": "50000"
    },
    "openingHoursSpecification": [...]
  }
}
```

---

### Page FAQ (`/faq`)

**Fichier** : `src/app/faq/page.tsx`

#### 1. FAQPage ✅
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "...", "acceptedAnswer": {...}}
  ]
}
```

#### 2. BreadcrumbList ✅
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Accueil", "item": "/"},
    {"@type": "ListItem", "position": 2, "name": "FAQ", "item": "/faq"}
  ]
}
```

---

## 🔧 Informations de l'entreprise (données centralisées)

```json
{
  "name": "AR+SOLUTION",
  "url": "https://ar-solution.fr",
  "telephone": "+33-3-88-00-00-00",
  "email": "contact@ar-solution.fr",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Strasbourg",
    "addressLocality": "Strasbourg",
    "postalCode": "67000",
    "addressRegion": "Alsace",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "48.5734",
    "longitude": "7.7521"
  },
  "openingHours": "Lun-Ven 08:00-18:00",
  "priceRange": "€€"
}
```

---

## ✅ Points forts actuels

1. **Schémas complets** : Toutes les pages principales ont leurs schémas JSON-LD requis
2. **Composant réutilisable** : `ServiceStructuredData` centralise la logique pour les pages services
3. **FAQ dynamique** : Les schémas FAQPage sont générés dynamiquement depuis les données
4. **Fil d'Ariane** : BreadcrumbList présent sur les pages principales
5. **Avis clients** : AggregateRating intégré dans LocalBusiness
6. **Zone d'intervention** : GeoCircle défini pour le SEO local

---

## 📝 Recommandations futures

1. **Compléter l'adresse** : Ajouter la rue exacte quand disponible dans `streetAddress`
2. **Ajouter les réseaux sociaux** : Remplir le tableau `sameAs` avec les profils réels
3. **Ajouter les images** : Enrichir les schémas Service avec des images réelles
4. **Tester régulièrement** : Utiliser le Rich Results Test de Google pour valider les schémas

---

## 🛠️ Outils de validation

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)
- [Bing Markup Validator](https://www.bing.com/webmasters/markup-validator)

---

*Dernière mise à jour : 6 janvier 2026*





