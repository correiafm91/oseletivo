
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ResultCard = ({ number, text }: { number: string; text: string }) => (
  <Card className="border-none shadow-lg bg-white">
    <CardContent className="p-8 text-center">
      <h3 className="text-4xl md:text-5xl font-bold text-hr-green mb-2">{number}</h3>
      <p className="text-gray-700">{text}</p>
    </CardContent>
  </Card>
);

const Results = () => {
  return (
    <section id="resultados" className="section-padding bg-hr-green-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Resultados <span className="text-hr-green">Comprovados</span>
          </h2>
          <div className="w-20 h-1 bg-hr-green mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Números que demonstram o impacto da implementação completa de RH nas empresas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ResultCard 
            number="+50" 
            text="Empresas com RH implementado"
          />
          
          <ResultCard 
            number="90%" 
            text="Redução de problemas trabalhistas"
          />
          
          <ResultCard 
            number="85%" 
            text="Melhoria na satisfação dos colaboradores"
          />
          
          <ResultCard 
            number="60 dias" 
            text="Tempo médio para implementação completa"
          />
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">Depoimentos de Empresários</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-hr-gray p-6 rounded-lg">
              <div className="flex items-center space-x-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-hr-green" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="italic mb-4">
                "Implementar o RH desde o início foi a melhor decisão que tomei. Agora tenho processos claros, evitei problemas trabalhistas e minha equipe está muito mais engajada. Vale cada centavo investido."
              </p>
              <p className="font-semibold">
                Carlos Mendes, CEO - TechStartup
              </p>
            </div>
            
            <div className="bg-hr-gray p-6 rounded-lg">
              <div className="flex items-center space-x-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-hr-green" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="italic mb-4">
                "Antes eu vivia com medo de processos trabalhistas e não sabia como estruturar a gestão de pessoas. Agora tenho tudo organizado e posso focar no crescimento do negócio com tranquilidade."
              </p>
              <p className="font-semibold">
                Ana Rodrigues, Fundadora - InovaServiços
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
