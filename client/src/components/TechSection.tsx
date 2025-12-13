import { MapPin, ClipboardList } from "lucide-react";

export default function TechSection() {
  return (
    <section className="tech-section fade-in-section">
        <div className="container">
            <div className="tech-grid">
                <div>
                    <h2>Segurança através da Tecnologia</h2>
                    <p>A nossa app foi desenhada para eliminar a "caixa negra" dos cuidados domiciliários. Você sabe sempre o que está a acontecer.</p>

                    <div className="monitor-card">
                        <div className="monitor-icon">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                            <h4>GPS em Tempo Real</h4>
                            <p>Saiba o momento exato em que o cuidador chega e sai da sua casa através de notificações automáticas de Check-in e Check-out.</p>
                        </div>
                    </div>

                    <div className="monitor-card">
                        <div className="monitor-icon">
                            <ClipboardList className="w-6 h-6" />
                        </div>
                        <div>
                            <h4>Checklists e Relatórios</h4>
                            <p>O cuidador preenche um relatório digital das tarefas realizadas (ex: medicação, higiene). Nada fica por registar.</p>
                        </div>
                    </div>
                </div>

                <div className="tech-image">
                    <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop" alt="Família a olhar para tablet com segurança" loading="lazy" />
                </div>
            </div>
        </div>
    </section>
  );
}
