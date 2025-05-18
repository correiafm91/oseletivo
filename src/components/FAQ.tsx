
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Como funciona o processo de recrutamento e seleção?",
    answer: "O processo começa com uma análise detalhada da vaga e da cultura da empresa. Em seguida, realizo a busca ativa de candidatos, triagem curricular, entrevistas por competência e avaliações comportamentais. Por fim, apresento os candidatos finalistas para a sua decisão final."
  },
  {
    question: "Quanto tempo leva para preencher uma vaga?",
    answer: "O tempo médio para apresentação dos primeiros candidatos finalistas é de 7 a 14 dias, dependendo da complexidade da vaga. Vagas mais técnicas ou executivas podem levar um pouco mais de tempo para garantir a qualidade do processo."
  },
  {
    question: "Quais tipos de vagas você atende?",
    answer: "Trabalho com recrutamento e seleção para diversas áreas e níveis hierárquicos, desde posições operacionais até cargos executivos. Minha especialidade está em encontrar profissionais qualificados e alinhados com a cultura da empresa."
  },
  {
    question: "Como é feita a garantia do processo?",
    answer: "Ofereço garantia de reposição caso o profissional contratado não atenda às expectativas nos primeiros meses de trabalho. Os termos específicos da garantia são discutidos durante a contratação do serviço, adaptados a cada caso."
  },
  {
    question: "Como é realizado o pagamento pelo serviço?",
    answer: "O modelo de pagamento é flexível e pode ser adaptado às necessidades da sua empresa. Geralmente trabalhamos com um valor inicial e o restante após a contratação do profissional selecionado. Entre em contato para discutirmos a melhor opção para você."
  },
  {
    question: "Você atende empresas de todos os tamanhos?",
    answer: "Sim, minha metodologia de recrutamento e seleção se adapta a empresas de todos os portes, desde startups até grandes corporações. O processo é personalizado para atender às necessidades específicas de cada negócio."
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
            Respostas para as dúvidas mais comuns sobre o processo de recrutamento e seleção.
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
