
import React from 'react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-hr-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-hr-green">O talento certo transforma tudo.</span> Eu encontro para você.
          </h2>
          <div className="w-20 h-1 bg-hr-green mx-auto mb-6"></div>
        </div>
        
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              <span className="font-semibold text-hr-green">Especialista em recrutamento estratégico</span> para empresas que não podem errar na hora de contratar.
            </p>
            
            <p className="text-lg leading-relaxed">
              Minha atuação vai além de processos seletivos comuns. Eu crio estratégias sob medida para atrair, identificar e selecionar profissionais que realmente se conectam com a cultura da sua empresa e entregam resultado desde o primeiro dia.
            </p>
            
            <p className="text-lg leading-relaxed">
              Mapeamento de competências, entrevistas com profundidade, análise comportamental e alinhamento estratégico são parte da metodologia que desenvolvi para garantir contratações que geram impacto real no seu negócio.
            </p>
            
            <p className="text-lg leading-relaxed font-semibold text-hr-green">
              Não trabalho com achismo. Trabalho com precisão.
            </p>
            
            <blockquote className="border-l-4 border-hr-green pl-4 italic text-gray-700">
              "O sucesso de uma empresa depende das pessoas certas nos lugares certos. Meu papel é garantir que você encontre os profissionais que realmente farão diferença no seu negócio."
            </blockquote>
            
            <div className="pt-4 text-center">
              <a href="https://www.instagram.com/useletivo/" target="_blank" rel="noopener noreferrer">
                <Button className="btn-primary">Iniciar recrutamento</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
