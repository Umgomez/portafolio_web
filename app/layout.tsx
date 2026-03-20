import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Portfolio - Ubaldin Gómez ☯️",
  description: "Portafolio digital de Ubaldin Gómez, desarrollador de aplicaciones. Explora mis proyectos, habilidades y experiencia en el mundo del desarrollo de aplicaciones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className={`${urbanist.className}`}>{children}</body>
    </html>
  );
}
