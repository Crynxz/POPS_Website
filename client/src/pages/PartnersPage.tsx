import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FadeIn from "@/components/FadeIn";
import { 
  Handshake, 
  Users, 
  Award, 
  ShieldCheck, 
  GraduationCap, 
  TrendingUp, 
  ArrowRight, 
  Building2, 
  Star,
  Mail,
  ChevronLeft
} from "lucide-react";
import { Link } from "wouter";

const partnerList = [
  {
    name: "CNIS",
    description: "Confederação Nacional das Instituições de Solidariedade. Parceiro chave na rede de IPSS e apoio social.",
    logoUrl: "https://via.placeholder.com/150/004AAD/FFFFFF?Text=CNIS",
    category: "Institucional",
  },
  {
    name: "Cruz Vermelha Portuguesa",
    description: "Referência mundial em socorrismo e apoio humanitário. Certificação de primeiros socorros.",
    logoUrl: "https://via.placeholder.com/150/CC0000/FFFFFF?Text=CVP",
    category: "Saúde & Socorro",
  },
  {
    name: "União das Misericórdias",
    description: "Representa as Santas Casas (UMP), com forte aposta na formação contínua de cuidados geriátricos.",
    logoUrl: "https://via.placeholder.com/150/333333/FFFFFF?Text=UMP",
    category: "Institucional",
  },
  {
    name: "IEFP",
    description: "Instituto do Emprego e Formação Profissional. Certificação de competências e cursos técnicos.",
    logoUrl: "https://via.placeholder.com/150/004AAD/FFFFFF?Text=IEFP",
    category: "Formação",
  },
  {
    name: "ANCI",
    description: "Associação Nacional de Cuidadores Informais. Apoio direto e formação para famílias cuidadoras.",
    logoUrl: "https://via.placeholder.com/150/008000/FFFFFF?Text=ANCI",
    category: "Associação",
  },
  {
    name: "ESEL / ESEP",
    description: "Escolas Superiores de Enfermagem (Lisboa e Porto). Parceiros científicos para cuidados avançados.",
    logoUrl: "https://via.placeholder.com/150/004AAD/FFFFFF?Text=Enfermagem",
    category: "Academia",
  },
  {
    name: "Centros Qualifica",
    description: "Rede nacional especializada na qualificação e certificação escolar e profissional de adultos.",
    logoUrl: "https://via.placeholder.com/150/FFA500/FFFFFF?Text=Qualifica",
    category: "Formação",
  },
  {
    name: "Master D",
    description: "Entidade formadora de referência com cursos práticos de Auxiliar de Saúde e Geriatria.",
    logoUrl: "https://via.placeholder.com/150/000000/FFFFFF?Text=MasterD",
    category: "Formação",
  },
  {
    name: "Assoc. Alzheimer Portugal",
    description: "Formação especializada e apoio focado em demência e saúde mental no envelhecimento.",
    logoUrl: "https://via.placeholder.com/150/004AAD/FFFFFF?Text=Alzheimer",
    category: "Especialidade",
  },
];

export function PartnersPage() {
  const benefits = [
    {
      icon: Users,
      title: "Acesso a Clientes",
      desc: "Conectamos a sua instituição a famílias que procuram ativamente cuidados de qualidade."
    },
    {
      icon: ShieldCheck,
      title: "Validação de Confiança",
      desc: "O selo 'Parceiro POPS' transmite segurança e credibilidade imediata aos clientes."
    },
    {
      icon: TrendingUp,
      title: "Crescimento Sustentável",
      desc: "Aumente a sua taxa de ocupação e serviços sem custos fixos de marketing."
    },
    {
      icon: GraduationCap,
      title: "Formação e Certificação",
      desc: "Acesso à nossa plataforma de LMS para formação contínua dos seus colaboradores."
    },
    {
      icon: Award,
      title: "Gestão Simplificada",
      desc: "Ferramentas digitais para gerir escalas, faturação e relatórios num só lugar."
    },
    {
      icon: Handshake,
      title: "Rede de Referenciação",
      desc: "Troca de utentes entre parceiros para garantir que nenhuma família fica sem resposta."
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <SEO 
        title="Parceiros POPS - Rede de Apoio Domiciliário e Cuidadores" 
        description="Torne-se um parceiro da POPS. Junte-se à nossa rede de Apoio Domiciliário e conecte os seus Cuidadores a famílias por todo o território de Portugal."
      />
      <Header />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-24 bg-slate-50 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0E6973 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 hidden md:block"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="mb-8 flex justify-center">
              <Link href="/">
                <a className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors text-sm font-medium group">
                  <ChevronLeft size={16} className="transition-transform group-hover:-translate-x-1" /> Voltar à página inicial
                </a>
              </Link>
            </div>

            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900 leading-[1.1]">
                Parceiros que elevam <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-teal-500 to-primary">o Padrão de Cuidado.</span>
              </h1>
              
              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                A POPS colabora com as instituições mais respeitadas de Portugal para garantir certificação, formação contínua e excelência em cada serviço prestado.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contact-form" 
                  className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:-translate-y-1 active:scale-95"
                >
                  Tornar-se Parceiro
                </a>
                <a 
                  href="#rede" 
                  className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-all active:scale-95 shadow-sm"
                >
                  Ver Rede Atual
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS GRID */}
        <section id="beneficios" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">Vantagens Exclusivas</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Porquê ser um Parceiro POPS?</h2>
              <p className="text-slate-600">Oferecemos mais do que leads. Oferecemos uma infraestrutura tecnológica completa para o seu negócio.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, i) => (
                <FadeIn key={i} delay={i * 100}>
                  <div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 h-full">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-100">
                      <benefit.icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* PARTNERS LISTING GRID */}
        <section id="rede" className="py-24 bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">Rede de Confiança</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Instituições que já fazem parte</h2>
              <p className="text-slate-600 text-lg">Unimos forças com entidades de referência nacional para elevar a qualidade do apoio domiciliário.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partnerList.map((partner, i) => (
                <FadeIn key={i} delay={i * 50}>
                  <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group h-full flex flex-col">
                    <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                      <Building2 size={100} className="text-primary" />
                    </div>
                    
                    <div className="flex justify-between items-start mb-8 relative z-10">
                      <div className="w-20 h-20 rounded-2xl border border-slate-100 p-2 bg-white flex items-center justify-center shadow-inner">
                        <img 
                          src={partner.logoUrl} 
                          alt={partner.name} 
                          className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500" 
                          loading="lazy" 
                        />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-slate-100 text-slate-500 border border-slate-200 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20 transition-colors">
                        {partner.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10 group-hover:text-primary transition-colors">{partner.name}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow relative z-10">{partner.description}</p>
                    
                    <div className="pt-6 border-t border-slate-50 mt-auto flex items-center gap-2 text-xs font-bold text-slate-400 group-hover:text-primary transition-colors">
                      <ShieldCheck size={14} /> Protocolo de Cooperação Ativo
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS STEPS */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
           <div className="absolute inset-0 bg-slate-950/50"></div>
           <div className="container mx-auto px-6 relative z-10">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                 <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Processo de Admissão</h2>
                    <p className="text-slate-400 text-lg mb-12">
                       Mantemos um padrão de qualidade rigoroso. O nosso processo de parceria garante que apenas instituições alinhadas com os nossos valores entram na rede.
                    </p>
                    
                    <div className="space-y-10">
                       <div className="flex gap-6">
                          <div className="flex flex-col items-center">
                             <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center font-bold text-white shadow-lg shadow-primary/30 shrink-0">1</div>
                             <div className="w-px h-full bg-slate-800 my-2"></div>
                          </div>
                          <div className="pb-4">
                             <h4 className="text-xl font-bold text-white mb-2">Candidatura Institucional</h4>
                             <p className="text-slate-400 text-sm leading-relaxed">Preenchimento do formulário detalhado com dados da empresa, alvarás de funcionamento e certificações de qualidade.</p>
                          </div>
                       </div>
                       
                       <div className="flex gap-6">
                          <div className="flex flex-col items-center">
                             <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-slate-300 shrink-0">2</div>
                             <div className="w-px h-full bg-slate-800 my-2"></div>
                          </div>
                          <div className="pb-4">
                             <h4 className="text-xl font-bold text-white mb-2">Validação Legal & Técnica</h4>
                             <p className="text-slate-400 text-sm leading-relaxed">A nossa equipa de compliance verifica a conformidade legal, fiscal e a idoneidade técnica da sua instituição.</p>
                          </div>
                       </div>

                       <div className="flex gap-6">
                          <div className="flex flex-col items-center">
                             <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-slate-300 shrink-0">3</div>
                          </div>
                          <div>
                             <h4 className="text-xl font-bold text-white mb-2">Integração & Ecossistema</h4>
                             <p className="text-slate-400 text-sm leading-relaxed">Configuração da conta institucional, formação sobre a plataforma e início da rede de referenciação ativa.</p>
                          </div>
                       </div>
                    </div>
                 </div>

                 <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-blue-500/20 rounded-[3rem] blur-2xl transform rotate-3 hidden md:block"></div>
                    <div className="relative bg-slate-800 border border-slate-700 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
                       <div className="mb-8">
                          <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-4">
                             <Mail size={24} />
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-2">Candidate-se Agora</h3>
                          <p className="text-slate-400 text-sm">Inicie o processo de parceria hoje e receba uma resposta em 48h.</p>
                       </div>

                       <form id="contact-form" action="https://formsubmit.co/parceiros@popspt.com" method="POST" className="space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                             <input type="text" name="empresa" placeholder="Nome da Instituição" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:ring-2 focus:ring-primary focus:outline-none transition-all" required />
                             <input type="text" name="nif" placeholder="NIF" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:ring-2 focus:ring-primary focus:outline-none transition-all" required />
                          </div>
                          <input type="text" name="responsavel" placeholder="Nome do Responsável" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:ring-2 focus:ring-primary focus:outline-none transition-all" required />
                          <input type="email" name="email" placeholder="Email Institucional" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:ring-2 focus:ring-primary focus:outline-none transition-all" required />
                          <input type="tel" name="telefone" placeholder="Telefone de Contacto" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:ring-2 focus:ring-primary focus:outline-none transition-all" required />
                          
                          <select name="tipo" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3.5 text-white focus:ring-2 focus:ring-primary focus:outline-none cursor-pointer appearance-none" required>
                             <option value="" disabled selected>Tipo de Parceiro</option>
                             <option value="escola" className="bg-slate-900">Escola / Formação</option>
                             <option value="lar" className="bg-slate-900">Lar / Residência Sénior</option>
                             <option value="clinica" className="bg-slate-900">Clínica / Saúde</option>
                             <option value="associacao" className="bg-slate-900">Associação</option>
                          </select>

                          <button type="submit" className="group w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/20 flex justify-center items-center gap-2 mt-6 active:scale-[0.98]">
                             Enviar Candidatura <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                          </button>
                       </form>
                    </div>
                 </div>
              </div>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}