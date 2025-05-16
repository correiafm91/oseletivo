
import React from 'react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-hr-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre <span className="text-hr-green">Gustavo Correia</span>
          </h2>
          <div className="w-20 h-1 bg-hr-green mx-auto mb-6"></div>
        </div>
        
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Sou <span className="font-semibold text-hr-green">Gustavo Correia</span>, consultor especializado em estratégias de 
              recrutamento e seleção para empresas que desejam encontrar os melhores talentos do mercado.
            </p>
            
            <p className="text-lg leading-relaxed">
              Com mais de 8 anos de experiência em Recursos Humanos, desenvolvi uma metodologia única que 
              <span className="font-semibold text-hr-green"> combina análise estratégica, mapeamento de competências e técnicas 
              avançadas de entrevista</span> para garantir as melhores contratações para sua empresa.
            </p>
            
            <p className="text-lg leading-relaxed">
              Minha abordagem não busca apenas preencher vagas, mas sim encontrar profissionais que realmente 
              se alinhem à cultura da sua empresa e tragam resultados significativos para o negócio.
            </p>
            
            <blockquote className="border-l-4 border-hr-green pl-4 italic text-gray-700">
              "Acredito que o sucesso de uma empresa está diretamente ligado à qualidade das pessoas que 
              nela trabalham. Minha missão é ajudar empresas a encontrarem os colaboradores certos para crescerem
              juntos, de forma sustentável e duradoura."
            </blockquote>
            
            <div className="pt-4 text-center">
              <Button className="btn-primary">Agendar uma conversa</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
