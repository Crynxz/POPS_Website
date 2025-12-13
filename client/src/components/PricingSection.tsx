import { Button } from "@/components/ui/button";

export default function PricingSection() {
  return (
    <section className="tiers-section fade-in-section" id="precos">
        <div className="container">
            <div className="section-header">
                <h2>Planos de Cuidado <span className="highlight">(Previsão)</span></h2>
                <p>Flexibilidade total: pague apenas pelo que precisa. Desconto de até 30% em contratos de longa duração.</p>
            </div>

            <div className="tiers-grid">
                <div className="tier-card">
                    <h3>Cuidados Básicos</h3>
                    <p className="tier-desc">Ideal para companhia e apoio leve.</p>
                    <div className="tier-price">9€ - 13€<span>/hora</span></div>
                    <ul className="tier-features">
                        <li>Companhia social e conversa</li>
                        <li>Supervisionamento de atividades</li>
                        <li>Pequenas ajudas com refeições</li>
                        <li>Limpeza leve</li>
                        <li>Acompanhamento a consultas</li>
                    </ul>
                    <a href="#waitlist" className="w-full">
                        <Button variant="secondary" className="w-full">Tenho Interesse</Button>
                    </a>
                </div>

                <div className="tier-card featured">
                    <span className="tier-tag">Mais Popular</span>
                    <h3>Cuidados Completos</h3>
                    <p className="tier-desc">Higiene, mobilidade e gestão doméstica.</p>
                    <div className="tier-price">14€ - 20€<span>/hora</span></div>
                    <ul className="tier-features">
                        <li><strong>Tudo do plano Básico, mais:</strong></li>
                        <li>Higiene pessoal completa</li>
                        <li>Apoio na mobilidade</li>
                        <li>Ajuda a vestir/despir</li>
                        <li>Preparação de refeições</li>
                        <li>Gestão de roupa e limpeza</li>
                    </ul>
                    <a href="#waitlist" className="w-full">
                        <Button className="w-full btn-primary">Pré-Inscrição</Button>
                    </a>
                </div>

                <div className="tier-card">
                    <h3>Premium</h3>
                    <p className="tier-desc">Pós-operatório, monitorização e especialização.</p>
                    <div className="tier-price">21€ - 30€+<span>/hora</span></div>
                    <ul className="tier-features">
                        <li><strong>Tudo do plano Completo, mais:</strong></li>
                        <li>Cuidadores com Certificação</li>
                        <li>Especialização em Alzheimer</li>
                        <li>Prevenção de úlceras</li>
                        <li>Equipamentos técnicos</li>
                        <li>Estimulação cognitiva</li>
                    </ul>
                    <a href="#waitlist" className="w-full">
                        <Button variant="secondary" className="w-full">Saber Mais</Button>
                    </a>
                </div>
            </div>

            <p className="tiers-disclaimer">
                <i className="fas fa-asterisk"></i> Preços meramente indicativos. Valores finais definidos no lançamento. Descontos de 20-30% em contratos mensais e de permanência.
            </p>
        </div>
    </section>
  );
}
