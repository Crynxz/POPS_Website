import PlanDetail from "@/components/PlanDetail";
import { plans } from "@/lib/plans";

export default function SpecializedPlanPage() {
  const plan = plans.find(p => p.id === "especializado");
  
  if (!plan) return <div>Plano não encontrado</div>;
  
  return <PlanDetail plan={plan} />;
}
