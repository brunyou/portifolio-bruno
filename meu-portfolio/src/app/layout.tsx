// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Supondo que você use a fonte Inter
import "./globals.css";
import Header from "./components/Header";// 1. Importe o Header

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfólio Bruno", // Exemplo de título
  description: "Portfólio de desenvolvimento de Bruno", // Exemplo de descrição
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <Header /> {/* 2. Adicione o componente aqui */}
        {children}
      </body>
    </html>
  );
}