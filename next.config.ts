import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  
  // Configuration des images optimisée
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Formats modernes pour une meilleure compression
    formats: ["image/avif", "image/webp"],
    // Tailles d'images pour le responsive
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Désactiver le lazy loading pour les images above-the-fold si nécessaire
    // (par défaut, Next.js fait déjà du lazy loading intelligent)
  },

  // Headers de cache pour les assets statiques
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
      {
        // Cache long pour les assets statiques (images, fonts, etc.)
        source: "/:path*\\.(jpg|jpeg|png|gif|webp|avif|svg|ico|woff|woff2|ttf|eot)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache moyen pour les fichiers JS et CSS
        source: "/:path*\\.(js|css)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Pas de cache pour les pages HTML (pour permettre les mises à jour)
        source: "/:path*\\.(html)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
        ],
      },
    ];
  },

  // Compression (gzip/brotli) - Next.js le gère automatiquement en production
  // via le serveur Node.js ou Vercel, mais on peut s'assurer que c'est activé
  compress: true,
};

export default nextConfig;
