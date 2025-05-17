
import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-hr-black text-white py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="text-xl font-bold mb-4">
            <span className="text-hr-green">Consultoria em Recrutamento</span>
          </div>
          
          <div className="flex space-x-6 mb-4">
            <a href="#inicio" className="text-gray-300 hover:text-hr-green transition-colors">Início</a>
            <a href="#sobre" className="text-gray-300 hover:text-hr-green transition-colors">Sobre</a>
            <a href="#servicos" className="text-gray-300 hover:text-hr-green transition-colors">Serviços</a>
            <a href="#resultados" className="text-gray-300 hover:text-hr-green transition-colors">Resultados</a>
            <a href="#faq" className="text-gray-300 hover:text-hr-green transition-colors">FAQ</a>
          </div>
          
          <div className="flex space-x-4 mb-6">
            <a href="https://www.instagram.com/oseletivo_/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-hr-green">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/gustavo-correia-48903934b/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-hr-green">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
          
          <p className="text-gray-400 text-sm">
            © {currentYear} Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
