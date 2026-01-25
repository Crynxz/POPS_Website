'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FadeIn from "@/components/FadeIn";
import { Users, Heart, Target, Lightbulb, ShieldCheck, ArrowRight, Eye, Linkedin, Mail } from "lucide-react";

interface ValueCardProps {
  icon: typeof Heart;
  title: string;
  desc: string;
  delay: number;
}

const ValueCard = ({ icon: Icon, title, desc, delay }: ValueCardProps) => (
  <FadeIn delay={delay}>
    <div className="group relative h-full rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200 p-8 overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-primary/50 hover:from-slate-50 hover:to-primary/5">
      {/* Animated background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500"></div>
      
      {/* Icon background */}
      <div className="absolute top-0 right-0 -m-12 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500">
        <Icon size={180} className="text-primary" />
      </div>

      {/* Icon badge */}
      <div className="relative z-10 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white border border-slate-200 text-primary mb-6 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:scale-110">
        <Icon size={24} />
      </div>

      {/* Content */}
      <h3 className="relative z-10 text-lg font-semibold text-slate-900 mb-3 group-hover:text-slate-950">{title}</h3>
      <p className="relative z-10 text-sm text-slate-600 leading-relaxed group-hover:text-slate-700">
        {desc}
      </p>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-500"></div>
    </div>
  </FadeIn>
);

interface TeamMemberProps {
  name: string;
  role: string;
  desc: string;
  delay: number;
  image?: string;
  linkedin?: string;
}

const TeamMember = ({ name, role, desc, delay, image, linkedin }: TeamMemberProps) => (
  <FadeIn delay={delay} className="w-full h-full">
    <div className="group relative h-full flex flex-col bg-transparent">
      {/* Image Container - Grand Portrait Style */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-slate-100 mb-6 shadow-md group-hover:shadow-xl transition-all duration-500">
        <div className="absolute inset-0 bg-slate-200 animate-pulse" /> {/* Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
        
        <img 
          src={image || `https://ui-avatars.com/api/?name=${name}&background=f1f5f9&color=64748b&size=512`} 
          alt={name} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Social Actions Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-end gap-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
          <a 
            href={linkedin || "#"}
            target={linkedin ? "_blank" : undefined}
            rel={linkedin ? "noopener noreferrer" : undefined}
            className="p-2.5 rounded-full bg-white/90 backdrop-blur-sm text-slate-900 hover:bg-white hover:text-blue-600 transition-colors shadow-lg"
            aria-label={`LinkedIn de ${name}`}
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-start px-1">
        <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">{name}</h3>
        <p className="text-xs font-bold text-primary/80 uppercase tracking-widest mb-3">{role}</p>
        <p className="text-sm text-slate-600 leading-relaxed line-clamp-4 group-hover:text-slate-900 transition-colors">
          {desc}
        </p>
      </div>
    </div>
  </FadeIn>
);

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Humanização Radical",
      desc: "A tecnologia deve servir as pessoas. Cada linha de código é escrita a pensar no conforto de quem cuida e de quem é cuidado."
    },
    {
      icon: ShieldCheck,
      title: "Confiança Inabalável",
      desc: "Não fazemos atalhos na segurança. A nossa verificação rigorosa é o alicerce de tudo o que construímos."
    },
    {
      icon: Lightbulb,
      title: "Inovação com Propósito",
      desc: "Não inovamos por vaidade. Criamos ferramentas que resolvem problemas reais do dia-a-dia das famílias."
    },
    {
      icon: Users,
      title: "Comunidade Primeiro",
      desc: "Lutamos pela dignificação da profissão de cuidador, a valorização do trabalho, formação contínua e respeito."
    }
  ];

  const team = [
    { 
      name: "Ana Pinto", 
      role: "CEO & Co-Founder", 
      desc: "Visão Estratégica & Relações Institucionais. Lidera a expansão da rede POPS em Portugal.",
      image: "/assets/TeamPOPSphotos/AnaCEO.webp"
    },
    { 
      name: "João Sousa", 
      role: "CTO & Co-Founder", 
      desc: "Tecnologia & Infraestrutura. Responsável pela visão técnica e escalabilidade da plataforma.",
      image: "/assets/TeamPOPSphotos/Joao.webp",
      linkedin: "https://www.linkedin.com/in/joaosousa-in"
    },
     { 
      name: "María Urízar", 
      role: "Marketing Director & Co-Founder", 
      desc: "Estratégia de marca e UI/UX. Focada na experiência do utilizador, criação de conteúdo e estratégias de conversão digital.",
      image: "/assets/TeamPOPSphotos/Maria4.webp",
      linkedin: "https://www.linkedin.com/in/mar%C3%ADa-ur%C3%ADzar-25886a2b5/"
    },
     { 
      name: "Guilherme Lupi", 
      role: "COO & Co-Founder", 
      desc: "Operações & Trust and Safety. Gere a verificação rigorosa de perfis e a conformidade dos processos da plataforma.",
      image: "/assets/TeamPOPSphotos/Guilherme.webp"
    },
    { 
      name: "Gonçalo Oliveira", 
      role: "CFO & Co-Founder", 
      desc: "Gestão Financeira & Planeamento. Garante a sustentabilidade e viabilidade do modelo de negócio.",
      image: "/assets/TeamPOPSphotos/Gonçalo.webp"
    },
    
    { 
      name: "Gustavo Fajardo", 
      role: "CMO & Co-Founder", 
      desc: "Gestão de projetos e estratégia de marketing. Coordena a aquisição de utilizadores e estratégias de crescimento da rede.",
      image: "/assets/TeamPOPSphotos/Gustavo.webp"
    },
   
    { 
      name: "Nuno Pinto", 
      role: "Lead Back-end Engineer & DPO", 
      desc: "Desenvolvimento, Arquitetura de Segurança e Proteção de Dados. Focado em performance e privacidade.",
      image: "/assets/TeamPOPSphotos/placeholder.webp"
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-slate-900">
      <SEO 
        title="Sobre a POPS - Líder em Apoio Domiciliário em Portugal" 
        description="Conheça a missão da POPS: elevar o padrão do apoio domiciliário em Portugal através de tecnologia e cuidadores com certificação validada. Especialistas em descanso do cuidador e apoio a doentes crónicos."
      />
      
      <Header />

      <main className="flex-1">
        
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-28 overflow-hidden bg-white">
          <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
            {/* Badge */}
            <FadeIn delay={100}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-primary uppercase tracking-widest mb-8 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                A Nossa História
              </div>
            </FadeIn>
            
            {/* Main heading */}
            <FadeIn delay={200}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-12 tracking-tight text-slate-900 leading-[1.15]">
                Redefinindo o cuidado
                <span className="block mt-2 pb-3 text-transparent bg-clip-text bg-gradient-to-r from-primary via-teal-500 to-primary">
                  com empatia e tecnologia
                </span>
              </h1>
            </FadeIn>

            {/* Subtitle */}
            <FadeIn delay={300}>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto">
                A POPS nasceu de uma necessidade pessoal. Percebemos que encontrar apoio domiciliário de confiança em Portugal era um processo lento, burocrático e inseguro. Decidimos mudar isso.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* GRAND TEAM PHOTO SECTION - Modern Full Width */}
        <section className="pb-24">
           <div className="container mx-auto px-4 lg:px-6">
              <FadeIn delay={400}>
                 <div className="relative w-full overflow-hidden rounded-[2.5rem] shadow-2xl border border-slate-100 group bg-slate-50/50">
                    <img 
                       src="/assets/TeamPOPSphotos/grouphoto.webp"
                       alt="Equipa POPS unida" 
                       className="w-full h-auto object-contain block group-hover:scale-[1.02] transition-transform duration-[2s]"
                    />
                 </div>
              </FadeIn>

              {/* Stats Strip - Clean and Minimal */}
              <div className="mt-12 lg:mt-16">
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-y border-slate-100 py-10">
                    <FadeIn delay={500} className="text-center md:border-r border-slate-100 last:border-0">
                       <div className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2">100%</div>
                       <div className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Verificado</div>
                    </FadeIn>
                    <FadeIn delay={600} className="text-center md:border-r border-slate-100 last:border-0">
                       <div className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2">24/7</div>
                       <div className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Suporte</div>
                    </FadeIn>
                    <FadeIn delay={800} className="text-center">
                       <div className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2">Nacional</div>
                       <div className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Cobertura</div>
                    </FadeIn>
                 </div>
              </div>
           </div>
        </section>

        {/* MISSION & VISION - Redesigned without the image */}
        <section className="py-24 bg-slate-50/50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
               {/* Mission */}
               <FadeIn delay={100} className="h-full">
                  <div className="group h-full bg-white rounded-3xl p-10 lg:p-12 shadow-sm border border-slate-100 hover:shadow-xl hover:border-primary/20 transition-all duration-500">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                       <Target size={28} className="text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">A Nossa Missão</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      Conectar doentes crónicos, idosos e pessoas em situação de dependência a cuidadores qualificados, verificados e certificados, superando as barreiras de acesso e transparência do mercado tradicional.
                    </p>
                  </div>
               </FadeIn>

               {/* Vision */}
               <FadeIn delay={200} className="h-full">
                  <div className="group h-full bg-slate-900 rounded-3xl p-10 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/30 transition-all duration-700"></div>
                    
                    <div className="relative z-10">
                       <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-500 border border-white/10">
                          <Eye size={28} className="text-white" />
                       </div>
                       <h2 className="text-3xl font-bold text-white mb-6">A Nossa Visão</h2>
                       <p className="text-lg text-slate-300 leading-relaxed">
                         Ser o motor da transformação digital do apoio domiciliário em Portugal. Queremos evoluir de um modelo fragmentado para um ecossistema integrado com o SNS, Seguradoras e Famílias.
                       </p>
                    </div>
                  </div>
               </FadeIn>
            </div>
          </div>
        </section>

        {/* VALUES SECTION */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <FadeIn delay={100}>
                <span className="inline-block px-4 py-1.5 mb-4 bg-primary/5 border border-primary/10 rounded-full text-xs font-bold text-primary uppercase tracking-widest">Valores</span>
              </FadeIn>
              <FadeIn delay={200}>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Os Nossos Pilares</h2>
              </FadeIn>
              <FadeIn delay={300}>
                <p className="text-lg text-slate-600">
                  Princípios inegociáveis que guiam cada decisão que tomamos.
                </p>
              </FadeIn>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((val, i) => (
                <ValueCard key={i} {...val} delay={i * 100} />
              ))}
            </div>
          </div>
        </section>

        {/* TEAM SECTION - Redesigned */}
        <section className="py-24 lg:py-32 bg-slate-50/50 border-t border-slate-100">
          <div className="container mx-auto px-6">
            <div className="mb-20">
              <FadeIn delay={100}>
                 <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 tracking-tight">Quem Faz Acontecer</h2>
              </FadeIn>
              <FadeIn delay={200}>
                 <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
                    Uma equipa multidisciplinar unida pelo propósito de dignificar o cuidado domiciliário em Portugal.
                 </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
              {team.map((member, i) => (
                <TeamMember key={i} {...member} delay={i * 100} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-24 lg:py-32 bg-white overflow-hidden">
          <div className="container mx-auto px-6">
            <FadeIn>
              <div className="relative bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl px-8 md:px-20 py-20 md:py-32 text-center">
                {/* Background effects */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                   <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                   <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
                </div>
                
                <div className="relative z-10 max-w-4xl mx-auto">
                  <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white tracking-tight leading-tight">
                    Faça parte da mudança no apoio domiciliário.
                  </h2>
                  
                  <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                    Seja para encontrar o cuidador ideal ou para exercer a sua profissão com dignidade e segurança.
                  </p>

                  <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <a 
                      href="/#waitlist" 
                      className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-100 transition-all transform hover:-translate-y-1"
                    >
                      Encontrar Cuidador
                    </a>
                     <a 
                      href="/contact" 
                      className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold hover:bg-white/10 transition-all"
                    >
                      Falar com a Equipa
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}