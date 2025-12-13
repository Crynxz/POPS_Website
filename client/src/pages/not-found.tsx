import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background text-center px-4">
      <h1 className="text-9xl font-extrabold text-primary tracking-tighter">
        404
      </h1>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
        Página não encontrada
      </h2>
      <p className="mt-4 max-w-md text-lg text-muted-foreground">
        Lamentamos, mas a página que procura não existe ou foi movida.
      </p>
      <div className="mt-10">
        <Link href="/">
          <Button size="lg">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Voltar à Página Inicial
          </Button>
        </Link>
      </div>
    </div>
  );
}