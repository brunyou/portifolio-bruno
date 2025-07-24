"use client";

import React from 'react';
import { ArrowLeft, ArrowRight, MoreHorizontal, Lock } from 'lucide-react';

interface BrowserHeaderProps {
  url: string;
  className?: string;
}

export const BrowserHeader: React.FC<BrowserHeaderProps> = ({ url, className }) => {
  return (
    <header 
      className={`
        flex items-center gap-2 p-2 bg-zinc-800 rounded-t-xl
        ${className ?? ''}
      `}
    >
      <div className="flex items-center gap-1">
        <button className="p-1 rounded-full text-zinc-500 cursor-not-allowed">
          <ArrowLeft size={16} />
        </button>
        <button className="p-1 rounded-full text-zinc-400 hover:bg-zinc-700 hover:text-white transition-colors">
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Barra de URL */}
      <div className="flex-grow bg-zinc-700 rounded-full flex items-center px-3 py-1">
        <Lock size={12} className="text-zinc-400 mr-2" />
        <p className="text-sm text-zinc-300 truncate">{url}</p>
      </div>

      {/* Botão de Opções */}
      <div className="flex items-center">
        <button className="p-1 rounded-full text-zinc-400 hover:bg-zinc-700 hover:text-white transition-colors">
          <MoreHorizontal size={16} />
        </button>
      </div>
    </header>
  );
};