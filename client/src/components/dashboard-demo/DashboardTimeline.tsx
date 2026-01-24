import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { TimelineEvent } from './types';

interface DashboardTimelineProps {
  timeline: TimelineEvent[];
}

export default function DashboardTimeline({ timeline }: DashboardTimelineProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="bg-slate-50 border-b border-slate-100 flex-1 overflow-hidden flex flex-col min-h-0">
        <div 
            className="flex justify-between items-center p-4 cursor-pointer hover:bg-slate-100 transition-colors shrink-0" 
            onClick={() => setIsExpanded(!isExpanded)}
        >
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            Registo de Hoje
          </h4>
          {isExpanded ? <ChevronUp size={16} className="text-slate-400"/> : <ChevronDown size={16} className="text-slate-400"/>}
        </div>

        <div className={`transition-all duration-500 ease-in-out overflow-y-auto ${isExpanded ? 'opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="relative pl-6 pr-4 pb-6 space-y-6 pt-2">
            <div className="absolute left-[34px] top-2 bottom-6 w-0.5 bg-slate-200/80"></div>

            {timeline.map((event) => (
              <div key={event.id} className="relative flex gap-4 group">
                <div className={`
                  relative z-10 w-8 h-8 rounded-full flex items-center justify-center shrink-0 
                  border-[3px] border-slate-50 shadow-sm transition-transform group-hover:scale-110
                  ${event.type === 'check-in' ? 'bg-emerald-100 text-emerald-600' : ''}
                  ${event.type === 'medication' ? 'bg-blue-100 text-blue-600' : ''}
                  ${event.type === 'task' ? 'bg-indigo-100 text-indigo-600' : ''}
                  ${event.type === 'check-out' ? 'bg-slate-100 text-slate-600' : ''}
                  ${event.type === 'alert' ? 'bg-red-100 text-red-600' : ''}
                `}>
                  <event.icon size={14} strokeWidth={2.5} />
                </div>
                <div className="flex-1 bg-white p-3 rounded-lg border border-slate-200/60 shadow-sm group-hover:shadow-md group-hover:border-blue-200/60 transition-all min-w-0">
                  <div className="flex justify-between items-start gap-2 mb-1">
                    <span className="font-bold text-slate-800 text-sm truncate">{event.title}</span>
                    <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded shrink-0">{event.time}</span>
                  </div>
                  {event.description && (
                    <p className="text-xs text-slate-500 leading-relaxed font-medium line-clamp-2">
                        {event.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}
