import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Route, Switch } from "wouter";
import { Suspense, lazy } from "react";
import { Loader2 } from "lucide-react";
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from "@/lib/LanguageContext";
import NotFound from "@/pages/not-found";
import BackToTop from "@/components/BackToTop";
import SkipLink from "@/components/SkipLink";
import CookieConsent from "@/components/CookieConsent";
import ScrollProgress from "@/components/ScrollProgress";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Home from "@/pages/home";

const queryClient = new QueryClient();

// Lazy Loading das Páginas e Componentes Pesados
const PartnersPage = lazy(() => import("@/pages/PartnersPage").then(module => ({ default: module.PartnersPage })));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const AdminPage = lazy(() => import("@/pages/AdminPage"));
const ThankYouPage = lazy(() => import("@/pages/ThankYouPage"));

// Planos
const BasicPlanPage = lazy(() => import("@/pages/plans/BasicPlanPage"));
const CompletePlanPage = lazy(() => import("@/pages/plans/CompletePlanPage"));
const SpecializedPlanPage = lazy(() => import("@/pages/plans/SpecializedPlanPage"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("@/pages/TermsOfService"));

export default function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <TooltipProvider>
          <QueryClientProvider client={queryClient}>
            <SkipLink />
            <ScrollProgress />
            {/* Global Texture Overlay */}              <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
            
            <Suspense fallback={
              <div className="flex items-center justify-center min-h-screen bg-background">
                <Loader2 className="h-10 w-10 animate-spin text-primary" />
              </div>
            }>
              <Switch>
                <Route path="/" component={Home} />
                <Route path="/parceiros" component={PartnersPage} />
                <Route path="/sobre" component={AboutPage} />
                <Route path="/obrigado" component={ThankYouPage} />
                <Route path="/admin" component={AdminPage} />
                <Route path="/privacidade" component={PrivacyPolicy} />
                <Route path="/termos" component={TermsOfService} />
                
                {/* Rotas de Planos */}
                <Route path="/servicos/basico" component={BasicPlanPage} />
                <Route path="/servicos/completo" component={CompletePlanPage} />
                <Route path="/servicos/especializado" component={SpecializedPlanPage} />
                
                <Route component={NotFound} />
              </Switch>
            </Suspense>
            <Toaster />
            <BackToTop />
            <CookieConsent />
            <ReactQueryDevtools initialIsOpen={false} />
            <SpeedInsights />
          </QueryClientProvider>
        </TooltipProvider>
      </LanguageProvider>
    </HelmetProvider>
  );
}
