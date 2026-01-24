import PlanDetail from "@/components/PlanDetail";
import { plans } from "@/lib/plans";

export default function CompletePlanPage() {
  const plan = plans.find(p => p.id === "completo");
  
  if (!plan) return <div>Plano não encontrado</div>;
  
  return <PlanDetail plan={plan} />;
}
