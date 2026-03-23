import type { Metadata, Viewport } from "next";
import { Inter, Bebas_Neue, JetBrains_Mono, Permanent_Marker } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marker",
});

export const metadata: Metadata = {
  title: "Tadeo Parmigiani | Ingenieria en Sistemas",
  description:
    "Portfolio de Tadeo Parmigiani - Estudiante Avanzado de Ingenieria en Sistemas",
  keywords: [
    "infrastructura",
    "soporteit",
    "developer",
    "tadeo",
    "portfolio",
    "software",
    "frontend",
    "fullstack",
    "react",
    "typescript",
    "argentina",
  ],
  authors: [{ name: "Tadeo Parmigiani" }],
  verification: { google: "LIVS-4pe11AX1CLGEW_7aCNXzPzauMTuAZBuSAMiX2I",
},
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${inter.variable} ${bebasNeue.variable} ${jetbrainsMono.variable} ${permanentMarker.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
