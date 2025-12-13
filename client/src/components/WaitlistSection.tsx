import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CheckCircle, Shield, Clock, Users } from "lucide-react";

interface WaitlistSectionProps {
  selectedProfile?: "familia" | "cuidador";
}

export default function WaitlistSection({ selectedProfile }: WaitlistSectionProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    profile: selectedProfile || "",
    location: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.profile) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // todo: remove mock functionality - simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Inscrição confirmada!",
      description: "Entraremos em contacto em breve com descontos exclusivos.",
    });
  };

  const trustBadges = [
    { icon: Shield, label: "Dados Protegidos" },
    { icon: Clock, label: "Resposta em 24h" },
    { icon: Users, label: "+500 inscritos" },
  ];

  if (isSubmitted) {
    return (
      <section id="waitlist" className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary/10 to-background">
        <div className="max-w-xl mx-auto px-6 md:px-8">
          <Card className="relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary to-chart-2" />
            <CardContent className="p-8 md:p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-status-online/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-status-online" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Está na Lista de Espera!
              </h2>
              <p className="text-muted-foreground mb-6">
                Obrigado por se inscrever. Entraremos em contacto em breve com descontos exclusivos de lançamento.
              </p>
              <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                Fazer nova inscrição
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary/10 to-background">
      <div className="max-w-xl mx-auto px-6 md:px-8">
        <Card className="relative overflow-hidden shadow-xl">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary to-chart-2" />
          <CardContent className="p-8 md:p-10">
            <div className="text-center mb-8">
              <span className="inline-block bg-chart-2 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
                Oferta de Lançamento
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Junte-se à Lista de Espera
              </h2>
              <p className="text-muted-foreground">
                Garanta acesso prioritário e descontos exclusivos de até 30%.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo *</Label>
                  <Input
                    id="name"
                    placeholder="O seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    data-testid="input-name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@exemplo.pt"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    data-testid="input-email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    placeholder="+351 912 345 678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    data-testid="input-phone"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Localização</Label>
                  <Input
                    id="location"
                    placeholder="Lisboa, Porto, etc."
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    data-testid="input-location"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="profile">Sou *</Label>
                <Select
                  value={formData.profile}
                  onValueChange={(value) => setFormData({ ...formData, profile: value })}
                >
                  <SelectTrigger data-testid="select-profile">
                    <SelectValue placeholder="Selecione o seu perfil" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="familia">Família - Procuro Cuidador</SelectItem>
                    <SelectItem value="cuidador">Cuidador - Quero Trabalhar</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting} data-testid="button-submit-waitlist">
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    A processar...
                  </>
                ) : (
                  "Garantir o Meu Lugar"
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Ao submeter, aceita receber comunicações da POPS. Pode cancelar a qualquer momento.
              </p>
            </form>

            <div className="flex flex-wrap justify-center gap-6 mt-8 pt-6 border-t border-border">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <badge.icon className="w-4 h-4 text-primary" />
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
