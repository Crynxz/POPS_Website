import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { CheckCircle, Clock, Shield, GraduationCap, Wallet, Heart, ArrowRight, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CareersPage() {
  useScrollAnimation();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--bg-body)' }}>
      {/* HEADER */}
      <Header />

      <main style={{ flex: 1 }}>
        {/* Hero Section */}
        <section className="hero fade-in-section" style={{ padding: '8rem 0 6rem', position: 'relative', overflow: 'hidden' }}>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
              <div>
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
                  Para Profissionais de Saúde
                </span>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: 1.1, marginBottom: '1.5rem', color: 'var(--text-main)' }}>
                  Valorizamos quem cuida. <br/>
                  <span className="highlight" style={{ background: 'linear-gradient(120deg, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Trabalhe com dignidade.</span>
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '2rem' }}>
                  Junte-se à rede POPS e tenha acesso a pagamentos garantidos, horários flexíveis e uma plataforma que protege o seu trabalho.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a href="/#waitlist" className="btn btn-primary" onClick={() => (window as any).selectProfile?.('cuidador')}>
                    Candidatar-me Agora
                  </a>
                  <a href="#beneficios" className="btn btn-secondary">
                    Ver Benefícios
                  </a>
                </div>
              </div>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'var(--secondary)', opacity: 0.1, borderRadius: '24px', transform: 'rotate(-3deg)' }}></div>
                <img 
                  src="https://images.unsplash.com/photo-1584515933487-98db75f59342?w=800&auto=format&fit=crop&q=60" 
                  alt="Enfermeiro profissional" 
                  style={{ position: 'relative', width: '100%', borderRadius: '24px', boxShadow: 'var(--shadow-lg)' }} 
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section id="beneficios" className="fade-in-section" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-surface)' }}>
          <div className="container">
            <div className="text-center mb-16">
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Porquê escolher a POPS?</h2>
              <p style={{ color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto' }}>Acabou a precariedade. Oferecemos a estrutura profissional que você merece.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                { icon: Wallet, title: "Pagamentos Garantidos", desc: "Nunca mais corra atrás de pagamentos. O valor é cativo antes do serviço e libertado automaticamente para a sua conta." },
                { icon: Clock, title: "Flexibilidade Total", desc: "Você define a sua agenda e a sua área de atuação. Trabalhe as horas que quiser, onde quiser." },
                { icon: Shield, title: "Segurança & Seguros", desc: "Todos os serviços incluem seguro de responsabilidade civil. Trabalhe protegido contra imprevistos." },
                { icon: GraduationCap, title: "Formação Contínua", desc: "Acesso exclusivo a cursos de especialização (Demência, Mobilidade) para subir de nível e ganhar mais." },
                { icon: Star, title: "Carreira & Ranking", desc: "O seu mérito é recompensado. Boas avaliações permitem subir de categoria (Bronze a Diamante) e aumentar o seu preço hora." },
                { icon: Heart, title: "Apoio Humano", desc: "Não é apenas uma app. Temos uma equipa de suporte disponível para mediar e ajudar em qualquer situação." }
              ].map((item, i) => (
                <div key={i} style={{ padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-light)', background: 'var(--bg-body)', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div style={{ width: '50px', height: '50px', background: 'rgba(14, 105, 115, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--primary)' }}>
                    <item.icon size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: '1.5' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="fade-in-section" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-body)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
              <div style={{ order: 2 }}> {/* Image on right for desktop */}
                 <div style={{ background: 'white', padding: '3rem', borderRadius: '24px', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border-light)' }}>
                    <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <CheckCircle className="text-primary" /> Requisitos Mínimos
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <li style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                        <div style={{ width: '24px', height: '24px', background: '#e6f4f1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--primary)', fontSize: '0.8rem', fontWeight: 'bold' }}>1</div>
                        <div><strong>Identificação Válida:</strong> Cartão de Cidadão ou Título de Residência válido.</div>
                      </li>
                      <li style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                        <div style={{ width: '24px', height: '24px', background: '#e6f4f1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--primary)', fontSize: '0.8rem', fontWeight: 'bold' }}>2</div>
                        <div><strong>Registo Criminal:</strong> Limpo e atualizado (para contacto com menores/idosos).</div>
                      </li>
                      <li style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                        <div style={{ width: '24px', height: '24px', background: '#e6f4f1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--primary)', fontSize: '0.8rem', fontWeight: 'bold' }}>3</div>
                        <div><strong>Experiência ou Formação:</strong> Comprovativo de curso (Auxiliar, Enfermagem) ou referências verificáveis.</div>
                      </li>
                      <li style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                        <div style={{ width: '24px', height: '24px', background: '#e6f4f1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--primary)', fontSize: '0.8rem', fontWeight: 'bold' }}>4</div>
                        <div><strong>Smartphone:</strong> Android ou iOS para utilizar a App POPS.</div>
                      </li>
                    </ul>
                 </div>
              </div>
              <div style={{ order: 1 }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>O que procuramos?</h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-body)', marginBottom: '1.5rem' }}>
                  Não procuramos apenas currículos, procuramos vocação. Se tem paixão por cuidar, responsabilidade e vontade de evoluir, a POPS é o seu lugar.
                </p>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-body)', marginBottom: '2.5rem' }}>
                  Aceitamos desde estudantes de saúde a auxiliares experientes e enfermeiros, adaptando as oportunidades ao seu nível de qualificação.
                </p>
                <a href="/#waitlist" className="btn btn-primary" onClick={() => (window as any).selectProfile?.('cuidador')}>
                  Iniciar Candidatura <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="fade-in-section" style={{ padding: '5rem 0', background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)', color: 'white', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>Pronto para valorizar o seu trabalho?</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2.5rem', fontSize: '1.2rem', maxWidth: '700px', marginInline: 'auto' }}>
              A inscrição é gratuita. Junte-se à lista de espera e seja um dos primeiros cuidadores verificados da POPS.
            </p>
            <a href="/#waitlist" className="btn" style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '1rem 2.5rem', fontSize: '1.1rem', border: 'none' }} onClick={() => (window as any).selectProfile?.('cuidador')}>
              Inscrever-me como Profissional
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}