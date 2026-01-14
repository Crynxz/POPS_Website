import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { 
  ArrowLeft, Shield, Lock, Mail, Printer, 
  FileCheck, Globe, Cookie, AlertCircle, ChevronRight 
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
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

  // Função para imprimir
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Helmet>
        <title>Política de Privacidade e Dados | POPS HomeCare</title>
        <meta 
          name="description" 
          content="Política de Privacidade da POPS HomeCare. Tratamento de dados, RGPD, direitos dos utilizadores e segurança da informação." 
        />
      </Helmet>

      <Header />

      <main className="pt-24 min-h-screen bg-slate-50 pb-20">
        
        {/* Header da Página */}
        <div className="bg-white border-b border-slate-200">
          <div className="container mx-auto px-4 sm:px-6 py-12">
            <div className="max-w-4xl">
              <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-primary transition-colors mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                Política de Privacidade
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-green-600" />
                  Versão 2.1 (Em vigor)
                </span>
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  Conformidade RGPD
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
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-3">Índice</p>
                <nav className="space-y-1">
                  {[
                    { id: "intro", label: "Introdução" },
                    { id: "responsavel", label: "1. Responsável pelo Tratamento" },
                    { id: "dados", label: "2. Dados Recolhidos" },
                    { id: "finalidades", label: "3. Finalidades" },
                    { id: "partilha", label: "4. Partilha de Dados" },
                    { id: "seguranca", label: "5. Segurança" },
                    { id: "conservacao", label: "6. Prazos de Conservação" },
                    { id: "direitos", label: "7. Os Seus Direitos" },
                    { id: "cookies", label: "8. Cookies" },
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
                  <Button variant="outline" size="sm" className="w-full gap-2" onClick={handlePrint}>
                    <Printer className="w-4 h-4" />
                    Imprimir / PDF
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
                    A <strong>POPS HomeCare</strong> (adiante designada por "POPS", "nós" ou "nosso"), operada pela entidade legal 
                    <span className="bg-yellow-50 border border-yellow-200 px-2 py-0.5 rounded mx-1 text-slate-900 font-medium">[NOME DA EMPRESA, LDA]</span>, 
                    com sede em <span className="text-slate-900 font-medium">[SUA MORADA COMPLETA]</span> e 
                    NIPC <span className="text-slate-900 font-medium">[SEU NIF]</span>, 
                    assume o compromisso de garantir a proteção da segurança dos dados pessoais que lhe são disponibilizados.
                  </p>
                  <p className="mt-4">
                    Esta Política de Privacidade regula o tratamento de dados pessoais dos utilizadores (Clientes, Utentes e Cuidadores) recolhidos através do website e da Aplicação POPS, em estrito cumprimento do Regulamento Geral sobre a Proteção de Dados (RGPD - Regulamento UE 2016/679).
                  </p>
                </section>

                {/* 1. Responsável */}
                <section id="responsavel" className="scroll-mt-32 border-t border-slate-100 pt-10">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">1. Responsável pelo Tratamento</h2>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start gap-4">
                    <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="mb-2">
                        A entidade responsável pelo tratamento dos seus dados é a <span className="font-semibold text-slate-900">POPS HomeCare</span>.
                      </p>
                      <p className="text-sm text-slate-600">
                        Designámos um Encarregado de Proteção de Dados (DPO) para garantir a conformidade e ser o seu ponto de contacto.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 2. Dados Recolhidos */}
                <section id="dados" className="scroll-mt-32 border-t border-slate-100 pt-10">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">2. Categorias de Dados Recolhidos</h2>
                  <p className="mb-6">Recolhemos apenas os dados estritamente necessários para a prestação do serviço:</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Clientes */}
                    <div className="border border-slate-200 rounded-xl p-6 hover:border-primary/30 transition-colors">
                      <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                        Clientes & Famílias
                      </h3>
                      <ul className="space-y-3 text-sm">
                        <li className="flex gap-2 text-slate-600">
                          <CheckIcon /> <strong>Identificação:</strong> Nome, NIF, CC.
                        </li>
                        <li className="flex gap-2 text-slate-600">
                          <CheckIcon /> <strong>Contacto:</strong> Morada do serviço, email, telefone.
                        </li>
                        <li className="flex gap-2 text-slate-600 bg-red-50 p-2 rounded -ml-2">
                          <AlertCircle className="w-4 h-4 text-red-500 shrink-0" /> 
                          <span><strong>Dados de Saúde:</strong> Patologias e necessidades especiais (Apenas com consentimento).</span>
                        </li>
                      </ul>
                    </div>

                    {/* Profissionais */}
                    <div className="border border-slate-200 rounded-xl p-6 hover:border-primary/30 transition-colors">
                      <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                        Profissionais (Cuidadores)
                      </h3>
                      <ul className="space-y-3 text-sm">
                        <li className="flex gap-2 text-slate-600">
                          <CheckIcon /> <strong>Profissionais:</strong> CV, Certificados, Cédula.
                        </li>
                        <li className="flex gap-2 text-slate-600">
                          <CheckIcon /> <strong>Idoneidade:</strong> Registo Criminal.
                        </li>
                        <li className="flex gap-2 text-slate-600">
                          <CheckIcon /> <strong>Geolocalização:</strong> GPS (Apenas em serviço).
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* 3. Finalidades */}
                <section id="finalidades" className="scroll-mt-32 border-t border-slate-100 pt-10">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">3. Finalidades e Licitude</h2>
                  <div className="overflow-hidden rounded-xl border border-slate-200">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-slate-50 text-slate-900 font-semibold border-b border-slate-200">
                        <tr>
                          <th className="px-6 py-4">Finalidade</th>
                          <th className="px-6 py-4">Fundamento Jurídico (RGPD)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr>
                          <td className="px-6 py-4 font-medium text-slate-900">Gestão do Serviço de Apoio Domiciliário</td>
                          <td className="px-6 py-4 text-slate-600">Execução de Contrato (Art. 6.º, 1, b)</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-medium text-slate-900">Tratamento de Dados de Saúde</td>
                          <td className="px-6 py-4 text-slate-600">Consentimento Explícito (Art. 9.º, 2, a)</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-medium text-slate-900">Verificação de Idoneidade (Criminais)</td>
                          <td className="px-6 py-4 text-slate-600">Obrigação Legal e Interesse Público</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-medium text-slate-900">Faturação</td>
                          <td className="px-6 py-4 text-slate-600">Obrigação Legal (Fiscal)</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-medium text-slate-900">Marketing e Comunicação</td>
                          <td className="px-6 py-4 text-slate-600">Consentimento (Revogável)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* 4. Partilha */}
                <section id="partilha" className="scroll-mt-32 border-t border-slate-100 pt-10">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">4. Partilha e Transferência de Dados</h2>
                  <p className="mb-4">
                    A POPS <strong>não comercializa</strong> os seus dados pessoais. A transmissão de dados a terceiros ocorre apenas quando estritamente necessária para o funcionamento do serviço ou cumprimento legal:
                  </p>
                  
                  <ul className="space-y-4 mb-6">
                    <li className="flex gap-3">
                      <div className="mt-1"><Globe className="w-5 h-5 text-slate-400" /></div>
                      <div>
                        <strong className="text-slate-900">Subcontratantes (Parceiros Tecnológicos):</strong>
                        <p className="text-sm mt-1">Recorremos a fornecedores de referência para alojamento (Cloud), processamento de pagamentos e envio de comunicações. Todos estão contratualmente vinculados a cumprir o RGPD e medidas de segurança.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1"><Lock className="w-5 h-5 text-slate-400" /></div>
                      <div>
                        <strong className="text-slate-900">Transferências Internacionais:</strong>
                        <p className="text-sm mt-1">Caso ocorra transferência de dados para fora do Espaço Económico Europeu (EEE), garantimos que estas se realizam ao abrigo de Decisões de Adequação ou Cláusulas Contratuais-Tipo aprovadas pela Comissão Europeia.</p>
                      </div>
                    </li>
                  </ul>
                </section>

                {/* 5. Segurança */}
                <section id="seguranca" className="scroll-mt-32 border-t border-slate-100 pt-10">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">5. Segurança da Informação</h2>
                  <p className="mb-4">
                    Adotamos medidas técnicas e organizativas robustas para proteger os seus dados contra perda, acesso não autorizado ou alteração, incluindo:
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {["Encriptação SSL/TLS em trânsito", "Encriptação de bases de dados", "Controlo de acessos (Need-to-know)", "Auditorias de segurança regulares"].map((item, i) => (
                       <li key={i} className="flex items-center gap-2 text-sm bg-slate-50 px-3 py-2 rounded-lg border border-slate-100">
                         <Shield className="w-4 h-4 text-green-600" /> {item}
                       </li>
                    ))}
                  </ul>
                </section>

                {/* 6. Conservação */}
                <section id="conservacao" className="scroll-mt-32 border-t border-slate-100 pt-10">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">6. Prazos de Conservação</h2>
                  <div className="bg-white border border-slate-200 rounded-xl divide-y divide-slate-100">
                    <div className="p-4 flex justify-between items-center">
                       <span className="font-medium text-slate-900">Dados de Faturação</span>
                       <span className="text-sm bg-slate-100 px-2 py-1 rounded text-slate-600">10 anos (Lei Fiscal)</span>
                    </div>
                    <div className="p-4 flex justify-between items-center">
                       <span className="font-medium text-slate-900">Dados de Saúde e Perfil</span>
                       <span className="text-sm bg-slate-100 px-2 py-1 rounded text-slate-600">Duração do contrato + 2 anos</span>
                    </div>
                    <div className="p-4 flex justify-between items-center">
                       <span className="font-medium text-slate-900">Dados de Registo Criminal</span>
                       <span className="text-sm bg-slate-100 px-2 py-1 rounded text-slate-600">Eliminação imediata após validação</span>
                    </div>
                  </div>
                </section>

                {/* 7. Direitos */}
                <section id="direitos" className="scroll-mt-32 border-t border-slate-100 pt-10">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">7. Os Seus Direitos</h2>
                  <p className="mb-6">
                    Enquanto titular dos dados, pode exercer os seguintes direitos a qualquer momento e gratuitamente:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                     {["Direito de Acesso", "Direito de Retificação", "Direito ao Apagamento", "Direito à Portabilidade", "Direito à Limitação", "Direito de Oposição"].map((right) => (
                        <div key={right} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                           <div className="w-1.5 h-1.5 bg-primary rounded-full"></div> {right}
                        </div>
                     ))}
                  </div>

                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
                    <div>
                        <h4 className="font-bold text-blue-900 mb-1">Como exercer?</h4>
                        <p className="text-sm text-blue-700">Envie o seu pedido ao nosso DPO. Prazo de resposta: 30 dias.</p>
                    </div>
                    <div className="flex gap-3">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-none" asChild>
                            <a href="mailto:privacidade@popshomecare.pt">Contactar DPO</a>
                        </Button>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-slate-50 rounded-lg text-sm text-slate-500 flex gap-3">
                     <AlertCircle className="w-5 h-5 shrink-0 text-slate-400" />
                     <p>
                        Tem ainda o direito de apresentar reclamação à autoridade de controlo nacional: 
                        <a href="https://www.cnpd.pt" target="_blank" rel="noreferrer" className="text-primary hover:underline ml-1">CNPD – Comissão Nacional de Proteção de Dados</a>.
                     </p>
                  </div>
                </section>

                {/* 8. Cookies */}
                <section id="cookies" className="scroll-mt-32 border-t border-slate-100 pt-10">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                     <Cookie className="w-6 h-6 text-primary" />
                     8. Cookies e Tecnologias
                  </h2>
                  <p className="mb-4">
                    Utilizamos cookies para garantir o funcionamento do site e melhorar a sua experiência.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
                    <li><strong>Cookies Essenciais:</strong> Necessários para o login e segurança (não requerem consentimento).</li>
                    <li><strong>Cookies Analíticos:</strong> Para estatísticas anónimas de utilização (Google Analytics).</li>
                    <li><strong>Cookies de Funcionalidade:</strong> Para guardar as suas preferências (ex: idioma).</li>
                  </ul>
                  <p className="mt-4 text-sm">
                    Pode gerir as suas preferências a qualquer momento através das definições do seu navegador.
                  </p>
                </section>

                {/* 9. Contactos */}
                <section id="contactos" className="scroll-mt-32 border-t border-slate-100 pt-10">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">9. Contactos</h2>
                  <p className="mb-6">
                    Para qualquer questão sobre esta política ou sobre como tratamos os seus dados, por favor contacte-nos:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                       <h3 className="font-bold text-slate-900 mb-2">Encarregado de Proteção de Dados</h3>
                       <a href="mailto:privacidade@popshomecare.pt" className="flex items-center gap-2 text-primary font-medium hover:underline">
                          <Mail className="w-4 h-4" /> privacidade@popshomecare.pt
                       </a>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                       <h3 className="font-bold text-slate-900 mb-2">Morada Postal</h3>
                       <p className="text-sm text-slate-600 mb-1">[SUA MORADA COMPLETA]</p>
                       <p className="text-sm text-slate-600">A/C: Departamento Jurídico</p>
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

// Pequeno helper para ícones de check
function CheckIcon() {
  return <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />;
}