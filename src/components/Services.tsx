
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { UserSearch, Briefcase, MessageSquare, CheckCheck } from 'lucide-react';

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
            Meus <span className="text-hr-green">Serviços</span>
          </h2>
          <div className="w-20 h-1 bg-hr-green mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Soluções personalizadas para aprimorar seus processos de recrutamento e seleção, 
            garantindo que você encontre os melhores talentos para sua empresa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Diagnóstico de Processos de R&S" 
            description="Análise completa dos processos atuais de recrutamento e seleção da sua empresa, identificando pontos de melhoria e oportunidades para otimização."
            icon={UserSearch}
          />
          
          <ServiceCard 
            title="Estratégias de Recrutamento" 
            description="Desenvolvimento de estratégias personalizadas para atrair os melhores talentos, considerando as especificidades do seu negócio e do mercado."
            icon={Briefcase}
            className="lg:translate-y-6"
          />
          
          <ServiceCard 
            title="Técnicas de Entrevista" 
            description="Treinamento e implementação de técnicas avançadas de entrevista, garantindo a identificação de candidatos alinhados à cultura e objetivos da empresa."
            icon={MessageSquare}
          />
          
          <ServiceCard 
            title="Mapeamento de Competências" 
            description="Identificação e mapeamento das competências essenciais para cada posição, criando perfis ideais para guiar o processo seletivo."
            icon={CheckCheck}
          />
          
          <ServiceCard 
            title="Onboarding Estratégico" 
            description="Desenvolvimento de processos de integração eficientes, reduzindo o tempo de adaptação e aumentando a retenção de novos colaboradores."
            icon={UserSearch}
            className="lg:translate-y-6"
          />
          
          <ServiceCard 
            title="Consultoria Contínua" 
            description="Acompanhamento contínuo da equipe de RH, oferecendo suporte e orientação para aprimorar constantemente os processos de gestão de pessoas."
            icon={Briefcase}
          />
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contato" className="btn-primary inline-block">Solicitar diagnóstico gratuito</a>
        </div>
      </div>
    </section>
  );
};

export default Services;
