
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <span className="text-xl font-bold text-hr-black">
                Método <span className="text-hr-green">RH+</span>
              </span>
            </a>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <a href="#inicio" className="font-medium hover:text-hr-green transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" className="font-medium hover:text-hr-green transition-colors">Sobre</a>
              </li>
              <li>
                <a href="#servicos" className="font-medium hover:text-hr-green transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#resultados" className="font-medium hover:text-hr-green transition-colors">Resultados</a>
              </li>
              <li>
                <a href="#faq" className="font-medium hover:text-hr-green transition-colors">FAQ</a>
              </li>
            </ul>
          </nav>
          
          <div className="hidden md:block">
            <Button className="btn-primary">Diagnóstico gratuito</Button>
          </div>
          
          <div className="md:hidden">
            <button
              type="button"
              className="p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#inicio" className="block px-3 py-2 rounded-md hover:bg-hr-green-light hover:text-hr-green">Início</a>
            <a href="#sobre" className="block px-3 py-2 rounded-md hover:bg-hr-green-light hover:text-hr-green">Sobre</a>
            <a href="#servicos" className="block px-3 py-2 rounded-md hover:bg-hr-green-light hover:text-hr-green">Serviços</a>
            <a href="#resultados" className="block px-3 py-2 rounded-md hover:bg-hr-green-light hover:text-hr-green">Resultados</a>
            <a href="#faq" className="block px-3 py-2 rounded-md hover:bg-hr-green-light hover:text-hr-green">FAQ</a>
            <Button className="btn-primary w-full mt-3">Diagnóstico gratuito</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
