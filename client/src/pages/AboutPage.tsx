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
}

const TeamMember = ({ name, role, desc, delay }: TeamMemberProps) => (
  <FadeIn delay={delay} className="w-full">
    <div className="group relative h-full bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col items-center text-center">
      {/* Subtle gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Avatar Container */}
      <div className="relative mb-6 inline-block">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-teal-400 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 scale-110"></div>
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-[3px] border-slate-100 group-hover:border-primary transition-all duration-500 bg-slate-50 shadow-inner">
          <img 
            src={`https://ui-avatars.com/api/?name=${name}&background=0E6973&color=fff&size=256`} 
            alt={`${name}`} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center">
        <h3 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors duration-300">{name}</h3>
        <span className="inline-block px-3 py-1 bg-slate-100 rounded-full text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 border border-slate-200 group-hover:bg-primary/5 group-hover:text-primary group-hover:border-primary/20 transition-all duration-300">
          {role}
        </span>
        <div className="w-8 h-0.5 bg-slate-200 mb-4 rounded-full group-hover:bg-primary/30 group-hover:w-16 transition-all duration-500"></div>
        <p className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
          {desc}
        </p>
      </div>

      {/* Social Actions (Mocked) */}
      <div className="mt-6 flex gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
        <button className="p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-blue-50 hover:text-blue-600 transition-colors">
          <Linkedin size={18} />
        </button>
        <button className="p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-primary/10 hover:text-primary transition-colors">
          <Mail size={18} />
        </button>
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
      desc: "Lutamos pela dignificação da profissão de cuidador, com salários justos, formação contínua e respeito."
    }
  ];

  const team = [
    { name: "Ana Pinto", role: "CEO", desc: "Visão Estratégica & Relações Institucionais. Lidera a expansão da rede POPS em Portugal." },
    { name: "Gonçalo Oliveira", role: "CFO", desc: "Gestão Financeira & Planeamento. Garante a sustentabilidade e viabilidade do modelo de negócio." },
    { name: "João Sousa", role: "CTO", desc: "Tecnologia & Infraestrutura. Responsável pela visão técnica e escalabilidade da plataforma." },
    { 
      name: "Gustavo Fajardo", 
      role: "CMO & Project Manager", 
      desc: "Gestão de projetos e estratégia de marketing. Coordenador de iniciativas de crescimento e parcerias." 
    },

     { name: "Guilherme Lupi", role: "COO", desc: "Operações & Compliance. Garante a qualidade do serviço e conformidade com as normas de saúde." },
     
    { 
      name: "Maria Urizar", 
      role: "Design & Marketing Lead", 
      desc: "Estratégia de marca e UI/UX. Focada em taxas de conversão, criação de conteúdo e visibilidade." 
    },
   
    { 
      name: "Nuno Pinto", 
      role: "Lead Back-end Engineer", 
      desc: "Arquitetura de segurança e desenvolvimento de API. Focado em uptime, performance e proteção de dados." 
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-slate-900">
      <SEO 
        title="Sobre a POPS - Líder em Apoio Domiciliário em Portugal" 
        description="Conheça a missão da POPS: elevar o padrão do apoio domiciliário em Portugal através de tecnologia e cuidadores certificados. Especialistas em descanso do cuidador e apoio a doentes crónicos."
      />
      
      <Header />

      <main className="flex-1">
        
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
          {/* Sophisticated gradient backgrounds */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute -bottom-32 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
            {/* Badge */}
            <FadeIn delay={100}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-semibold text-primary uppercase tracking-widest mb-8 shadow-sm hover:shadow-md transition-shadow">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                A Nossa História
              </div>
            </FadeIn>
            
            {/* Main heading */}
            <FadeIn delay={200}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-slate-900 leading-[1.2]">
                Redefinindo o cuidado
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary via-teal-500 to-primary leading-[1.3]">
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

            {/* CTA Buttons */}
            <FadeIn delay={400}>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="/#waitlist" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl focus:ring-4 focus:ring-primary/20 focus:outline-none">
                  Começar Agora <ArrowRight size={18} />
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="py-24 lg:py-32 bg-white relative">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
              {/* Image with floating stats */}
                 <FadeIn className="space-y-8">
                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-slate-50 aspect-[4/3] group">
                       <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                       <img 
                          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80" 
                          alt="Ambiente profissional POPS" 
                          className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
                       />
                  
                  {/* Floating stats card */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-white/20 p-5 z-30">
                    <div className="grid grid-cols-3 divide-x divide-slate-200">
                      <div className="text-center px-3">
                        <div className="text-2xl font-bold text-slate-900">100%</div>
                        <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-1">Verificado</div>
                      </div>
                      <div className="text-center px-3">
                        <div className="text-2xl font-bold text-slate-900">24/7</div>
                        <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-1">Suporte</div>
                      </div>
                      <div className="text-center px-3">
                        <div className="text-2xl font-bold text-slate-900">PT</div>
                        <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-1">Nacional</div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Mission & Vision cards */}
              <div className="space-y-6 flex flex-col justify-between">
                {/* Mission */}
                <FadeIn delay={200}>
                  <div className="group h-full bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-2xl border border-slate-200 p-8 hover:border-primary/50 hover:from-slate-50 hover:to-primary/5 transition-all duration-500 hover:shadow-lg">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                        <Target size={20} className="text-primary group-hover:text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mt-0.5">Missão</h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                      Conectar doentes crónicos, idosos e pessoas em situação de dependência a cuidadores qualificados, verificados e certificados, superando as barreiras de acesso e transparência.
                    </p>
                  </div>
                </FadeIn>

                {/* Vision */}
                <FadeIn delay={400}>
                  <div className="group h-full bg-gradient-to-br from-primary to-primary-dark rounded-2xl border border-primary/20 p-8 hover:shadow-xl transition-all duration-500 relative overflow-hidden shadow-lg">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-colors duration-500"></div>
                    
                    <div className="flex items-start gap-4 mb-4 relative z-10">
                      <div className="p-3 rounded-lg bg-white/10 border border-white/20 group-hover:bg-white/20 transition-all">
                        <Eye size={20} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mt-0.5">Visão</h3>
                    </div>
                    <p className="text-primary-light/90 leading-relaxed group-hover:text-white transition-colors relative z-10">
                      Ser o motor da transformação digital do apoio domiciliário em Portugal. Queremos evoluir de um modelo fragmentado para um ecossistema integrado com o SNS e Famílias.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* VALUES SECTION */}
        <section className="py-24 lg:py-32 bg-gradient-to-b from-slate-50/50 to-white">
          <div className="container mx-auto px-6">
            {/* Section header */}
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <FadeIn delay={100}>
                <span className="inline-block px-4 py-1.5 mb-4 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold text-primary uppercase tracking-widest">Fundação</span>
              </FadeIn>
              <FadeIn delay={200}>
                <h2 className="text-4xl md:text-5xl font-bold mb-5 text-slate-900">Os Nossos Pilares</h2>
              </FadeIn>
              <FadeIn delay={300}>
                <p className="text-lg text-slate-600">
                  Princípios que guiam cada decisão que tomamos, desde o desenvolvimento da app até ao atendimento ao cliente.
                </p>
              </FadeIn>
            </div>

            {/* Values grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((val, i) => (
                <ValueCard key={i} {...val} delay={i * 100} />
              ))}
            </div>
          </div>
        </section>

        {/* TEAM SECTION */}
        <section className="py-24 lg:py-32 bg-gradient-to-b from-white via-slate-50/30 to-white border-y border-slate-100">
          <div className="container mx-auto px-6">
            {/* Section header */}
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <FadeIn delay={100}>
                <span className="inline-block px-4 py-1.5 mb-4 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold text-primary uppercase tracking-widest">Liderança</span>
              </FadeIn>
              <FadeIn delay={200}>
                <h2 className="text-4xl md:text-5xl font-bold mb-5 text-slate-900">Quem Faz Acontecer</h2>
              </FadeIn>
              <FadeIn delay={300}>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Uma equipa multidisciplinar unida pelo propósito de dignificar o cuidado domiciliário.
                </p>
              </FadeIn>
            </div>

            {/* Team grid - optimized layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {team.map((member, i) => (
                <TeamMember key={i} {...member} delay={i * 100} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50">
          <div className="container mx-auto px-6">
            <FadeIn>
              <div className="relative bg-white border border-slate-200 rounded-[3rem] overflow-hidden shadow-2xl">
                {/* Decorative backgrounds */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
                
                <div className="relative z-10 px-8 md:px-16 py-16 md:py-24 text-center max-w-3xl mx-auto">
                  <FadeIn delay={100}>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">
                      Faça parte da mudança.
                    </h2>
                  </FadeIn>
                  
                  <FadeIn delay={200}>
                    <p className="text-slate-600 text-lg mb-10">
                      Seja para encontrar o cuidador ideal ou para exercer a sua profissão com dignidade.
                    </p>
                  </FadeIn>

                  <FadeIn delay={300}>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                      <a 
                        href="/#waitlist" 
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:-translate-y-1 active:scale-95"
                      >
                        Começar Agora <ArrowRight size={18} />
                      </a>
                      <a 
                        href="/carreiras" 
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-all hover:shadow-md active:scale-95"
                      >
                        Ver Vagas
                      </a>
                    </div>
                  </FadeIn>
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