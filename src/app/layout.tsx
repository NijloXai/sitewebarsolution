/*
  Fichier de mise en page principale du site AR+SOLUTION.
  
  Ce fichier définit la structure de base de toutes les pages :
  - La langue du site (français)
  - La police utilisée (Inter via next/font/google)
  - Les informations affichées dans l'onglet du navigateur (titre, description)
  
  L'utilisateur ne voit pas directement ce fichier, mais il influence
  l'apparence générale et le référencement du site.
*/

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

/* 
  Configuration de la police Inter avec next/font/google.
  - subsets: inclut latin et latin-ext pour tous les caractères français
  - display: swap pour éviter FOIT (Flash of Invisible Text)
  - La police est appliquée via className directement sur le body
*/
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

/* Métadonnées du site pour le référencement et l'affichage dans les navigateurs */
export const metadata: Metadata = {
  title: "AR+SOLUTION | Plâtrerie, Isolation & Rénovation à Strasbourg",
  description:
    "Entreprise de rénovation, plâtrerie et isolation à Strasbourg (67). Certifiée RGE. Partenaires des marchés publics et des particuliers. Devis gratuit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
