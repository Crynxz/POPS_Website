import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

// Esquema de validação igual ao do backend
const contactFormSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  subject: z.string().min(5, "Assunto deve ter pelo menos 5 caracteres"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      const res = await apiRequest("POST", "/api/contact", data);
      return res.json();
    },
    onSuccess: () => {
      setIsSuccess(true);
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contacto. A equipa POPS responderá em breve.",
        className: "bg-primary text-white border-none",
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        variant: "destructive",
        title: "Erro ao enviar",
        description: error.message || "Tente novamente mais tarde.",
      });
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Helmet>
        <title>Contactos | POPS - Apoio Domiciliário</title>
        <meta
          name="description"
          content="Entre em contacto com a equipa POPS. Estamos disponíveis para esclarecer dúvidas sobre os nossos serviços de apoio domiciliário."
        />
      </Helmet>

      <Header />

      <main className="flex-1 container mx-auto px-4 py-12 md:py-20 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="grid md:grid-cols-5 h-full">
            {/* Sidebar de Informação */}
            <div className="md:col-span-2 bg-primary p-8 md:p-10 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <h1 className="text-3xl font-bold mb-4">Fale Connosco</h1>
                <p className="text-primary-100 mb-8 leading-relaxed">
                  Tem dúvidas sobre como funciona a POPS? Precisa de ajuda para encontrar o cuidador certo? Preencha o formulário e responderemos o mais breve possível.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-200 mb-1">
                      Email
                    </h3>
                    <p className="font-medium">suporte@popshomecare.pt</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-200 mb-1">
                      Telefone
                    </h3>
                    <p className="font-medium">+351 915 613 345</p>
                    <p className="text-xs text-primary-200 mt-1">(Chamada para rede móvel nacional)</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-200 mb-1">
                      Horário Comercial
                    </h3>
                    <p className="font-medium">Segunda a Sexta</p>
                    <p className="text-primary-100">09:00 - 18:00</p>
                  </div>

                  {/* Secção de Emergência */}
                  <div className="pt-6 mt-6 border-t border-white/20">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-secondary mb-2 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5" />
                      Emergências
                    </h3>
                    <p className="font-bold text-xl mb-1">Ligue 24/7</p>
                    <p className="text-primary-100 text-sm leading-relaxed">
                      Para situações urgentes de apoio técnico ou qualquer outra questão, pode e deve ligar a qualquer hora, todos os dias.
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />
            </div>

            {/* Formulário */}
            <div className="md:col-span-3 p-8 md:p-12">
              {isSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Mensagem Enviada!</h2>
                  <p className="text-slate-600 max-w-xs mx-auto mb-8">
                    A sua mensagem foi recebida pela nossa equipa de suporte. Entraremos em contacto brevemente.
                  </p>
                  <Button 
                    onClick={() => setIsSuccess(false)} 
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/5"
                  >
                    Enviar nova mensagem
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700">Nome Completo</FormLabel>
                          <FormControl>
                            <Input placeholder="O seu nome" {...field} className="bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary/20" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700">Email de Contacto</FormLabel>
                          <FormControl>
                            <Input placeholder="exemplo@email.com" {...field} className="bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary/20" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700">Assunto</FormLabel>
                          <FormControl>
                            <Input placeholder="Sobre o que nos quer falar?" {...field} className="bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary/20" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700">Mensagem</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Escreva a sua mensagem aqui..." 
                              className="min-h-[120px] bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary/20 resize-none" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-base font-semibold rounded-xl shadow-lg shadow-primary/20 transition-all hover:-translate-y-1"
                      disabled={mutation.isPending}
                    >
                      {mutation.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          A enviar...
                        </>
                      ) : (
                        <>
                          Enviar Mensagem
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
