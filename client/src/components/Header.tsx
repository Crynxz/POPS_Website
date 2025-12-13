import { Link } from "wouter";
import { useState } from "react";
import { Menu, X, Heart, User } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-container">
        <nav className="main-nav">
          {/* LOGO */}
          <Link href="/" className="logo">POPS</Link>

          {/* MENU DESKTOP */}
          <ul className="nav-links">
            <li><a href="/#mercado">O Mercado</a></li>
            <li><a href="/#diferenciais">Diferenciais</a></li>
            <li><a href="/#precos">Preços</a></li>
            <li><a href="/#seguranca">Segurança</a></li>
            <li><Link href="/parceiros">Parceiros</Link></li>
            <li><Link href="/sobre">Sobre Nós</Link></li>
            <li><Link href="/carreiras" className="highlight">Carreiras</Link></li>
          </ul>

          {/* BOTÕES DESKTOP */}
          <div className="cta-group">
            <a href="/#waitlist" className="btn btn-secondary">
              <User size={16} style={{ marginRight: '8px' }} /> Sou Cuidador
            </a>
            <a href="/#waitlist" className="btn btn-primary">
              <Heart size={16} style={{ marginRight: '8px' }} /> Para Famílias
            </a>
          </div>

          {/* BOTÃO MOBILE TOGGLE */}
          <button 
            className="mobile-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* MENU MOBILE DROPDOWN */}
      {mobileMenuOpen && (
        <div className="mobile-menu-dropdown">
            <a href="/#mercado" onClick={() => setMobileMenuOpen(false)}>O Mercado</a>
            <a href="/#diferenciais" onClick={() => setMobileMenuOpen(false)}>Diferenciais</a>
            <a href="/#precos" onClick={() => setMobileMenuOpen(false)}>Preços</a>
            <a href="/#seguranca" onClick={() => setMobileMenuOpen(false)}>Segurança</a>
            <Link href="/parceiros" onClick={() => setMobileMenuOpen(false)}>Parceiros</Link>
            <Link href="/sobre" onClick={() => setMobileMenuOpen(false)}>Sobre Nós</Link>
            <Link href="/carreiras" onClick={() => setMobileMenuOpen(false)} className="highlight">Carreiras</Link>
            
            <div className="mobile-cta-group">
              <a href="/#waitlist" className="btn btn-secondary" onClick={() => setMobileMenuOpen(false)}>
                <User size={16} /> Sou Cuidador
              </a>
              <a href="/#waitlist" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>
                <Heart size={16} /> Para Famílias
              </a>
            </div>
        </div>
      )}

      <style>{`
        /* --- ESTILOS GERAIS DO HEADER --- */
        .site-header {
            position: sticky;
            top: 0;
            z-index: 1000;
            background-color: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid #f0f0f0;
            box-shadow: 0 2px 10px rgba(0,0,0,0.03);
            height: 80px;
            display: flex;
            align-items: center;
        }

        .header-container {
            width: 100%;
            margin: 0 auto;
            padding: 0 1.5rem;
            max-width: 1200px;
        }

        .main-nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }

        .logo {
            font-size: 1.5rem;
            font-weight: 800;
            color: var(--primary, #0E6973);
            text-decoration: none;
            letter-spacing: -0.5px;
        }

        /* --- LINKS DESKTOP --- */
        .nav-links {
            display: flex;
            gap: 2rem;
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .nav-links a {
            text-decoration: none;
            color: var(--text-body, #4b5563);
            font-size: 0.95rem;
            font-weight: 500;
            transition: color 0.2s ease;
        }

        .nav-links a:hover {
            color: var(--primary, #0E6973);
        }

        .nav-links a.highlight {
            color: var(--primary, #0E6973);
            font-weight: 700;
        }

        /* --- BOTÕES --- */
        .cta-group {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .btn {
            display: inline-flex;
            align-items: center;
            padding: 0.6rem 1.2rem;
            border-radius: 8px;
            font-size: 0.9rem;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.2s ease;
            cursor: pointer;
        }

        .btn-secondary {
            background-color: transparent;
            border: 1px solid #e5e7eb;
            color: var(--text-main, #374151);
        }
        .btn-secondary:hover {
            background-color: #f9fafb;
            border-color: #d1d5db;
        }

        .btn-primary {
            background-color: var(--primary, #0E6973);
            border: 1px solid var(--primary, #0E6973);
            color: white;
            box-shadow: 0 2px 4px rgba(14, 105, 115, 0.2);
        }
        .btn-primary:hover {
            opacity: 0.9;
            transform: translateY(-1px);
        }

        .mobile-toggle {
            display: none;
            background: none;
            border: none;
            cursor: pointer;
            color: var(--text-main, #333);
            padding: 4px;
        }

        /* --- MOBILE STYLES (max-width: 1024px) --- */
        @media (max-width: 1024px) {
            .nav-links, .cta-group {
                display: none;
            }
            
            .mobile-toggle {
                display: block;
            }

            .site-header {
                position: relative; /* Importante para o dropdown absoluto */
            }

            .mobile-menu-dropdown {
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: white;
                padding: 1.5rem;
                box-shadow: 0 10px 25px rgba(0,0,0,0.1);
                border-top: 1px solid #f0f0f0;
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                z-index: 999;
                animation: slideDown 0.3s ease-out forwards;
            }

            .mobile-menu-dropdown a {
                text-decoration: none;
                color: var(--text-body, #4b5563);
                font-weight: 500;
                padding: 0.75rem 0;
                border-bottom: 1px solid #f3f4f6;
                display: block;
            }

            .mobile-menu-dropdown a:hover {
                color: var(--primary, #0E6973);
                padding-left: 5px;
            }

            .mobile-cta-group {
                display: flex;
                flex-direction: column;
                gap: 0.8rem;
                margin-top: 1.5rem;
            }

            .mobile-cta-group .btn {
                width: 100%;
                justify-content: center;
                padding: 0.8rem;
            }
            
            @keyframes slideDown {
                from { opacity: 0; transform: translateY(-10px); }
                to { opacity: 1; transform: translateY(0); }
            }
        }
      `}</style>
    </header>
  );
}