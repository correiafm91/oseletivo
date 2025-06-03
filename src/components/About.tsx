
import React from 'react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-hr-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-hr-green">Seu RH estruturado do zero.</span> Sem complicações futuras.
          </h2>
          <div className="w-20 h-1 bg-hr-green mx-auto mb-6"></div>
        </div>
        
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              <span className="font-semibold text-hr-green">Especialista em implementação de RH completo</span> para empresários que precisam estruturar essa área desde o início.
            </p>
            
            <p className="text-lg leading-relaxed">
              Muitas empresas crescem sem uma estrutura de RH adequada e depois enfrentam problemas complexos e custosos. Meu trabalho é evitar que isso aconteça com você, criando uma base sólida desde o primeiro dia.
            </p>
            
            <p className="text-lg leading-relaxed">
              Implemento políticas, processos, documentação, sistemas de gestão de pessoas, estruturas de cargos e salários, e todo o framework necessário para que sua empresa tenha um RH que funciona de verdade.
            </p>
            
            <p className="text-lg leading-relaxed font-semibold text-hr-green">
              Não espere os problemas aparecerem. Previna-se agora.
            </p>
            
            <blockquote className="border-l-4 border-hr-green pl-4 italic text-gray-700">
              "Uma empresa sem RH estruturado é como uma casa sem fundação. Parece que está funcionando, até que os problemas começam a aparecer."
            </blockquote>
            
            <div className="pt-4 text-center">
              <a href="https://www.instagram.com/umbomrh/" target="_blank" rel="noopener noreferrer">
                <Button className="btn-primary">Implementar meu RH</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
