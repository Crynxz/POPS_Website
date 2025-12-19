import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem = ({ title, content }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg px-2 hover:bg-slate-50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-slate-900 text-lg">{title}</span>
        {isOpen ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-slate-400" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-4 px-2 text-slate-600 leading-relaxed">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQSection() {
  const faqs = [
    {
      title: "Como funciona o processo de verificação?",
      content: "Todos os cuidadores passam por um processo rigoroso de 4 etapas: validação de identidade, verificação de registo criminal, validação de certificados profissionais e entrevista. Apenas os aprovados entram na plataforma."
    },
    {
      title: "Qual o custo do serviço?",
      content: "A inscrição na plataforma é gratuita. Os serviços têm preços tabelados a partir de 9€/hora, dependendo da complexidade do cuidado necessário. Não há custos ocultos."
    },
    {
      title: "Posso escolher o cuidador?",
      content: "Sim. A nossa tecnologia sugere os melhores perfis com base nas suas necessidades, mas a escolha final é sempre sua."
    },
    {
      title: "Existe período de fidelização?",
      content: "Não. Pode contratar serviços pontuais ou recorrentes. Para planos mensais de longa duração, oferecemos descontos, mas sem fidelização obrigatória."
    }
  ];

  return (
    <section className="py-24 bg-slate-50" id="faq">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">Dúvidas Frequentes</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Perguntas e Respostas
          </h2>
        </div>
        
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} title={faq.title} content={faq.content} />
          ))}
        </div>
      </div>
    </section>
  );
}