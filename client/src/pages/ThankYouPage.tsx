
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FadeIn from "@/components/FadeIn";
import { CheckCircle2, ArrowRight, Home, Mail, Share2, Instagram, Facebook } from "lucide-react";
import { Link } from "wouter";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <SEO 
        title="Obrigado - POPS" 
        description="Obrigado por se juntar à lista de espera da POPS. Em breve entraremos em contacto."
      />
      
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center py-20 px-6">
        <FadeIn>
          <div className="max-w-2xl mx-auto bg-white rounded-[2rem] shadow-xl p-8 md:p-12 text-center border border-slate-100 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="relative z-10">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 animate-in zoom-in duration-500 delay-100 ring-8 ring-green-50/50">
                    <CheckCircle2 size={40} className="text-green-500" />
                </div>

                <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                  Obrigado!
                </h1>
                
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  O seu registo foi recebido com sucesso. <br className="hidden md:block"/>
                  Estamos a trabalhar arduamente para lançar a plataforma e será dos primeiros a saber.
                </p>

                <div className="bg-slate-50 rounded-2xl p-6 mb-10 text-left border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <Mail size={20} className="text-primary" />
                        Próximos Passos:
                    </h3>
                    <ul className="space-y-3 text-slate-600 text-sm md:text-base">
                        <li className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-700 mt-0.5">1</span>
                            Verifique o seu email (incluindo a pasta de spam) para confirmar a subscrição.
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-700 mt-0.5">2</span>
                            Iremos enviar atualizações sobre o desenvolvimento e data de lançamento.
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-700 mt-0.5">3</span>
                            Prepare-se para transformar a forma como cuida da sua família.
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/">
                        <a className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg hover:-translate-y-1 active:scale-95">
                            <Home size={18} /> Voltar à Homepage
                        </a>
                    </Link>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-100">
                    <p className="text-sm text-slate-500 mb-4 font-medium">Siga-nos nas redes sociais</p>
                    <div className="flex justify-center gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                            <Facebook size={20} />
                        </a>
                        <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-white transition-all" aria-label="Partilhar">
                            <Share2 size={20} />
                        </button>
                    </div>
                </div>
            </div>
          </div>
        </FadeIn>
      </main>

      <Footer />
    </div>
  );
}
