import { Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">O que dizem as Famílias</h2>
          <p className="text-lg text-slate-600">A confiança constrói-se com transparência. Veja o feedback real de quem já transformou o cuidado dos seus familiares.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Ana Martins",
              role: "Filha de Utente",
              text: "Finalmente uma plataforma que me dá segurança. Saber que a cuidadora tem o registo criminal verificado e formação validada tirou-me um peso de cima.",
              stars: 5,
              avatar: "AM"
            },
            {
              name: "Carlos Sousa",
              role: "Cuidador Profissional",
              text: "Como profissional, sinto-me valorizado. A app é fácil de usar, os pagamentos são garantidos e sinto-me protegido com o seguro incluído.",
              stars: 5,
              avatar: "CS"
            },
            {
              name: "Beatriz Lima",
              role: "Neta e Cuidadora",
              text: "O GPS em tempo real é incrível. Consigo saber exatamente quando a minha avó está acompanhada, mesmo estando a trabalhar no escritório.",
              stars: 5,
              avatar: "BL"
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
              <div className="flex gap-1 mb-6 text-amber-400">
                {[...Array(item.stars)].map((_, j) => <Star key={j} size={18} fill="currentColor" />)}
              </div>
              
              <div className="mb-6 flex-grow">
                <Quote className="w-8 h-8 text-primary/20 mb-3" />
                <p className="text-slate-600 italic leading-relaxed">"{item.text}"</p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-lg border-2 border-white shadow-sm">
                  {item.avatar}
                </div>
                <div>
                  <strong className="block text-slate-900 font-bold">{item.name}</strong>
                  <span className="text-xs font-medium text-primary uppercase tracking-wide">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}