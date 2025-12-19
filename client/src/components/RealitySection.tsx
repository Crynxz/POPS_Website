import { HandHeart, Accessibility, Stethoscope, Home, X, Check } from "lucide-react";

export default function RealitySection() {
  const situations = [
    {
      icon: HandHeart,
      color: "text-primary",
      bg: "bg-primary/10",
      title: "Séniores e Longevidade",
      desc: "Apoio para manter a independência em casa, desde a companhia até cuidados de higiene e medicação."
    },
    {
      icon: Accessibility,
      color: "text-orange-500",
      bg: "bg-orange-500/10",
      title: "Deficiência e Inclusão",
      desc: "Suporte especializado para quaisquer tipos de deficiências físicas ou intelectuais, qualquer idade."
    },
    {
      icon: Stethoscope,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      title: "Saúde e Pós-Operatório",
      desc: "Recuperação de cirurgias, acidentes ou gestão de doenças crónicas em qualquer idade ativa."
    },
    {
      icon: Home,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      title: "Apoio Doméstico",
      desc: "Ajuda nas tarefas domésticas, refeições e organização para famílias que precisam de focar no que importa."
    }
  ];

  return (
    <section className="py-24 bg-white" id="mercado">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">Uma Realidade Transversal</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            O cuidado ao domicílio não é apenas sobre envelhecer.<br />É sobre viver com qualidade.
          </h2>
          <p className="text-lg text-slate-600">
            Em Portugal, milhões de pessoas enfrentam desafios diários que exigem apoio especializado. A POPS existe para todas elas, em qualquer fase da vida.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {situations.map((item, idx) => (
            <div key={idx} className="group p-6 rounded-2xl border border-slate-100 bg-white hover:border-slate-200 hover:shadow-lg transition-all duration-300">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${item.bg} ${item.color}`}>
                <item.icon size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-slate-900">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats Strip */}
        <div className="mt-20 bg-slate-50 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div>
              <div className="text-4xl font-extrabold text-primary mb-2">+300.000</div>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">pessoas em idade ativa com doenças crónicas</p>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-primary mb-2">+700.000</div>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">cuidadores informais a precisar de descanso</p>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-primary mb-2">+150.000</div>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">recuperações pós-operatórias anuais</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
             <p className="mb-4 text-lg text-slate-600">A sua situação enquadra-se nestas categorias?</p>
             <a href="#waitlist" className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg hover:-translate-y-1">
                Encontrar o Apoio Certo
             </a>
        </div>

      </div>
    </section>
  );
}