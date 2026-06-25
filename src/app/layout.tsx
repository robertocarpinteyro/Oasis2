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
      <body>{children}</body>
    </html>
  );
}
