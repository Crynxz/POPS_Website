import { useEffect, useState } from "react";
import { Users, Heart, Shield, TrendingUp } from "lucide-react";

export default function StatsSection() {
  const [stats, setStats] = useState([
    { value: 0, label: "Famílias Confiantes", icon: Users, suffix: "+" },
    { value: 0, label: "Horas de Cuidado", icon: Heart, suffix: "k" },
    { value: 0, label: "Cuidadores Verificados", icon: Shield, suffix: "+" },
    { value: 0, label: "Taxa de Satisfação", icon: TrendingUp, suffix: "%" }
  ]);

  useEffect(() => {
    const targets = [2847, 156, 1243, 98];
    const durations = 2000; // 2 seconds
    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / durations, 1);

      setStats(prev => prev.map((stat, i) => ({
        ...stat,
        value: Math.floor(targets[i] * progress)
      })));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const timer = setTimeout(animate, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-slate-900 to-slate-950 text-white overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight">
            Estatísticas que Falam por Si
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Milhares de famílias já confiam em nós para o cuidado dos seus entes queridos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx}
                className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary p-2.5 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-full h-full text-white" strokeWidth={2} />
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-4xl md:text-5xl font-bold font-mono">
                      {stat.value.toLocaleString('pt-PT')}<span className="text-2xl text-primary">{stat.suffix}</span>
                    </p>
                  </div>

                  <p className="text-slate-300 font-medium text-base">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust badges */}
        <div className="mt-20 pt-16 border-t border-white/10">
          <p className="text-center text-slate-400 text-sm uppercase tracking-widest font-semibold mb-8">
            Segurança e Conformidade
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium">GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium">ISO 27001</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium">Seguro Certificado</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium">Verificação Contínua</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
