
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Users, Shield, TrendingUp, Settings, BookOpen } from 'lucide-react';

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon,
  className = ""
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType;
  className?: string;
}) => (
  <Card className={`border border-gray-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 ${className}`}>
    <CardHeader>
      <div className="bg-hr-green-light p-3 rounded-xl inline-flex items-center justify-center mb-4 floating-element">
        <Icon className="h-8 w-8 text-hr-green" />
      </div>
      <CardTitle className="text-xl font-bold">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-gray-700">{description}</CardDescription>
    </CardContent>
  </Card>
);

const Services = () => {
  return (
    <section id="servicos" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Implementação Completa de <span className="text-hr-green">RH</span>
          </h2>
          <div className="w-20 h-1 bg-hr-green mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Tudo que sua empresa precisa para ter um setor de RH estruturado e funcionando desde o primeiro dia.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Políticas e Procedimentos" 
            description="Criação de manual do colaborador, código de conduta, políticas de RH e todos os procedimentos necessários para uma gestão clara e eficiente."
            icon={FileText}
          />
          
          <ServiceCard 
            title="Estrutura de Cargos e Salários" 
            description="Desenvolvimento de plano de cargos, salários e benefícios alinhado ao mercado e à realidade da sua empresa."
            icon={Users}
            className="lg:translate-y-6"
          />
          
          <ServiceCard 
            title="Compliance Trabalhista" 
            description="Implementação de processos para garantir conformidade com todas as leis trabalhistas e evitar problemas futuros."
            icon={Shield}
          />
          
          <ServiceCard 
            title="Sistemas de Gestão" 
            description="Escolha e implementação de softwares de RH, controle de ponto, folha de pagamento e gestão de pessoas."
            icon={Settings}
          />
          
          <ServiceCard 
            title="Processos de Avaliação" 
            description="Criação de sistemática de avaliação de desempenho, feedback e desenvolvimento de colaboradores."
            icon={TrendingUp}
            className="lg:translate-y-6"
          />
          
          <ServiceCard 
            title="Treinamento da Equipe" 
            description="Capacitação dos gestores e colaboradores nos novos processos e ferramentas implementadas."
            icon={BookOpen}
          />
        </div>
        
        <div className="mt-16 text-center">
          <a href="https://www.instagram.com/useletivo/" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
            Iniciar implementação do RH
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
