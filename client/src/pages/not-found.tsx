import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Home, HelpCircle, Heart, Users } from "lucide-react";
import { Link } from "wouter";
import SEO from "@/components/SEO";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-slate-50 px-4 py-16">
      <SEO 
        title="404 - Página Não Encontrada | POPS Apoio Domiciliário"
        description="Lamentamos, mas a página que procura não existe ou foi movida. Volte para a página inicial da POPS para encontrar serviços de Apoio Domiciliário."
      />
      
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-8xl font-extrabold text-primary/20 tracking-tighter select-none">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 -mt-8 mb-4 relative z-10">
          Ops! Página não encontrada.
        </h2>
        <p className="text-lg text-slate-600 mb-8">
          A página que procura pode ter sido removida, ter o nome alterado ou estar temporariamente indisponível.
        </p>
        
        <Link href="/">
          <Button size="lg" className="rounded-full px-8 font-bold shadow-lg shadow-primary/20">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Voltar à Página Inicial
          </Button>
        </Link>
      </div>

      <div className="max-w-4xl mx-auto w-full">
        <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider text-center mb-6">
          Pode estar à procura de:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/">
            <Card className="hover:shadow-md transition-all cursor-pointer hover:border-primary/50 group bg-white border-slate-200">
              <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Home size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors">Início</h3>
                  <p className="text-xs text-slate-500 mt-1">Página principal</p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/#servicos">
            <Card className="hover:shadow-md transition-all cursor-pointer hover:border-primary/50 group bg-white border-slate-200">
              <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Heart size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors">Serviços</h3>
                  <p className="text-xs text-slate-500 mt-1">Nossos cuidados</p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/sobre">
            <Card className="hover:shadow-md transition-all cursor-pointer hover:border-primary/50 group bg-white border-slate-200">
              <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors">Sobre Nós</h3>
                  <p className="text-xs text-slate-500 mt-1">Nossa missão</p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/#faq">
            <Card className="hover:shadow-md transition-all cursor-pointer hover:border-primary/50 group bg-white border-slate-200">
              <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <HelpCircle size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors">Ajuda</h3>
                  <p className="text-xs text-slate-500 mt-1">Perguntas frequentes</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}