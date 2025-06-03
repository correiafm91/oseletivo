
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="bg-hr-green py-16">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Pronto para estruturar o RH da sua empresa desde o início?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Não espere os problemas aparecerem. Implemente um setor de RH completo e evite dores de cabeça futuras. Entre em contato agora mesmo!
        </p>
        <a href="https://www.instagram.com/umbomrh/" target="_blank" rel="noopener noreferrer">
          <Button 
            size="lg" 
            className="bg-white text-hr-green hover:bg-hr-green-light px-8 py-6 text-lg font-medium shadow-lg"
          >
            Implementar meu RH <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </a>
      </div>
    </section>
  );
};

export default CTA;
