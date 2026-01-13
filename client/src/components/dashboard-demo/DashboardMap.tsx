import React from 'react';
import { MapPin } from 'lucide-react';

interface DashboardMapProps {
  location: string;
}

export default function DashboardMap({ location }: DashboardMapProps) {
  return (
    <div className="px-5 pb-5 bg-slate-900 shrink-0">
        <div className="w-full h-36 bg-slate-800 rounded-xl relative overflow-hidden group cursor-pointer border border-slate-700/50 shadow-inner">
            <div className="absolute inset-0 bg-slate-800 opacity-60"></div>
            {/* Imagem de placeholder do mapa - using a static map lookalike or gradient if image fails */}
            <div className="absolute inset-0 bg-slate-700 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
            
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                    <div className="absolute -inset-4 bg-blue-500/30 rounded-full animate-ping"></div>
                    <div className="relative bg-white text-slate-900 px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-2 transform group-hover:-translate-y-1 transition-transform">
                        <MapPin size={14} className="text-blue-600 fill-blue-600" />
                        <span className="truncate max-w-[150px]">{location}</span>
                    </div>
                </div>
            </div>
            
            {/* Simulated UI elements for map */}
            <div className="absolute bottom-2 right-2 flex flex-col gap-1">
                <div className="w-6 h-6 bg-slate-700/80 rounded flex items-center justify-center text-white font-bold text-xs hover:bg-slate-600">+</div>
                <div className="w-6 h-6 bg-slate-700/80 rounded flex items-center justify-center text-white font-bold text-xs hover:bg-slate-600">-</div>
            </div>
        </div>
    </div>
  );
}
