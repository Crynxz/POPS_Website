import { CheckCircle, Heart, Stethoscope, Zap } from "lucide-react";

interface HeroSectionProps {
  onSelectProfile?: (profile: "familia" | "cuidador") => void;
}

export default function HeroSection({ onSelectProfile }: HeroSectionProps) {
  return (
    <section className="hero fade-in-section" id="inicio">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-text">
            <span>Brevemente Disponível</span>
            <h1>Cuidadores verificados, <span className="highlight">à distância de um clique</span>.</h1>
            <p>Mais de 500 mil famílias portuguesas procuram soluções. A POPS conecta-o a profissionais certificados, com antecedentes verificados e garantia de qualidade. Inscreva-se na lista de espera e garanta acesso antecipado com <strong>descontos exclusivos de lançamento</strong>.</p>

            <div className="hero-cta" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
              <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Qual é o seu objetivo?</p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#waitlist" onClick={() => onSelectProfile?.('familia')} className="btn btn-primary" style={{ padding: '1rem 2rem', boxShadow: '0 10px 25px rgba(32, 128, 141, 0.3)' }}>
                  <Heart className="w-4 h-4 mr-2" /> Preciso de Cuidados
                </a>
                <a href="#waitlist" onClick={() => onSelectProfile?.('cuidador')} className="btn btn-secondary" style={{ padding: '1rem 2rem', background: 'transparent', borderWidth: '2px' }}>
                  <Stethoscope className="w-4 h-4 mr-2" /> Quero Trabalhar
                </a>
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Zap size={14} style={{ color: 'var(--secondary)' }} /> Junte-se a +500 pessoas na lista de espera hoje.
              </div>
            </div>

            <div className="hero-badges">
                <div className="hero-badge">
                    <CheckCircle size={18} className="text-success" />
                    Verificação Criminal Rigorosa
                </div>
                <div className="hero-badge">
                    <CheckCircle size={18} className="text-success" />
                    Certificações Validadas
                </div>
                <div className="hero-badge">
                    <CheckCircle size={18} className="text-success" />
                    Suporte 24/7
                </div>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=700&fit=crop" alt="Cuidadora POPS a auxiliar idoso" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
