
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
              Encontre os <span className="text-hr-green">talentos certos</span> para sua empresa crescer
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              Consultor especializado em estratégias de recrutamento e seleção para conectar empresas com os melhores profissionais do mercado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary" size="lg">
                Diagnóstico gratuito <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-hr-green text-hr-green hover:bg-hr-green-light" size="lg">
                Conhecer serviços
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-hr-green-light rounded-full opacity-60 z-0"></div>
            <div className="h-96 bg-hr-green-light/20 rounded-lg flex items-center justify-center shadow-lg relative z-10">
              <p className="text-2xl text-hr-green font-semibold">Estratégias de Recrutamento Eficientes</p>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-hr-green-light rounded-full opacity-60 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
