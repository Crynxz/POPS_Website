import Header from "@/components/Header";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Shield, Award, Handshake, Smartphone, Target, Eye, ArrowRight } from "lucide-react";

export default function AboutPage() {
  useScrollAnimation();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--bg-body)' }}>
      
      {/* AQUI ESTÁ A MUDANÇA: Usamos o componente em vez de código duplicado */}
      <Header />

      <main style={{ flex: 1 }}>
        {/* ... o resto do seu código (Hero Section, Story Section, etc) ... */}
        {/* Hero Section */}
        <section className="hero fade-in-section" style={{ padding: '8rem 0 6rem', position: 'relative', overflow: 'hidden' }}>
          <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <span style={{ 
              display: 'inline-block', 
              padding: '0.5rem 1rem', 
              borderRadius: '50px', 
              backgroundColor: 'rgba(14, 105, 115, 0.1)', 
              color: 'var(--primary)', 
              fontWeight: 'bold', 
              fontSize: '0.85rem', 
              marginBottom: '1.5rem',
              border: '1px solid rgba(14, 105, 115, 0.2)'
            }}>
              A Nossa Missão
            </span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '1.5rem', color: 'var(--text-main)', maxWidth: '900px', marginInline: 'auto' }}>
              Mais do que uma app, <br/>
              <span className="highlight" style={{ background: 'linear-gradient(120deg, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>uma comunidade de cuidado.</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-body)', lineHeight: 1.6, maxWidth: '700px', margin: '0 auto' }}>
              Nascemos para resolver a "crise dos cuidadores" em Portugal, conectando famílias a profissionais qualificados através da tecnologia e confiança.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="fade-in-section" style={{ padding: '5rem 0', backgroundColor: 'var(--bg-surface)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>A Nossa História</h2>
                <div style={{ fontSize: '1.1rem', color: 'var(--text-body)', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <p>Portugal enfrenta um desafio demográfico sem precedentes. Com o envelhecimento da população e a fragmentação das estruturas familiares tradicionais, encontrar apoio domiciliário tornou-se uma tarefa árdua e incerta.</p>
                  <p>A <strong>POPS</strong> surgiu para preencher este vazio. Rejeitamos a informalidade e a insegurança do mercado tradicional.</p>
                  <p>Acreditamos que a tecnologia deve servir para humanizar relações, garantindo que cada idoso ou dependente recebe o cuidado digno que merece, e que cada profissional é valorizado pelo seu mérito.</p>
                </div>
              </div>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'var(--primary)', opacity: 0.1, borderRadius: '24px', transform: 'rotate(3deg)' }}></div>
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=60" 
                  alt="Equipa POPS" 
                  style={{ position: 'relative', width: '100%', borderRadius: '24px', boxShadow: 'var(--shadow-lg)' }} 
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="fade-in-section" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-body)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              <div style={{ background: 'white', padding: '3rem', borderRadius: '16px', borderTop: '4px solid var(--primary)', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ width: '50px', height: '50px', background: 'var(--bg-surface-alt)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--primary)' }}>
                  <Target size={28} />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>A Nossa Missão</h3>
                <p style={{ color: 'var(--text-body)' }}>Conectar doentes crónicos, idosos e pessoas em situação de dependência a cuidadores qualificados, verificados e certificados, superando as barreiras de acesso e transparência.</p>
              </div>
              <div style={{ background: 'white', padding: '3rem', borderRadius: '16px', borderTop: '4px solid var(--secondary)', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ width: '50px', height: '50px', background: 'var(--bg-surface-alt)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--secondary)' }}>
                  <Eye size={28} />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>A Nossa Visão</h3>
                <p style={{ color: 'var(--text-body)' }}>Ser o motor da transformação digital do apoio domiciliário em Portugal. Queremos evoluir de um modelo fragmentado para um ecossistema integrado com o SNS e Famílias.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="fade-in-section" style={{ padding: '6rem 0', backgroundColor: '#111827', color: 'white' }}>
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '4rem', color: 'white' }}>Os Nossos Pilares</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: '64px', height: '64px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--secondary)' }}>
                  <Shield size={32} />
                </div>
                <h3 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '0.75rem' }}>Segurança Absoluta</h3>
                <p style={{ color: '#9CA3AF', fontSize: '0.95rem' }}>Não abdicamos da verificação. Registo criminal, certificados e identificação são validados manualmente.</p>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{ width: '64px', height: '64px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--secondary)' }}>
                  <Award size={32} />
                </div>
                <h3 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '0.75rem' }}>Mérito e Qualidade</h3>
                <p style={{ color: '#9CA3AF', fontSize: '0.95rem' }}>O nosso sistema de Ranking recompensa os melhores profissionais, garantindo a qualidade do serviço.</p>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{ width: '64px', height: '64px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--secondary)' }}>
                  <Handshake size={32} />
                </div>
                <h3 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '0.75rem' }}>Transparência</h3>
                <p style={{ color: '#9CA3AF', fontSize: '0.95rem' }}>Acabaram-se os preços surpresa. Definimos intervalos claros para que saiba exatamente o que contrata.</p>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{ width: '64px', height: '64px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--secondary)' }}>
                  <Smartphone size={32} />
                </div>
                <h3 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '0.75rem' }}>Inovação Humanizada</h3>
                <p style={{ color: '#9CA3AF', fontSize: '0.95rem' }}>Usamos IA e GPS para segurança, mas o foco final é sempre a relação humana.</p>
              </div>

            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="fade-in-section" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-surface)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ marginBottom: '1rem' }}>Quem Faz Acontecer</h2>
              <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>Uma equipa multidisciplinar unida pelo propósito de dignificar o cuidado.</p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem' }}>
              {[
                { name: "Ana", role: "CEO", desc: "Visão Estratégica & Relações Institucionais" },
                { name: "Gonçalo", role: "CFO", desc: "Gestão Financeira & Planeamento" },
                { name: "João", role: "CTO", desc: "Tecnologia & Infraestrutura" },
                { name: "Gustavo", role: "CMO", desc: "Marketing & Comunicação" },
                { name: "Guilherme", role: "COO", desc: "Operações & Compliance" }
              ].map((member) => (
                <div key={member.name} style={{ textAlign: 'center', width: '220px' }}>
                  <div style={{ 
                    width: '120px', 
                    height: '120px', 
                    borderRadius: '50%', 
                    margin: '0 auto 1.5rem', 
                    overflow: 'hidden', 
                    border: '3px solid var(--bg-surface-alt)',
                    boxShadow: 'var(--shadow-md)'
                  }}>
                    <img 
                      src={`https://ui-avatars.com/api/?name=${member.name}&background=0E6973&color=fff&size=128`} 
                      alt={member.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  </div>
                  <div style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '0.25rem' }}>{member.role}</div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{member.name}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', lineHeight: '1.4' }}>{member.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="fade-in-section" style={{ padding: '5rem 0', background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)', color: 'white', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>Faça parte desta mudança</h2>
            <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '2.5rem', fontSize: '1.2rem', maxWidth: '700px', marginInline: 'auto' }}>
              Seja para encontrar o cuidador ideal ou para exercer a sua profissão com dignidade.
            </p>
            <a href="/#waitlist" className="btn" style={{ backgroundColor: 'white', color: 'var(--primary)', padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              Começar Agora <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">POPS</div>
              <p className="footer-desc">
                Intermediário de Oportunidades para Profissionais de Saúde. Transformamos o cuidado domiciliário em Portugal através de tecnologia, confiança e profissionalismo.
              </p>
            </div>

            <div className="footer-links">
              <h4>Plataforma</h4>
              <ul>
                <li><a href="/#waitlist">Lista de Espera</a></li>
                <li><a href="/#diferenciais">O que Diferencia</a></li>
                <li><a href="/#precos">Preços</a></li>
                <li><a href="/#seguranca">Segurança</a></li>
              </ul>
            </div>

            <div className="footer-links">
              <h4>Comunidade</h4>
              <ul>
                <li><a href="/#waitlist">Para Cuidadores</a></li>
                <li><a href="/#waitlist">Para Famílias</a></li>
                <li><a href="#">Blog (Brevemente)</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>

            <div className="footer-links">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Política de Privacidade</a></li>
                <li><a href="#">Termos de Uso</a></li>
                <li><a href="#">Conformidade RGPD</a></li>
                <li><a href="#">Contactos</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            &copy; 2025 POPS - Intermediário de Cuidados Domiciliários. Todos os direitos reservados. | Portugal
          </div>
        </div>
      </footer>
    </div>
  );
}