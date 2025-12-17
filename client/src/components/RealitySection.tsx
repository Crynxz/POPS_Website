import { HandHeart, Accessibility, Stethoscope, Home, Check } from "lucide-react";

export default function RealitySection() {
  return (
    <section className="reality-section fade-in-section" id="mercado" style={{ padding: '6rem 0', backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <span className="highlight" style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 700 }}>Uma Realidade Transversal</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-dark)', marginBottom: '1rem' }}>O cuidado ao domicílio não é apenas sobre envelhecer.<br />É sobre viver com qualidade.</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto' }}>Em Portugal, milhões de pessoas enfrentam desafios diários que exigem apoio especializado. A POPS existe para todas elas, em qualquer fase da vida.</p>
        </div>

        <div className="reality-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
            {/* Card 1 */}
            <div className="reality-card" style={{ background: 'white', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid var(--primary)', boxShadow: 'var(--shadow-sm)' }}>
                <div className="icon-box" style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>
                    <HandHeart size={40} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 600 }}>Séniores e Longevidade</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-light)' }}>Apoio para manter a independência em casa, desde a companhia até cuidados de higiene e medicação.</p>
            </div>

            {/* Card 2 */}
            <div className="reality-card" style={{ background: 'white', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid var(--secondary)', boxShadow: 'var(--shadow-sm)' }}>
                <div className="icon-box" style={{ marginBottom: '1.5rem', color: 'var(--secondary)' }}>
                    <Accessibility size={40} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 600 }}>Deficiência e Inclusão</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-light)' }}>Suporte especializado para quaisquer tipos de deficiências físicas ou intelectuais, qualquer idade.</p>
            </div>

            {/* Card 3 */}
            <div className="reality-card" style={{ background: 'white', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid var(--success)', boxShadow: 'var(--shadow-sm)' }}>
                <div className="icon-box" style={{ marginBottom: '1.5rem', color: 'var(--success)' }}>
                    <Stethoscope size={40} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 600 }}>Saúde e Pós-Operatório</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-light)' }}>Recuperação de cirurgias, acidentes ou gestão de doenças crónicas em qualquer idade ativa.</p>
            </div>

            {/* Card 4 */}
            <div className="reality-card" style={{ background: 'white', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid #9b59b6', boxShadow: 'var(--shadow-sm)' }}>
                <div className="icon-box" style={{ marginBottom: '1.5rem', color: '#9b59b6' }}>
                    <Home size={40} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 600 }}>Apoio Doméstico</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-light)' }}>Ajuda nas tarefas domésticas, refeições e organização para famílias que precisam de focar no que importa.</p>
            </div>
        </div>

       

        <div className="text-center" style={{ marginTop: '3rem' }}>
             <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--text-body)' }}>A sua situação enquadra-se nestas categorias?</p>
             <a href="#waitlist" className="btn btn-primary">Encontrar o Apoio Certo</a>
        </div>
      </div>
    </section>
  );
}
