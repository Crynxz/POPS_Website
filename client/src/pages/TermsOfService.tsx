import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import {
  ArrowLeft,
  Scale,
  FileText,
  CreditCard,
  AlertTriangle,
  Printer,
  Ban,
  CheckCircle2,
  ShieldCheck,
  BookOpen,
  Gavel,
  GraduationCap, // Ícone novo para a formação
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function TermsOfService() {
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

  const navItems = [
    { id: "intro", label: "1. Enquadramento Legal" },
    { id: "servicos", label: "2. Modelo de Intermediação" },
    { id: "registo", label: "3. Segurança e Verificação" },
    { id: "pagamentos", label: "4. Preços e Pagamentos" },
    { id: "cancelamento", label: "5. Cancelamentos" },
    { id: "responsabilidade", label: "6. Responsabilidade Civil" },
    { id: "autonomia", label: "7. Autonomia dos Profissionais" },
    { id: "formacao", label: "8. Formação e Financiamento" }, // NOVO
    { id: "nao-elisao", label: "9. Política de Não-Elisão" },
    { id: "dados", label: "10. Proteção de Dados" },
    { id: "lei", label: "11. Lei Aplicável" },
    { id: "litigios", label: "12. Litígios e Reclamações" },
  ];

  return (
    <>
      <Helmet>
        <title>Termos e Condições de Uso | POPS HomeCare</title>
        <meta
          name="description"
          content="Termos e Condições legais da plataforma POPS HomeCare. Regras de intermediação tecnológica, pagamentos, responsabilidade, formação financiada e proteção de dados."
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
                  Acordo de Utilização
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
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-3">
                  Navegação
                </p>
                <nav className="space-y-1">
                  {navItems.map((item) => (
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
                {/* 1. Introdução */}
                <section id="intro" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    1. Enquadramento Legal e Objeto
                  </h2>
                  <p className="mb-4">
                    A <strong>POPS HomeCare</strong> é uma plataforma digital operada por{" "}
                    <strong>[NOME DA SOCIEDADE], NIF [●], com sede em [●]</strong>,
                    constituída juridicamente como{" "}
                    <strong>Prestador de Serviços da Sociedade da Informação</strong>, nos
                    termos do Decreto‑Lei n.º 7/2004, atuando em regime de{" "}
                    <strong>Intermediação Tecnológica Pura</strong>.
                  </p>
                  <p className="mb-4">
                    A POPS atua exclusivamente como um <strong>Marketplace</strong>{" "}
                    tecnológico que facilita a conexão entre famílias (“Clientes”) e
                    prestadores de serviços independentes (“Cuidadores”). A POPS{" "}
                    <strong>
                      não é uma empresa de trabalho temporário, nem um Serviço de Apoio
                      Domiciliário (SAD), nem um prestador direto de cuidados de saúde
                    </strong>
                    , limitando‑se a fornecer a infraestrutura tecnológica para o{" "}
                    <em>matching</em>, gestão de pagamentos, suporte administrativo e
                    verificação de identidade.
                  </p>
                  <p className="mb-4">
                    Em conformidade com a Lei n.º 13/2023 e o artigo 12.º‑A do Código do
                    Trabalho sobre plataformas digitais, a POPS desenhou o seu modelo
                    operacional para evitar os indícios de subordinação jurídica,
                    reforçando a natureza comercial da relação entre Cliente e Cuidador.
                  </p>
                  <p>
                    Para efeitos de proteção do consumidor, a POPS assume‑se como ponto
                    único de contacto do Cliente para informações, reclamações e suporte
                    relativamente a serviços contratados através da plataforma, sem
                    prejuízo de a execução material dos serviços ser feita por prestadores
                    independentes.
                  </p>
                </section>

                {/* 2. Serviços */}
                <section
                  id="servicos"
                  className="scroll-mt-32 border-t border-slate-100 pt-10"
                >
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    2. Modelo de Intermediação
                  </h2>
                  <p className="mb-4">
                    A plataforma permite a contratação de categorias de serviço, incluindo:{" "}
                    <strong>Básico</strong> (companhia e apoio leve),{" "}
                    <strong>Completo</strong> (higiene, mobilidade e apoio à rotina) e{" "}
                    <strong>Especializado</strong> (demências, pós‑alta e situações de
                    alta complexidade). Estes serviços são prestados diretamente pelos
                    Cuidadores, enquanto prestadores independentes.
                  </p>
                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                    <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-blue-600" />
                      Natureza dos Serviços
                    </h4>
                    <p className="text-sm text-blue-800">
                      Os atos médicos (como injeções ou tratamento de feridas complexas)
                      estão expressamente excluídos, salvo se prestados por profissionais
                      de saúde devidamente habilitados (por exemplo, Enfermeiros com
                      Cédula Profissional válida) e assim identificados na plataforma. A
                      POPS não assume direção técnica, clínica ou supervisão da execução
                      dos atos, sendo esta responsabilidade exclusiva do prestador.
                    </p>
                  </div>
                </section>

                {/* 3. Registo e Segurança */}
                <section
                  id="registo"
                  className="scroll-mt-32 border-t border-slate-100 pt-10"
                >
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    3. Segurança, Registo e Verificação (KYC)
                  </h2>
                  <p className="mb-4">
                    Para garantir a segurança da comunidade, a POPS implementa um
                    protocolo rigoroso de validação (“Know Your Customer/Partner”):
                  </p>
                  <ul className="list-disc pl-5 space-y-3 marker:text-primary mb-4">
                    <li>
                      <strong>Verificação Biométrica:</strong> Validação de identidade via
                      documento oficial e reconhecimento facial, com critério objetivo de
                      Apto/Não Apto.
                    </li>
                    <li>
                      <strong>Registo Criminal:</strong> Verificação obrigatória de
                      idoneidade para contacto com pessoas vulneráveis, renovada
                      periodicamente.
                    </li>
                    <li>
                      <strong>Certificações:</strong> Validação manual de certificados de
                      formação e cédulas profissionais junto das entidades competentes.
                    </li>
                  </ul>
                  <p className="text-sm text-slate-600">
                    A funcionalidade de GPS e registo de <em>check‑in</em>/<em>check‑out</em>{" "}
                    serve estritamente para prova de execução do serviço, faturação e
                    segurança do Cliente. A POPS não utiliza dados de localização, tempo
                    de resposta ou rotas para avaliar produtividade, aplicar sanções
                    disciplinares ou exercer poder de direção sobre os Cuidadores.
                  </p>
                </section>

                {/* 4. Pagamentos */}
                <section
                  id="pagamentos"
                  className="scroll-mt-32 border-t border-slate-100 pt-10"
                >
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    4. Preços, Pagamentos e Faturação
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="border border-slate-200 p-5 rounded-xl">
                      <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-primary" /> Preços de
                        Referência e Liberdade Tarifária
                      </h4>
                      <p className="text-sm mb-2">
                        A POPS apresenta ao Cliente <strong>intervalos de referência</strong>{" "}
                        baseados em valores médios praticados na plataforma e no mercado.
                        Estes intervalos não constituem tabela vinculativa.
                      </p>
                      <p className="text-sm">
                        O Profissional determina o seu próprio preço hora ou por serviço,
                        podendo aceitar, recusar ou renegociar o valor sugerido. A
                        plataforma pode exibir avisos quando o preço proposto estiver
                        significativamente fora da média da zona, com finalidade meramente
                        informativa e estatística, sem impor tetos ou pisos obrigatórios.
                      </p>
                    </div>
                    <div className="border border-slate-200 p-5 rounded-xl">
                      <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-primary" /> Mandato de
                        Faturação e Compensação
                      </h4>
                      <p className="text-sm mb-2">
                        A POPS opera sob um modelo de{" "}
                        <strong>Mandato de Faturação</strong>. O Cliente paga à
                        Plataforma e a Plataforma emite automaticamente a fatura‑recibo em
                        nome do Cuidador para o Cliente.
                      </p>
                      <p className="text-sm font-semibold text-slate-800">
                        O Cuidador autoriza expressamente a POPS a exercer o direito de compensação de créditos, deduzindo dos montantes a transferir quaisquer valores devidos à plataforma (ex: comissões, financiamento de formação ou reembolsos a clientes).
                      </p>
                    </div>
                    <div className="border border-slate-200 p-5 rounded-xl md:col-span-2">
                      <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-primary" /> Retenção de
                        Segurança (Escrow)
                      </h4>
                      <p className="text-sm">
                        O pagamento do Cliente fica cativo (“Escrow”) e só é libertado
                        para o Cuidador <strong>48 horas após a conclusão do serviço</strong>.
                        Este período serve para salvaguarda do Cliente em caso de
                        reclamação fundamentada ou não‑comparência, sem prejuízo dos
                        direitos do profissional em receber a compensação devida por
                        serviços efetivamente prestados.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 5. Cancelamento */}
                <section
                  id="cancelamento"
                  className="scroll-mt-32 border-t border-slate-100 pt-10"
                >
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    5. Política de Cancelamento
                  </h2>
                  <p className="mb-4">
                    Para respeitar a agenda dos profissionais independentes e garantir a
                    estabilidade do serviço, aplicam‑se as seguintes regras de
                    cancelamento pelo Cliente:
                  </p>
                  <div className="overflow-hidden rounded-xl border border-slate-200">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-slate-50 text-slate-900 font-semibold border-b border-slate-200">
                        <tr>
                          <th className="px-6 py-4">Aviso Prévio</th>
                          <th className="px-6 py-4">Política de Reembolso</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr>
                          <td className="px-6 py-4 font-medium text-green-700">
                            Mais de 48 horas
                          </td>
                          <td className="px-6 py-4">Sem custo (reembolso total).</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-medium text-orange-600">
                            Entre 2 e 48 horas
                          </td>
                          <td className="px-6 py-4">
                            Taxa administrativa de cancelamento (percentagem variável em
                            função do serviço e duração).
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-medium text-red-600">
                            Menos de 2 horas
                          </td>
                          <td className="px-6 py-4">
                            Cobrança total do serviço, a título de compensação ao
                            profissional pela reserva de horário.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-slate-600 mt-4">
                    Em qualquer caso, o Cliente não perde direitos irrenunciáveis
                    previstos na lei de defesa do consumidor. A POPS disponibiliza{" "}
                    <strong>Livro de Reclamações eletrónico</strong> e indica, na
                    plataforma, as <strong>entidades de Resolução Alternativa de Litígios</strong>{" "}
                    competentes para o setor e região, comprometendo‑se a cooperar de
                    boa‑fé com esses mecanismos sempre que o Cliente opte por essa via.
                  </p>
                </section>

                {/* 6. Responsabilidade */}
                <section
                  id="responsabilidade"
                  className="scroll-mt-32 border-t border-slate-100 pt-10"
                >
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    6. Limitação de Responsabilidade e Seguros
                  </h2>

                  <p className="mb-4">
                    Para reforçar a proteção de Clientes e Cuidadores, a POPS adota um
                    modelo de seguros em duas camadas, sem prejuízo das responsabilidades
                    legais próprias de cada parte.
                  </p>

                  <ul className="list-disc pl-5 space-y-3 mb-4">
                    <li>
                      <strong>Camada do Prestador (Seguro Obrigatório do Cuidador):</strong>{" "}
                      Todos os Cuidadores que atuam através da plataforma devem dispor de
                      um <strong>seguro de Acidentes de Trabalho enquanto trabalhadores
                      independentes</strong>, nos termos da legislação aplicável em
                      Portugal, podendo complementarmente contratar cobertura de
                      Responsabilidade Civil Profissional. A POPS pode disponibilizar
                      protocolos com seguradoras parceiras para facilitar o acesso a
                      seguros com prémios competitivos, mas a contratação do seguro é
                      sempre feita diretamente entre o Profissional e a seguradora. Compete
                      ao Cuidador manter estas apólices ativas e em conformidade, podendo a
                      POPS exigir, a qualquer momento, comprovativo de apólice válida como
                      condição para manutenção da conta ativa.
                    </li>

                    <li>
                      <strong>Camada da Plataforma (Responsabilidade da POPS):</strong> A
                      POPS detém uma apólice própria de{" "}
                      <strong>Responsabilidade Civil de Exploração
                      e/ou Profissional</strong>, que cobre danos diretamente imputáveis à
                      sua atividade de intermediação tecnológica (por exemplo, falhas do
                      sistema de pagamentos, erros relevantes no processo de verificação
                      de identidade ou na gestão de dados), nos limites e exclusões
                      definidos na respetiva apólice.
                    </li>
                  </ul>

                  <p className="text-sm text-slate-600 mb-3">
                    A POPS não é seguradora nem mediadora de seguros. As informações sobre
                    seguros disponibilizadas na plataforma têm carácter meramente informativo
                    e não constituem aconselhamento jurídico ou financeiro. A decisão de
                    adesão a cada apólice, bem como a análise de coberturas e exclusões,
                    cabe ao Cuidador e às seguradoras envolvidas.
                  </p>

                  <p className="text-sm text-slate-600">
                    Na máxima medida permitida por lei, a responsabilidade total da POPS por
                    quaisquer danos decorrentes da utilização da plataforma fica limitada ao
                    montante total de taxas de serviço pagas pelo Cliente à POPS nos{" "}
                    <strong>12 (doze) meses</strong> que antecedem o evento gerador da
                    responsabilidade, excluindo, em qualquer caso, lucros cessantes, danos
                    morais ou outros danos indiretos ou consequenciais. Esta limitação de
                    responsabilidade não afasta nem limita quaisquer direitos imperativos do
                    consumidor previstos na lei aplicável.
                  </p>
                </section>

                {/* 7. Autonomia */}
                <section
                  id="autonomia"
                  className="scroll-mt-32 border-t border-slate-100 pt-10"
                >
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    7. Autonomia dos Profissionais
                  </h2>
                  <p className="mb-4">
                    Em conformidade com a legislação laboral vigente (incluindo a Lei n.º
                    13/2023), declara‑se que a relação estabelecida entre POPS e
                    Cuidadores é de natureza comercial, não configurando relação de
                    trabalho subordinado.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                      A POPS não dá ordens diretas sobre a forma de execução dos serviços,
                      não define horários fixos de trabalho e não aplica sanções
                      disciplinares; apenas pode suspender contas em caso de violação
                      grave dos Termos (fraude, violência, incumprimento contratual).
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                      Os Cuidadores podem recusar livremente os serviços propostos, sem que tal
                      implique bloqueio automático ou despromoção sistemática no acesso a
                      oportunidades futuras.
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                      O Profissional tem liberdade para aceitar, recusar ou renegociar o
                      preço sugerido pela plataforma para cada serviço, inserindo o seu
                      valor hora ou por visita de forma autónoma.
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                      Os meios de trabalho (telemóvel, transporte, equipamentos de
                      proteção individual) são da propriedade do Profissional, não da
                      POPS.
                    </li>
                  </ul>
                </section>

                {/* 8. Formação (NOVO) */}
                <section
                  id="formacao"
                  className="scroll-mt-32 border-t border-slate-100 pt-10"
                >
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <GraduationCap className="w-6 h-6 text-primary" />
                    8. Programa de Formação e Financiamento
                  </h2>
                  <p className="mb-4">
                    A POPS disponibiliza o programa “Carreira POPS” (baseado no modelo <em>Income Share Agreement</em>), permitindo o financiamento de custos de formação (micro-credenciais e especializações) para Cuidadores elegíveis. Ao aderir a este programa, o Cuidador aceita os seguintes termos:
                  </p>
                  
                  <ul className="space-y-4 text-sm text-slate-700 mb-4">
                     <li className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                      <strong className="block text-slate-900 mb-1">A. Natureza do Financiamento</strong>
                      O pagamento do curso é adiantado pela POPS ou parceiros. O Cuidador reconhece este valor como uma dívida líquida e exigível (Contrato de Mútuo), a ser regularizada através da prestação de serviços futuros na plataforma.
                    </li>
                    <li className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                      <strong className="block text-slate-900 mb-1">B. Amortização Automática</strong>
                      O Cuidador autoriza expressamente a POPS a deduzir (amortizar) uma percentagem dos honorários dos serviços realizados após a certificação ou após 30 dias da inscrição (o que ocorrer primeiro), até à liquidação integral do financiamento.
                    </li>
                     <li className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                      <strong className="block text-slate-900 mb-1">C. Garantia e Incumprimento</strong>
                      Para adesão ao financiamento, é obrigatória a associação de um meio de pagamento válido (Cartão de Crédito/Débito). Em caso de abandono da plataforma ou cessação de atividade com dívida pendente, a POPS reserva-se o direito de: (i) compensar o valor com quaisquer saldos de carteira retidos; (ii) debitar o valor remanescente no meio de pagamento associado; e (iii) recorrer a meios legais de recuperação de crédito.
                    </li>
                  </ul>
                </section>

                {/* 9. Não Elisão (Renumerado) */}
                <section
                  id="nao-elisao"
                  className="scroll-mt-32 border-t border-slate-100 pt-10"
                >
                  <div className="bg-red-50 border border-red-100 p-6 rounded-2xl">
                    <h2 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
                      <Ban className="w-5 h-5" /> 9. Risco de Desintermediação e Política
                      de Não‑Elisão
                    </h2>
                    <p className="text-sm text-red-800 mb-3">
                      É estritamente proibido ao Cliente acordar o pagamento de serviços
                      “por fora” da plataforma com Cuidadores angariados através da POPS
                      (desintermediação). Esta prática invalida imediatamente quaisquer
                      coberturas de seguro, garantias de qualidade e suporte da
                      plataforma.
                    </p>
                    <p className="text-sm text-red-800 mb-3">
                      A POPS implementa um modelo de comissões regressivas e benefícios
                      para contratos de longa duração, tornando economicamente vantajosa
                      a manutenção da relação dentro da plataforma, reduzindo o incentivo
                      à desintermediação.
                    </p>
                    <p className="text-sm text-red-800 font-semibold">
                      A violação desta cláusula confere à POPS o direito de suspender a
                      conta e exigir uma indemnização por perdas e danos, incluindo a
                      perda de receitas futuras razoavelmente expectáveis decorrentes da
                      utilização da plataforma.
                    </p>
                  </div>
                </section>

                {/* 10 & 11. Dados e Lei (Renumerado) */}
                <section
                  className="scroll-mt-32 border-t border-slate-100 pt-10 grid md:grid-cols-2 gap-8"
                >
                  <div id="dados">
                    <h2 className="text-xl font-bold text-slate-900 mb-4">
                      10. Proteção de Dados (RGPD)
                    </h2>
                    <p className="text-sm mb-3">
                      Os dados pessoais são tratados em conformidade com o Regulamento
                      (UE) 2016/679 (“RGPD”) e com a legislação nacional aplicável. Os
                      dados de saúde e informação relativa ao estado clínico do utente são
                      considerados Categoria Especial (Art. 9.º RGPD) e são tratados com
                      medidas reforçadas de segurança, com encriptação <em>end‑to‑end</em>{" "}
                      e armazenamento em servidores localizados no Espaço Económico
                      Europeu.
                    </p>
                    <p className="text-sm mb-3">
                      A partilha de dados com o Cuidador ocorre apenas após a confirmação
                      de interesse e <em>match</em> entre as partes, sendo limitada ao
                      estritamente necessário para a prestação do serviço. Todos os
                      prestadores estão vinculados a deveres de confidencialidade.
                    </p>
                    <p className="text-sm mb-3">
                      Algumas funcionalidades, incluindo{" "}
                      <strong>POPS Insights AI</strong>, utilizam dados pseudonimizados e
                      agregados para gerar relatórios de utilização e recomendações ao
                      Cliente, sem produzir efeitos jurídicos individuais automáticos nem
                      decisões exclusivamente automatizadas com impacto significativo
                      sobre o Utilizador. O Cliente pode, a qualquer momento, solicitar a
                      eliminação da sua conta e dos dados pessoais, salvo quando a lei
                      imponha prazos de conservação.
                    </p>
                    <p className="text-sm mb-3">
                      A POPS nomeia um <strong>Encarregado de Proteção de Dados (DPO)</strong>,
                      cujos contactos são disponibilizados na Política de Privacidade,
                      responsável por supervisionar a conformidade com o RGPD e responder
                      aos pedidos dos titulares de dados.
                    </p>
                    <p className="text-sm">
                      O tratamento de dados relativos à saúde tem como principais bases
                      legais a <strong>prestação de cuidados ou serviços de saúde</strong>{" "}
                      e a proteção de <strong>interesses vitais</strong> do titular dos
                      dados, quando aplicável, nos termos do artigo 9.º do RGPD, sendo
                      efetuado por profissionais ou prestadores vinculados a deveres de
                      confidencialidade e com medidas técnicas e organizativas adequadas
                      à proteção desses dados.
                    </p>
                  </div>
                  <div id="lei">
                    <h2 className="text-xl font-bold text-slate-900 mb-4">
                      11. Lei e Foro
                    </h2>
                    <p className="text-sm">
                      Estes Termos regem‑se pela lei portuguesa. Para a resolução de
                      qualquer litígio emergente deste contrato, as partes estipulam a
                      competência do Tribunal da Comarca do Porto, com renúncia expressa
                      a qualquer outro foro, salvo regime imperativo em contrário.
                    </p>
                  </div>
                </section>

                {/* 12. RAL e Livro de Reclamações (Renumerado) */}
                <section
                  id="litigios"
                  className="scroll-mt-32 border-t border-slate-100 pt-10"
                >
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Gavel className="w-6 h-6 text-primary" />
                    12. Resolução Alternativa de Litígios (RAL)
                  </h2>
                  <div className="text-sm space-y-4">
                    <p>
                      Em caso de litígio de consumo, o consumidor pode recorrer a uma{" "}
                      <strong>Entidade de Resolução Alternativa de Litígios de Consumo (RAL)</strong>.
                    </p>
                    <p>Sem prejuízo de outras entidades territorialmente competentes, destacam‑se:</p>
                    <ul className="list-disc pl-5 space-y-1 text-slate-600">
                      <li>
                        <strong>CNIACC</strong> – Centro Nacional de Informação e
                        Arbitragem de Conflitos de Consumo –{" "}
                        <a
                          href="https://www.cniacc.pt"
                          target="_blank"
                          rel="noreferrer"
                          className="text-primary hover:underline"
                        >
                          www.cniacc.pt
                        </a>
                      </li>
                      <li>
                        <strong>CICAP</strong> – Centro de Informação de Consumo e
                        Arbitragem do Porto –{" "}
                        <a
                          href="https://www.cicap.pt"
                          target="_blank"
                          rel="noreferrer"
                          className="text-primary hover:underline"
                        >
                          www.cicap.pt
                        </a>
                      </li>
                    </ul>
                    <p>
                      Mais informações sobre RAL em:{" "}
                      <a
                        href="https://www.consumidor.gov.pt"
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary hover:underline"
                      >
                        www.consumidor.gov.pt
                      </a>
                      .
                    </p>
                    <div className="flex items-center gap-3 mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
                      <BookOpen className="w-5 h-5 text-red-600" />
                      <p>
                        A POPS dispõe de <strong>Livro de Reclamações Eletrónico</strong>,
                        acessível em:{" "}
                        <a
                          href="https://www.livroreclamacoes.pt"
                          target="_blank"
                          rel="noreferrer"
                          className="text-primary font-medium hover:underline"
                        >
                          www.livroreclamacoes.pt
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </section>

                {/* Alterações */}
                <section className="pt-6 text-xs text-slate-400 text-center border-t border-slate-100 mt-8">
                  <p>
                    A POPS reserva-se o direito de alterar estes Termos a qualquer momento.
                    As alterações entrarão em vigor após a sua publicação no site. O uso
                    continuado da plataforma constitui aceitação das novas regras.
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