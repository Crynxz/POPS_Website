import { useState } from "react";
import { Link } from "wouter";

export default function TrustSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="trust-section fade-in-section" id="diferenciais">
      <div className="container">
        <div className="section-header">
          <h2>O Ecossistema POPS: <span className="highlight">Tecnologia & Confiança</span></h2>
          <p>Resolvemos a fragmentação do mercado com uma solução integrada. Unimos segurança, saúde e gestão numa só plataforma.</p>
        </div>

        <style>
          {`
            .trust-item-hidden {
                display: none;
            }
            .trust-item.fade-in {
                animation: fadeIn 0.5s ease-in-out;
            }
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
          `}
        </style>

        <div className="trust-grid" id="trustGrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>

          <div className="trust-item">
            <div className="trust-icon">
              <i className="fas fa-map-location-dot"></i>
            </div>
            <h3>Monitorização GPS Real</h3>
            <p>Acabou a incerteza. Receba notificações de <strong>Check-in</strong> e <strong>Check-out</strong> no seu telemóvel. O sistema valida a presença física do cuidador para garantir o cumprimento do horário.</p>
          </div>

          <div className="trust-item">
            <div className="trust-icon">
              <i className="fas fa-file-medical-alt"></i>
            </div>
            <h3>Diário Clínico Digital</h3>
            <p>No decorrer de um serviço, o cuidador valida na app cada tarefa concluída (higiene, medicação, refeições, etc), gerando no fim um relatório diário que pode consultar a qualquer momento.</p>
          </div>

          <div className="trust-item">
            <div className="trust-icon">
              <i className="fas fa-brain"></i>
            </div>
            <h3>Matching Inteligente (IA)</h3>
            <p>O nosso algoritmo cruza geolocalização, experiência e patologias específicas (ex: Alzheimer, Parkinson) para lhe sugerir os cuidadores ideais em segundos, não em dias.</p>
          </div>

          <div className="trust-item">
            <div className="trust-icon">
              <i className="fas fa-file-invoice-dollar"></i>
            </div>
            <h3>Preços Transparentes</h3>
            <p>Nada de orçamentos. Os valores são tabelados e claros desde o início (9€ a 30€+), com <strong>faturação automática</strong> e benefícios fiscais inclusos.</p>
          </div>

          <div className={`trust-item ${!isExpanded ? 'trust-item-hidden' : 'fade-in'}`}>
            <div className="trust-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3>Pagamento Seguro (Escrow)</h3>
            <p>O seu dinheiro fica protegido. O pagamento só é libertado ao cuidador 48h horas após a conclusão do serviço e a sua validação. Proteção total contra faltas ou incumprimento.</p>
          </div>

          <div className={`trust-item ${!isExpanded ? 'trust-item-hidden' : 'fade-in'}`}>
            <div className="trust-icon">
              <i className="fas fa-file-invoice"></i>
            </div>
            <h3>Gestão Burocrática Zero</h3>
            <p>Nós tratamos dos contratos, seguros e da emissão automática de faturas para o seu IRS. Preços transparentes e tabelados (9€ a 30€+), sem negociações desconfortáveis.</p>
          </div>

          <div className={`trust-item ${!isExpanded ? 'trust-item-hidden' : 'fade-in'}`}>
            <div className="trust-icon">
              <i className="fas fa-medal"></i>
            </div>
            <h3>Ranking de Qualidade</h3>
            <p>Premiamos a excelência. Os cuidadores progridem em ranks de Bronze a Ouro com base em avaliações reais. Você escolhe apenas os melhores.</p>
          </div>

          <div className={`trust-item ${!isExpanded ? 'trust-item-hidden' : 'fade-in'}`}>
            <div className="trust-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h3>Formação Contínua</h3>
            <p>Investimos nos cuidadores. Através de parceria com escolas e instituições oficiais, oferecemos acesso a cursos online (LMS) em Demências, Paliativos e Mobilidade, garantindo que quem cuida de si está sempre a evoluir.</p>
          </div>

          <div className={`trust-item ${!isExpanded ? 'trust-item-hidden' : 'fade-in'}`}>
            <div className="trust-icon">
              <i className="fas fa-headset"></i>
            </div>
            <h3>Suporte Humano 24/7</h3>
            <p>A tecnologia ajuda, mas os humanos resolvem. A nossa equipa de mediação está disponível a qualquer hora para resolver qualquer imprevisto ou problema.</p>
          </div>

          <div className={`trust-item ${!isExpanded ? 'trust-item-hidden' : 'fade-in'}`}>
            <div className="trust-icon">
              <i className="fas fa-calendar-check"></i>
            </div>
            <h3>Contratação Flexível</h3>
            <p>Precisa de alguém só para este Sábado à noite? Ou acompanhamento diário? Sem contratos de fidelização rígidos. Reserve cuidados pontuais ou mensais com facilidade.</p>
          </div>

        </div>

        <div className="text-center" style={{ marginTop: '3rem' }}>
          <button 
            id="btnShowMore" 
            className="btn btn-secondary" 
            style={{ minWidth: '200px' }}
            onClick={() => {
              if (isExpanded) {
                const element = document.getElementById('diferenciais');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }
              setIsExpanded(!isExpanded);
            }}
          >
            {isExpanded ? (
              <>Mostrar Menos <i className="fas fa-chevron-up" style={{ marginLeft: '8px' }}></i></>
            ) : (
              <>Mostrar Mais Diferenciais <i className="fas fa-chevron-down" style={{ marginLeft: '8px' }}></i></>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}