"use client";
import Link from "next/link";
import Image from "next/image"; // 1. Importe o componente Image

export default function Header() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projetos", href: "/projetos" },
    { name: "Contato", href: "/contato" },
  ];

  return (
    <header className="fixed top-4 left-0 w-full flex justify-center z-50 px-4">
      <nav 
        className="bg-black/15 backdrop-blur-lg border border-white/10 px-4 py-2 rounded-full flex items-center justify-between w-full max-w-5xl"
      >
        {/* 2. Lado Esquerdo: Logo e Nome */}
        <Link href="/" className="flex items-center gap-x-3">
          <Image
            src="/image.svg" // Caminho a partir da pasta 'public'
            width={32}
            height={32}
            alt="Logo Bruno Pereira"
          />
          <span className="font-bold text-white hidden sm:inline">
            Bruno Pereira
          </span>
        </Link>
        
        {/* 3. Lado Direito: Links de Navegação */}
        <div className="flex items-center gap-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-purple-300 transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}