import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function VettingSection() {
  return (
    <section className="vetting-section fade-in-section" id="seguranca">
        <div className="container">
            <div className="vetting-header">
                <span className="subtitle">Processo em 4 Etapas</span>
                <h2>Segurança não é só <span className="highlight-text">uma Promessa</span>.<br/>É um protocolo.</h2>
                <p>O mercado informal coloca em risco famílias. A POPS implementa verificação rigorosa—obrigatória, documentada e transparente.</p>
            </div>
    
            <div className="vetting-steps">
                <div className="v-step">
                    <div className="v-step-icon">01</div>
                    <div className="v-content">
                        <span className="v-badge">Identidade Real</span>
                        <h3>Validação Documental Rigorosa</h3>
                        <p>Verificamos manualmente Cartão de Cidadão, NIF, e dados de residência. Todos os cuidadores têm identidade confirmada e rastreável.</p>
                    </div>
                </div>
    
                <div className="v-step">
                    <div className="v-step-icon">02</div>
                    <div className="v-content">
                        <span className="v-badge">Segurança Crítica</span>
                        <h3>Registo Criminal Obrigatório</h3>
                        <p>Exigimos consulta do Registo Criminal específico para contacto com populações vulneráveis. Repetido anualmente para garantir conformidade contínua.</p>
                    </div>
                </div>
    
                <div className="v-step">
                    <div className="v-step-icon">03</div>
                    <div className="v-content">
                        <span className="v-badge">Qualificação Real</span>
                        <h3>Certificações Validadas</h3>
                        <p>Para serviços Completos e Premium, contactamos escolas e Ordens Profissionais para confirmar a autenticidade de diplomas e certificações.</p>
                    </div>
                </div>
    
                <div className="v-step">
                    <div className="v-step-icon">04</div>
                    <div className="v-content">
                        <span className="v-badge">Qualidade Contínua</span>
                        <h3>Monitorização e Avaliações</h3>
                        <p>Cuidadores com classificação baixa recebem intervenção ou remoção. O sistema garante que apenas os melhores continuam a trabalhar.</p>
                    </div>
                </div>
            </div>
    
            <div className="text-center" style={{ marginTop: '4rem' }}>
                <a href="#waitlist">
                    <Button className="btn btn-primary">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Quero Cuidadores Verificados
                    </Button>
                </a>
            </div>
        </div>
    </section>
  );
}
