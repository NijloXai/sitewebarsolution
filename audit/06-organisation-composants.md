# Audit Organisation des Composants

## Résumé

Cet audit vérifie que chaque composant est placé au bon endroit selon la règle :
- `/components/` = UNIQUEMENT les composants utilisés sur **plusieurs pages**
- Composants utilisés sur **une seule page** = doivent rester **dans la page**

---

## Composants à DÉPLACER (dans /components/ mais usage unique)

| Composant | Importé par | Action recommandée |
|-----------|-------------|---------------------|
| `BeforeAfterSlider.tsx` | `components/home/RealisationsSection.tsx` uniquement | Intégrer dans `RealisationsSection.tsx` |
| `ContactForm.tsx` | `/app/page.tsx` uniquement | Intégrer dans la page d'accueil |
| `FAQ.tsx` | `/app/page.tsx` uniquement | Intégrer dans la page d'accueil |
| `Logo.tsx` | `components/Header.tsx` uniquement | Intégrer dans `Header.tsx` ou conserver (composant logique à part) |

### Dossier `/components/home/` (7 composants - TOUS à usage unique)

| Composant | Importé par | Action recommandée |
|-----------|-------------|---------------------|
| `AvisZoneIntervention.tsx` | `/app/page.tsx` uniquement | Intégrer dans la page d'accueil |
| `HomeHero.tsx` | `/app/page.tsx` uniquement | Intégrer dans la page d'accueil |
| `MarchesPublicsBlock.tsx` | `/app/page.tsx` uniquement | Intégrer dans la page d'accueil |
| `PourquoiChoisir.tsx` | `/app/page.tsx` uniquement | Intégrer dans la page d'accueil |
| `ProfilsClients.tsx` | `/app/page.tsx` uniquement | Intégrer dans la page d'accueil |
| `RealisationsSection.tsx` | `/app/page.tsx` uniquement | Intégrer dans la page d'accueil |
| `ServicesPreview.tsx` | `/app/page.tsx` uniquement | Intégrer dans la page d'accueil |

> ⚠️ **Attention** : Le dossier `/components/home/` entier est potentiellement à supprimer car **aucun** de ses composants n'est utilisé sur plusieurs pages. Tous sont exclusifs à la page d'accueil.

---

## Composants à EXTRAIRE (dans une page mais usage multiple)

| Code | Présent dans | Action recommandée |
|------|--------------|---------------------|
| *Aucun identifié* | — | — |

> ✅ Pas de code dupliqué identifié dans les pages qui nécessiterait extraction.

---

## Composants CONFORMES (multi-usage confirmé)

### Composants racine `/components/`

| Composant | Nombre d'usages | Utilisé par |
|-----------|-----------------|-------------|
| `Header.tsx` | 15 pages | Toutes les pages |
| `Footer.tsx` | 15 pages | Toutes les pages |
| `CtaBlock.tsx` | 8 pages | a-propos, marches-publics, services, realisations, isolation, platrerie, enduits-finitions, amenagement |
| `GridScan.tsx` | 7 fichiers | a-propos, mentions-legales, faq, realisations/[slug], ressources, HomeHero, Footer |
| `TrustBar.tsx` | 6 pages | services, page.tsx (home), isolation, platrerie, enduits-finitions, amenagement |

### Composants `/components/services/` ✅ (tous conformes)

| Composant | Nombre d'usages | Utilisé par |
|-----------|-----------------|-------------|
| `ServiceHero.tsx` | 7 pages | marches-publics, services, realisations, isolation, platrerie, enduits-finitions, amenagement |
| `MobileStickyBar.tsx` | 7 pages | marches-publics, services, realisations, isolation, platrerie, enduits-finitions, amenagement |
| `MarchesPublicsSection.tsx` | 5 pages | services, realisations, isolation, platrerie, enduits-finitions |
| `ServiceFAQSection.tsx` | 5 pages | realisations, isolation, platrerie, enduits-finitions, amenagement |
| `ServiceStructuredData.tsx` | 5 pages | services, isolation, platrerie, enduits-finitions, amenagement |
| `ServiceRealisationsSection.tsx` | 4 pages | isolation, platrerie, enduits-finitions, amenagement |
| `ServiceFeaturesGrid.tsx` | 4 pages | isolation, platrerie, enduits-finitions, amenagement |
| `ServiceMethodSection.tsx` | 3 pages | isolation, platrerie, amenagement |

### Composants `/components/icons/` ✅ (conformes)

| Composant | Nombre d'usages | Utilisé par |
|-----------|-----------------|-------------|
| `HomeIcons.tsx` | 3 fichiers | MarchesPublicsBlock, ServicesPreview, PourquoiChoisir |
| `ServiceIcons.tsx` | 1 fichier | `lib/services-data.tsx` (utilisé indirectement par toutes les pages services) |

### Composants `/components/ui/` ✅ (shadcn/ui - tous conformes)

| Composant | Nombre d'usages |
|-----------|-----------------|
| `button.tsx` | 22+ fichiers |
| `badge.tsx` | 20 fichiers |
| `card.tsx` | 19 fichiers |
| `accordion.tsx` | 6 fichiers |
| `separator.tsx` | 3 fichiers |
| `input.tsx` | 3 fichiers |
| `label.tsx` | 2 fichiers |
| `select.tsx` | 2 fichiers |
| `textarea.tsx` | 2 fichiers |

> Les composants `ui/` sont des primitives shadcn/ui prévues pour être réutilisables. Leur placement est correct.

---

## Problèmes identifiés

### 🔴 Problème majeur : Dossier `/components/home/`

Le dossier `/components/home/` contient **7 composants** qui sont **tous utilisés uniquement sur la page d'accueil** (`/app/page.tsx`). 

Selon les règles du projet, ces composants devraient être intégrés directement dans la page d'accueil, pas dans `/components/`.

### 🟠 Problème mineur : Composants racine à usage unique

3-4 composants à la racine de `/components/` n'ont qu'un seul usage :
- `BeforeAfterSlider.tsx` (utilisé par `RealisationsSection` qui lui-même n'est utilisé que par home)
- `ContactForm.tsx` (home uniquement)
- `FAQ.tsx` (home uniquement)
- `Logo.tsx` (Header uniquement - cas particulier, peut se justifier)

---

## Structure actuelle vs recommandée

### Structure actuelle
```
/components/
├── BeforeAfterSlider.tsx     ❌ usage unique
├── ContactForm.tsx           ❌ usage unique
├── CtaBlock.tsx              ✅ multi-usage
├── FAQ.tsx                   ❌ usage unique
├── Footer.tsx                ✅ multi-usage
├── GridScan.tsx              ✅ multi-usage
├── Header.tsx                ✅ multi-usage
├── Logo.tsx                  ⚠️ usage unique (Header)
├── TrustBar.tsx              ✅ multi-usage
├── home/                     ❌ TOUT le dossier = usage unique (home)
│   ├── AvisZoneIntervention.tsx
│   ├── HomeHero.tsx
│   ├── MarchesPublicsBlock.tsx
│   ├── PourquoiChoisir.tsx
│   ├── ProfilsClients.tsx
│   ├── RealisationsSection.tsx
│   └── ServicesPreview.tsx
├── services/                 ✅ TOUT le dossier = multi-usage
│   ├── MarchesPublicsSection.tsx
│   ├── MobileStickyBar.tsx
│   ├── ServiceFAQSection.tsx
│   ├── ServiceFeaturesGrid.tsx
│   ├── ServiceHero.tsx
│   ├── ServiceMethodSection.tsx
│   ├── ServiceRealisationsSection.tsx
│   └── ServiceStructuredData.tsx
├── icons/                    ✅ OK
└── ui/                       ✅ shadcn/ui
```

### Structure recommandée (après correction)
```
/components/
├── common/                   # Composants vraiment partagés
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Logo.tsx             # Peut rester si besoin futur
│   ├── CtaBlock.tsx
│   ├── GridScan.tsx
│   └── TrustBar.tsx
├── services/                 # ✅ Inchangé
│   └── (8 composants)
├── icons/                    # ✅ Inchangé
│   ├── HomeIcons.tsx
│   └── ServiceIcons.tsx
└── ui/                       # ✅ shadcn/ui inchangé
    └── (9 composants)

/app/page.tsx                 # Contient maintenant directement :
                              # - HomeHero (inline)
                              # - ProfilsClients (inline)
                              # - ServicesPreview (inline)
                              # - RealisationsSection (inline + BeforeAfterSlider)
                              # - PourquoiChoisir (inline)
                              # - MarchesPublicsBlock (inline)
                              # - AvisZoneIntervention (inline)
                              # - FAQ (inline)
                              # - ContactForm (inline)
```

---

## Statistiques

| Catégorie | Nombre | % |
|-----------|--------|---|
| Composants conformes | 24 | 69% |
| Composants à déplacer | 11 | 31% |
| **Total** | **35** | 100% |

---

## Décision à prendre

### Option A : Appliquer strictement les règles
- Supprimer le dossier `/components/home/`
- Intégrer les 11 composants à usage unique dans leurs pages respectives
- Avantage : cohérence parfaite avec les règles
- Inconvénient : la page d'accueil deviendrait très longue

### Option B : Tolérer le découpage pour lisibilité
- Conserver `/components/home/` comme exception documentée
- Justification : la page d'accueil est complexe, le découpage améliore la maintenabilité
- Renommer en `/components/_home-only/` pour clarifier l'usage exclusif
- Documenter cette exception dans les règles

### Recommandation

**Option A** est recommandée pour respecter strictement les règles du projet. Cependant, si la page d'accueil devient trop volumineuse (>500 lignes), envisager de créer des sections inline avec des commentaires clairs plutôt que des fichiers séparés.

---

## Prochaines étapes

1. **Décider** : Choisir entre Option A et Option B
2. **Si Option A** : 
   - Intégrer les composants home/ dans `/app/page.tsx`
   - Intégrer `ContactForm`, `FAQ`, `BeforeAfterSlider` dans la page home
   - Supprimer les fichiers devenus inutiles
   - Mettre à jour les imports
3. **Vérifier** les icônes `HomeIcons.tsx` (utilisées par composants home/) - devront être déplacées aussi
4. **Tester** que tout fonctionne après réorganisation

