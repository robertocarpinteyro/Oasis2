import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oasis Creativa — Productora audiovisual premium",
  description:
    "Producimos contenido audiovisual de calidad premium que hace que tu marca se vea a la altura de las grandes en redes. Puebla, México.",
  openGraph: {
    title: "Oasis Creativa — Productora audiovisual premium",
    description:
      "Contenido premium constante para marcas que quieren proyectar autoridad en redes.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${sans.variable} ${display.variable}`}>
      <head>
        {/* Helvetica Now Display — usadas en el hero (estilo Mainframe) */}
        <link
          rel="stylesheet"
          href="https://db.onlinewebfonts.com/c/5ac3fe7c6abd2f62067f266d89671492?family=HelveticaNowDisplay-Medium"
        />
        <link
          rel="stylesheet"
          href="https://db.onlinewebfonts.com/c/1aa3377e489837a26d019bba501e779d?family=HelveticaNowDisplayW01-Rg"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
