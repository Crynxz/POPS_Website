import PlanDetail from "@/components/PlanDetail";
import { plans } from "@/lib/plans";

export default function BasicPlanPage() {
  const plan = plans.find(p => p.id === "basico");
  
  if (!plan) return <div>Plano não encontrado</div>;
  
  return <PlanDetail plan={plan} />;
}
