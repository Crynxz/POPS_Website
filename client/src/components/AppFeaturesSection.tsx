export default function AppFeaturesSection() {
  return (
    <section className="app-section fade-in-section">
      <div className="container">
        <div className="app-content">
          <div className="app-text">
            <h2>A App POPS: Controlo Total na Palma da Tua Mão</h2>
            <p>Tecnologia moderna que simplifica cuidados complexos. Conheça as funcionalidades que estamos a desenvolver:</p>
            
            <div className="feature-list">
              <div className="feature-item">
                <div className="feature-icon-small">
                  <i className="fas fa-location-dot"></i>
                </div>
                <div>
                  <h4>GPS em Tempo Real & Check-in.</h4>
                  <p>Saiba exatamente quando o cuidador chega e sai. Notificações automáticas e localização confirmada.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon-small">
                  <i className="fas fa-clipboard-list"></i>
                </div>
                <div>
                  <h4>Dashboard de Família - Olhos na Casa.</h4>
                  <p>Relatórios digitais detalhados: medicação, alimentação, higiene, observações do cuidador em tempo real.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon-small">
                  <i className="fas fa-comments"></i>
                </div>
                <div>
                  <h4>Chat Seguro Encriptado.</h4>
                  <p>Comunicação direta, rápida e privada entre família e cuidador. Respostas que ficam documentadas.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon-small">
                  <i className="fas fa-award"></i>
                </div>
                <div>
                  <h4>Sistema de Avaliações Transparente.</h4>
                  <p>Avalie cada visita. Seu feedback determina o ranking e o futuro dos cuidadores na plataforma.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="phone-mockup-modern" style={{ position: 'relative', perspective: '1000px', display: 'flex', justifyContent: 'center', margin: '0 auto' }}>
            <div style={{
                position: 'relative',
                width: '320px',
                height: '650px',
                background: '#121212',
                borderRadius: '48px',
                boxShadow: '0 0 0 10px #1f1f1f, 0 0 0 12px #121212, 0 30px 60px rgba(0,0,0,0.4)',
                overflow: 'hidden'
            }}>
                {/* Dynamic Island / Notch */}
                <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '100px',
                    height: '28px',
                    background: '#000',
                    borderRadius: '20px',
                    zIndex: 20
                }}></div>

                {/* Screen */}
                <div style={{
                    width: '100%',
                    height: '100%',
                    background: '#F8FAFC',
                    borderRadius: '38px',
                    overflow: 'hidden',
                    position: 'relative'
                }}>
                    {/* Status Bar */}
                    <div style={{ padding: '14px 24px 0', display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 600, color: '#333' }}>
                        <span>9:41</span>
                        <div style={{ display: 'flex', gap: '6px' }}>
                            <i className="fas fa-signal"></i>
                            <i className="fas fa-wifi"></i>
                            <i className="fas fa-battery-full"></i>
                        </div>
                    </div>

                    {/* App Content */}
                    <div style={{ padding: '20px' }}>
                        {/* Header */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                            <div>
                                <h3 style={{ margin: 0, fontSize: '18px', color: '#0F172A' }}>Olá, Maria 👋</h3>
                                <p style={{ margin: 0, fontSize: '13px', color: '#64748B' }}>Tudo pronto para hoje?</p>
                            </div>
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className="fas fa-user" style={{ color: '#64748B' }}></i>
                            </div>
                        </div>

                        {/* Active Service Card */}
                        <div style={{ background: 'linear-gradient(135deg, #0E6973 0%, #084B52 100%)', borderRadius: '20px', padding: '20px', color: 'white', marginBottom: '20px', boxShadow: '0 10px 25px -5px rgba(14, 105, 115, 0.4)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                                <div>
                                    <span style={{ fontSize: '12px', opacity: 0.9, background: 'rgba(255,255,255,0.2)', padding: '4px 10px', borderRadius: '20px' }}>Em Curso</span>
                                    <h4 style={{ margin: '10px 0 0', fontSize: '18px' }}>Cuidados de Higiene</h4>
                                </div>
                                <div style={{ width: '32px', height: '32px', background: 'rgba(255,255,255,0.2)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <i className="fas fa-clock"></i>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <div style={{ width: '36px', height: '36px', borderRadius: '12px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <img src="https://ui-avatars.com/api/?name=Ana+S&background=random" alt="Cuidador" style={{ width: '100%', height: '100%', borderRadius: '12px' }} />
                                </div>
                                <div>
                                    <div style={{ fontSize: '14px', fontWeight: 600 }}>Ana Sousa</div>
                                    <div style={{ fontSize: '11px', opacity: 0.8 }}>Cuidadora Certificada</div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                            <div style={{ background: 'white', padding: '16px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#F0FDF4', color: '#16A34A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <span style={{ fontSize: '13px', fontWeight: 600, color: '#334155' }}>Localização</span>
                            </div>
                            <div style={{ background: 'white', padding: '16px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#EFF6FF', color: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <i className="fas fa-comment-alt"></i>
                                </div>
                                <span style={{ fontSize: '13px', fontWeight: 600, color: '#334155' }}>Chat</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Bottom Nav */}
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '70px', background: 'white', display: 'flex', justifyContent: 'space-around', alignItems: 'center', paddingBottom: '15px', borderTop: '1px solid #f1f5f9' }}>
                        <i className="fas fa-home" style={{ color: '#0E6973', fontSize: '20px' }}></i>
                        <i className="fas fa-calendar" style={{ color: '#94A3B8', fontSize: '20px' }}></i>
                        <i className="fas fa-user" style={{ color: '#94A3B8', fontSize: '20px' }}></i>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}