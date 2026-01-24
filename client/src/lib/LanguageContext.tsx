import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'PT' | 'EN';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, defaultValue?: string) => string;
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
    "hero.desc": "Encontre cuidadores para todas as idades oferecendo apoio domiciliário de confiança para os mais variados serviços. A POPS liga famílias a profissionais verificados para cuidados personalizados, seguros e sem burocracia.",    
    "hero.cta.find": "Encontrar Cuidador",
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
    "comparison.subtitle": "Porque a POPS é a evolução.",
    "comparison.desc.text": "O modelo tradicional obriga-o a escolher entre segurança (caro) ou preço (risco). Nós eliminamos essa escolha.",
    "comparison.col.safety": "Segurança",
    "comparison.col.control": "Controlo",
    "comparison.col.qual": "Qualificação",
    "comparison.col.legal": "Legalidade",
    "comparison.col.cost": "Custo",
    "comparison.traditional.title": "Mercado Tradicional",
    "comparison.traditional.sub": "Agências ou Informal",
    "comparison.pops.title": "Recomendado",
    "comparison.pops.sub": "Plataforma POPS",
    
    "comparison.row.1.trad": "Verificação manual difícil ou inexistente. Alto risco de fraude.",
    "comparison.row.2.trad": "\"Caixa negra\". A família não sabe se o cuidador cumpriu o horário.",
    "comparison.row.3.trad": "Diplomas difíceis de verificar. Risco de cuidadores sem formação.",
    "comparison.row.4.trad": "Pagamentos em dinheiro. Sem recibos para dedução no IRS.",
    "comparison.row.5.trad": "Preços arbitrários ou comissões de agência muito elevadas.",

    "comparison.row.1.pops": "Verificação Obrigatória. Criminal e Identidade validados.",
    "comparison.row.2.pops": "GPS em Tempo Real. Notificações de Check-in/out.",
    "comparison.row.3.pops": "Certificados Validados. Confirmação com escolas e ordens.",
    "comparison.row.4.pops": "100% Legal. Faturação automática e benefícios fiscais.",
    "comparison.row.5.pops": "Transparente e Justo. A partir de 9€/h.",

    // Vetting Section
    "vetting.badge": "Protocolo de Segurança",
    "vetting.title.1": "Segurança e Confiança:",
    "vetting.title.2": "Cuidadores Verificados.",
    "vetting.desc": "O mercado informal coloca em risco milhares de famílias. A POPS garante cuidadores certificados através de um processo de verificação rigoroso.",
    "vetting.tag": "Protocolo de Segurança Rigoroso",
    "vetting.main_title": "Confiança não se pede.",
    "vetting.main_title_highlight": "Verifica-se.",
    "vetting.main_desc": "O mercado informal coloca em risco milhares de famílias. A POPS implementa um processo de verificação em 4 etapas, obrigatório para todos os profissionais, com monitorização contínua.",

    "vetting.step.1.title": "Validação Documental",
    "vetting.step.1.desc": "Verificação manual de Cartão de Cidadão, NIF e Morada. Garantimos identidade real e rastreável.",
    "vetting.step.1.detail": "Todos os documentos são validados manualmente",

    "vetting.step.2.title": "Registo Criminal",
    "vetting.step.2.desc": "Consulta obrigatória e recorrente do Registo Criminal para contacto com populações vulneráveis.",
    "vetting.step.2.detail": "Verificação a cada 12 meses",

    "vetting.step.3.title": "Certificações Validadas",
    "vetting.step.3.desc": "Validação direta junto de Escolas e Ordens Profissionais para garantir competência técnica.",
    "vetting.step.3.detail": "Certificação obrigatória para especialidades",

    "vetting.step.4.title": "Avaliação Contínua",
    "vetting.step.4.desc": "Monitorização constante. Profissionais com baixa classificação são removidos da plataforma.",
    "vetting.step.4.detail": "Mínimo 4.5 estrelas para estar ativo",

    "vetting.callout.title": "Porque é que a Segurança Importa",
    "vetting.callout.desc": "Segundo dados do Ministério da Segurança Social, 40% das famílias portuguesas já reportaram problemas de confiança em cuidadores. A POPS está empenhada em ser diferente através de verificação rigorosa e contínua.",
    "vetting.callout.point.1": "Investigação criminal completa",
    "vetting.callout.point.2": "Monitorização GPS real",
    "vetting.callout.point.3": "Avaliação contínua",
    "vetting.cta": "Conhecer Cuidadores Verificados",

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

   // FAQ Section – meta
    "faq.badge": "Perguntas Frequentes (FAQ)",
    "faq.title.1": "Dúvidas comuns sobre",
    "faq.title.2": "apoio domiciliário.",
    "faq.desc":
      "Transparência radical. Se não encontrar a resposta aqui, a nossa equipa está à distância de um clique.",
    "faq.btn.more": "Ver mais categorias",
    "faq.btn.less": "Mostrar menos",
    "faq.cta.title": "Ainda não encontrou a resposta?",
    "faq.cta.desc":
      "A nossa equipa está disponível todos os dias para esclarecer dúvidas e ajudar a encontrar a solução ideal para a sua família.",
    "faq.cta.button": "Falar com a equipa POPS",

    // FAQ categories
    "faq.cat.pricing": "Preços e modelo marketplace",
    "faq.cat.safety": "Segurança, verificação e seguros",
    "faq.cat.services": "Serviços e planos de apoio",
    "faq.cat.app": "App e tecnologia",
    "faq.cat.legal": "Questões legais e contratos",
    "faq.cat.scope": "Onde e para quem funciona a POPS?",

    // FAQ: PRICING
    "faq.q.pricing.1.q": "A POPS é uma agência ou um marketplace?",
    "faq.q.pricing.1.a":
      "A POPS não é uma agência nem um Serviço de Apoio Domiciliário (SAD). Somos um marketplace tecnológico que liga famílias a cuidadores independentes. A relação comercial é sempre entre o Cliente e o Profissional; a POPS trata apenas de verificação, pagamentos e suporte.",
    "faq.q.pricing.2.q": "Quem define o preço final do serviço?",
    "faq.q.pricing.2.a":
      "A POPS apresenta intervalos de referência com base nos preços praticados na plataforma, mas o profissional tem liberdade para definir o seu valor hora ou por visita. O Cliente vê esses valores de forma transparente e aceita ou recusa antes de confirmar o serviço.",
    "faq.q.pricing.3.q": "Porque vejo intervalos de preço e não um valor fixo?",
    "faq.q.pricing.3.a":
      "Porque cada caso é diferente. A experiência do cuidador, o tipo de tarefa, o horário e a duração influenciam o valor final. Em vez de impor uma tabela única, mostramos uma faixa típica de mercado para que saiba o que esperar, mantendo a liberdade de negociação entre as partes.",
    "faq.q.pricing.4.q": "O simulador de investimento é um orçamento final?",
    "faq.q.pricing.4.a":
      "O simulador apresenta uma estimativa baseada nos valores praticados na POPS para o tipo de serviço, localização e horas indicadas. Não é uma proposta contratual, mas um guia de transparência. O valor final é sempre confirmado pelo profissional antes da marcação.",

    // FAQ: SAFETY
    "faq.q.safety.1.q": "Como são verificados os cuidadores?",
    "faq.q.safety.1.a":
      "Todos os profissionais passam por um protocolo de verificação que inclui validação de identidade, consulta de registo criminal para contacto com pessoas vulneráveis e validação de certificações relevantes. Só após aprovação ficam visíveis no marketplace.",
    "faq.q.safety.2.q": "A POPS rastreia o cuidador por GPS o tempo todo?",
    "faq.q.safety.2.a":
      "Não. A geolocalização é usada apenas nos momentos de check-in e check-out, para prova de execução do serviço e segurança do Cliente. Não fazemos rastreamento contínuo entre visitas nem usamos o GPS para controlar produtividade ou aplicar sanções.",
    "faq.q.safety.3.q": "Que tipo de seguros existem se algo correr mal?",
    "faq.q.safety.3.a":
      "Trabalhamos com um modelo de dupla camada: o profissional é responsável pelos seus atos técnicos (podendo ter seguro próprio) e a POPS dispõe de uma apólice de responsabilidade civil de exploração para falhas imputáveis à tecnologia ou processos. Qualquer incidente é analisado pela nossa equipa de suporte e mediação.",
    "faq.q.safety.4.q":
      "O que acontece se houver um problema durante a visita?",
    "faq.q.safety.4.a":
      "Em primeiro lugar, pedimos que reporte o incidente através da App ou contacto direto. A nossa equipa de mediação recolhe a versão de ambas as partes, analisa registos (check-ins, mensagens, diários) e, se necessário, ativa os mecanismos de seguro ou medidas disciplinares, incluindo remoção do profissional da plataforma.",

    // FAQ: SERVICES
    "faq.q.services.1.q":
      "Qual é a diferença entre os planos Básico, Completo e Especializado?",
    "faq.q.services.1.a":
      "O plano Básico foca-se em companhia, supervisão ligeira e apoio doméstico leve. O Completo acrescenta higiene, mobilidade e gestão de medicação. O Especializado é pensado para demências, alta dependência ou situações pós‑alta complexas, com cuidadores mais experientes e formados.",
    "faq.q.services.2.q":
      "Que tipos de situações são ideais para usar a POPS?",
    "faq.q.services.2.a":
      "A POPS é indicada para idosos a viver sozinhos, pessoas com mobilidade reduzida, situações de pós‑alta hospitalar, demências em fase inicial ou moderada e famílias que precisam de apoio regular para conciliar trabalho e cuidado.",
    "faq.q.services.3.q":
      "Posso usar a POPS apenas para uma situação pontual?",
    "faq.q.services.3.a":
      "Sim. Pode contratar desde um serviço pontual (por exemplo, 4 horas num dia específico) até planos recorrentes, como várias visitas por semana ou apoio diário. Turnos mais longos e planos mensais tendem a ter melhor preço/hora.",
    "faq.q.services.4.q":
      "O que é o POPS Insights AI e como funciona nos planos?",
    "faq.q.services.4.a":
      "O POPS Insights AI é um add-on opcional que qualquer família pode ativar por uma mensalidade baixa. Analisa os registos de visitas, tarefas e alertas para gerar relatórios simples sobre padrões de cuidado e bem‑estar, ajudando a antecipar riscos e ajustar o plano de apoio.",

    // FAQ: APP / TECH
    "faq.q.app.1.q": "O que consigo ver em tempo real na app?",
    "faq.q.app.1.a":
      "Consegue ver quando o cuidador faz check‑in e check‑out em casa do seu familiar, as tarefas marcadas como concluídas, registos de banho, medicação e notas relevantes. Recebe notificações em tempo quase real sempre que há uma atualização importante.",
    "faq.q.app.2.q":
      "Como funcionam os diários digitais e os relatórios da POPS?",
    "faq.q.app.2.a":
      "Após cada visita, o cuidador pode preencher um diário simples com o que foi feito. A plataforma gera um resumo organizado, e com o POPS Insights AI consegue ver padrões ao longo de semanas, como evolução da mobilidade, humor ou adesão à medicação.",
    "faq.q.app.3.q":
      "Preciso de instalar alguma coisa especial ou ter um telemóvel recente?",
    "faq.q.app.3.a":
      "A app da POPS está pensada para ser simples e leve, compatível com a maioria dos smartphones recentes Android e iOS. Também pode aceder a uma versão web para consultar relatórios em ecrã maior.",
    "faq.q.app.4.q":
      "Em que é que a POPS é diferente de grupos de WhatsApp ou anúncios em OLX?",
    "faq.q.app.4.a":
      "Grupos informais e anúncios não fazem verificação criminal, não gerem pagamentos de forma segura nem oferecem seguros ou relatórios. A POPS concentra tudo num só lugar: verificação, pagamentos protegidos, avaliações e transparência total sobre quem está a cuidar do seu familiar.",

    // FAQ: LEGAL / CONTRACTS
    "faq.q.legal.1.q":
      "A POPS é responsável pelos cuidadores como empregador?",
    "faq.q.legal.1.a":
      "Não. A POPS é um prestador de serviços da sociedade da informação, não é entidade empregadora nem SAD. Facilita o contacto e o processo administrativo entre Cliente e Profissional, mas cada cuidador trabalha de forma independente.",
    "faq.q.legal.2.q":
      "Como a POPS se enquadra na Lei das Plataformas Digitais (Lei 13/2023)?",
    "faq.q.legal.2.a":
      "O nosso modelo foi desenhado para respeitar a autonomia dos profissionais: não definimos horários fixos, não penalizamos a recusa de serviços e não usamos métricas automatizadas para impor sanções. Os cuidadores podem aceitar ou recusar propostas e definir preços, mantendo a sua independência.",
    "faq.q.legal.3.q":
      "Posso combinar com o cuidador pagar ‘por fora’, sem passar pela POPS?",
    "faq.q.legal.3.a":
      "Não. Essa prática viola os Termos de Serviço e cancela automaticamente as coberturas de seguro, suporte e garantias da plataforma. Além disso, prejudica a sustentabilidade do modelo que permite manter preços justos para todos. Por isso, todas as marcações e pagamentos devem ser feitos dentro da POPS.",

    // FAQ: SCOPE / WHO & WHERE
    "faq.q.scope.1.q":
      "Em que zonas está a POPS disponível neste momento?",
    "faq.q.scope.1.a":
      "A fase inicial foca-se no Grande Porto (Porto, Matosinhos, Gaia, Maia e arredores), para garantir densidade de oferta e rapidez de resposta. A expansão para outras regiões será feita de forma faseada. Apesar disso, qualquer utilizador, cuidador ou utente, de qualquer ponto do território de Portugal (Continente e Ilhas) pode-se inscrever a qualquer momento na aplicação POPS, e usar o nosso serviço.",
    "faq.q.scope.2.q":
      "Para que perfis de utentes a POPS é mais indicada?",
    "faq.q.scope.2.a":
      "Sobretudo para idosos e pessoas em situação de dependência que precisam de apoio regular em casa, mas querem manter-se no seu ambiente habitual. Também é muito útil em fases de transição, como pós‑alta hospitalar ou agravamento de demências.",
    "faq.q.scope.3.q":
      "Quem costuma pagar o serviço: o próprio idoso ou os filhos?",
    "faq.q.scope.3.a":
      "Na maioria dos casos, o utilizador ativo da app é o decisor financeiro da família (filhos ou netos adultos), muitas vezes a viver noutra cidade ou país. A POPS foi pensada para reduzir a ansiedade e a sensação de culpa de ‘estar longe’, oferecendo visibilidade real sobre o que acontece em casa.",

    // Service Items (IDs match the keys below)
    "service.senior.title": "Séniores e Longevidade",
    "service.senior.subtitle": "Envelhecer em casa com dignidade",
    "service.senior.desc": "Os nossos serviços ao domicílio focados na terceira idade promovem a autonomia e o conforto no lar. Este apoio domiciliário especializado inclui companhia, estimulação cognitiva e auxílio nas tarefas diárias.",
    "service.senior.features": "Apoio na higiene,Companhia,Gestão de medicação,Estimulação cognitiva",

    "service.inclusion.title": "Deficiência e Inclusão",
    "service.inclusion.subtitle": "Autonomia para todas as idades",
    "service.inclusion.desc": "Apoio domiciliário dedicado a pessoas com mobilidade reduzida ou necessidades especiais. Prestamos serviços ao domicílio que garantem segurança nas deslocações e higiene, adaptados a cada patologia.",
    "service.inclusion.features": "Mobilidade,Apoio nas refeições,Transporte adaptado,Terapias ocupacionais",

    "service.health.title": "Saúde e Pós-Operatório",
    "service.health.subtitle": "Recuperação segura no lar",
    "service.health.desc": "Serviços ao domicílio técnicos realizados por profissionais de saúde qualificados. Este apoio domiciliário avançado foca-se na monitorização de sinais vitais, curativos e gestão de medicação complexa.",
    "service.health.features": "Curativos,Reabilitação,Monitorização sinais vitais,Apoio noturno",

    "service.domestic.title": "Apoio Doméstico",
    "service.domestic.subtitle": "Famílias livres de tarefas",
    "service.domestic.desc": "Complementamos o apoio domiciliário com serviços ao domicílio de manutenção do lar, garantindo que o ambiente está limpo, seguro e organizado para o bem-estar total da sua família.",
    "service.domestic.features": "Limpeza,Cozinha,Engomadoria,Compras",

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
    "waitlist.success.button": "Submeter outro formulário",
    "waitlist.security.ssl": "Dados protegidos por encriptação SSL",
    "waitlist.security.rgpd": "Conformidade Total RGPD",
    "waitlist.security.social": "Junte-se a +500 famílias",
    "waitlist.error.duplicate": "Este email já está registado na nossa lista de espera.",
    "waitlist.error.server": "Erro interno no servidor (500).",
    "waitlist.error.generic": "Não foi possível processar o teu pedido.",

    // Partners Section
    "partners.badge": "Ecossistema POPS",
    "partners.title": "Parceiros Estratégicos em Portugal",
    "partners.desc": "A nossa rede de apoio domiciliário é construída em colaboração com as instituições mais respeitadas. Trabalhamos em conjunto para elevar o padrão dos serviços ao domicílio, garantindo que cada cuidador possui a formação técnica e certificação necessária para prestar um cuidado de excelência em todo o território nacional.",
    "partners.cta": "Ver Todos os Parceiros",

    // Service Simulator
    "simulator.badge": "Transparência Total",
    "simulator.title": "Simulador de Investimento",
    "simulator.desc": "Sem custos ocultos. Estimativa de mercado com base em valores praticados na POPS.",
    "simulator.label.location": "Localização",
    "simulator.label.service": "Tipo de Serviço",
    "simulator.label.frequency": "Regularidade",
    "simulator.label.hours": "Carga Horária",
    "simulator.loc.lisbon": "Lisboa",
    "simulator.loc.porto": "Porto",
    "simulator.loc.braga": "Braga",
    "simulator.loc.other": "Outro",
    "simulator.option.basic": "Cuidados Básicos",
    "simulator.option.complete": "Cuidados Completos",
    "simulator.option.specialized": "Especializado",
    "simulator.option.recurring": "Regular (Mensal)",
    "simulator.option.one_off": "Pontual",
    "simulator.msg.short": "Turnos curtos (1-2h) incluem taxa de deslocação no valor hora.",
    "simulator.msg.long": "Excelente! Turnos de dia completo (>8h) têm o melhor preço/hora.",
    "simulator.slider.min": "1h (Mínimo)",
    "simulator.slider.day": "8h (Pack Dia)",
    "simulator.slider.24h": "24h (Interna)",
    "simulator.result.title": "Estimativa de Mercado",
    "simulator.unit.hour": "/hora",
    "simulator.unit.day": "/dia",
    "simulator.badge.volume": "Desconto de Volume Aplicado",
    "simulator.badge.logistics": "Ajuste Logístico (Deslocação)",
    "simulator.badge.one_off": "Taxa Serviço Pontual",
    "simulator.result.daily": "Previsão de Custo Diário",
    "simulator.cta": "Ver Cuidadores Disponíveis",
    "simulator.disclaimer": "* Preços indicativos. O Profissional define o valor final.",
    "simulator.hours_per_day": "horas / dia",

    // Sticky CTA
    "sticky.default_label": "Junte-se à nossa Waitlist",
    "sticky.subtitle.profile": "O Teu Próximo Passo",
    "sticky.subtitle.default": "Pronto para Começar?",
    "sticky.cta": "Vamos a isso!",

    // Hero Alt
    "hero.img_alt": "Cuidadora profissional da POPS prestando apoio domiciliário a idoso em Portugal",

    // Footer
    "footer.brand.desc": "Transformamos o cuidado domiciliário em Portugal através de tecnologia, confiança e profissionalismo. Conectamos famílias a cuidadores verificados com segurança total.",
    "footer.col.platform": "Plataforma",
    "footer.link.waitlist": "Lista de Espera",
    "footer.link.how": "Como Funciona",
    "footer.link.pricing": "Preços",
    "footer.link.safety": "Segurança",
    "footer.col.community": "Comunidade",
    "footer.link.partners": "Parceiros",
    "footer.link.blog": "Blog",
    "footer.link.help": "Centro de Ajuda",
    "footer.col.contacts": "Contactos",
    "footer.location": "Porto, Portugal",
    "footer.rights": "Todos os direitos reservados.",
    "footer.privacy": "Política de Privacidade",
    "footer.terms": "Termos de Serviço",
    "footer.cookies": "Definições de Cookies"
   
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
    "comparison.subtitle": "Why POPS is the evolution.",
    "comparison.desc.text": "The traditional model forces you to choose between safety (expensive) or price (risky). We eliminate that choice.",
    "comparison.col.safety": "Safety",
    "comparison.col.control": "Control",
    "comparison.col.qual": "Qualification",
    "comparison.col.legal": "Legality",
    "comparison.col.cost": "Cost",
    "comparison.traditional.title": "Traditional Market",
    "comparison.traditional.sub": "Agencies or Informal",
    "comparison.pops.title": "Recommended",
    "comparison.pops.sub": "POPS Platform",

    "comparison.row.1.trad": "Manual verification difficult or nonexistent. High risk of fraud.",
    "comparison.row.2.trad": "\"Black box\". The family doesn't know if the caregiver fulfilled the schedule.",
    "comparison.row.3.trad": "Diplomas difficult to verify. Risk of caregivers without training.",
    "comparison.row.4.trad": "Cash payments. No receipts for tax deductions.",
    "comparison.row.5.trad": "Arbitrary prices or very high agency commissions.",

    "comparison.row.1.pops": "Mandatory Verification. Criminal and Identity validated.",
    "comparison.row.2.pops": "Real-time GPS. Check-in/out notifications.",
    "comparison.row.3.pops": "Validated Certificates. Confirmation with schools and orders.",
    "comparison.row.4.pops": "100% Legal. Automatic invoicing and tax benefits.",
    "comparison.row.5.pops": "Transparent and Fair. Starting at 9€/h.",

    // Vetting Section
    "vetting.badge": "Safety Protocol",
    "vetting.title.1": "Safety and Trust:",
    "vetting.title.2": "Verified Caregivers.",
    "vetting.desc": "The informal market puts thousands of families at risk. POPS guarantees certified caregivers through a rigorous verification process.",
    "vetting.tag": "Strict Safety Protocol",
    "vetting.main_title": "Trust is not asked for.",
    "vetting.main_title_highlight": "It is verified.",
    "vetting.main_desc": "The informal market puts thousands of families at risk. POPS implements a 4-step verification process, mandatory for all professionals, with continuous monitoring.",

    "vetting.step.1.title": "Document Validation",
    "vetting.step.1.desc": "Manual verification of ID Card, Tax ID, and Address. We guarantee real and traceable identity.",
    "vetting.step.1.detail": "All documents are manually validated",

    "vetting.step.2.title": "Criminal Record",
    "vetting.step.2.desc": "Mandatory and recurring Criminal Record check for contact with vulnerable populations.",
    "vetting.step.2.detail": "Verification every 12 months",

    "vetting.step.3.title": "Validated Certifications",
    "vetting.step.3.desc": "Direct validation with Schools and Professional Orders to guarantee technical competence.",
    "vetting.step.3.detail": "Mandatory certification for specialties",

    "vetting.step.4.title": "Continuous Assessment",
    "vetting.step.4.desc": "Constant monitoring. Professionals with low ratings are removed from the platform.",
    "vetting.step.4.detail": "Minimum 4.5 stars to be active",

    "vetting.callout.title": "Why Safety Matters",
    "vetting.callout.desc": "According to Social Security data, 40% of Portuguese families have reported trust issues with caregivers. POPS is committed to being different through rigorous and continuous verification.",
    "vetting.callout.point.1": "Complete criminal investigation",
    "vetting.callout.point.2": "Real-time GPS monitoring",
    "vetting.callout.point.3": "Continuous assessment",
    "vetting.cta": "Meet Verified Caregivers",

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
    "faq.desc": "Radical transparency. If you don't find your answer here, our team is just a click away.",
    "faq.btn.more": "See more categories",
    "faq.btn.less": "Show less",
    "faq.cta.title": "Still haven't found the answer?",
    "faq.cta.desc": "Our support team is available every day to help find the ideal solution for your family.",
    "faq.cta.button": "Talk to the POPS Team",

    // FAQ categories
    "faq.cat.pricing": "Plans & Pricing",
    "faq.cat.safety": "Safety & Caregivers",
    "faq.cat.services": "Services & Areas",
    "faq.cat.app": "Family App & Monitoring",
    "faq.cat.legal": "Legal & Contracts",
    "faq.cat.scope": "Where & Who?",

    // FAQ: PRICING
    "faq.q.pricing.1.q": "Is POPS an agency or a marketplace?",
    "faq.q.pricing.1.a": "POPS is neither an agency nor a Home Support Service (SAD). We are a technological marketplace connecting families with independent caregivers. The relationship is always between Client and Professional; POPS handles verification, payments, and support.",
    "faq.q.pricing.2.q": "Who sets the final price?",
    "faq.q.pricing.2.a": "POPS shows reference ranges based on platform data, but the professional is free to set their hourly or visit rate. The Client sees these values transparently and accepts or declines before booking.",
    "faq.q.pricing.3.q": "Why do I see price ranges instead of a fixed value?",
    "faq.q.pricing.3.a": "Because every case is different. Caregiver experience, task type, schedule, and duration influence the final value. Instead of imposing a single table, we show a typical market range so you know what to expect, maintaining freedom of negotiation.",
    "faq.q.pricing.4.q": "Is the investment simulator a final quote?",
    "faq.q.pricing.4.a": "The simulator provides an estimate based on POPS values for the service type, location, and hours. It is not a binding proposal, but a transparency guide. The final value is always confirmed by the professional before booking.",

    // FAQ: SAFETY
    "faq.q.safety.1.q": "How do you verify caregivers?",
    "faq.q.safety.1.a": "All professionals undergo a verification protocol including identity validation, criminal record check for contact with vulnerable people, and certification validation. Only after approval are they visible on the marketplace.",
    "faq.q.safety.2.q": "Does POPS track the caregiver via GPS all the time?",
    "faq.q.safety.2.a": "No. Geolocation is used only at check-in and check-out to prove service execution and for Client safety. We do not track continuously between visits or use GPS to control productivity.",
    "faq.q.safety.3.q": "What insurance exists if something goes wrong?",
    "faq.q.safety.3.a": "We use a double-layer model: the professional is responsible for their technical acts (may have own insurance) and POPS has a liability policy for technology or process failures. Any incident is analyzed by our support team.",
    "faq.q.safety.4.q": "What happens if there is an issue during the visit?",
    "faq.q.safety.4.a": "First, report the incident via App or direct contact. Our mediation team collects both versions, analyzes records (check-ins, messages, diaries) and, if necessary, activates insurance or disciplinary measures, including removing the professional.",

    // FAQ: SERVICES
    "faq.q.services.1.q": "What is the difference between Basic, Complete, and Specialized plans?",
    "faq.q.services.1.a": "Basic focuses on companionship, light supervision, and domestic help. Complete adds hygiene, mobility, and medication management. Specialized is for dementia, high dependency, or complex post-discharge, with more experienced/trained caregivers.",
    "faq.q.services.2.q": "What situations are ideal for POPS?",
    "faq.q.services.2.a": "POPS is ideal for seniors living alone, people with reduced mobility, post-hospital discharge, early/moderate dementia, and families needing regular support to balance work and care.",
    "faq.q.services.3.q": "Can I use POPS for a one-off situation?",
    "faq.q.services.3.a": "Yes. You can hire from a one-off service (e.g., 4 hours on a specific day) to recurring plans like several visits a week or daily support. Longer shifts and monthly plans tend to have better hourly rates.",
    "faq.q.services.4.q": "What is POPS Insights AI and how does it work?",
    "faq.q.services.4.a": "POPS Insights AI is an optional add-on for a low monthly fee. It analyzes visit logs, tasks, and alerts to generate simple reports on care patterns and well-being, helping anticipate risks and adjust the care plan.",

    // FAQ: APP / TECH
    "faq.q.app.1.q": "What can I see in real-time on the app?",
    "faq.q.app.1.a": "You see when the caregiver checks in/out, completed tasks, logs for bathing/medication, and notes. You get near real-time notifications for important updates.",
    "faq.q.app.2.q": "How do digital diaries and reports work?",
    "faq.q.app.2.a": "After each visit, the caregiver fills a simple diary. The platform generates an organized summary, and with POPS Insights AI, you see patterns over weeks, like mobility evolution, mood, or medication adherence.",
    "faq.q.app.3.q": "Do I need special installation or a new phone?",
    "faq.q.app.3.a": "The POPS app is designed to be simple and light, compatible with most recent Android and iOS smartphones. You can also access a web version for reports on a larger screen.",
    "faq.q.app.4.q": "How is POPS different from WhatsApp groups or ads?",
    "faq.q.app.4.a": "Informal groups/ads don't do criminal checks, secure payments, insurance, or reports. POPS centralizes everything: verification, protected payments, reviews, and total transparency on who is caring for your family member.",

    // FAQ: LEGAL / CONTRACTS
    "faq.q.legal.1.q": "Is POPS the employer of the caregivers?",
    "faq.q.legal.1.a": "No. POPS is an information society service provider, not an employer or SAD. It facilitates contact and admin processes between Client and Professional, but each caregiver works independently.",
    "faq.q.legal.2.q": "How does POPS fit into the Digital Platforms Law?",
    "faq.q.legal.2.a": "Our model respects professional autonomy: we don't set fixed schedules, penalize refusals, or use automated metrics for sanctions. Caregivers accept/refuse proposals and set prices, maintaining independence.",
    "faq.q.legal.3.q": "Can I pay the caregiver 'outside' the platform?",
    "faq.q.legal.3.a": "No. This violates Terms of Service and cancels insurance, support, and guarantees. It also harms the model's sustainability. All bookings and payments must be done within POPS.",

    // FAQ: SCOPE / WHO & WHERE
    "faq.q.scope.1.q": "Where is POPS available now?",
    "faq.q.scope.1.a": "Initial phase focuses on Greater Porto (Porto, Matosinhos, Gaia, Maia) to ensure supply density and fast response. Expansion to other regions will be phased.",
    "faq.q.scope.2.q": "Who is POPS most suitable for?",
    "faq.q.scope.2.a": "Mainly for seniors/dependent people needing regular home support but wanting to stay in their environment. Also useful for transitions like post-hospital discharge or worsening dementia.",
    "faq.q.scope.3.q": "Who usually pays: the senior or the children?",
    "faq.q.scope.3.a": "Mostly, the active app user is the family financial decision-maker (adult children/grandchildren), often living elsewhere. POPS reduces anxiety and guilt of 'being away' by offering real visibility.",

    // Service Items
    "service.senior.title": "Seniors & Longevity",
    "service.senior.subtitle": "Aging at home with dignity",
    "service.senior.desc": "Complete support to maintain independence. From companionship and cognitive stimulation to hygiene care and medication management.",
    "service.senior.features": "Hygiene support,Companionship,Medication management,Cognitive stimulation",

    "service.inclusion.title": "Disability & Inclusion",
    "service.inclusion.subtitle": "Autonomy for all ages",
    "service.inclusion.desc": "Specialized support for physical or intellectual challenges. We focus on capabilities and promoting maximum possible autonomy.",
    "service.inclusion.features": "Mobility,Meal support,Adapted transport,Occupational therapies",

    "service.health.title": "Health & Post-Op",
    "service.health.subtitle": "Safe recovery at home",
    "service.health.desc": "Nursing care and technical support for surgery recovery, accidents, or complex chronic disease management.",
    "service.health.features": "Dressing changes,Rehabilitation,Vital signs monitoring,Night support",

    "service.domestic.title": "Domestic Support",
    "service.domestic.subtitle": "Families free from chores",
    "service.domestic.desc": "Complete management of household tasks so families can focus on what really matters: being together.",
    "service.domestic.features": "Cleaning,Cooking,Ironing,Shopping",

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
    "waitlist.success.button": "Submit another form",
    "waitlist.security.ssl": "Data protected by SSL encryption",
    "waitlist.security.rgpd": "Full GDPR Compliance",
    "waitlist.security.social": "Join +500 families",
    "waitlist.error.duplicate": "This email is already registered in our waitlist.",
    "waitlist.error.server": "Internal server error (500).",
    "waitlist.error.generic": "Could not process your request.",

    // Partners Section
    "partners.badge": "Ecossistema POPS",
    "partners.title": "Parceiros Estratégicos em Portugal",
    "partners.desc": "A nossa rede de apoio domiciliário é construída em colaboração com as instituições mais respeitadas. Trabalhamos em conjunto para elevar o padrão dos serviços ao domicílio, garantindo que cada cuidador possui a formação técnica e certificação necessária para prestar um cuidado de excelência em todo o território nacional.",
    "partners.cta": "Ver Todos os Parceiros",

    // Service Simulator
    "simulator.badge": "Transparência Total",
    "simulator.title": "Simulador de Investimento",
    "simulator.desc": "Sem custos ocultos. Estimativa de mercado com base em valores praticados na POPS.",
    "simulator.label.location": "Localização",
    "simulator.label.service": "Tipo de Serviço",
    "simulator.label.frequency": "Regularidade",
    "simulator.label.hours": "Carga Horária",
    "simulator.loc.lisbon": "Lisboa",
    "simulator.loc.porto": "Porto",
    "simulator.loc.braga": "Braga",
    "simulator.loc.other": "Outro",
    "simulator.option.basic": "Cuidados Básicos",
    "simulator.option.complete": "Cuidados Completos",
    "simulator.option.specialized": "Especializado",
    "simulator.option.recurring": "Regular (Mensal)",
    "simulator.option.one_off": "Pontual",
    "simulator.msg.short": "Turnos curtos (1-2h) incluem taxa de deslocação no valor hora.",
    "simulator.msg.long": "Excelente! Turnos de dia completo (>8h) têm o melhor preço/hora.",
    "simulator.slider.min": "1h (Mínimo)",
    "simulator.slider.day": "8h (Pack Dia)",
    "simulator.slider.24h": "24h (Interna)",
    "simulator.result.title": "Estimativa de Mercado",
    "simulator.unit.hour": "/hora",
    "simulator.unit.day": "/dia",
    "simulator.badge.volume": "Desconto de Volume Aplicado",
    "simulator.badge.logistics": "Ajuste Logístico (Deslocação)",
    "simulator.badge.one_off": "Taxa Serviço Pontual",
    "simulator.result.daily": "Previsão de Custo Diário",
    "simulator.cta": "Ver Cuidadores Disponíveis",
    "simulator.disclaimer": "* Preços indicativos. O Profissional define o valor final.",
    "simulator.hours_per_day": "horas / dia",

    // Sticky CTA
    "sticky.default_label": "Junte-se à nossa Waitlist",
    "sticky.subtitle.profile": "O Teu Próximo Passo",
    "sticky.subtitle.default": "Pronto para Começar?",
    "sticky.cta": "Vamos a isso!",

    // Hero Alt
    "hero.img_alt": "Cuidadora profissional da POPS prestando apoio domiciliário a idoso em Portugal",

    // Footer
    "footer.brand.desc": "Transforming home care in Portugal through technology, trust, and professionalism. Connecting families to verified caregivers with total safety.",
    "footer.col.platform": "Platform",
    "footer.link.waitlist": "Waitlist",
    "footer.link.how": "How it Works",
    "footer.link.pricing": "Pricing",
    "footer.link.safety": "Safety",
    "footer.col.community": "Community",
    "footer.link.partners": "Partners",
    "footer.link.blog": "Blog",
    "footer.link.help": "Help Center",
    "footer.col.contacts": "Contacts",
    "footer.location": "Porto, Portugal",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.cookies": "Cookie Settings"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('PT');

  const t = (key: string, defaultValue?: string): string => {
    return translations[language][key as keyof typeof translations['PT']] || defaultValue || key;
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