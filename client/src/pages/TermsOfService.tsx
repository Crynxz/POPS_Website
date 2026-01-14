import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { 
  ArrowLeft, Scale, FileText, CreditCard, AlertTriangle, 
  Printer, Ban, CheckCircle2, Building 
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function TermsOfService() {
  const lastUpdate = "14 de Janeiro de 2026"; 
  const [activeSection, setActiveSection] = useState("intro");

  // Função para scroll suave
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Helmet>
        <title>Termos e Condições de Uso | POPS HomeCare</title>
        <meta 
          name="description" 
          content="Termos e Condições que regem a utilização da plataforma POPS HomeCare. Regras de cancelamento, pagamentos e responsabilidade." 
        />
      </Helmet>

      <Header />

      <main className="pt-24 min-h-screen bg-slate-50 pb-20">
        
        {/* Header da Página */}
        <div className="bg-white border-b border-slate-200">
          <div className="container mx-auto px-4 sm:px-6 py-12">
            <div className="max-w-4xl">
              <Link href="/">
                <a className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-primary transition-colors mb-6">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar
                </a>
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                Termos e Condições
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-primary" />
                  Acordo Legal
                </span>
                <span>Atualizado: {lastUpdate}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* SIDEBAR (Sticky) */}
            <div className="hidden lg:block lg:col-span-3">
              <div className="sticky top-32 space-y-2">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-3">Navegação</p>
                <nav className="space-y-1">
                  {[
                    { id: "intro", label: "1. Introdução e Objeto" },
                    { id: "servicos", label: "2. Descrição dos Serviços" },
                    { id: "registo", label: "3. Registo e Contas" },
                    { id: "pagamentos", label: "4. Preços e Pagamentos" },
                    { id: "cancelamento", label: "5. Cancelamentos" },
                    { id: "responsabilidade", label: "6. Responsabilidade" },
                    { id: "obrigacoes", label: "7. Deveres do Utilizador" },
                    { id: "nao-elisao", label: "8. Não-Elisão (Non-Circumvention)" },
                    { id: "propriedade", label: "9. Propriedade Intelectual" },
                    { id: "lei", label: "10. Lei Aplicável" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                        activeSection === item.id 
                          ? "bg-blue-50 text-primary font-semibold" 
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
                
                <div className="pt-6 mt-6 border-t border-slate-200 px-3">
                  <Button variant="outline" size="sm" className="w-full gap-2" onClick={handlePrint}>
                    <Printer className="w-4 h-4" />
                    Imprimir Termos
                  </Button>
                </div>
              </div>
            </div>

            {/* CONTEÚDO PRINCIPAL */}
            <div className="lg:col-span-9 max-w-4xl">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 space-y-12 text-slate-700 leading-relaxed print:shadow-none print:border-none">
                
                {/* 1. Introdução */}
                <section id="intro" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">1. Introdução e Objeto</h2>
                  <p className="mb-4">
                    Bem-vindo à <strong>POPS HomeCare</strong>. Estes Termos e Condições ("Termos") regulam o acesso e utilização da plataforma digital POPS (Website e Aplicação), propriedade da sociedade 
                    <span className="bg-yellow-50 border border-yellow-200 px-2 py-0.5 rounded mx-1 text-slate-900 font-medium">[NOME DA EMPRESA, LDA]</span>, 
                    com sede em <span className="text-slate-900 font-medium">[SUA MORADA NO PORTO]</span>.
                  </p>
                  <p>
                    Ao criar uma conta ou contratar um serviço através da POPS, o Utilizador declara ter lido, compreendido e aceite integralmente estes Termos. Se não concordar, não deverá utilizar os nossos serviços.
                  </p>
                </section>

                {/* 2. Serviços */}
                <section id="servicos" className="scroll-mt-32 border-t border-slate-100 pt-10">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">2. Descrição dos Serviços</h2>
                  <p className="mb-4">
                    A POPS é uma plataforma tecnológica que facilita a intermediação e gestão de serviços de apoio domiciliário, conectando famílias ("Clientes") a profissionais independentes verificados ("Cuidadores").
                  </p>
                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                    <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-blue-600" />
                      Aviso Importante (Natureza Não-Médica)
                    </h4>
                    <p className="text-sm text-blue-800">
                      A POPS <strong>não é uma clínica, hospital ou prestador de cuidados médicos</strong>. Os nossos serviços (Básico, Completo e Especializado) são de natureza social e de conforto (higiene, companhia, apoio doméstico). Em caso de emergência médica, o Utilizador deve contactar imediatamente o 112. A POPS não substitui o aconselhamento ou tratamento médico profissional.
                    </p>
                  </div>
                </section>

                {/* 3. Registo */}
                <section id="registo" className="scroll-mt-32 border-t border-slate-100 pt-10">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">3. Registo e Contas</h2>
                  <ul className="list-disc pl-5 space-y-3 marker:text-primary">
                    <li><strong>Veracidade:</strong> O Utilizador garante que os dados fornecidos (pessoais e do utente) são verdadeiros e atuais.</li>
                    <li><strong>Segurança:</strong> A password e acesso à App (incluindo o Dashboard Família) são pessoais e intransmissíveis. O Utilizador é responsável por qualquer atividade na sua conta.</li>
                    <li><strong>Elegibilidade:</strong> O Utilizador deve ter pelo menos 18 anos de idade.</li>
                  </ul>
                </section>

                {/* 4. Pagamentos */}
                <section id="pagamentos" className="scroll-mt-32 border-t border-slate-100 pt-10">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">4. Preços e Pagamentos</h2>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="border border-slate-200 p-5 rounded-xl">
                      <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-primary" /> Modelo de Preços
                      </h4>
                      <p className="text-sm">
                        Os preços são fixos por hora conforme o plano (10€, 15€, 20€+). Não existem taxas de inscrição ou subscrição oculta. O valor final inclui o serviço do cuidador, seguro, gestão da plataforma e IVA à taxa legal.
                      </p>
                    </div>
                    <div className="border border-slate-200 p-5 rounded-xl">
                      <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-primary" /> Faturação
                      </h4>
                      <p className="text-sm">
                        A faturação é processada semanalmente (segunda-feira) referente aos serviços prestados na semana anterior. Aceitamos Cartão de Crédito/Débito e Referência Multibanco.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 5. Cancelamento */}
                <section id="cancelamento" className="scroll-mt-32 border-t border-slate-100 pt-10">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">5. Política de Cancelamento</h2>
                  <p className="mb-4">
                    Para garantir a estabilidade financeira dos Cuidadores, aplicamos a seguinte política de cancelamento:
                  </p>
                  <div className="overflow-hidden rounded-xl border border-slate-200">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-slate-50 text-slate-900 font-semibold border-b border-slate-200">
                        <tr>
                          <th className="px-6 py-4">Aviso Prévio</th>
                          <th className="px-6 py-4">Custo para o Cliente</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr>
                          <td className="px-6 py-4 font-medium text-green-700">Mais de 48 horas</td>
                          <td className="px-6 py-4">Gratuito (Sem custo)</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-medium text-orange-600">Entre 2 e 48 horas</td>
                          <td className="px-6 py-4">Taxa Administrativa (5€)</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-medium text-red-600">Menos de 2 horas</td>
                          <td className="px-6 py-4">Valor total da visita (para compensar o cuidador)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* 6. Responsabilidade */}
                <section id="responsabilidade" className="scroll-mt-32 border-t border-slate-100 pt-10">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">6. Limitação de Responsabilidade</h2>
                  <p className="mb-4">
                    A POPS realiza uma verificação rigorosa de antecedentes (Registo Criminal) e qualificações de todos os Cuidadores. No entanto:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>A POPS atua como intermediária e garante a qualidade do <em>matching</em> e gestão.</li>
                    <li>Não nos responsabilizamos por atos ilícitos ou negligentes cometidos pelos Cuidadores fora do âmbito estrito das suas funções contratadas, embora acionemos os seguros aplicáveis (Responsabilidade Civil) quando justificado.</li>
                    <li>Não garantimos a disponibilidade ininterrupta da App (software) em caso de falhas técnicas alheias à nossa vontade.</li>
                  </ul>
                </section>

                {/* 7. Deveres */}
                <section id="obrigacoes" className="scroll-mt-32 border-t border-slate-100 pt-10">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">7. Deveres do Utilizador</h2>
                  <p className="mb-4">O Cliente compromete-se a:</p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                        Tratar o Cuidador com respeito e dignidade, garantindo um ambiente seguro e livre de assédio ou discriminação.
                    </li>
                    <li className="flex gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                        Fornecer os materiais necessários para a higiene/limpeza no domicílio.
                    </li>
                    <li className="flex gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                        Não solicitar a execução de tarefas médicas invasivas proibidas a cuidadores (ex: injeções intravenosas).
                    </li>
                  </ul>
                </section>

                {/* 8. Não Elisão */}
                <section id="nao-elisao" className="scroll-mt-32 border-t border-slate-100 pt-10">
                  <div className="bg-red-50 border border-red-100 p-6 rounded-2xl">
                    <h2 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
                      <Ban className="w-5 h-5" /> 8. Proibição de Contratação Direta (Não-Elisão)
                    </h2>
                    <p className="text-sm text-red-800 mb-3">
                      Durante a vigência do contrato e por um período de <strong>12 meses</strong> após o seu término, o Cliente está proibido de contratar diretamente (ou "por fora") qualquer Cuidador que tenha conhecido através da plataforma POPS, com o intuito de evitar o pagamento das taxas de serviço da plataforma.
                    </p>
                    <p className="text-sm text-red-800 font-semibold">
                      A violação desta cláusula implica o pagamento de uma indemnização compensatória no valor de 2.000€ e o bloqueio imediato da conta.
                    </p>
                  </div>
                </section>

                {/* 9 & 10. Propriedade e Lei */}
                <section className="scroll-mt-32 border-t border-slate-100 pt-10 grid md:grid-cols-2 gap-8">
                  <div id="propriedade">
                    <h2 className="text-xl font-bold text-slate-900 mb-4">9. Propriedade Intelectual</h2>
                    <p className="text-sm">
                      Todos os direitos sobre a marca POPS, software, logótipos e conteúdos do website são propriedade exclusiva da empresa. É proibida a cópia ou reprodução sem autorização.
                    </p>
                  </div>
                  <div id="lei">
                    <h2 className="text-xl font-bold text-slate-900 mb-4">10. Lei e Foro</h2>
                    <p className="text-sm">
                      Estes Termos regem-se pela lei portuguesa. Para a resolução de qualquer litígio, as partes designam como competente o <strong>Tribunal da Comarca do Porto</strong>, com renúncia expressa a qualquer outro.
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                        <Building className="w-4 h-4" /> Centro de Arbitragem de Consumo do Porto disponível.
                    </div>
                  </div>
                </section>

              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}