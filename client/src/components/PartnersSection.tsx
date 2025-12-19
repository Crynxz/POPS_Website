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
    <section className="partners-preview py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 relative overflow-hidden transition-colors duration-300">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#0E6973 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        </div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div className="max-w-2xl">
                    <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">Ecossistema POPS</span>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                        Apoiados por quem sabe.
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
                        A nossa rede não é construída sozinha. Trabalhamos com as melhores instituições para garantir que os nossos cuidadores têm a melhor formação e certificação do mercado.
                    </p>
                </div>
                <Link href="/parceiros">
                    <a className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-xl font-semibold hover:border-primary/50 hover:text-primary dark:hover:text-primary hover:shadow-md transition-all group">
                        Ver Todos os Parceiros 
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </Link>
            </div>

            <div className="relative w-full overflow-hidden mask-gradient-x">
                <div className="flex animate-marquee gap-12 items-center w-max">
                    {partners.map((partner, i) => (
                        <div key={i} className="group flex flex-col items-center gap-3 transition-all duration-300 hover:opacity-100 opacity-60 cursor-pointer min-w-[120px]">
                            <div className="w-20 h-20 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center shadow-sm group-hover:border-primary/20 group-hover:shadow-md transition-all transform group-hover:-translate-y-1">
                                <partner.icon className="w-10 h-10 text-slate-400 dark:text-slate-500 group-hover:text-primary transition-colors" />
                            </div>
                            <span className="text-xs font-bold text-slate-400 dark:text-slate-500 group-hover:text-primary uppercase tracking-wide transition-colors">{partner.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
}