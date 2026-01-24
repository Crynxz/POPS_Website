import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

export default function DashboardActions() {
  return (
    <div className="p-4 bg-white grid grid-cols-2 gap-3 shrink-0 mt-auto">
        <button 
          className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-50 text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-all border border-slate-200 hover:border-blue-200 group cursor-pointer"
          aria-label="Abrir Chat"
        >
          <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
          <span className="text-xs font-bold">Chat</span>
        </button>
        <button 
          className="flex items-center justify-center gap-2 p-3 rounded-xl bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-all border border-red-100 hover:border-red-600 shadow-sm hover:shadow-red-200 group cursor-pointer"
          aria-label="Ligar SOS"
        >
          <Phone size={18} className="group-hover:rotate-12 transition-transform" />
          <span className="text-xs font-bold">SOS</span>
        </button>
      </div>
  );
}
