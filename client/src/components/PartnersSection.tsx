import { Link } from "wouter";
import { ArrowRight, University, Cross, Brain, Award, User } from "lucide-react";

export function PartnersSection() {
  const partners = [
    { icon: University, name: "Escola Saúde" },
    { icon: Cross, name: "Cruz Vermelha" },
    { icon: Brain, name: "Alzheimer PT" },
    { icon: Award, name: "Certif. PT" },
    { icon: User, name: "Ordem Enferm." },
    // Duplicate for seamless loop
    { icon: University, name: "Escola Saúde" },
    { icon: Cross, name: "Cruz Vermelha" },
    { icon: Brain, name: "Alzheimer PT" },
    { icon: Award, name: "Certif. PT" },
    { icon: User, name: "Ordem Enferm." },
  ];

  return (
    <section className="partners-preview py-24 md:py-32 bg-slate-50 border-t border-slate-200 relative overflow-hidden transition-colors duration-300">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#0E6973 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        </div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20 gap-6">
                <div className="max-w-2xl">
                    <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">Ecossistema POPS</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
                         <span className="text-gradient-brand">Parceiros</span>  Estratégicos em Portugal
                    </h2>
                    <p className="text-lg text-slate-600 mt-6 leading-relaxed">
                        A nossa rede de apoio domiciliário é construída em colaboração com as instituições mais respeitadas. Trabalhamos em conjunto para elevar o padrão dos serviços ao domicílio, garantindo que cada cuidador possui a formação técnica e certificação necessária para prestar um cuidado de excelência em todo o território nacional.
                    </p>
                </div>
                <Link href="/parceiros" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold hover:border-primary/50 hover:text-primary hover:shadow-md transition-all group shrink-0">
                    Ver Todos os Parceiros 
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>

            <div className="relative w-full overflow-hidden mask-gradient-x">
                <div className="flex animate-marquee gap-12 items-center w-max">
                    {partners.map((partner, i) => (
                        <div key={i} className="group flex flex-col items-center gap-3 transition-all duration-300 hover:opacity-100 opacity-60 cursor-pointer min-w-[120px]">
                            <div className="w-20 h-20 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-sm group-hover:border-primary/20 group-hover:shadow-md transition-all transform group-hover:-translate-y-1">
                                <partner.icon className="w-10 h-10 text-slate-400 group-hover:text-primary transition-colors" />
                            </div>
                            <span className="text-xs font-bold text-slate-400 group-hover:text-primary uppercase tracking-wide transition-colors">{partner.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
}