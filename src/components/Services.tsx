
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Users, Check, Star, Briefcase, TrendingUp } from 'lucide-react';

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
            Recrutamento e seleção de alto impacto para encontrar os profissionais ideais para cada posição na sua empresa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Recrutamento Estratégico" 
            description="Processo completo de busca e seleção, desde o mapeamento do perfil ideal até a entrega dos candidatos finalistas prontos para contratação."
            icon={Search}
          />
          
          <ServiceCard 
            title="Avaliação Comportamental" 
            description="Análise aprofundada do perfil comportamental dos candidatos para garantir alinhamento perfeito com a cultura e valores da sua empresa."
            icon={Users}
            className="lg:translate-y-6"
          />
          
          <ServiceCard 
            title="Entrevistas por Competência" 
            description="Método avançado de entrevistas que identifica com precisão as habilidades e competências essenciais para o sucesso na função."
            icon={Check}
          />
          
          <ServiceCard 
            title="Recrutamento Especializado" 
            description="Seleção de profissionais para posições estratégicas e técnicas que exigem conhecimentos específicos e experiência comprovada."
            icon={Star}
          />
          
          <ServiceCard 
            title="Hunting de Talentos" 
            description="Busca ativa de profissionais de alto desempenho que não estão ativamente procurando emprego, mas que têm o perfil perfeito para sua vaga."
            icon={Briefcase}
            className="lg:translate-y-6"
          />
          
          <ServiceCard 
            title="Recrutamento para Startups" 
            description="Processo adaptado para empresas em crescimento acelerado, focado em encontrar talentos versáteis e com mentalidade de crescimento."
            icon={TrendingUp}
          />
        </div>
        
        <div className="mt-16 text-center">
          <a href="https://www.instagram.com/useletivo/" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
            Iniciar processo de recrutamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
