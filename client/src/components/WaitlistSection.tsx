import { Gift, Lock, Percent, Send } from "lucide-react";

interface WaitlistSectionProps {
  selectedProfile?: "familia" | "cuidador";
}

export default function WaitlistSection({ selectedProfile }: WaitlistSectionProps) {
  return (
    <section className="waitlist-section fade-in-section" id="waitlist">
      <div className="container">
        <div className="waitlist-header">
          <span className="promo-badge"><Gift size={14} style={{ display: 'inline', marginRight: '5px' }} /> Oferta de Lançamento</span>
          <h2>Conecte-se à Melhor Rede de Cuidados ao Domíciliário do País</h2>
          <p>Inscreva-se na lista de espera e garanta prioridade no lançamento com descontos exclusivos. Primeiros 500 inscritos recebem 25% de desconto nos primeiros 3 meses.</p>
        </div>

        <div className="waitlist-container">
          <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--text-dark)' }}>Garantir Acesso Antecipado</h3>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '2rem', fontSize: '0.95rem' }}>Preencha o formulário para entrar na lista. Será o primeiro a saber quando chegarmos à sua localidade.</p>

          <form action="https://formsubmit.co/aplicacoes@popspt.com" method="POST">
             <input type="hidden" name="_subject" value="Nova Inscrição Lista de Espera POPS" />
             <input type="hidden" name="_autoresponse" value="Obrigado por se inscrever na POPS! Receberá em breve o Guia de Segurança em Cuidados Domiciliários." />
             <input type="hidden" name="_template" value="table" />
             <input type="hidden" name="source" value="landing_page_waitlist" />

             <div className="form-group">
                <label className="form-label">Nome Completo</label>
                <input type="text" name="nome" className="form-input" placeholder="O seu nome" required />
             </div>

             <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" name="email" className="form-input" placeholder="seu@email.com" required />
             </div>

             <div className="form-group">
                <label className="form-label">Telefone (com indicativo)</label>
                <input type="tel" name="telefone" className="form-input" placeholder="+351 91 234 5678" required />
             </div>

             <div className="form-row">
                <div className="form-group">
                    <label className="form-label">Data de Nascimento</label>
                    <input type="date" name="nascimento" className="form-input" required />
                </div>
                <div className="form-group">
                    <label className="form-label">Localidade / Código Postal</label>
                    <input type="text" name="localidade" className="form-input" placeholder="Ex: Porto, 4000-000" required />
                </div>
             </div>
             
             <div className="form-group">
                <label className="form-label">Você é...</label>
                <select name="perfil" className="form-select" required defaultValue={selectedProfile || ""}>
                  <option value="" disabled>Selecione uma opção...</option>
                  <option value="familia">👨‍👩‍👧 Família (Procuro Cuidador)</option>
                  <option value="cuidador">👩‍⚕️ Profissional (Quero Trabalhar)</option>
                  <option value="instituicao">🏥 Instituição / Lar</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Tipo de Serviço de Interesse</label>
                <select name="servico" className="form-select" required defaultValue="">
                    <option value="" disabled>Selecione...</option>
                    <option value="basico">Cuidados Básicos (Companhia, apoio leve)</option>
                    <option value="completo">Cuidados Completos (Higiene, mobilidade)</option>
                    <option value="premium">Premium (Pós-operatório, especializado)</option>
                    <option value="ainda_nao_sei">Ainda não tenho certeza</option>
                </select>
              </div>

              <div className="waitlist-benefit">
                <h4 style={{ color: 'black' }}><Percent size={18} style={{ marginRight: '8px' }} /> Seu Benefício Exclusivo</h4>
                <p style={{ color: 'black' }}><strong>25% de desconto</strong> nos primeiros 3 meses de serviço.</p>
              </div>

              <button type="submit" className="btn btn-primary form-submit">
                <Send size={18} style={{ marginRight: '8px' }} /> Inscrever-me Agora
              </button>

              <p className="form-disclaimer">
                <Lock size={12} style={{ display: 'inline', marginRight: '4px' }} /> Seus dados são seguros e criptografados. Usados apenas pela POPS para notificações de lançamento e ofertas exclusivas.
              </p>
          </form>
        </div>
      </div>
    </section>
  );
}
