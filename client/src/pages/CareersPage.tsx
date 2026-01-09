import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FadeIn from "@/components/FadeIn";
import { Briefcase, Heart, Smile, Zap, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

export default function CareersPage() {
  const benefits = [
    {
      icon: Heart,
      title: "Trabalho com Propósito",
      desc: "O seu código e design impactam diretamente a qualidade de vida de milhares de famílias."
    },
    {
      icon: Smile,
      title: "Cultura de Autonomia",
      desc: "Acreditamos na responsabilidade individual. Horários flexíveis e foco em resultados."
    },
    {
      icon: Zap,
      title: "Crescimento Acelerado",
      desc: "Somos uma startup em expansão. As oportunidades de liderança surgem naturalmente."
    },
    {
      icon: Briefcase,
      title: "Remuneração Competitiva",
      desc: "Salário acima da média, seguro de saúde premium e equity na empresa."
    }
  ];

  const positions = [
    {
      id: 1,
      title: "Senior Full-Stack Developer",
      type: "Full-time",
      location: "Remoto / Lisboa",
      department: "Engenharia",
      tags: ["React", "Node.js", "TypeScript"]
    },
    {
      id: 2,
      title: "Product Designer (UX/UI)",
      type: "Full-time",
      location: "Lisboa",
      department: "Produto",
      tags: ["Figma", "Design Systems"]
    },
    {
      id: 3,
      title: "Customer Success Manager",
      type: "Full-time",
      location: "Remoto",
      department: "Operações",
      tags: ["Suporte", "CRM"]
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-slate-900">
      <SEO 
        title="Carreiras na POPS - Junte-se à Nossa Missão" 
        description="Estamos à procura de talento para revolucionar o setor dos cuidados domiciliários. Veja as vagas disponíveis."
      />
      
      <Header />

      <main className="flex-1">
        
        {/* HERO */}
        <section className="relative pt-32 pb-24 overflow-hidden bg-slate-50">
           {/* Background Decor */}
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none hidden md:block"></div>
           <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none hidden md:block"></div>

           <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
              <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Junte-se à Equipa</span>
              <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-slate-900 leading-[1.1]">
                Construa o futuro do <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">cuidado humano.</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto">
                Estamos a recrutar pessoas apaixonadas que queiram usar o seu talento para resolver um dos maiores desafios sociais da nossa geração.
              </p>
              <a href="#vagas" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg hover:-translate-y-1">
                 Ver Vagas Abertas <ArrowRight size={18} />
              </a>
           </div>
        </section>

        {/* CULTURE / BENEFITS */}
        <section className="py-24 bg-white">
           <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                 <h2 className="text-3xl font-bold mb-4 text-slate-900">Porquê a POPS?</h2>
                 <p className="text-slate-600 max-w-2xl mx-auto">
                    Não oferecemos apenas um emprego. Oferecemos a oportunidade de fazer o melhor trabalho da sua carreira.
                 </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {benefits.map((benefit, i) => (
                    <FadeIn key={i} delay={i * 100}>
                       <div className="bg-slate-50 p-8 rounded-3xl shadow-sm border border-slate-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full group">
                          <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                             <benefit.icon size={28} />
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                          <p className="text-sm text-slate-500 leading-relaxed">
                             {benefit.desc}
                          </p>
                       </div>
                    </FadeIn>
                 ))}
              </div>
           </div>
        </section>

        {/* OPEN POSITIONS */}
        <section id="vagas" className="py-24 bg-slate-50 relative overflow-hidden">
           <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                style={{ backgroundImage: 'radial-gradient(#0E6973 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
           </div>
           
           <div className="container mx-auto px-6 relative z-10 max-w-5xl">
              <div className="text-center mb-16">
                 <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">Estamos a contratar</span>
                 <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Vagas Disponíveis</h2>
              </div>

              <div className="space-y-4">
                 {positions.map((job) => (
                    <FadeIn key={job.id} delay={job.id * 100}>
                       <div className="bg-white border border-slate-200 hover:border-primary/50 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:shadow-xl transition-all group cursor-pointer">
                          <div>
                             <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">{job.title}</h3>
                                <span className="px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-600 border border-slate-200">{job.department}</span>
                             </div>
                             <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                                <div className="flex items-center gap-1.5"><Briefcase size={16} className="text-primary" /> {job.type}</div>
                                <div className="flex items-center gap-1.5"><MapPin size={16} className="text-primary" /> {job.location}</div>
                                <div className="flex items-center gap-1.5"><Clock size={16} className="text-primary" /> Publicado há 2 dias</div>
                             </div>
                          </div>
                          
                          <div className="flex items-center gap-4 w-full md:w-auto">
                             <div className="hidden md:flex gap-2">
                                {job.tags.map(tag => (
                                   <span key={tag} className="px-3 py-1 rounded-lg bg-slate-50 text-xs text-slate-500 border border-slate-100">{tag}</span>
                                ))}
                             </div>
                             <button className="ml-auto md:ml-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 text-white group-hover:bg-primary transition-colors shadow-lg">
                                <ArrowRight size={20} />
                             </button>
                          </div>
                       </div>
                    </FadeIn>
                 ))}
              </div>

              <div className="mt-12 text-center bg-white rounded-2xl p-8 border border-slate-200 border-dashed">
                 <h4 className="text-xl font-bold mb-2 text-slate-900">Não encontrou a sua vaga?</h4>
                 <p className="text-slate-600 mb-6">Estamos sempre à procura de talento. Envie-nos uma candidatura espontânea.</p>
                 <a href="mailto:talento@popspt.com" className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors">
                    Enviar Email <ArrowRight size={16} />
                 </a>
              </div>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}