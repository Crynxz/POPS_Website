import React, { useState, useEffect } from 'react';
import { Activity, Battery, Wifi, Signal } from 'lucide-react';
import { Caregiver } from './types';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface DashboardHeaderProps {
  caregiver: Caregiver;
}

export default function DashboardHeader({ caregiver }: DashboardHeaderProps) {
  const [currentTime, setCurrentTime] = useState("09:41");

  useEffect(() => {
    const now = new Date();
    setCurrentTime(`${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`);

    const timer = setInterval(() => {
        const d = new Date();
        setCurrentTime(`${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`);
    }, 60000); // Update every minute
    return () => clearInterval(timer);
  }, []);

  // Get initials for fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  };

  return (
    <div className="bg-slate-900 text-white pt-2 px-5 pb-5 relative overflow-hidden shrink-0">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
      
      {/* Status Bar */}
      <div className="flex justify-between items-center h-7 mb-4 relative z-10">
        <span className="text-[12px] font-medium ml-2">{currentTime}</span>
        <div className="flex items-center gap-1.5 mr-2">
          <Signal size={12} />
          <Wifi size={12} />
          <div className="flex items-center gap-1">
            <span className="text-[10px] font-medium">{caregiver.battery}</span>
            <Battery size={12} className="rotate-0" />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 relative z-10">
        <div className="relative">
          <Avatar className="w-12 h-12 border-2 border-green-400">
            <AvatarImage src={caregiver.photo} alt={caregiver.name} className="object-cover" />
            <AvatarFallback className="bg-slate-700 text-slate-200 text-xs font-bold">
              {getInitials(caregiver.name)}
            </AvatarFallback>
          </Avatar>
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-slate-900 rounded-full animate-pulse z-20"></span>
        </div>
        <div className="min-w-0">
          <h3 className="font-semibold text-sm leading-tight truncate text-slate-100">{caregiver.name}</h3>
          <div className="flex items-center gap-2 mt-1">
             <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-green-500/20 text-green-400 text-[8px] font-bold uppercase tracking-wider border border-green-500/20">
                <Activity size={8} className="animate-pulse" />
                Ao Vivo
             </span>
             <span className="text-slate-400 text-[8px] uppercase tracking-widest font-medium">Sessão Ativa</span>
          </div>
        </div>
      </div>
    </div>
  );
}
