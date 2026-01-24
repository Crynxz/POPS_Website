import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { 
  MapPin, 
  Clock, 
  Calendar, 
  HeartHandshake, 
  ShieldCheck, 
  TrendingDown, 
  AlertCircle, 
  Car, 
  Sparkles,
  BatteryCharging,
  Percent,
  Moon 
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function ServiceSimulator() {
  const { t } = useLanguage();
  
  const [location, setLocation] = useState<string>("Porto");
  const [serviceType, setServiceType] = useState<string>("basico");
  const [frequency, setFrequency] = useState<string>("recorrente");
  
  // Estado para Taxa Noturna
  const [isNightOrWeekend, setIsNightOrWeekend] = useState(false);

  const [singleDuration, setSingleDuration] = useState<number[]>([4]); 
  const [monthlyVolume, setMonthlyVolume] = useState<number[]>([60]); 

  const [showCalculator, setShowCalculator] = useState(false);
  const [calcDays, setCalcDays] = useState<number[]>([3]); 
  const [calcHours, setCalcHours] = useState<number[]>([4]); 

  useEffect(() => {
    if (frequency === "recorrente" && showCalculator) {
      const total = Math.round(calcDays[0] * calcHours[0] * 4.33); 
      setMonthlyVolume([total]);
    }
  }, [calcDays, calcHours, showCalculator, frequency]);

  const estimate = useMemo(() => {
    // 1. Base Rates
    let baseMin = 0;
    let baseMax = 0;
    
    switch (serviceType) {
      case "basico": baseMin = 10; baseMax = 12; break;
      case "completo": baseMin = 13; baseMax = 15; break;
      case "especializado": baseMin = 18; baseMax = 22; break;
      default: baseMin = 10; baseMax = 12;
    }

    // 2. Modificadores
    
    // NOTA: Zona Premium removida do cálculo conforme instrução. 
    // O preço é igual independentemente da localização nesta fase.

    // TAXA NOTURNA / FIM DE SEMANA (+25% conforme Plano de Negócios 6.8.1)
    const nightMultiplier = isNightOrWeekend ? 1.25 : 1.0;

    // --- CÁLCULOS ---
    let hourlyMin = 0;
    let hourlyMax = 0;
    let totalMin = 0;
    let totalMax = 0;
    
    // Preço Referência (Base * Noturno)
    // O noturno afeta o preço base sobre o qual os descontos incidem
    let baseWithNightMin = Math.round(baseMin * nightMultiplier);
    let baseWithNightMax = Math.round(baseMax * nightMultiplier);

    // Preço Original para "riscar" (Sem descontos de volume, mas COM taxa noturna se aplicável)
    let originalHourlyMin = baseWithNightMin;
    let originalHourlyMax = baseWithNightMax;

    let flags = {
      isShortShift: false,
      isLongShift: false,
      isVolumeHigh: false,
      isVolumeVeryHigh: false, 
      isUrgency: false,
      isNight: isNightOrWeekend, 
      discountPercent: 0,
      discountLabel: ""
    };

    if (frequency === "pontual") {
      const duration = singleDuration[0];
      const oneOffMultiplier = 1.20; // +20% taxa pontual (MANTIDA)
      
      // Ajuste para mostrar o preço "riscado" correto (com taxa pontual)
      originalHourlyMin = Math.round(originalHourlyMin * oneOffMultiplier);
      originalHourlyMax = Math.round(originalHourlyMax * oneOffMultiplier);

      const shortShiftMultiplier = duration < 3 ? 1.20 : 1.0;
      
      // AJUSTE: Pack Dia agora é -15% (0.85) em vez de -10%
      const longShiftMultiplier = duration >= 8 ? 0.85 : 1.0; 

      // Cálculo Final
      hourlyMin = Math.round(baseWithNightMin * oneOffMultiplier * shortShiftMultiplier * longShiftMultiplier);
      hourlyMax = Math.round(baseWithNightMax * oneOffMultiplier * shortShiftMultiplier * longShiftMultiplier);
      
      totalMin = hourlyMin * duration;
      totalMax = hourlyMax * duration;

      flags.isShortShift = duration < 3;
      flags.isLongShift = duration >= 8;
      flags.isUrgency = true;
      
      if (flags.isLongShift) {
        flags.discountPercent = 15; // Atualizado para 15%
        flags.discountLabel = "Pack Dia Completo";
      }

    } else {
      // RECORRENTE
      const volume = monthlyVolume[0];
      let volumeDiscount = 1.0;
      
      if (volume >= 60 && volume < 120) {
        volumeDiscount = 0.90; // -10%
        flags.isVolumeHigh = true;
        flags.discountPercent = 10;
        flags.discountLabel = "Tarifa Mensal Reduzida";
      } else if (volume >= 120) {
        volumeDiscount = 0.85; // -15%
        flags.isVolumeVeryHigh = true;
        flags.discountPercent = 15;
        flags.discountLabel = "Pack Estabilidade";
      }

      hourlyMin = Math.round(baseWithNightMin * volumeDiscount);
      hourlyMax = Math.round(baseWithNightMax * volumeDiscount);

      totalMin = hourlyMin * volume;
      totalMax = hourlyMax * volume;
    }

    return { 
      hourly: { min: hourlyMin, max: hourlyMax }, 
      total: { min: totalMin, max: totalMax },
      original: { min: originalHourlyMin, max: originalHourlyMax },
      flags,
      currentVolume: frequency === "recorrente" ? monthlyVolume[0] : singleDuration[0]
    };
  }, [serviceType, frequency, singleDuration, monthlyVolume, isNightOrWeekend]); // Location removido das dependências

  return (
    <section className="py-16 px-4 md:px-6 w-full max-w-5xl mx-auto" id="simulador">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-10">
          <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 block">{t("simulator.badge")}</span>
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 mb-4">
            {t("simulator.title")}
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            {t("simulator.desc")}
          </p>
        </div>

        <Card className="border-slate-200 shadow-2xl bg-white overflow-hidden rounded-3xl">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-12 gap-0">
              
              {/* COLUNA ESQUERDA: INPUTS */}
              <div className="md:col-span-7 p-5 sm:p-8 md:p-10 space-y-6 md:space-y-8 border-b md:border-b-0 md:border-r border-slate-100 bg-white relative">
                
                {/* 1. Contexto */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" /> {t("simulator.label.location")}
                    </label>
                    <Select value={location} onValueChange={setLocation}>
                      <SelectTrigger className="h-12 border-slate-200 bg-slate-50/50">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Lisboa">Lisboa e Arredores</SelectItem>
                        <SelectItem value="Porto">Porto e Arredores</SelectItem>
                        <SelectItem value="Braga">Braga</SelectItem>
                        <SelectItem value="Outro">Outras Zonas</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                      <HeartHandshake className="w-4 h-4 text-primary" /> {t("simulator.label.service")}
                    </label>
                    <Select value={serviceType} onValueChange={setServiceType}>
                      <SelectTrigger className="h-12 border-slate-200 bg-slate-50/50">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basico">{t("simulator.option.basic")}</SelectItem>
                        <SelectItem value="completo">{t("simulator.option.complete")}</SelectItem>
                        <SelectItem value="especializado">{t("simulator.option.specialized")}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* 1.5 Toggle Noturno/Fim-de-Semana */}
                <div className="bg-slate-50 p-3 sm:p-4 rounded-xl border border-slate-100 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-purple-100 rounded-lg text-purple-600 shrink-0">
                            <Moon className="w-4 h-4" />
                        </div>
                        <div>
                            <span className="text-xs sm:text-sm font-bold text-slate-700 block">Horário Noturno / Fim-de-Semana?</span>
                            <span className="text-[10px] sm:text-xs text-slate-500">22h-08h ou Sáb/Dom (+25%)</span>
                        </div>
                    </div>
                    <Switch checked={isNightOrWeekend} onCheckedChange={setIsNightOrWeekend} />
                </div>


                {/* 2. Tipo de Contrato */}
                <div className="space-y-6 pt-2">
                    <div className="bg-slate-50 p-1 rounded-xl flex relative">
                        <div className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white shadow-sm rounded-lg transition-all duration-300 ease-in-out ${frequency === "pontual" ? "left-[50%]" : "left-1"}`}></div>
                        
                        <button 
                            onClick={() => { setFrequency("recorrente"); setShowCalculator(false); }}
                            className={`flex-1 relative z-10 text-xs sm:text-sm font-bold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 ${frequency === "recorrente" ? "text-primary" : "text-slate-500 hover:text-slate-700"}`}
                        >
                            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            {t("simulator.option.recurring")}
                        </button>
                        <button 
                            onClick={() => setFrequency("pontual")}
                            className={`flex-1 relative z-10 text-xs sm:text-sm font-bold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 ${frequency === "pontual" ? "text-primary" : "text-slate-500 hover:text-slate-700"}`}
                        >
                            <AlertCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            {t("simulator.option.one_off")}
                        </button>
                    </div>

                    <AnimatePresence mode="wait">
                        {frequency === "recorrente" ? (
                            <motion.div 
                                key="recorrente"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                className="space-y-6"
                            >
                                <div className="flex items-center justify-between gap-2">
                                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-primary" /> Volume Mensal
                                    </label>
                                    
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Calculadora</span>
                                        <Switch checked={showCalculator} onCheckedChange={setShowCalculator} />
                                    </div>
                                </div>

                                {showCalculator && (
                                    <div className="bg-blue-50/50 border border-blue-100 p-3 sm:p-4 rounded-xl grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2">
                                        <div className="space-y-2">
                                            <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider block">Dias por Semana</span>
                                            <Slider value={calcDays} onValueChange={setCalcDays} min={1} max={7} step={1} className="py-2" />
                                            <div className="text-right text-xs font-bold text-blue-700">{calcDays[0]} dias</div>
                                        </div>
                                        <div className="space-y-2">
                                            <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider block">Horas por Visita</span>
                                            <Slider value={calcHours} onValueChange={setCalcHours} min={2} max={12} step={1} className="py-2" />
                                            <div className="text-right text-xs font-bold text-blue-700">{calcHours[0]} horas</div>
                                        </div>
                                    </div>
                                )}

                                <div className={`space-y-4 p-4 rounded-2xl border transition-colors ${estimate.flags.isVolumeVeryHigh ? 'bg-amber-50 border-amber-200' : estimate.flags.isVolumeHigh ? 'bg-green-50 border-green-200' : 'bg-slate-50 border-slate-100'}`}>
                                    <div className="flex justify-between items-baseline">
                                        <span className="text-xl sm:text-2xl font-bold text-slate-900">{monthlyVolume[0]} <span className="text-xs sm:text-sm font-normal text-slate-500">horas/mês</span></span>
                                        {estimate.flags.discountPercent > 0 && (
                                            <span className="text-[10px] sm:text-xs font-bold text-green-700 bg-green-100 px-2 sm:px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                                                <Percent className="w-3 h-3" /> 
                                                -{estimate.flags.discountPercent}%
                                            </span>
                                        )}
                                    </div>
                                    <Slider
                                        disabled={showCalculator}
                                        value={monthlyVolume}
                                        onValueChange={setMonthlyVolume}
                                        min={10}
                                        max={300}
                                        step={5}
                                        className={showCalculator ? "opacity-50" : ""}
                                    />
                                    <p className="text-[10px] sm:text-xs text-slate-500">
                                        {t("simulator.slider.hint", "Ajuste o volume total. Podes distribuir estas horas como quiseres.")}
                                    </p>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div 
                                key="pontual"
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                className="space-y-6"
                            >
                                <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-primary" /> Duração do Serviço
                                </label>
                                
                                <div className={`space-y-4 p-4 rounded-2xl border transition-colors ${estimate.flags.isShortShift ? 'bg-orange-50 border-orange-200' : estimate.flags.isLongShift ? 'bg-green-50 border-green-200' : 'bg-slate-50 border-slate-100'}`}>
                                    <div className="flex justify-between items-baseline">
                                        <span className="text-xl sm:text-2xl font-bold text-slate-900">{singleDuration[0]} <span className="text-xs sm:text-sm font-normal text-slate-500">horas</span></span>
                                        {estimate.flags.isLongShift && (
                                            <span className="text-[10px] sm:text-xs font-bold text-green-700 bg-green-100 px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                                                <Percent className="w-3 h-3" /> 
                                                -15%
                                            </span>
                                        )}
                                    </div>
                                    <Slider
                                        value={singleDuration}
                                        onValueChange={setSingleDuration}
                                        min={1}
                                        max={24}
                                        step={1}
                                    />
                                    {estimate.flags.isShortShift && (
                                        <div className="flex items-center gap-2 text-[10px] sm:text-xs text-orange-600 font-medium">
                                            <Car className="w-3 h-3" />
                                            <span>Taxa de curta duração aplicada</span>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
              </div>

              {/* COLUNA DIREITA: RESULTADOS */}
              <div className="md:col-span-5 bg-slate-900 text-white p-6 sm:p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                
                <div className="space-y-6 md:space-y-8 relative z-10">
                  <div>
                    <h3 className="text-[10px] font-bold text-primary uppercase tracking-widest mb-3 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4" />
                        Estimativa de Preço
                    </h3>
                    
                    <div className="flex flex-col gap-1">
                        {/* PREÇO ANCORA (RISCADO) */}
                        {estimate.flags.discountPercent > 0 && (
                            <div className="text-slate-500 line-through text-base sm:text-lg font-medium">
                                {estimate.original.min}€ - {estimate.original.max}€
                            </div>
                        )}

                        <div className="flex items-baseline gap-2">
                            <span className="text-3xl xs:text-4xl md:text-5xl font-black text-white tracking-tight">
                            {estimate.hourly.min}€ - {estimate.hourly.max}€
                            </span>
                            <span className="text-base sm:text-lg text-slate-400 font-medium">/hora</span>
                        </div>
                      
                      {/* Badges de Feedback de Preço */}
                      <div className="flex flex-col gap-2 mt-4">
                          {/* BADGE DE TAXA NOTURNA (PRIORITÁRIA) */}
                          {estimate.flags.isNight && (
                             <div className="flex items-center gap-2 text-[10px] sm:text-xs text-purple-300 bg-purple-900/40 p-2 rounded-lg border border-purple-500/50">
                                <Moon className="w-3 h-3" />
                                <span className="font-semibold">Taxa Noturna/Fim-de-Semana (+25%)</span>
                             </div>
                          )}

                          {estimate.flags.isVolumeVeryHigh && (
                             <div className="flex items-center gap-2 text-[10px] sm:text-xs text-amber-300 bg-amber-900/40 p-2 rounded-lg border border-amber-500/50">
                                <Sparkles className="w-3 h-3" />
                                <span className="font-semibold">{estimate.flags.discountLabel}: -15%</span>
                             </div>
                          )}
                          {estimate.flags.isVolumeHigh && !estimate.flags.isVolumeVeryHigh && (
                             <div className="flex items-center gap-2 text-[10px] sm:text-xs text-green-300 bg-green-900/40 p-2 rounded-lg border border-green-500/50">
                                <TrendingDown className="w-3 h-3" />
                                <span className="font-semibold">{estimate.flags.discountLabel}: -10%</span>
                             </div>
                          )}
                          {estimate.flags.isLongShift && frequency === "pontual" && (
                             <div className="flex items-center gap-2 text-[10px] sm:text-xs text-green-300 bg-green-900/40 p-2 rounded-lg border border-green-500/50">
                                <BatteryCharging className="w-3 h-3" />
                                <span className="font-semibold">{estimate.flags.discountLabel}: -15%</span>
                             </div>
                          )}
                          {estimate.flags.isUrgency && !estimate.flags.isLongShift && (
                             <div className="flex items-center gap-2 text-[10px] sm:text-xs text-blue-300 bg-blue-900/40 p-2 rounded-lg border border-blue-500/50">
                                <AlertCircle className="w-3 h-3" />
                                <span>Preço Base (Sem fidelização)</span>
                             </div>
                          )}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 md:pt-8 border-t border-slate-700">
                    <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                        {frequency === "recorrente" ? "Total Estimado Mensal" : "Total do Serviço"}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                        {estimate.total.min}€ - {estimate.total.max}€
                      </span>
                    </div>
                    {frequency === "recorrente" && (
                         <p className="text-[10px] text-slate-500 mt-2">
                             *Valor indicativo baseado em {monthlyVolume[0]} horas.
                         </p>
                    )}
                  </div>
                </div>

                <div className="w-full space-y-3 pt-6 relative z-10">
                  <Button size="lg" className="w-full h-12 sm:h-14 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold shadow-lg shadow-primary/20">
                    {t("simulator.cta")}
                  </Button>
                  <p className="text-[10px] text-slate-400 leading-relaxed italic text-center">
                    {t("simulator.disclaimer")}
                  </p>
                </div>
              </div>

            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}