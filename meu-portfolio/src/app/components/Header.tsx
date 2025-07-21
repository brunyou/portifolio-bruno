"use client";
import Link from "next/link"; // Importa o componente de Link do Next.js

export default function Header() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projetos", href: "/projetos" },
    { name: "Contato", href: "/contato" },
  ];

  return (
    <header className="fixed top-4 left-0 w-full flex justify-center z-50">
      
      <nav 
        className="bg-black/30 backdrop-blur-lg border border-white/10 px-6 py-2 rounded-full flex items-center gap-x-6"
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-neutral-300 hover:text-white transition-colors duration-300"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}