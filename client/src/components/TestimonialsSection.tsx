import { Star } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="fade-in-section" style={{ padding: '6rem 0', backgroundColor: '#f9fafb' }}>
      <div className="container">
        <div className="section-header">
          <h2>O que dizem as Famílias</h2>
          <p>A confiança constrói-se com transparência. Veja o feedback de quem já testou o piloto.</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
          {[
            {
              name: "Ana Martins",
              role: "Filha de Utente",
              text: "Finalmente uma plataforma que me dá segurança. Saber que a cuidadora tem o registo criminal verificado e formação validada tirou-me um peso de cima.",
              stars: 5
            },
            {
              name: "Carlos Sousa",
              role: "Cuidador Profissional",
              text: "Como profissional, sinto-me valorizado. A app é fácil de usar, os pagamentos são garantidos e sinto-me protegido com o seguro incluído.",
              stars: 5
            },
            {
              name: "Beatriz Lima",
              role: "Neta e Cuidadora",
              text: "O GPS em tempo real é incrível. Consigo saber exatamente quando a minha avó está acompanhada, mesmo estando a trabalhar no escritório.",
              stars: 5
            }
          ].map((item, i) => (
            <div key={i} style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', gap: '4px', marginBottom: '1rem', color: '#fbbf24' }}>
                {[...Array(item.stars)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
              </div>
              <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--text-body)' }}>"{item.text}"</p>
              <div>
                <strong style={{ display: 'block', color: 'var(--text-main)' }}>{item.name}</strong>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}