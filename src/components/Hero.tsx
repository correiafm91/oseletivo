
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Implemente um <span className="text-hr-green">setor de RH completo</span> na sua empresa
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              Para empresários que ainda não têm equipe de RH. Estruture todos os processos desde o início e evite dores de cabeça futuras com uma base sólida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://www.instagram.com/umbomrh/" target="_blank" rel="noopener noreferrer">
                <Button className="btn-primary" size="lg">
                  Estruturar meu RH <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Button variant="outline" className="border-hr-green text-hr-green hover:bg-hr-green-light" size="lg">
                Ver implementações
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="h-96 bg-hr-green-light/20 rounded-lg flex items-center justify-center relative z-10">
              {/* Empty container with styling but no text */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
