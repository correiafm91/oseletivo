
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Quando devo implementar um setor de RH na minha empresa?",
    answer: "O ideal é implementar desde o início, mesmo com poucos colaboradores. Quanto mais cedo você estruturar os processos, menos problemas terá no futuro. Empresas com mais de 5 colaboradores já precisam de uma estrutura básica de RH."
  },
  {
    question: "Quanto tempo leva para implementar um RH completo?",
    answer: "O tempo médio para implementação completa é de até 60 dias. Este prazo inclui criação de políticas, implementação de sistemas, treinamentos e adequação de todos os processos necessários."
  },
  {
    question: "Minha empresa é pequena, preciso mesmo de RH estruturado?",
    answer: "Sim! Empresas pequenas são as que mais se beneficiam de ter RH estruturado desde o início. Isso evita retrabalho, problemas trabalhistas e facilita muito o crescimento futuro da empresa."
  },
  {
    question: "O que está incluído na implementação?",
    answer: "Inclui criação de políticas internas, manual do colaborador, estrutura de cargos e salários, implementação de sistemas, compliance trabalhista, processos de avaliação e treinamento da equipe gestora."
  },
  {
    question: "Como é realizado o pagamento pelo serviço de implementação?",
    answer: "O investimento é calculado conforme o tamanho da empresa e complexidade da implementação. Trabalhamos com um valor inicial para começar o projeto, seguido de parcelas durante a implementação."
  },
  {
    question: "Vocês atendem empresas de todos os setores?",
    answer: "Sim, minha metodologia de implementação de RH se adapta a qualquer setor empresarial. Cada projeto é personalizado para atender às necessidades específicas do negócio e setor de atuação."
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
            Respostas para as dúvidas mais comuns sobre implementação de RH.
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
