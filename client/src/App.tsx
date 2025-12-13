import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "next-themes";
import { Route, Switch } from "wouter";
import { Suspense, lazy } from "react";
import { Loader2 } from "lucide-react";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

// Lazy Loading das Páginas
const Home = lazy(() => import("@/pages/home"));
// PartnersPage é um named export, precisamos de adaptar para lazy
const PartnersPage = lazy(() => import("@/pages/PartnersPage").then(module => ({ default: module.PartnersPage })));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const CareersPage = lazy(() => import("@/pages/CareersPage"));

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <QueryClientProvider client={queryClient}>
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
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </TooltipProvider>
    </ThemeProvider>
  );
}