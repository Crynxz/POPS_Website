import { motion } from "framer-motion";
import { Link } from "wouter";
import { BookOpen, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

export default function BlogSoonPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <SEO 
        title="Blog em Breve | POPS - Conteúdo sobre Apoio Domiciliário"
        description="O blog da POPS estará disponível em breve com dicas, guias e novidades sobre cuidados domiciliários e geriatria."
      />
      <Header />

      <main className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="max-w-2xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-8">
              <BookOpen size={40} />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              O nosso Blog está a <span className="text-gradient-brand">caminho</span>.
            </h1>
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Estamos a preparar conteúdos exclusivos sobre cuidados na terceira idade, dicas de saúde, guias para famílias e novidades do setor do apoio domiciliário.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/">
                <Button variant="outline" className="gap-2 border-slate-200 text-slate-700 h-12 px-6 rounded-xl hover:bg-slate-100 transition-all">
                  <ArrowLeft size={18} />
                  Voltar à Página Principal
                </Button>
              </Link>
            </div>

            {/* Decorative elements */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {[
                { title: "Dicas de Saúde", desc: "Artigos práticos para o bem-estar diário dos idosos." },
                { title: "Guia para Famílias", desc: "Como escolher o melhor apoio e lidar com a dependência." },
                { title: "Inovação", desc: "As novas tecnologias ao serviço do cuidado humano." }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
