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
          "hero.badge": "Lançamento em Breve",
          "hero.title.1": "Cuidadores de Confiança",
          "hero.title.2": "para Apoio Domiciliário.",
          "hero.desc": "Encontre cuidadores para todas as idades oferecendo apoio domiciliário de confiança para os mais variados serviços. A POPS liga famílias a profissionais verificados para cuidados personalizados, seguros e sem burocracia.",    "hero.cta.find": "Encontrar Cuidador",
    "hero.cta.work": "Quero Trabalhar",
    "hero.trust.1": "Verificação Criminal Rigorosa",
    "hero.trust.2": "Certificações Validadas",
    "hero.trust.3": "Suporte 24/7",

    // Service Explorer
    "services.badge": "Soluções Integradas",
    "services.title.1": "Serviços de Apoio Domiciliário",
    "services.title.2": "para Cada Fase da Vida.",
    "services.desc": "Explore as nossas áreas de atuação. Selecione uma categoria para ver como podemos ajudar a sua família.",

    "services.btn": "Encontrar Apoio",

    // Comparison Section
    "comparison.badge": "A Verdade do Mercado",
    "comparison.title.1": "Apoio Domiciliário Seguro:",
    "comparison.title.2": "POPS vs Mercado Tradicional.",
    "comparison.desc": "Compare e veja porque somos a escolha segura para a sua família. Eliminamos o risco do mercado informal com cuidadores verificados.",

    // Vetting Section
    "vetting.badge": "Protocolo de Segurança",
    "vetting.title.1": "Segurança e Confiança:",
    "vetting.title.2": "Cuidadores Verificados.",
    "vetting.desc": "O mercado informal coloca em risco milhares de famílias. A POPS garante cuidadores certificados através de um processo de verificação rigoroso.",

    // Tech Section
    "tech.badge": "App para Famílias",
    "tech.title.1": "Tecnologia para Acompanhar",
    "tech.title.2": "os Cuidados ao Domicílio.",
    "tech.desc": "Eliminamos a incerteza. Acompanhe o bem-estar dos seus familiares em tempo real com a nossa aplicação de monitorização de cuidados.",

    // Trust Section
    "trust.title.1": "Vantagens da POPS",
    "trust.title.2": "no Apoio Domiciliário.",
    "trust.desc": "A POPS redefine os serviços ao domicílio com segurança, monitorização de saúde e gestão transparente para todas as famílias.",

    // Pricing Section
    "pricing.badge": "Planos de Preço",
    "pricing.title.1": "Planos e Preços de",
    "pricing.title.2": "Apoio Domiciliário.",
    "pricing.desc": "Escolha o plano de cuidados certo para as suas necessidades. Preços transparentes, sem contratos longos e sem surpresas.",

    // FAQ Section
    "faq.badge": "Perguntas Frequentes (FAQ)",
    "faq.title.1": "Dúvidas Comuns sobre",
    "faq.title.2": "Contratação de Cuidadores.",
    "faq.desc": "Tudo o que precisa de saber sobre os nossos serviços de apoio domiciliário, da inscrição ao cuidado diário.",
    
    // Service Items (IDs match the keys below)
    "service.senior.title": "Séniores e Longevidade",
    "service.senior.subtitle": "Envelhecer em casa com dignidade",
    "service.senior.desc": "Os nossos serviços ao domicílio focados na terceira idade promovem a autonomia e o conforto no lar. Este apoio domiciliário especializado inclui companhia, estimulação cognitiva e auxílio nas tarefas diárias.",
    
    "service.inclusion.title": "Deficiência e Inclusão",
    "service.inclusion.subtitle": "Autonomia para todas as idades",
    "service.inclusion.desc": "Apoio domiciliário dedicado a pessoas com mobilidade reduzida ou necessidades especiais. Prestamos serviços ao domicílio que garantem segurança nas deslocações e higiene, adaptados a cada patologia.",

    "service.health.title": "Saúde e Pós-Operatório",
    "service.health.subtitle": "Recuperação segura no lar",
    "service.health.desc": "Serviços ao domicílio técnicos realizados por profissionais de saúde qualificados. Este apoio domiciliário avançado foca-se na monitorização de sinais vitais, curativos e gestão de medicação complexa.",

    "service.domestic.title": "Apoio Doméstico",
    "service.domestic.subtitle": "Famílias livres de tarefas",
    "service.domestic.desc": "Complementamos o apoio domiciliário com serviços ao domicílio de manutenção do lar, garantindo que o ambiente está limpo, seguro e organizado para o bem-estar total da sua família.",

    // Waitlist
    "waitlist.badge": "Vagas Limitadas",
    "waitlist.title": "Garanta os Melhores Serviços de Apoio Domiciliário",
    "waitlist.desc": "Inscreva-se na lista de espera para ter acesso prioritário aos melhores cuidadores através da nossa aplicação: POPS. Sem custos, sem compromissos. Oferta exclusiva de lançamento: 25% de desconto nos primeiros 3 meses na taxa de serviço.",
    "waitlist.form.name": "Nome Completo",
    "waitlist.form.phone": "Telemóvel",
    "waitlist.form.email": "Email Profissional ou Pessoal",
    "waitlist.form.birth": "Data de Nascimento",
    "waitlist.form.loc": "Localidade",
    "waitlist.form.role": "Eu sou...",
    "waitlist.form.role.ph": "Selecione o seu perfil",
    "waitlist.form.role.family": "Família (Procuro Cuidadores)",
    "waitlist.form.role.pro": "Profissional (Procuro Trabalho)",
    "waitlist.form.role.inst": "Instituição / Lar",
    "waitlist.form.interest": "Interesse",
    "waitlist.form.interest.ph": "Tipo de serviço desejado",
    "waitlist.form.interest.basic": "Apoio Domiciliário Básico",
    "waitlist.form.interest.complete": "Cuidados Completos",
    "waitlist.form.interest.premium": "Cuidados Especializados",
    "waitlist.form.interest.dk": "Ainda estou a decidir",
    "waitlist.benefit.title": "Desconto Exclusivo Ativado",
    "waitlist.benefit.desc": "Submeta agora para garantir 25% de desconto no lançamento.",
    "waitlist.cta": "Quero Acesso Prioritário",
    "waitlist.success.title": "Obrigado!",
    "waitlist.success.desc": "O teu registo foi confirmado. Receberás um email em breve.",
    "waitlist.security.ssl": "Dados protegidos por encriptação SSL",
    "waitlist.security.rgpd": "Conformidade Total RGPD",
   
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
    "hero.title.1": "Trusted Caregivers",
    "hero.title.2": "for Home Support.",
    "hero.desc": "Over 500,000 Portuguese families are looking for solutions. POPS connects you to certified professionals with verified backgrounds and quality assurance. Join the waitlist and secure early access with exclusive launch discounts.",
    "hero.cta.find": "Find Care",
    "hero.cta.work": "Find Work",
    "hero.trust.1": "Strict Criminal Check",
    "hero.trust.2": "Validated Certifications",
    "hero.trust.3": "24/7 Support",

    // Service Explorer
    "services.badge": "Integrated Solutions",
    "services.title.1": "Home Support Services",
    "services.title.2": "for Every Life Stage.",
    "services.desc": "Explore our areas of expertise. Select a category to see how we can help your family.",

    "services.btn": "Find Support",

    // Comparison Section
    "comparison.badge": "The Market Truth",
    "comparison.title.1": "Safe Home Support:",
    "comparison.title.2": "POPS vs Traditional Market.",
    "comparison.desc": "Compare and see why we are the safe choice for your family. We eliminate the risk of the informal market with verified caregivers.",

    // Vetting Section
    "vetting.badge": "Safety Protocol",
    "vetting.title.1": "Safety and Trust:",
    "vetting.title.2": "Verified Caregivers.",
    "vetting.desc": "The informal market puts thousands of families at risk. POPS guarantees certified caregivers through a rigorous verification process.",

    // Tech Section
    "tech.badge": "App for Families",
    "tech.title.1": "Technology to Monitor",
    "tech.title.2": "Home Care Services.",
    "tech.desc": "We eliminate uncertainty. Monitor your family members' well-being in real-time with our care monitoring application.",

    // Trust Section
    "trust.title.1": "Advantages of POPS",
    "trust.title.2": "in Home Support.",
    "trust.desc": "POPS redefines home services with safety, health monitoring, and transparent management for all families.",

    // Pricing Section
    "pricing.badge": "Pricing Plans",
    "pricing.title.1": "Home Support Plans",
    "pricing.title.2": "and Pricing.",
    "pricing.desc": "Choose the right care plan for your needs. Transparent pricing, no long contracts, and no surprises.",

    // FAQ Section
    "faq.badge": "Frequently Asked Questions (FAQ)",
    "faq.title.1": "Common Questions about",
    "faq.title.2": "Hiring Caregivers.",
    "faq.desc": "Everything you need to know about our home support services, from registration to daily care.",

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
    "waitlist.success.title": "Thank you!",
    "waitlist.success.desc": "Your registration has been confirmed. You will receive an email shortly.",
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