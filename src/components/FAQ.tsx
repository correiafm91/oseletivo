
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Como funciona o processo de consultoria?",
    answer: "O processo começa com um diagnóstico gratuito para entender as necessidades da sua empresa. Em seguida, desenvolvemos um plano personalizado que inclui análise dos processos atuais, implementação de melhorias e acompanhamento dos resultados. Todo o projeto tem duração média de 3 a 4 semanas."
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer: "Os primeiros resultados já podem ser observados nas primeiras semanas após a implementação das estratégias. Contudo, resultados mais consolidados e mensuráveis são percebidos entre 60 e 90 dias, quando os novos processos já estão completamente integrados à rotina da empresa."
  },
  {
    question: "Você trabalha com empresas de todos os tamanhos?",
    answer: "Sim, minha metodologia é adaptável para empresas de todos os portes, desde startups até grandes corporações. O que varia é a complexidade da implementação e o escopo do projeto, que são definidos de acordo com as necessidades específicas de cada organização."
  },
  {
    question: "O que é incluído no diagnóstico gratuito?",
    answer: "O diagnóstico gratuito inclui uma análise inicial dos seus processos atuais de recrutamento e seleção, identificação dos principais pontos de melhoria e uma conversa estratégica para entender seus objetivos de negócio. Ao final, você recebe um relatório com recomendações iniciais."
  },
  {
    question: "Como é feita a precificação dos serviços?",
    answer: "A precificação é personalizada de acordo com o escopo do projeto, o tamanho da empresa e a complexidade dos desafios. Após o diagnóstico inicial, apresento uma proposta detalhada com todas as etapas do trabalho e o investimento necessário."
  },
  {
    question: "Você oferece acompanhamento após o término da consultoria?",
    answer: "Sim, ofereço pacotes de acompanhamento periódico para garantir que as estratégias implementadas continuem gerando resultados positivos. Também estou disponível para ajustes e melhorias conforme as necessidades da empresa evoluem."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perguntas <span className="text-hr-green">Frequentes</span>
          </h2>
          <div className="w-20 h-1 bg-hr-green mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Respostas para as dúvidas mais comuns sobre o meu trabalho de consultoria em recrutamento e seleção.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left font-medium py-4 hover:text-hr-green">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
