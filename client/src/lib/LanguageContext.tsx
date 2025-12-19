import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'PT' | 'EN';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  PT: {
    // Header
    "nav.market": "O Mercado",
    "nav.diff": "Diferenciais",
    "nav.prices": "Preços",
    "nav.safety": "Segurança",
    "nav.partners": "Parceiros",
    "nav.about": "Sobre Nós",
    "nav.careers": "Carreiras",
    "cta.caregiver": "Sou Cuidador",
    "cta.family": "Para Famílias",

    // Hero
    "hero.badge": "Brevemente Disponível",
    "hero.title.1": "Cuidadores verificados,",
    "hero.title.2": "à distância de um clique.",
    "hero.desc": "Mais de 500 mil famílias portuguesas procuram soluções. A POPS conecta-o a profissionais certificados, com antecedentes verificados e garantia de qualidade. Inscreva-se na lista de espera e garanta acesso antecipado com descontos exclusivos de lançamento.",
    "hero.cta.find": "Preciso de Cuidados",
    "hero.cta.work": "Quero Trabalhar",
    "hero.trust.1": "Verificação Criminal Rigorosa",
    "hero.trust.2": "Certificações Validadas",
    "hero.trust.3": "Suporte 24/7",

    // Service Explorer
    "services.badge": "Soluções Integradas",
    "services.title": "Uma resposta para cada fase da vida.",
    "services.desc": "Explore as nossas áreas de atuação. Selecione uma categoria para ver como podemos ajudar a sua família.",
    "services.btn": "Encontrar Apoio",
    
    // Service Items (IDs match the keys below)
    "service.senior.title": "Séniores e Longevidade",
    "service.senior.subtitle": "Envelhecer em casa com dignidade",
    "service.senior.desc": "Apoio completo para manter a independência. Desde companhia e estimulação cognitiva até cuidados de higiene e gestão de medicação.",
    
    "service.inclusion.title": "Deficiência e Inclusão",
    "service.inclusion.subtitle": "Autonomia para todas as idades",
    "service.inclusion.desc": "Suporte especializado para desafios físicos ou intelectuais. Focamo-nos nas capacidades e na promoção da máxima autonomia possível.",

    "service.health.title": "Saúde e Pós-Operatório",
    "service.health.subtitle": "Recuperação segura no lar",
    "service.health.desc": "Cuidados de enfermagem e apoio técnico para recuperações de cirurgias, acidentes ou gestão de doenças crónicas complexas.",

    "service.domestic.title": "Apoio Doméstico",
    "service.domestic.subtitle": "Famílias livres de tarefas",
    "service.domestic.desc": "Gestão completa das tarefas domésticas para que as famílias possam focar-se no que realmente importa: estar juntas.",

    // Waitlist
    "waitlist.badge": "Oferta de Lançamento",
    "waitlist.title": "Conecte-se à Melhor Rede de Cuidados ao Domicílio",
    "waitlist.desc": "Inscreva-se na lista de espera e garanta prioridade no lançamento com descontos exclusivos. Os primeiros 500 inscritos recebem 25% de desconto nos primeiros 3 meses.",
    "waitlist.form.name": "Nome Completo",
    "waitlist.form.phone": "Telemóvel",
    "waitlist.form.email": "Email Profissional ou Pessoal",
    "waitlist.form.birth": "Data de Nascimento",
    "waitlist.form.loc": "Localidade",
    "waitlist.form.role": "Eu sou...",
    "waitlist.form.role.ph": "Selecione perfil",
    "waitlist.form.role.family": "Família (Procuro Cuidador)",
    "waitlist.form.role.pro": "Profissional (Quero Trabalhar)",
    "waitlist.form.role.inst": "Instituição / Lar",
    "waitlist.form.interest": "Interesse",
    "waitlist.form.interest.ph": "Tipo de serviço",
    "waitlist.form.interest.basic": "Cuidados Básicos",
    "waitlist.form.interest.complete": "Cuidados Completos",
    "waitlist.form.interest.premium": "Premium / Saúde",
    "waitlist.form.interest.dk": "Não sei ainda",
    "waitlist.benefit.title": "Benefício exclusivo ativado",
    "waitlist.benefit.desc": "Ao submeter, garante o seu lugar para o desconto de 25%.",
    "waitlist.cta": "Inscrever-me Agora",
    "waitlist.security.ssl": "Dados protegidos por encriptação SSL",
    "waitlist.security.rgpd": "Conformidade Total RGPD",
    "waitlist.security.social": "Junte-se a +500 famílias"
  },
  EN: {
    // Header
    "nav.market": "The Market",
    "nav.diff": "Why Us",
    "nav.prices": "Pricing",
    "nav.safety": "Safety",
    "nav.partners": "Partners",
    "nav.about": "About Us",
    "nav.careers": "Careers",
    "cta.caregiver": "I'm a Caregiver",
    "cta.family": "For Families",

    // Hero
    "hero.badge": "Coming Soon",
    "hero.title.1": "Verified caregivers,",
    "hero.title.2": "just a click away.",
    "hero.desc": "Over 500,000 Portuguese families are looking for solutions. POPS connects you to certified professionals with verified backgrounds and quality assurance. Join the waitlist and secure early access with exclusive launch discounts.",
    "hero.cta.find": "Find Care",
    "hero.cta.work": "Find Work",
    "hero.trust.1": "Strict Criminal Check",
    "hero.trust.2": "Validated Certifications",
    "hero.trust.3": "24/7 Support",

    // Service Explorer
    "services.badge": "Integrated Solutions",
    "services.title": "A solution for every stage of life.",
    "services.desc": "Explore our areas of expertise. Select a category to see how we can help your family.",
    "services.btn": "Find Support",

    // Service Items
    "service.senior.title": "Seniors & Longevity",
    "service.senior.subtitle": "Aging at home with dignity",
    "service.senior.desc": "Complete support to maintain independence. From companionship and cognitive stimulation to hygiene care and medication management.",

    "service.inclusion.title": "Disability & Inclusion",
    "service.inclusion.subtitle": "Autonomy for all ages",
    "service.inclusion.desc": "Specialized support for physical or intellectual challenges. We focus on capabilities and promoting maximum possible autonomy.",

    "service.health.title": "Health & Post-Op",
    "service.health.subtitle": "Safe recovery at home",
    "service.health.desc": "Nursing care and technical support for surgery recovery, accidents, or complex chronic disease management.",

    "service.domestic.title": "Domestic Support",
    "service.domestic.subtitle": "Families free from chores",
    "service.domestic.desc": "Complete management of household tasks so families can focus on what really matters: being together.",

    // Waitlist
    "waitlist.badge": "Launch Offer",
    "waitlist.title": "Connect to the Best Home Care Network",
    "waitlist.desc": "Join the waitlist and secure priority access with exclusive discounts. The first 500 subscribers get 25% off for the first 3 months.",
    "waitlist.form.name": "Full Name",
    "waitlist.form.phone": "Mobile Phone",
    "waitlist.form.email": "Professional or Personal Email",
    "waitlist.form.birth": "Date of Birth",
    "waitlist.form.loc": "Location",
    "waitlist.form.role": "I am...",
    "waitlist.form.role.ph": "Select profile",
    "waitlist.form.role.family": "Family (Seeking Care)",
    "waitlist.form.role.pro": "Professional (Seeking Work)",
    "waitlist.form.role.inst": "Institution / Nursing Home",
    "waitlist.form.interest": "Interest",
    "waitlist.form.interest.ph": "Service type",
    "waitlist.form.interest.basic": "Basic Care",
    "waitlist.form.interest.complete": "Complete Care",
    "waitlist.form.interest.premium": "Premium / Health",
    "waitlist.form.interest.dk": "Don't know yet",
    "waitlist.benefit.title": "Exclusive benefit activated",
    "waitlist.benefit.desc": "Submitting guarantees your spot for the 25% discount.",
    "waitlist.cta": "Sign Up Now",
    "waitlist.security.ssl": "Data protected by SSL encryption",
    "waitlist.security.rgpd": "Full GDPR Compliance",
    "waitlist.security.social": "Join +500 families"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('PT');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['PT']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}