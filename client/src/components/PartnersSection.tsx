import { Link } from "wouter";
import { ArrowRight, University, Cross, Brain, Award, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PartnersSection() {
  return (
    <section className="partners-preview fade-in-section" style={{ padding: '4rem 0', background: '#f8f9fa', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ maxWidth: '600px' }}>
                    <span className="highlight" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Ecossistema POPS</span>
                    <h3 style={{ fontSize: '1.8rem', marginTop: '0.5rem' }}>Apoiados por quem sabe.</h3>
                    <p style={{ fontSize: '1rem', color: 'var(--text-light)' }}>Os nossos cuidadores não são apenas verificados, são formados e certificados pelas melhores instituições.</p>
                </div>
                <Link href="/parceiros">
                    <Button variant="outline" className="gap-2">
                        Ver Todos os Parceiros <ArrowRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>

            <div className="logos-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', alignItems: 'center', opacity: 0.7 }}>
                <div className="partner-logo text-center grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 hover:opacity-100 group">
                    <University className="w-10 h-10 mx-auto text-gray-400 group-hover:text-primary mb-2" />
                    <div className="text-xs font-bold text-gray-400 group-hover:text-primary">Escola Saúde</div>
                </div>
                 <div className="partner-logo text-center grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 hover:opacity-100 group">
                    <Cross className="w-10 h-10 mx-auto text-gray-400 group-hover:text-primary mb-2" />
                    <div className="text-xs font-bold text-gray-400 group-hover:text-primary">Cruz Vermelha</div>
                </div>
                 <div className="partner-logo text-center grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 hover:opacity-100 group">
                    <Brain className="w-10 h-10 mx-auto text-gray-400 group-hover:text-primary mb-2" />
                    <div className="text-xs font-bold text-gray-400 group-hover:text-primary">Assoc. Alzheimer</div>
                </div>
                 <div className="partner-logo text-center grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 hover:opacity-100 group">
                    <Award className="w-10 h-10 mx-auto text-gray-400 group-hover:text-primary mb-2" />
                    <div className="text-xs font-bold text-gray-400 group-hover:text-primary">Certif. PT</div>
                </div>
                 <div className="partner-logo text-center grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 hover:opacity-100 group">
                    <User className="w-10 h-10 mx-auto text-gray-400 group-hover:text-primary mb-2" />
                    <div className="text-xs font-bold text-gray-400 group-hover:text-primary">Ordem Enferm.</div>
                </div>
            </div>
        </div>
    </section>
  );
}
