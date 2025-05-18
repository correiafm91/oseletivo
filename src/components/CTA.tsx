
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="bg-hr-green py-16">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Pronto para atrair os melhores talentos para sua empresa?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Entre em contato agora mesmo e descubra como posso ajudar sua empresa a encontrar os profissionais ideais que farão a diferença no seu negócio.
        </p>
        <a href="https://www.instagram.com/useletivo/" target="_blank" rel="noopener noreferrer">
          <Button 
            size="lg" 
            className="bg-white text-hr-green hover:bg-hr-green-light px-8 py-6 text-lg font-medium shadow-lg"
          >
            Iniciar processo seletivo <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </a>
      </div>
    </section>
  );
};

export default CTA;
