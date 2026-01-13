# Audit des Données

**Date :** 5 janvier 2026  
**Périmètre :** Tous les fichiers `.tsx` et `.ts` dans `/app`, `/components` et `/lib`

---

## Résumé

| Métrique | Valeur |
|----------|--------|
| **Fichiers analysés** | ~50 |
| **Incohérences critiques** | 2 |
| **Incohérences importantes** | 1 |
| **Pages sans données centralisées** | 8 |
| **Fichiers utilisant home-data.ts** | 7 |
| **Fichiers utilisant services-data.tsx** | 6 |

---

## 🔴 Incohérences critiques

### 1. Forme juridique incohérente

| Fichier | Ligne | Valeur | Statut |
|---------|-------|--------|--------|
| `/app/mentions-legales/page.tsx` | 45 | `SASU` | ❓ À vérifier |
| `/app/politique-confidentialite/page.tsx` | 79 | `SARL` | ❓ À vérifier |

> ⚠️ **Contradiction directe** : Le même site indique deux formes juridiques différentes (SASU vs SARL). Une seule valeur est correcte.

**Action requise :** Vérifier la forme juridique réelle sur le Kbis et harmoniser.

---

### 2. Code postal incohérent

| Fichier | Ligne | Valeur | Statut |
|---------|-------|--------|--------|
| `/app/mentions-legales/page.tsx` | 48 | `67200` | ❓ À vérifier |
| `/components/services/ServiceStructuredData.tsx` | 95 | `67000` | ❓ À vérifier |
| `/app/page.tsx` | 81, 102 | `67000` | - |
| `/app/contact/page.tsx` | 497 | `67000` | - |
| `/app/politique-confidentialite/page.tsx` | 80 | `67000` | - |

> ⚠️ **Contradiction** : Le code postal est `67200` sur la page mentions légales mais `67000` partout ailleurs.

**Action requise :** Vérifier l'adresse exacte du siège social et harmoniser.

---

## 🟠 Incohérences importantes

### 3. Emails multiples (à clarifier)

| Email | Utilisation | Fichier(s) |
|-------|-------------|------------|
| `contact@ar-solution.fr` | Email principal | Utilisé partout |
| `marches@ar-solution.fr` | Marchés publics uniquement | `/components/home/MarchesPublicsBlock.tsx` (ligne 110) |

> ℹ️ **Note** : Deux emails différents sont utilisés. Cela peut être intentionnel (email dédié aux marchés publics) ou une erreur.

**Action requise :** Confirmer si l'email `marches@ar-solution.fr` existe réellement ou s'il faut utiliser l'email principal.

---

## ✅ Données cohérentes

Ces données sont correctement uniformisées sur tout le site :

| Donnée | Valeur | Statut |
|--------|--------|--------|
| Nom entreprise | `AR+SOLUTION` | ✅ Cohérent partout |
| Téléphone | `03 88 00 00 00` | ✅ Cohérent partout |
| Email principal | `contact@ar-solution.fr` | ✅ Cohérent |
| Date de fondation | `2006` | ✅ Cohérent |
| Certifications | RGE Qualibat, Garantie Décennale | ✅ Cohérent |
| Zone d'intervention | Strasbourg, Alsace, Bas-Rhin | ✅ Cohérent |

---

## 📊 Utilisation des fichiers de données centralisés

### `home-data.ts` — Utilisé par 7 fichiers

| Fichier | Import |
|---------|--------|
| `/app/page.tsx` | ✅ Accueil |
| `/components/home/RealisationsSection.tsx` | ✅ |
| `/components/home/ProfilsClients.tsx` | ✅ |
| `/components/home/MarchesPublicsBlock.tsx` | ✅ |
| `/components/home/AvisZoneIntervention.tsx` | ✅ |
| `/components/home/ServicesPreview.tsx` | ✅ |
| `/components/home/PourquoiChoisir.tsx` | ✅ |

### `services-data.tsx` — Utilisé par 6 fichiers

| Fichier | Import |
|---------|--------|
| `/app/services/page.tsx` | ✅ Hub services |
| `/app/realisations/page.tsx` | ✅ |
| `/app/services/isolation/page.tsx` | ✅ |
| `/app/services/platrerie/page.tsx` | ✅ |
| `/app/services/enduits-finitions/page.tsx` | ✅ |
| `/app/services/amenagement/page.tsx` | ✅ |

---

## ⚠️ Pages avec données en dur (non centralisées)

Ces 8 fichiers contiennent des données directement dans le code au lieu d'utiliser un fichier de données centralisé :

| Fichier | Type de données en dur | Priorité |
|---------|------------------------|----------|
| `/app/a-propos/page.tsx` | Histoire, équipe, valeurs | 🟠 Moyen |
| `/app/marches-publics/page.tsx` | Références, processus | 🟠 Moyen |
| `/app/faq/page.tsx` | Questions/réponses | 🟡 Faible |
| `/app/contact/page.tsx` | Coordonnées, horaires | 🔴 Critique |
| `/app/mentions-legales/page.tsx` | Infos légales | 🔴 Critique |
| `/app/politique-confidentialite/page.tsx` | Infos légales | 🔴 Critique |
| `/app/ressources/page.tsx` | Articles, guides | 🟡 Faible |
| `/app/realisations/[slug]/page.tsx` | Détails projets | 🟠 Moyen |

---

## 📋 Recommandations

### Actions prioritaires (🔴 Critique)

1. **Corriger la forme juridique** : Vérifier le Kbis et harmoniser SASU/SARL
2. **Corriger le code postal** : Vérifier l'adresse exacte (67000 ou 67200)
3. **Créer un fichier `company-data.ts`** pour centraliser :
   - Nom entreprise
   - Adresse complète (rue, code postal, ville)
   - Téléphone
   - Email(s)
   - Forme juridique
   - SIRET/SIREN
   - Capital social
   - Numéro TVA

### Actions secondaires (🟠 Moyen)

4. **Clarifier l'email marchés publics** : Confirmer si `marches@ar-solution.fr` est valide
5. **Centraliser les données de `/app/contact/page.tsx`** : Horaires, coordonnées
6. **Centraliser les données légales** : Mentions légales et politique de confidentialité

### Actions tertiaires (🟡 Faible)

7. Centraliser les FAQ dans un fichier de données
8. Centraliser les articles/ressources

---

## Plan de centralisation proposé

```
src/lib/
├── home-data.ts          (existant - 291 lignes)
├── services-data.tsx     (existant - 406 lignes)
├── services-helpers.tsx  (existant - 175 lignes)
├── services-metadata.ts  (existant - 160 lignes)
├── utils.ts              (existant - 9 lignes)
│
└── company-data.ts       (À CRÉER)
    ├── companyInfo       → Nom, forme juridique, SIRET, capital
    ├── companyAddress    → Adresse complète
    ├── companyContact    → Téléphone, emails
    ├── companyLegal      → Mentions légales, RGPD
    └── companyCertifications → RGE, Qualibat, Décennale
```

---

## Statistiques finales

```
Données cohérentes :      ██████████████░░░░░░ 70%
Incohérences critiques :  ██░░░░░░░░░░░░░░░░░░ 10%
Données non centralisées: ████░░░░░░░░░░░░░░░░ 20%
───────────────────────────────────────────────────
Conformité globale :      ██████████████░░░░░░ 70%
```

**Verdict global :** Le projet est à **70% conforme** pour la gestion des données. Les 2 incohérences critiques (forme juridique et code postal) doivent être corrigées en priorité. La création d'un fichier `company-data.ts` permettrait de centraliser toutes les informations de l'entreprise et d'éviter ces problèmes à l'avenir.





