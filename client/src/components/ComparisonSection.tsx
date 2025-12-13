import { Shield, MapPin, GraduationCap, FileText, Tag, X, CheckCircle } from "lucide-react";

export default function ComparisonSection() {
  return (
    <section className="comparison-section fade-in-section" style={{ padding: '6rem 0', background: 'white' }}>
      <div className="container">
        <div className="section-header">
          <span className="highlight" style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>A Verdade do Mercado</span>
          <h2>Porque a POPS é a <span className="highlight">evolução</span>.</h2>
          <p>O modelo tradicional obriga-o a escolher entre segurança (caro) ou preço (risco). Nós eliminamos essa escolha.</p>
        </div>

        <style>
          {`
          .comp-wrapper {
              overflow-x: auto;
              border-radius: 16px;
              box-shadow: 0 4px 24px rgba(0,0,0,0.06);
              border: 1px solid var(--border-light);
          }
          .comp-table {
              width: 100%;
              border-collapse: separate;
              border-spacing: 0;
              min-width: 800px;
          }
          .comp-table th {
              padding: 1.5rem;
              text-align: left;
              background: #fff;
              border-bottom: 2px solid var(--border-light);
              vertical-align: middle;
          }
          .comp-table td {
              padding: 1.25rem 1.5rem;
              border-bottom: 1px solid var(--border-light);
              vertical-align: middle;
              color: var(--text-light);
              font-size: 0.95rem;
              line-height: 1.5;
          }
          .criteria-col {
              width: 25%;
              font-weight: 700;
              color: var(--text-dark);
              background: #fff;
          }
          .criteria-icon {
              color: var(--primary-light);
              margin-right: 10px;
              vertical-align: middle;
          }
          .informal-col {
              width: 35%;
              background: #fcfcfc;
          }
          .informal-header {
              font-size: 1.1rem;
              color: var(--text-light);
              font-weight: 600;
          }
          .status-icon.bad { color: #e74c3c; margin-right: 8px; vertical-align: middle; }
          
          .pops-col {
              width: 40%;
              background: rgba(32, 128, 141, 0.03);
              position: relative;
          }
          .pops-header {
              color: var(--primary);
              font-size: 1.3rem;
              font-weight: 800;
          }
          .pops-header span {
              display: block;
              font-size: 0.75rem;
              text-transform: uppercase;
              letter-spacing: 1px;
              color: var(--success);
              margin-bottom: 4px;
          }
          .pops-cell {
              color: var(--text-dark) !important;
              font-weight: 500;
          }
          .status-icon.good { color: var(--success); margin-right: 8px; vertical-align: middle; }
          th.pops-col { border-top: 4px solid var(--primary); }
          `}
        </style>

        <div className="comp-wrapper">
          <table className="comp-table">
            <thead>
              <tr>
                <th className="criteria-col" style={{ borderBottom: 'none' }}></th>
                <th className="informal-col">
                  <div className="informal-header">Mercado Tradicional</div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 400, color: '#999' }}>Agências ou Informal</span>
                </th>
                <th className="pops-col">
                  <div className="pops-header">
                    <span>Recomendado</span>
                    Plataforma POPS
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="criteria-col">
                  <Shield size={20} className="criteria-icon inline" /> Segurança
                </td>
                <td className="informal-col">
                  <X size={18} className="status-icon bad inline" />
                  Verificação manual difícil ou inexistente. Alto risco de fraude.
                </td>
                <td className="pops-col pops-cell">
                  <CheckCircle size={18} className="status-icon good inline" />
                  <strong>Verificação Obrigatória.</strong> Criminal e Identidade validados antes do 1º serviço.
                </td>
              </tr>

              <tr>
                <td className="criteria-col">
                  <MapPin size={20} className="criteria-icon inline" /> Controlo
                </td>
                <td className="informal-col">
                  <X size={18} className="status-icon bad inline" />
                  "Caixa negra". A família não sabe se o cuidador cumpriu o horário.
                </td>
                <td className="pops-col pops-cell">
                  <CheckCircle size={18} className="status-icon good inline" />
                  <strong>GPS em Tempo Real.</strong> Notificações de Check-in/out e prova de presença.
                </td>
              </tr>

              <tr>
                <td className="criteria-col">
                  <GraduationCap size={20} className="criteria-icon inline" /> Qualificação
                </td>
                <td className="informal-col">
                  <X size={18} className="status-icon bad inline" />
                  Diplomas difíceis de verificar. Risco de cuidadores sem formação.
                </td>
                <td className="pops-col pops-cell">
                  <CheckCircle size={18} className="status-icon good inline" />
                  <strong>Certificados Validados.</strong> Confirmação direta com escolas e ordens.
                </td>
              </tr>

              <tr>
                <td className="criteria-col">
                  <FileText size={20} className="criteria-icon inline" /> Legalidade
                </td>
                <td className="informal-col">
                  <X size={18} className="status-icon bad inline" />
                  Pagamentos em dinheiro. Sem recibos para dedução no IRS.
                </td>
                <td className="pops-col pops-cell">
                  <CheckCircle size={18} className="status-icon good inline" />
                  <strong>100% Legal.</strong> Faturação automática e benefícios fiscais de saúde.
                </td>
              </tr>

              <tr>
                <td className="criteria-col">
                  <Tag size={20} className="criteria-icon inline" /> Custo
                </td>
                <td className="informal-col">
                  <X size={18} className="status-icon bad inline" />
                  Preços arbitrários ou comissões de agência muito elevadas.
                </td>
                <td className="pops-col pops-cell">
                  <CheckCircle size={18} className="status-icon good inline" />
                  <strong>Transparente e Justo.</strong> A partir de 9€/h.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-center mt-2">
          <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>A escolha inteligente é a escolha segura.</p>
        </div>
      </div>
    </section>
  );
}
