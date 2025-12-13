import { Link } from "wouter";

export default function Footer() {
  return (
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
              <li><Link href="/carreiras">Para Cuidadores</Link></li>
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
  );
}
