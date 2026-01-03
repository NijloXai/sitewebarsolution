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
  keywords: [
    "plâtrerie Strasbourg",
    "isolation Strasbourg",
    "rénovation Strasbourg",
    "entreprise RGE Strasbourg",
    "marchés publics Alsace",
    "enduits finitions",
    "peinture rénovation",
    "aménagement intérieur",
    "devis gratuit Strasbourg",
    "artisan plâtrier 67",
  ],
  authors: [{ name: "AR+SOLUTION" }],
  creator: "AR+SOLUTION",
  publisher: "AR+SOLUTION",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ar-solution.fr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "AR+SOLUTION",
    title: "AR+SOLUTION | Plâtrerie, Isolation & Rénovation à Strasbourg",
    description:
      "Entreprise de rénovation, plâtrerie et isolation à Strasbourg (67). Certifiée RGE. Partenaires des marchés publics et des particuliers. Devis gratuit.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AR+SOLUTION - Expert en rénovation, plâtrerie et isolation à Strasbourg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AR+SOLUTION | Plâtrerie, Isolation & Rénovation à Strasbourg",
    description:
      "Entreprise de rénovation, plâtrerie et isolation à Strasbourg (67). Certifiée RGE. Partenaires des marchés publics et des particuliers. Devis gratuit.",
    images: ["/og-image.jpg"],
    creator: "@arsolution",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // À compléter avec les codes de vérification réels
    // google: "votre-code-google",
    // yandex: "votre-code-yandex",
    // bing: "votre-code-bing",
  },
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
