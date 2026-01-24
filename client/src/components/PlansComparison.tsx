import React from 'react';
import { Check, X, Shield, Star, Zap } from 'lucide-react';

export default function PlansComparison() {
  
  const featuresComparison = [
    // GRUPO 1: O ESSENCIAL (Incluído em TODOS os planos)
    // Ordenado para mostrar todos os "Checks" no topo da tabela
    { name: "Notificações em tempo real sobre o serviço", basico: true, completo: true, especializado: true },
     { name: "Monitorização GPS + Chat", basico: true, completo: true, especializado: true },
    { name: "Companhia e Estímulo", basico: true, completo: true, especializado: true },
    { name: "Acompanhamento ao Exterior", basico: true, completo: true, especializado: true },
    { name: "Preparação de Lanches Leves", basico: true, completo: true, especializado: true },
    { name: "Manutenção do Espaço (Arrumação)", basico: true, completo: true, especializado: true },
    { name: "Notificações em Tempo Real", basico: true, completo: true, especializado: true },
     { name: "Medicação Básica", basico: true, completo: true, especializado: true },
    
    // GRUPO 2: APOIO FÍSICO E DOMÉSTICO (Excluído do Básico)
    // Aqui começam os "X" na primeira coluna (Básico)
    { name: "Higiene Pessoal (Banho)", basico: false, completo: true, especializado: true },
    { name: "Transferências Seguras", basico: false, completo: true, especializado: true },
    { name: "Confeção de Refeições Completas", basico: false, completo: true, especializado: true },
    { name: "Medicação Sensível", basico: false, completo: true, especializado: true },
    { name: "Tratamento de Roupa", basico: false, completo: true, especializado: true },
    

    // GRUPO 3: ESPECIALIZAÇÃO CLÍNICA (Exclusivo Especializado)
    // Aqui começam os "X" nas duas primeiras colunas (Básico e Completo)
    { name: "Cuidadores Elite (Top 5%)", basico: false, completo: false, especializado: true },
    { name: "Especialização Alzheimer/Demência", basico: false, completo: false, especializado: true },
    { name: "Apoio à Reabilitação/Mobilidade", basico: false, completo: false, especializado: true },
    { name: "Prevenção de Úlceras", basico: false, completo: false, especializado: true },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden my-12">
      <div className="p-8 border-b border-slate-100 text-center">
        <h2 className="text-2xl font-bold text-slate-900">Comparação Detalhada</h2>
        <p className="text-slate-500 mt-2">Veja a evolução de funcionalidades por plano</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="bg-slate-50/50">
              <th className="p-4 text-left text-sm font-semibold text-slate-500 w-1/3 pl-8">Funcionalidade</th>
              <th className="p-4 text-center w-1/5">
                <div className="flex flex-col items-center gap-1">
                  <Shield className="w-5 h-5 text-slate-400" />
                  <span className="font-bold text-slate-900">Básico</span>
                </div>
              </th>
              <th className="p-4 text-center w-1/5 bg-blue-50/30 border-x border-blue-100">
                <div className="flex flex-col items-center gap-1">
                  <Star className="w-5 h-5 text-blue-600" />
                  <span className="font-bold text-blue-900">Completo</span>
                </div>
              </th>
              <th className="p-4 text-center w-1/5">
                <div className="flex flex-col items-center gap-1">
                  <Zap className="w-5 h-5 text-purple-500" />
                  <span className="font-bold text-slate-900">Especializado</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {featuresComparison.map((feature, idx) => (
              <tr key={idx} className="hover:bg-slate-50 transition-colors">
                <td className="p-4 text-sm font-medium text-slate-700 pl-8">{feature.name}</td>
                
                {/* Coluna Básico */}
                <td className="p-4 text-center">
                  {feature.basico ? 
                    <Check className="w-5 h-5 text-green-500 mx-auto" /> : 
                    <div className="w-5 h-5 mx-auto flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div> 
                        {/* Dica de Design: Em vez de um X agressivo, usei um ponto cinza para "não incluído", 
                            mas se preferir o X, basta descomentar a linha abaixo e apagar a div acima */}
                        {/* <X className="w-5 h-5 text-slate-300 mx-auto" /> */}
                    </div>
                  }
                </td>
                
                {/* Coluna Completo */}
                <td className="p-4 text-center bg-blue-50/30 border-x border-blue-100">
                  {feature.completo ? 
                    <Check className="w-5 h-5 text-blue-600 mx-auto" strokeWidth={2.5} /> : 
                    <div className="w-5 h-5 mx-auto flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                    </div>
                  }
                </td>
                
                {/* Coluna Especializado */}
                <td className="p-4 text-center">
                  {feature.especializado ? 
                    <Check className="w-5 h-5 text-purple-500 mx-auto" /> : 
                    <X className="w-5 h-5 text-slate-300 mx-auto" /> // Aqui mantemos X ou ponto, conforme preferência
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}