import { Shield, Star, Zap, LucideIcon } from "lucide-react";

export interface PlanFeature {
  name: string;
  description?: string;
  included: boolean;
}

export interface PlanFAQ {
  question: string;
  answer: string;
}

export interface Plan {
  id: string;
  slug: string; // URL amigável
  seoTitle: string; // Para o <Helmet>
  seoDescription: string; // Para a meta description
  name: string;
  price: string;
  period: string;
  shortDescription: string;
  description: string;
  longDescription: string;
  targetAudience: string[];
  benefits: string[];
  icon: LucideIcon;
  highlight: boolean;
  cta: string;
  style: string;
  features: PlanFeature[];
  faqs: PlanFAQ[];
}

export const plans: Plan[] = [
  {
    id: "basico",
    slug: "cuidados-basicos",
    seoTitle: "Companhia para Idosos no Porto | Plano Básico POPS",
    seoDescription: "Combate à solidão e apoio leve para idosos independentes no Porto. Acompanhamento, segurança e conversa a partir de 10€/hora.",
    name: "Cuidados Básicos",
    price: "10€",
    period: "por hora",
    shortDescription: "Ideal para combater a solidão e manter a segurança.",
    description: "Um plano focado na companhia e segurança essencial, ideal para idosos que mantêm alguma autonomia mas beneficiam de supervisão e interação social.",
    longDescription: "O plano de Cuidados Básicos foi desenhado para famílias que procuram tranquilidade, sabendo que o seu ente querido não está sozinho. Focamo-nos em manter a autonomia do idoso, oferecendo suporte pontual em tarefas que não exigem contacto físico íntimo, mas que fazem toda a diferença na qualidade de vida e segurança diária.",
    targetAudience: [
      "Idosos autónomos que vivem sozinhos",
      "Pessoas que procuram companhia e conversas estimulantes",
      "Famílias preocupadas com quedas ou acidentes domésticos",
      "Quem necessita de acompanhamento para saídas ou compras"
    ],
    benefits: [
      "Redução do isolamento social e depressão",
      "Aumento da segurança no domicílio",
      "Manutenção da rotina e hábitos de vida",
      "Paz de espírito para os familiares"
    ],
    icon: Shield,
    highlight: false,
    cta: "Escolher Básico",
    style: "bg-white border-slate-200 hover:border-slate-300",
    features: [
      { name: "Companhia e Estímulo Social", description: "Conversa ativa, jogos e atividades lúdicas para combater o isolamento.", included: true },
      { name: "Supervisão de Segurança", description: "Monitorização constante para prevenir quedas e acidentes domésticos.", included: true },
      { name: "Preparação de Lanches Leves", description: "Apoio na preparação de refeições simples e snacks.", included: true },
      { name: "Manutenção do Espaço do Idoso", description: "Arrumação ligeira do espaço onde o idoso se encontra.", included: true },
      { name: "Acompanhamento ao Exterior", description: "Companhia em passeios curtos ou idas a consultas.", included: true },
     

    ],
    faqs: [
      {
        question: "O cuidador pode dar banho?",
        answer: "Não. No plano Básico, o foco é companhia e segurança. Para higiene pessoal, recomendamos o plano Cuidados Completos."
      },
      {
        question: "Existe um número mínimo de horas?",
        answer: "Não, mas recomendamos um mínimo de 3 horas por visita para garantir a qualidade do serviço e deslocação do cuidador."
      },
      {
        question: "O cuidador faz limpezas profundas?",
        answer: "Não. A manutenção do espaço refere-se apenas a manter a ordem no ambiente imediato do idoso (ex: arrumar a mesa após o lanche)."
      }
    ]
  },
  {
    id: "completo",
    slug: "cuidados-completos",
    seoTitle: "Apoio Domiciliário e Higiene Pessoal | Plano Completo POPS",
    seoDescription: "Serviço completo de apoio a idosos: banho, higiene, refeições e medicação. Cuidadores verificados no Porto a partir de 15€/hora.",
    name: "Cuidados Completos",
    price: "15€",
    period: "por hora",
    shortDescription: "O nosso plano mais popular. Apoio total à rotina diária.",
    description: "A solução abrangente para quem necessita de apoio nas atividades de vida diária, desde a higiene até à alimentação, garantindo conforto e dignidade.",
    longDescription: "O nosso plano mais procurado, os Cuidados Completos, oferece uma assistência integral. É a escolha certa para idosos que começam a sentir dificuldades nas tarefas básicas da vida diária. Os nossos cuidadores estão preparados para assistir com dignidade e profissionalismo em momentos sensíveis como o banho, vestir e higiene íntima, além de assegurarem a alimentação e a gestão doméstica leve.",
    targetAudience: [
      "Idosos com mobilidade reduzida",
      "Quem necessita de apoio na higiene pessoal",
      "Pessoas que precisam de ajuda na confeção de refeições",
      "Famílias que procuram um apoio diário consistente"
    ],
    benefits: [
      "Higiene e conforto assegurados diariamente",
      "Nutrição equilibrada com refeições preparadas na hora",
      "Maior segurança na movimentação e transferências",
      "Acompanhamento rigoroso da medicação",
      "Monitorização em tempo real do serviço através da aplicação POPS. "
    ],
    icon: Star,
    highlight: true,
    cta: "Começar Agora",
    style: "bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/40 shadow-xl shadow-primary/10 relative overflow-hidden",
    features: [
      { name: "Companhia e Estímulo Social", description: "Apoio emocional e interação constante.", included: true },
      { name: "Higiene Pessoal (Banho)", description: "Apoio completo no banho, vestir e higiene diária.", included: true },
      { name: "Transferências Seguras", description: "Ajuda técnica para levantar da cama, cadeira ou sofá.", included: true },
      { name: "Lembrete de Medicação", description: "Garantia de que a medicação é tomada na hora certa (apoio à toma).", included: true },
      { name: "Confeção de Refeições", description: "Preparação de refeições completas e equilibradas.", included: true },
      { name: "Tratamento de Roupa", description: "Lavar, secar e arrumar a roupa do idoso.", included: true },
      { name: "Relatório na App", description: "Registo automático de um relatório feito por IA após a conclusão de um serviço, com base nos registos feitos pelo Cuidador durante o mesmo.", included: true }
    ],
    faqs: [
      {
        question: "O que inclui a higiene pessoal?",
        answer: "Inclui banho (chuveiro ou na cama), higiene oral, troca de fraldas se necessário, e cuidados com a pele (hidratação)."
      },
      {
        question: "O cuidador cozinha para toda a família?",
        answer: "O serviço foca-se nas necessidades do utente. A confeção de refeições é planeada para o utente, mas pode ser ajustada mediante acordo prévio."
      },
      {
        question: "Como funciona o relatório na App?",
        answer: "Durante cada serviço, o cuidador preenche um checklist sobre alimentação, humor, medicação e higiene, que a família pode consultar em tempo real através da Aplicação POPS. Estando o serviço concluído, o nosso algoritmo de IA cria um relatório com base no registo do Cuidador, que o Cliente pode consultar a qualquer momento através da aplicação."
      }
    ]
  },
  {
    id: "especializado",
    slug: "cuidados-especializados",
    seoTitle: "Cuidadores Alzheimer e Pós-Operatório | Plano Especializado POPS",
    seoDescription: "Cuidados de elite para Demência, Alzheimer e Pós-Operatório. Profissionais com formação técnica avançada para casos complexos no Porto.",
    name: "Especializado",
    price: "20€+",
    period: "por hora",
    shortDescription: "Para situações de dependência elevada ou demências.",
    description: "Cuidados de alta complexidade prestados por profissionais com formação específica e experiência comprovada em patologias como Alzheimer ou limitações motoras severas.",
    longDescription: "Quando a situação exige um nível de competência superior, o plano Especializado entra em ação. Selecionamos apenas os profissionais com maior experiência e formação técnica específica para lidar com demências avançadas, pós-operatórios complexos ou situações de grande dependência física.",
    targetAudience: [
      "Portadores de Alzheimer ou outras demências",
      "Pessoas acamadas ou com mobilidade muito reduzida",
      "Situações de pós-operatório ou reabilitação",
      "Quem procura o nível máximo de qualificação"
    ],
    benefits: [
      "Cuidados adaptados a patologias específicas",
      "Prevenção de complicações de saúde (ex: úlceras)",
      "Gestão profissional de comportamentos difíceis",
      "Acompanhamento clínico por Gestor de Caso"
    ],
    icon: Zap,
    highlight: false,
    cta: "Pedir Avaliação",
    style: "bg-white border-slate-200 hover:border-slate-300",
    features: [
      { name: "Cuidadores Elite", description: "Profissionais no top 5% de avaliações e experiência.", included: true },
      { name: "Apoio à Reabilitação e Mobilidade", description: "Execução de exercícios prescritos por terapeuta externo.", included: true }, 
      { name: "Especialização em Alzheimer/Demência", description: "Estratégias específicas para gestão comportamental.", included: true },
      { name: "Gestor de Caso Dedicado", description: "Um profissional sénior que supervisiona o plano de cuidados.", included: true },
      { name: "Prevenção de Úlceras e Posicionamento", description: "Cuidados técnicos para acamados.", included: true },
    ],
    faqs: [
      {
        question: "Quem são os Cuidadores Elite?",
        answer: "São profissionais com formação avançada (ex: geriatria) e um histórico impecável e verificado na nossa plataforma (Top 5%)."
      },
      {
        question: "Este plano inclui enfermagem?",
        answer: "Não substitui atos médicos invasivos, mas oferece um suporte técnico superior para o dia-a-dia de casos complexos."
      },
      {
        question: "O preço é fixo?",
        answer: "O valor começa nos 20€/hora, mas pode variar consoante a complexidade específica do caso e a necessidade de equipamentos ou competências muito específicas."
      }
    ]
  }
];