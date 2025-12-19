import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "next-themes";
import { Route, Switch } from "wouter";
import { Suspense, lazy } from "react";
import { Loader2 } from "lucide-react";
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from "@/lib/LanguageContext";
import NotFound from "@/pages/not-found";
import BackToTop from "@/components/BackToTop";
import SkipLink from "@/components/SkipLink";
import CookieConsent from "@/components/CookieConsent";

const queryClient = new QueryClient();

// Lazy Loading das Páginas
const Home = lazy(() => import("@/pages/home"));
// PartnersPage é um named export, precisamos de adaptar para lazy
const PartnersPage = lazy(() => import("@/pages/PartnersPage").then(module => ({ default: module.PartnersPage })));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const CareersPage = lazy(() => import("@/pages/CareersPage"));

export default function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                          <TooltipProvider>
                            <QueryClientProvider client={queryClient}>
                              <SkipLink />
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
                  <Route path="/carreiras" component={CareersPage} />
                  <Route component={NotFound} />
                </Switch>
              </Suspense>
                          <Toaster />
                          <BackToTop />
                          <CookieConsent />
                          <ReactQueryDevtools initialIsOpen={false} />            </QueryClientProvider>
          </TooltipProvider>
        </ThemeProvider>
      </LanguageProvider>
    </HelmetProvider>
  );
}