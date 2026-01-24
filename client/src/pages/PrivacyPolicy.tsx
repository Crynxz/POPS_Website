import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import {
  ArrowLeft,
  Shield,
  Lock,
  Mail,
  Printer,
  FileCheck,
  Globe,
  Cookie,
  AlertCircle,
  Eye,
  Server,
  HeartPulse, // Ícone novo para dados de saúde
  ScrollText, // Ícone novo para Legado Digital
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
  const lastUpdate = "21 de Janeiro de 2026";
  const [activeSection, setActiveSection] = useState("intro");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Helmet>
        <title>Política de Privacidade e Dados | POPS HomeCare</title>
        <meta
          name="description"
          content="Política de Privacidade da POPS HomeCare. Tratamento de dados de saúde, inteligência artificial, legado digital e direitos RGPD."
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
                Política de Privacidade
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-green-600" />
                  Versão 2.4 (Health & AI Compliant)
                </span>
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  RGPD & HIPAA Standards
                </span>
                <span>Atualizado: {lastUpdate}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* SIDEBAR DE NAVEGAÇÃO (Sticky) */}
            <div className="hidden lg:block lg:col-span-3">
              <div className="sticky top-32 space-y-2">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-3">
                  Índice
                </p>
                <nav className="space-y-1">
                  {[
                    { id: "intro", label: "Introdução" },
                    { id: "responsavel", label: "1. Responsável pelo Tratamento" },
                    { id: "dados", label: "2. Dados Recolhidos (e Sinais Vitais)" },
                    { id: "ia", label: "3. Inteligência Artificial e Decisões" }, // Nova Secção
                    { id: "finalidades", label: "4. Finalidades e Licitude" },
                    { id: "partilha", label: "5. Partilha de Dados" },
                    { id: "seguranca", label: "6. Segurança e Standards" },
                    { id: "conservacao", label: "7. Conservação e Legado Digital" }, // Atualizado
                    { id: "direitos", label: "8. Os Seus Direitos" },
                    { id: "contactos", label: "9. Contactos e DPO" },
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
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full gap-2"
                    onClick={handlePrint}
                  >
                    <Printer className="w-4 h-4" />
                    Imprimir Documento
                  </Button>
                </div>
              </div>
            </div>

            {/* CONTEÚDO PRINCIPAL */}
            <div className="lg:col-span-9 max-w-4xl">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 space-y-12 text-slate-700 leading-relaxed print:shadow-none print:border-none">
                {/* Introdução */}
                <section id="intro" className="scroll-mt-32">
                  <p className="text-lg">
                    A <strong>POPS HomeCare</strong>, operada pela sociedade
                    <span className="bg-yellow-50 border border-yellow-200 px-2 py-0.5 rounded mx-1 text-slate-900 font-medium">
                      [NOME DA EMPRESA, LDA], NIF [●]
                    </span>
                    ("Responsável pelo Tratamento"), compreende que a confiança é o
                    pilar central dos cuidados domiciliários.
                  </p>
                  <p className="mt-4">
                    Esta Política de Privacidade descreve como recolhemos, utilizamos e
                    protegemos os seus dados pessoais e de saúde. O nosso tratamento rege‑se pelo Regulamento Geral sobre
                    a Proteção de Dados (RGPD – UE 2016/679) e adota voluntariamente standards internacionais de saúde digital (como HL7 FHIR e diretrizes HIPAA) para máxima segurança.
                  </p>
                </section>

                {/* 1. Responsável */}
                <section
                  id="responsavel"
                  className="scroll-mt-32 border-t border-slate-100 pt-10"
                >
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    1. Responsável pelo Tratamento
                  </h2>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start gap-4">
                    <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="mb-2">
                        A POPS atua como <strong>Responsável pelo Tratamento</strong> na gestão da plataforma, algoritmo de <em>matching</em> e <strong>POPS Insights AI</strong>.
                      </p>
                      <p className="text-sm text-slate-600">
                        Designámos um <strong>Encarregado de Proteção de Dados (DPO)</strong> dedicado, responsável pela supervisão da conformidade e ponto de contacto com a CNPD.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 2. Dados Recolhidos */}
                <section
                  id="dados"
                  className="scroll-mt-32 border-t border-slate-100 pt-10"
                >
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    2. Dados Recolhidos (Categorias Especiais)
                  </h2>
                  <p className="mb-6">
                    Recolhemos apenas os dados estritamente necessários (“Minimização de Dados”). Dada a natureza do serviço, tratamos categorias especiais de dados (Art. 9.º RGPD).
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Clientes */}
                    <div className="border border-slate-200 rounded-xl p-6 hover:border-primary/30 transition-colors">
                      <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <HeartPulse className="w-5 h-5 text-red-500" />
                        Dados de Saúde e Bem-Estar
                      </h3>
                      <ul className="space-y-3 text-sm">
                        <li className="flex gap-2 text-slate-600">
                          <CheckIcon />{" "}
                          <strong>Perfil Clínico:</strong> Grau de mobilidade, patologias (ex: demência, diabetes), alergias e necessidades alimentares.
                        </li>
                        <li className="flex gap-2 text-slate-600">
                          <CheckIcon />{" "}
                          <strong>Sinais Vitais (Diário Digital):</strong> Registos inseridos pelo cuidador (tensão arterial, glicémia, temperatura, ingestão alimentar) para monitorização.
                        </li>
                        <li className="flex gap-2 text-slate-600">
                          <CheckIcon />{" "}
                          <strong>Estado Emocional:</strong> Registos de humor e interação social para deteção precoce de isolamento (funcionalidade POPS Insights).
                        </li>
                      </ul>
                    </div>

                    {/* Profissionais */}
                    <div className="border border-slate-200 rounded-xl p-6 hover:border-primary/30 transition-colors">
                      <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-indigo-500" />
                        Cuidadores (Parceiros)
                      </h3>
                      <ul className="space-y-3 text-sm">
                        <li className="flex gap-2 text-slate-600">
                          <CheckIcon />{" "}
                          <strong>Idoneidade:</strong> Registo Criminal (validado e eliminado, mantendo-se apenas o registo de "Apto" no sistema).
                        </li>
                        <li className="flex gap-2 text-slate-600">
                          <CheckIcon />
                          <span>
                            <strong>Geolocalização Estrita:</strong> GPS recolhido <strong>apenas</strong> no ato de <em>check-in</em> e <em>check-out</em> para prova de serviço e segurança. O rastreamento é desligado fora do serviço ativo.
                          </span>
                        </li>
                        <li className="flex gap-2 text-slate-600">
                          <CheckIcon />{" "}
                          <strong>Dados Financeiros:</strong> IBAN e dados fiscais para processamento de pagamentos e autofaturação.
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* 3. IA e Decisões (NOVO) */}
                <section
                  id="ia"
                  className="scroll-mt-32 border-t border-slate-100 pt-10"
                >
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Eye className="w-6 h-6 text-primary" />
                    3. Inteligência Artificial e Decisões
                  </h2>
                  <div className="space-y-4 text-sm text-slate-700">
                    <p>
                        A POPS utiliza algoritmos de Inteligência Artificial (incluindo o <strong>POPS Insights AI</strong>) para analisar padrões de bem-estar e sugerir <em>matching</em> de cuidadores.
                    </p>
                    <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg">
                        <strong className="block text-blue-900 mb-1">Ausência de Decisões Automatizadas (Art. 22.º RGPD)</strong>
                        <p className="text-blue-800">
                            Garantimos que a IA funciona apenas como <strong>ferramenta de apoio à decisão</strong>. Nenhuma decisão com efeitos jurídicos ou impacto significativo (ex: diagnóstico médico, recusa de serviço) é tomada exclusivamente por meios automatizados. A decisão final de contratação ou aceitação cabe sempre ao Utilizador humano.
                        </p>
                    </div>
                    <p>
                        Os relatórios de saúde gerados são informativos e não constituem atos médicos.
                    </p>
                  </div>
                </section>

                {/* 4. Finalidades */}
                <section
                  id="finalidades"
                  className="scroll-mt-32 border-t border-slate-100 pt-10"
                >
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    4. Finalidades e Fundamento Jurídico
                  </h2>
                  <div className="overflow-hidden rounded-xl border border-slate-200">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-slate-50 text-slate-900 font-semibold border-b border-slate-200">
                        <tr>
                          <th className="px-6 py-4">Finalidade do Tratamento</th>
                          <th className="px-6 py-4">Fundamento (RGPD)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr>
                          <td className="px-6 py-4 font-medium text-slate-900">
                            Intermediação e Matching
                          </td>
                          <td className="px-6 py-4 text-slate-600">
                            Execução de contrato (Art. 6.º, n.º 1, al. b)
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-medium text-slate-900">
                            Monitorização de Saúde (Sinais Vitais e Relatórios)
                          </td>
                          <td className="px-6 py-4 text-slate-600">
                            Art. 9.º, n.º 2, al. h) (prestação de cuidados de saúde/social) e Consentimento Explícito.
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-medium text-slate-900">
                            Mandato de Faturação (Self-Billing)
                          </td>
                          <td className="px-6 py-4 text-slate-600">
                            Obrigação legal (fiscal) e Execução de Contrato.
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-medium text-slate-900">
                            Gestão de Formação e Financiamento (ISA)
                          </td>
                          <td className="px-6 py-4 text-slate-600">
                            Execução de contrato (Acordo de Mútuo) e Interesse Legítimo (recuperação de crédito).
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* 5. Partilha */}
                <section
                  id="partilha"
                  className="scroll-mt-32 border-t border-slate-100 pt-10"
                >
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    5. Partilha de Dados
                  </h2>
                  <p className="mb-4">
                    A POPS opera sob estrito sigilo. Os dados são partilhados apenas nas
                    seguintes circunstâncias:
                  </p>

                  <ul className="space-y-4 mb-6">
                    <li className="flex gap-3">
                      <div className="mt-1">
                        <Globe className="w-5 h-5 text-slate-400" />
                      </div>
                      <div>
                        <strong className="text-slate-900">
                          Entre Utilizadores (Necessidade do Serviço):
                        </strong>
                        <p className="text-sm mt-1">
                          O Cuidador apenas recebe dados de saúde e morada após confirmação do serviço (princípio da minimização).
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1">
                        <Lock className="w-5 h-5 text-slate-400" />
                      </div>
                      <div>
                        <strong className="text-slate-900">
                          Parceiros de Pagamento e Recuperação:
                        </strong>
                        <p className="text-sm mt-1">
                          Utilizamos entidades certificadas (ex: Stripe) para pagamentos. Em caso de incumprimento contratual (ex: dívida de formação), dados estritamente necessários podem ser partilhados com entidades legais de recuperação de crédito.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1">
                        <Eye className="w-5 h-5 text-slate-400" />
                      </div>
                      <div>
                        <strong className="text-slate-900">
                          Parceiros de Formação (Opcional):
                        </strong>
                        <p className="text-sm mt-1">
                          Mediante inscrição do cuidador, partilhamos dados de identificação com escolas parceiras para emissão de certificados.
                        </p>
                      </div>
                    </li>
                  </ul>
                </section>

                {/* 6. Segurança */}
                <section
                  id="seguranca"
                  className="scroll-mt-32 border-t border-slate-100 pt-10"
                >
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    6. Segurança e Standards
                  </h2>
                  <p className="mb-4">
                    Adotamos uma arquitetura de "Security by Design", alinhada com standards hospitalares:
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {[
                      "Encriptação AES-256 (Repouso e Trânsito)",
                      "Row Level Security (Segregação de dados na base)",
                      "Conformidade com standard HL7 FHIR (Interoperabilidade)",
                      "Infraestrutura SOC2 Compliant",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm bg-slate-50 px-3 py-2 rounded-lg border border-slate-100"
                      >
                        <Shield className="w-4 h-4 text-green-600" /> {item}
                      </li>
                    ))}
                  </ul>
                </section>

                {/* 7. Conservação e Legado (ATUALIZADO) */}
                <section
                  id="conservacao"
                  className="scroll-mt-32 border-t border-slate-100 pt-10"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <h2 className="text-2xl font-bold text-slate-900">
                        7. Prazos e Legado Digital
                    </h2>
                  </div>
                  
                  <div className="bg-white border border-slate-200 rounded-xl divide-y divide-slate-100 mb-6">
                    <div className="p-4 flex justify-between items-center">
                      <span className="font-medium text-slate-900">
                        Dados Fiscais
                      </span>
                      <span className="text-sm bg-slate-100 px-2 py-1 rounded text-slate-600">
                        10 anos (Lei Fiscal)
                      </span>
                    </div>
                    <div className="p-4 flex justify-between items-center">
                      <span className="font-medium text-slate-900">
                        Registo Criminal
                      </span>
                      <span className="text-sm bg-red-50 text-red-700 px-2 py-1 rounded font-medium">
                        Eliminação imediata após validação
                      </span>
                    </div>
                  </div>

                  {/* NOVO: Protocolo de Encerramento Humanizado */}
                  <div className="bg-amber-50 border border-amber-100 p-6 rounded-2xl">
                    <h3 className="text-lg font-bold text-amber-900 mb-2 flex items-center gap-2">
                        <ScrollText className="w-5 h-5" />
                        Protocolo de Encerramento Humanizado
                    </h3>
                    <p className="text-sm text-amber-800 mb-3">
                        Reconhecendo a sensibilidade do fim de vida, a POPS implementa um protocolo específico em caso de falecimento do utente.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-amber-800">
                        <li>Cancelamento imediato de subscrições sem penalização.</li>
                        <li>Disponibilização de um <strong>"Ficheiro de Memória"</strong> à família (download de fotos e relatórios positivos) durante 30 dias.</li>
                        <li>Após este período, os dados clínicos são irreversivelmente anonimizados ou eliminados ("Direito ao Esquecimento").</li>
                    </ul>
                  </div>
                </section>

                {/* 8. Direitos */}
                <section
                  id="direitos"
                  className="scroll-mt-32 border-t border-slate-100 pt-10"
                >
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    8. Os Seus Direitos
                  </h2>
                  <p className="mb-6">
                    Pode exercer os seus direitos de Acesso, Retificação, Apagamento, Limitação, Oposição e Portabilidade contactando o DPO.
                  </p>

                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
                    <div>
                      <h4 className="font-bold text-blue-900 mb-1">
                        Contacto do Encarregado de Proteção de Dados (DPO)
                      </h4>
                      <p className="text-sm text-blue-700">
                        Para questões sobre privacidade ou exercício dos seus direitos.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Button
                        className="bg-blue-600 hover:bg-blue-700 text-white shadow-none"
                        asChild
                      >
                        <a href="mailto:privacidade@popshomecare.pt">
                          privacidade@popshomecare.pt
                        </a>
                      </Button>
                    </div>
                  </div>
                </section>

                {/* 9. Contactos */}
                <section
                  id="contactos"
                  className="scroll-mt-32 border-t border-slate-100 pt-10"
                >
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    9. Contactos Oficiais
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <h3 className="font-bold text-slate-900 mb-2">
                        Responsável pelo Tratamento
                      </h3>
                      <p className="text-sm text-slate-600 mb-1">
                        [NOME DA EMPRESA, LDA]
                      </p>
                      <p className="text-sm text-slate-600 mb-1">
                        [MORADA COMPLETA]
                      </p>
                      <p className="text-sm text-slate-600">Porto, Portugal</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <h3 className="font-bold text-slate-900 mb-2">
                        Contacto Geral
                      </h3>
                      <p className="text-sm text-slate-600 flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <a
                          href="mailto:geral@popshomecare.pt"
                          className="hover:text-primary transition-colors"
                        >
                          geral@popshomecare.pt
                        </a>
                      </p>
                    </div>
                  </div>
                  <p className="mt-6 text-xs text-slate-400 text-center border-t border-slate-100 pt-4">
                    A POPS reserva-se o direito de atualizar esta Política de
                    Privacidade sempre que necessário. A versão em vigor é a publicada
                    neste endereço.
                  </p>
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

function CheckIcon() {
  return (
    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
  );
}