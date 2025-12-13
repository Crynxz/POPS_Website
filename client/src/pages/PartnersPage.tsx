import { ArrowLeft, Mail, Handshake, Star, Award, Building2 } from "lucide-react";
import { Link } from "wouter";
import { useScrollAnimation } from "../hooks/use-scroll-animation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const partners = [
  {
    name: "CNIS",
    description: "Confederação Nacional das Instituições de Solidariedade. Parceiro chave na rede de IPSS e apoio social.",
    logoUrl: "https://via.placeholder.com/150/004AAD/FFFFFF?Text=CNIS",
    category: "Institucional",
  },
  {
    name: "Cruz Vermelha Portuguesa",
    description: "Referência mundial em socorrismo e apoio humanitário. Certificação de primeiros socorros.",
    logoUrl: "https://via.placeholder.com/150/CC0000/FFFFFF?Text=CVP",
    category: "Saúde & Socorro",
  },
  {
    name: "União das Misericórdias",
    description: "Representa as Santas Casas (UMP), com forte aposta na formação contínua de cuidados geriátricos.",
    logoUrl: "https://via.placeholder.com/150/333333/FFFFFF?Text=UMP",
    category: "Institucional",
  },
  {
    name: "IEFP",
    description: "Instituto do Emprego e Formação Profissional. Certificação de competências e cursos técnicos.",
    logoUrl: "https://via.placeholder.com/150/004AAD/FFFFFF?Text=IEFP",
    category: "Formação",
  },
  {
    name: "ANCI",
    description: "Associação Nacional de Cuidadores Informais. Apoio direto e formação para famílias cuidadoras.",
    logoUrl: "https://via.placeholder.com/150/008000/FFFFFF?Text=ANCI",
    category: "Associação",
  },
  {
    name: "ESEL / ESEP",
    description: "Escolas Superiores de Enfermagem (Lisboa e Porto). Parceiros científicos para cuidados avançados.",
    logoUrl: "https://via.placeholder.com/150/004AAD/FFFFFF?Text=Enfermagem",
    category: "Academia",
  },
  {
    name: "Centros Qualifica",
    description: "Rede nacional especializada na qualificação e certificação escolar e profissional de adultos.",
    logoUrl: "https://via.placeholder.com/150/FFA500/FFFFFF?Text=Qualifica",
    category: "Formação",
  },
  {
    name: "Master D",
    description: "Entidade formadora de referência com cursos práticos de Auxiliar de Saúde e Geriatria.",
    logoUrl: "https://via.placeholder.com/150/000000/FFFFFF?Text=MasterD",
    category: "Formação",
  },
  {
    name: "Assoc. Alzheimer Portugal",
    description: "Formação especializada e apoio focado em demência e saúde mental no envelhecimento.",
    logoUrl: "https://via.placeholder.com/150/004AAD/FFFFFF?Text=Alzheimer",
    category: "Especialidade",
  },
];

export function PartnersPage() {
  useScrollAnimation();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--bg-body)' }}>
      {/* HEADER */}
      <Header />

      <main style={{ flex: 1 }}>
        {/* Hero Section */}
        <section className="hero fade-in-section" style={{ padding: '8rem 0 4rem', position: 'relative', overflow: 'hidden' }}>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ marginBottom: '2rem' }}>
              <Link href="/">
                <a style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem', transition: 'color 0.2s' }}
                   onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
                   onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                  <ArrowLeft size={16} /> Voltar à página inicial
                </a>
              </Link>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
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
                Rede de Confiança
              </span>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '1.5rem', color: 'var(--text-main)' }}>
                Parceiros que elevam <br/>
                <span className="highlight" style={{ background: 'linear-gradient(120deg, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>o padrão de cuidado.</span>
              </h1>
              <p style={{ fontSize: '1.25rem', color: 'var(--text-body)', lineHeight: 1.6, maxWidth: '700px', margin: '0 auto' }}>
                A POPS colabora com as instituições mais respeitadas de Portugal para garantir certificação, formação contínua e excelência em cada serviço prestado.
              </p>
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="fade-in-section" style={{ padding: '5rem 0', backgroundColor: 'var(--bg-surface)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
              {partners.map((partner) => (
                <div key={partner.name} style={{
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  border: '1px solid var(--border-light)',
                  padding: '2rem',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-sm)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  e.currentTarget.style.borderColor = 'var(--primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                }}
                >
                  <div style={{ position: 'absolute', top: 0, right: 0, padding: '1.5rem', opacity: 0.05 }}>
                    <Building2 size={80} color="var(--primary)" />
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', position: 'relative' }}>
                    <div style={{ 
                      width: '70px', 
                      height: '70px', 
                      borderRadius: '12px', 
                      border: '1px solid var(--border-light)', 
                      padding: '8px', 
                      backgroundColor: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <img src={partner.logoUrl} alt={partner.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} loading="lazy" />
                    </div>
                    <span style={{ 
                      fontSize: '0.75rem', 
                      fontWeight: 600, 
                      padding: '4px 10px', 
                      borderRadius: '20px', 
                      backgroundColor: 'var(--bg-surface-alt)', 
                      color: 'var(--text-body)',
                      border: '1px solid var(--border-light)'
                    }}>
                      {partner.category}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-main)' }}>{partner.name}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: 1.6, margin: 0 }}>{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="fade-in-section" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-body)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--text-main)' }}>
                  Porquê ser Parceiro POPS?
                </h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-body)', marginBottom: '2.5rem' }}>
                  Junte-se a nós na missão de transformar o setor de cuidados em Portugal através da tecnologia e humanização.
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(14, 105, 115, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Handshake size={24} color="var(--primary)" />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.25rem' }}>Impacto Social Escalonável</h3>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-body)', margin: 0 }}>Faça parte de uma rede que está a mudar a vida de milhares de famílias e cuidadores.</p>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(14, 105, 115, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Star size={24} color="var(--primary)" />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.25rem' }}>Visibilidade e Prestígio</h3>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-body)', margin: 0 }}>Associe a sua marca a um projeto inovador e de alta confiança no mercado nacional.</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(14, 105, 115, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Award size={24} color="var(--primary)" />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.25rem' }}>Excelência Certificada</h3>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-body)', margin: 0 }}>Colabore na definição dos mais altos padrões de formação e qualificação.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, var(--primary), var(--secondary))', opacity: 0.1, borderRadius: '24px', transform: 'rotate(3deg)' }}></div>
                <div style={{ 
                  position: 'relative', 
                  backgroundColor: 'white', 
                  padding: '3rem', 
                  borderRadius: '24px', 
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-lg)',
                  textAlign: 'center'
                }}>
                  <div style={{ 
                    width: '64px', 
                    height: '64px', 
                    backgroundColor: 'var(--primary)', 
                    borderRadius: '16px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    margin: '0 auto 1.5rem',
                    color: 'white',
                    boxShadow: '0 10px 20px rgba(14, 105, 115, 0.2)'
                  }}>
                    <Mail size={32} />
                  </div>
                  <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-main)' }}>Vamos colaborar?</h3>
                  <p style={{ fontSize: '1rem', color: 'var(--text-body)', marginBottom: '2rem' }}>
                    Tem uma instituição e acredita que podemos colaborar para elevar o padrão de cuidados em Portugal?
                  </p>
                  <a href="mailto:parcerias@pops.com.pt" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', textDecoration: 'none' }}>
                    Contactar Equipa de Parcerias
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}