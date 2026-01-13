import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, RotateCcw, Sparkles, User, MapPin, Activity, HeartPulse, Brain } from "lucide-react";
import { plans } from "@/lib/plans";

// --- Tipos Robustos ---
interface QuizOption {
  label: string;
  value: string;
  desc?: string;
  icon?: any;
}

interface QuizStep {
  id: string;
  title: string;
  description: string;
  options?: QuizOption[];
}

// --- Configuração dos Passos ---
const quizSteps: QuizStep[] = [
  {
    id: "intro",
    title: "Descubra o plano ideal",
    description: "Responda a 3 perguntas rápidas e encontre o cuidado perfeito em menos de 1 minuto."
  },
  {
    id: "recipient",
    title: "Para quem é o cuidado?",
    description: "Isto ajuda-nos a personalizar a abordagem.",
    options: [
      { label: "Pai ou Mãe", value: "parents", icon: User },
      { label: "Avós", value: "grandparents", icon: User },
      { label: "Cônjuge", value: "spouse", icon: HeartPulse },
      { label: "Para mim", value: "self", icon: User },
      { label: "Outro", value: "self", icon: User }
    ]
  },
  {
    id: "location",
    title: "Qual a localização?",
    description: "Operamos em qualquer parte do território de Portugal",
    options: [
      { label: "Norte", value: "porto", icon: MapPin },
      { label: "Centro", value: "gaia", icon: MapPin },
      { label: "Sul", value: "matosinhos", icon: MapPin },
      { label: "Ilhas", value: "other", icon: MapPin }
    ]
  },
  {
    id: "autonomy",
    title: "Qual o nível de dependência?",
    description: "Seja sincero para garantirmos a segurança.",
    options: [
      { 
        label: "Independente", 
        desc: "Precisa apenas de companhia, segurança e tarefas leves.", 
        value: "basico", // Mapeia direto para o ID do plano
        icon: User 
      },
      { 
        label: "Ajuda na Higiene", 
        desc: "Precisa de apoio físico no banho, vestir ou refeições.", 
        value: "completo", 
        icon: Activity 
      },
      { 
        label: "Elevada Dependência", 
        desc: "Acamado, Alzheimer avançado ou cuidados contínuos.", 
        value: "especializado", 
        icon: Brain 
      }
    ]
  },
  {
    id: "result",
    title: "Analisámos as suas respostas...",
    description: "Eis a recomendação da nossa equipa clínica."
  }
];

// --- Variantes de Animação ---
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 50 : -50,
    opacity: 0
  })
};

export function PlanQuiz() {
  const [open, setOpen] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 = forward, -1 = back
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const currentStep = quizSteps[currentStepIndex];

  // Lógica de Navegação
  const nextStep = () => {
    setDirection(1);
    setCurrentStepIndex((prev) => prev + 1);
  };

  const prevStep = () => {
    setDirection(-1);
    setCurrentStepIndex((prev) => prev - 1);
  };

  const resetQuiz = () => {
    setDirection(-1);
    setCurrentStepIndex(0);
    setAnswers({});
  };

  const handleSelection = (value: string) => {
    setAnswers((prev) => ({ ...prev, [currentStep.id]: value }));
    nextStep();
  };

  // Encontrar o plano recomendado (Fallback para 'completo' se algo falhar)
  const recommendedPlan = plans.find(p => p.id === answers.autonomy) || plans.find(p => p.id === 'completo') || plans[0];

  return (
    <Dialog open={open} onOpenChange={(val) => {
        setOpen(val);
        if (!val) setTimeout(() => { setCurrentStepIndex(0); setAnswers({}); }, 300);
    }}>
      <DialogTrigger asChild>
        <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary via-teal-500 to-primary-dark hover:shadow-primary/20 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 gap-2 h-14 px-8"
        >
            <Sparkles className="w-5 h-5 animate-pulse" />
            Descubra o plano ideal em 1 minuto
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-lg overflow-hidden bg-white p-0 gap-0 rounded-3xl">
        
        {/* Header com Progresso */}
        <div className="px-6 pt-6 pb-2">
          <DialogHeader>
            <div className="flex items-center justify-between mb-2">
                {currentStepIndex > 0 && currentStepIndex < quizSteps.length - 1 ? (
                    <button onClick={prevStep} className="text-slate-400 hover:text-primary transition-colors">
                        <ArrowLeft size={20} />
                    </button>
                ) : <div className="w-5" />} {/* Espaçador */}
                
                <span className="text-xs font-bold text-primary tracking-widest uppercase opacity-70">
                    {currentStepIndex === 0 ? 'Consultor POPS' : `Passo ${currentStepIndex} de 4`}
                </span>
                
                <div className="w-5" /> {/* Espaçador */}
            </div>
            
            <DialogTitle className="text-center text-2xl font-bold text-slate-900 px-4">
              {currentStep.title}
            </DialogTitle>
            <p className="text-center text-slate-500 text-sm mt-2 px-6">
              {currentStep.description}
            </p>
          </DialogHeader>

          {/* Barra de Progresso */}
          {currentStepIndex > 0 && currentStepIndex < 4 && (
             <div className="w-full h-1.5 bg-slate-100 rounded-full mt-6 overflow-hidden">
                <motion.div 
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${(currentStepIndex / 3) * 100}%` }}
                    transition={{ duration: 0.5 }}
                />
             </div>
          )}
        </div>

        {/* Corpo do Quiz (Área Animada) */}
        <div className="p-6 min-h-[320px] flex flex-col justify-start relative">
            <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                    key={currentStepIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
                    className="w-full"
                >
                    {/* --- STEP 0: INTRO --- */}
                    {currentStep.id === 'intro' && (
                        <div className="flex flex-col items-center gap-8 py-4">
                            <div className="relative">
                                <div className="absolute inset-0 bg-blue-100 rounded-full animate-ping opacity-20"></div>
                                <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100 shadow-inner relative z-10">
                                    <Sparkles className="w-10 h-10 text-primary" />
                                </div>
                            </div>
                            <Button size="lg" className="w-full max-w-xs text-base h-12 rounded-full" onClick={nextStep}>
                                Começar Agora <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </div>
                    )}

                    {/* --- STEPS 1 & 2: RECIPIENT & LOCATION (Grid Layout) --- */}
                    {(currentStep.id === 'recipient' || currentStep.id === 'location') && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {currentStep.options?.map((opt) => (
                                <button
                                    key={opt.value}
                                    className="flex flex-col items-center justify-center p-4 h-28 rounded-2xl border border-slate-200 hover:border-primary hover:bg-blue-50/50 hover:shadow-md transition-all group bg-white"
                                    onClick={() => handleSelection(opt.value)}
                                >
                                    {opt.icon && <opt.icon className="w-6 h-6 text-slate-400 group-hover:text-primary mb-2 transition-colors" />}
                                    <span className="font-semibold text-slate-700 group-hover:text-primary text-center">{opt.label}</span>
                                </button>
                            ))}
                        </div>
                    )}

                    {/* --- STEP 3: AUTONOMY (List Layout) --- */}
                    {currentStep.id === 'autonomy' && (
                        <div className="space-y-3">
                            {currentStep.options?.map((opt) => (
                                <button
                                    key={opt.value}
                                    className="w-full flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:border-primary hover:bg-blue-50/30 transition-all text-left group bg-white hover:shadow-sm"
                                    onClick={() => handleSelection(opt.value)}
                                >
                                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-primary transition-colors">
                                        {opt.icon && <opt.icon size={20} />}
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 group-hover:text-primary">{opt.label}</div>
                                        <div className="text-xs text-slate-500 leading-snug">{opt.desc}</div>
                                    </div>
                                    <ArrowRight className="ml-auto w-4 h-4 text-slate-300 group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all" />
                                </button>
                            ))}
                        </div>
                    )}

                    {/* --- STEP 4: RESULT --- */}
                    {currentStep.id === 'result' && (
                        <div className="text-center">
                            <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 relative overflow-hidden">
                                {/* Badge de Recomendação */}
                                <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                                    Melhor Opção
                                </div>

                                <div className="inline-flex p-3 rounded-full bg-white shadow-sm mb-4 text-primary">
                                    {recommendedPlan.icon && <recommendedPlan.icon size={28} />}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-1">{recommendedPlan.name}</h3>
                                <div className="text-sm text-slate-500 mb-4 px-4">{recommendedPlan.shortDescription}</div>
                                
                                <div className="flex items-baseline justify-center gap-1 mb-6">
                                    <span className="text-4xl font-black text-blue-700">{recommendedPlan.price}</span>
                                    <span className="text-slate-500 font-medium">/hora</span>
                                </div>
                                
                                <ul className="space-y-2 text-left bg-white/60 p-4 rounded-xl mb-6">
                                    {recommendedPlan.features.slice(0, 3).map((f, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                                            <div className="mt-0.5 w-4 h-4 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                                <Check className="w-2.5 h-2.5 text-green-600" />
                                            </div>
                                            <span className="leading-tight">{f.name}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button asChild className="w-full h-12 text-base shadow-lg shadow-blue-900/10 hover:shadow-blue-900/20" size="lg">
                                    <a href={`/#waitlist?plan=${recommendedPlan.id}`} onClick={() => setOpen(false)}>
                                        Escolher {recommendedPlan.name}
                                    </a>
                                </Button>
                            </div>

                            <button onClick={resetQuiz} className="mt-6 text-xs text-slate-400 hover:text-slate-600 flex items-center justify-center gap-1 mx-auto transition-colors font-medium uppercase tracking-wide">
                                <RotateCcw className="w-3 h-3" /> Reiniciar Quiz
                            </button>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
}