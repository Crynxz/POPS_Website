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

// Loading Fallback Component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
    <div className="flex flex-col items-center gap-4">
      <Loader2 className="w-8 h-8 text-teal-600 animate-spin" />
      <p className="text-slate-600 text-sm">A carregar...</p>
    </div>
  </div>
);

// Lazy Loading das Páginas e Componentes Pesados
// Route: /parceiros
const PartnersPage = lazy(() => 
  import("@/pages/PartnersPage").then(module => ({ default: module.PartnersPage }))
);

// Route: /sobre
const AboutPage = lazy(() => import("@/pages/AboutPage"));

// Route: /blog
const BlogSoonPage = lazy(() => import("@/pages/BlogSoonPage"));

// Route: /contact
const ContactPage = lazy(() => import("@/pages/ContactPage"));

// Route: /admin (noindex)
const AdminPage = lazy(() => import("@/pages/AdminPage"));

// Route: /obrigado
const ThankYouPage = lazy(() => import("@/pages/ThankYouPage"));

// Planos de Serviço (Alinhados com Capítulo 6 do Plano de Negócios)
// Route: /servicos/basico
const BasicPlanPage = lazy(() => import("@/pages/plans/BasicPlanPage"));

// Route: /servicos/completo
const CompletePlanPage = lazy(() => import("@/pages/plans/CompletePlanPage"));

// Route: /servicos/especializado
const SpecializedPlanPage = lazy(() => import("@/pages/plans/SpecializedPlanPage"));

// Legal Pages
// Route: /privacidade
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));

// Route: /termos
const TermsOfService = lazy(() => import("@/pages/TermsOfService"));

export default function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <div className="relative min-h-screen bg-white">
              {/* Global Texture Overlay */}
              <div 
                className="fixed inset-0 pointer-events-none opacity-[0.02] hidden md:block" 
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
              />

              {/* Accessibility & Analytics */}
              <SkipLink />
              <ScrollProgress />

              {/* Main Routes */}
              <Suspense fallback={<LoadingSpinner />}>
                <Switch>
                  {/* Home Page */}
                  <Route path="/" component={Home} />

                  {/* Serviços / Planos (Alinhado com estrutura de negócio: Básico, Completo, Especializado) */}
                  <Route path="/servicos/basico" component={BasicPlanPage} />
                  <Route path="/servicos/completo" component={CompletePlanPage} />
                  <Route path="/servicos/especializado" component={SpecializedPlanPage} />

                  {/* Informações Corporativas */}
                  <Route path="/sobre" component={AboutPage} />
                  <Route path="/parceiros" component={PartnersPage} />
                  <Route path="/contact" component={ContactPage} />
                  <Route path="/blog" component={BlogSoonPage} />

                  {/* Legal */}
                  <Route path="/privacidade" component={PrivacyPolicy} />
                  <Route path="/termos" component={TermsOfService} />

                  {/* Confirmation Pages */}
                  <Route path="/obrigado" component={ThankYouPage} />

                  {/* Admin (com noindex via componente interno) */}
                  <Route path="/admin" component={AdminPage} />

                  {/* 404 Fallback */}
                  <Route component={NotFound} />
                </Switch>
              </Suspense>

              {/* Global Components */}
              <BackToTop />
              <CookieConsent />
              <Toaster />
            </div>

           
          </TooltipProvider>
          
          {/* Vercel Speed Insights */}
          <SpeedInsights />
        </QueryClientProvider>
      </LanguageProvider>
    </HelmetProvider>
  );
}