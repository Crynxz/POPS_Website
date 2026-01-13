import React from 'react';
import { 
  MapPin, CheckCircle2, Pill, Utensils
} from 'lucide-react';
import DashboardHeader from './dashboard-demo/DashboardHeader';
import DashboardMap from './dashboard-demo/DashboardMap';
import DashboardTimeline from './dashboard-demo/DashboardTimeline';
import DashboardActions from './dashboard-demo/DashboardActions';
import { TimelineEvent, Caregiver } from './dashboard-demo/types';

export default function FamilyDashboardDemo() {
  const caregiver: Caregiver = {
    name: "Enf.ª Maria Silva",
    photo: "https://i.pravatar.cc/150?u=maria",
    status: "Em serviço",
    location: "Rua de Santa Catarina, Porto",
    battery: "85%"
  };

  const timeline: TimelineEvent[] = [
    { id: '1', time: '09:00', type: 'check-in', title: 'Check-in Realizado', description: 'Chegada ao local pontual.', icon: MapPin },
    { id: '2', time: '09:15', type: 'medication', title: 'Medicação Matinal', description: 'Toma de: 1x Aspirina, 1x Bisoprolol', icon: Pill },
    { id: '3', time: '09:45', type: 'task', title: 'Higiene Pessoal', description: 'Banho assistido completo. Correu bem.', icon: CheckCircle2 },
    { id: '4', time: '10:30', type: 'task', title: 'Pequeno Almoço', description: 'Papa de aveia e fruta. Comeu tudo.', icon: Utensils },
  ];

  return (
    <div className="w-full max-w-[320px] mx-auto h-[650px] flex flex-col bg-white rounded-[3.5rem] shadow-2xl overflow-hidden border-[12px] border-black transform transition-transform hover:scale-[1.02] duration-500 relative ring-1 ring-slate-200">
      {/* Notch simulation */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-36 bg-black rounded-b-3xl z-30"></div>
      
      {/* Screen content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader caregiver={caregiver} />
        <DashboardMap location={caregiver.location} />
        <DashboardTimeline timeline={timeline} />
        <DashboardActions />
      </div>

      {/* Home indicator */}
      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-300 rounded-full z-30"></div>
    </div>
  );
}
