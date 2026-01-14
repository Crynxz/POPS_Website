'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FadeIn from "@/components/FadeIn";
import { Code, CheckCircle2, ArrowRight } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language: string;
  fileName?: string;
}

const CodeBlock = ({ code, language, fileName }: CodeBlockProps) => (
  <div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700 mb-6">
    {fileName && (
      <div className="bg-slate-800 px-4 py-2 border-b border-slate-700 text-xs font-mono text-slate-400">
        {fileName}
      </div>
    )}
    <pre className="p-4 overflow-x-auto">
      <code className="text-slate-200 font-mono text-sm">{code}</code>
    </pre>
  </div>
);

const StepCard = ({ number, title, children }: { number: number; title: string; children: React.ReactNode }) => (
  <FadeIn>
    <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-2xl p-8 border border-slate-200 hover:shadow-xl hover:border-primary/50 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">
          {number}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">{title}</h3>
          <div className="text-slate-700 space-y-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  </FadeIn>
);

export default function SpeedInsightsGuidePage() {
  return (
    <>
      <SEO 
        title="Getting Started with Vercel Speed Insights | POPS" 
        description="Learn how to enable and integrate Vercel Speed Insights into your POPS project. Complete guide for all frameworks."
        url="/guides/speed-insights"
      />
      <Header />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-50 via-white to-primary/5 pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full mb-6 text-sm font-medium text-primary">
                <CheckCircle2 size={16} />
                Getting Started Guide
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Getting started with Speed Insights
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl">
                This guide will help you get started with using Vercel Speed Insights on your project, showing you how to enable it, add the package to your project, deploy your app to Vercel, and view your data in the dashboard.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-sm text-blue-900">
                <p>
                  <strong>Choose a framework:</strong> The instructions below are tailored for React. If you're using Next.js, Vue, Svelte, or another framework, select your framework from the documentation options to see specific instructions.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Prerequisites Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">Prerequisites</h2>
            </FadeIn>

            <div className="space-y-4 mb-8">
              <FadeIn delay={0.1}>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold text-slate-900">A Vercel account</p>
                    <p className="text-slate-600">If you don't have one, you can <a href="https://vercel.com/signup" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">sign up for free</a>.</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold text-slate-900">A Vercel project</p>
                    <p className="text-slate-600">If you don't have one, you can <a href="https://vercel.com/new" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">create a new project</a>.</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold text-slate-900">The Vercel CLI installed</p>
                    <p className="text-slate-600 mb-4">If you don't have it, you can install it using one of these commands:</p>
                    <div className="bg-slate-100 rounded-lg p-4 font-mono text-sm text-slate-900 space-y-2">
                      <p>pnpm i vercel</p>
                      <p>yarn add vercel</p>
                      <p>npm install vercel</p>
                      <p>bun add vercel</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-slate-100/50">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">Setup Steps</h2>
            </FadeIn>

            <div className="space-y-8">
              {/* Step 1 */}
              <StepCard number={1} title="Enable Speed Insights in Vercel">
                <p>
                  On the <a href="/dashboard" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Vercel dashboard</a>, select your Project followed by the <strong>Speed Insights</strong> tab. Then, select <strong>Enable</strong> from the dialog.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded p-4 text-sm text-amber-900">
                  <p>
                    <strong>💡 Note:</strong> Enabling Speed Insights will add new routes (scoped at <code className="bg-amber-100 px-2 py-1 rounded">/_vercel/speed-insights/*</code>) after your next deployment.
                  </p>
                </div>
              </StepCard>

              {/* Step 2 */}
              <StepCard number={2} title="Add @vercel/speed-insights to your project">
                <p>Using the package manager of your choice, add the <code className="bg-slate-200 px-2 py-1 rounded text-sm">@vercel/speed-insights</code> package to your project:</p>
                <div className="space-y-3 bg-white p-4 rounded-lg border border-slate-200">
                  <div>
                    <p className="text-sm font-semibold text-slate-700 mb-2">pnpm:</p>
                    <CodeBlock code="pnpm i @vercel/speed-insights" language="bash" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-700 mb-2">yarn:</p>
                    <CodeBlock code="yarn add @vercel/speed-insights" language="bash" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-700 mb-2">npm:</p>
                    <CodeBlock code="npm install @vercel/speed-insights" language="bash" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-700 mb-2">bun:</p>
                    <CodeBlock code="bun add @vercel/speed-insights" language="bash" />
                  </div>
                </div>
              </StepCard>

              {/* Step 3 */}
              <StepCard number={3} title="Add the SpeedInsights component to your app">
                <p>The <code className="bg-slate-200 px-2 py-1 rounded text-sm">SpeedInsights</code> component is a wrapper around the tracking script, offering seamless integration with React.</p>
                <p>Add the following component to your main app file:</p>
                
                <div className="space-y-4 bg-white p-4 rounded-lg border border-slate-200">
                  <div>
                    <p className="text-sm font-semibold text-slate-700 mb-2">TypeScript:</p>
                    <CodeBlock 
                      code={`import { SpeedInsights } from '@vercel/speed-insights/react';

export default function App() {
  return (
    <div>
      {/* ... your app content ... */}
      <SpeedInsights />
    </div>
  );
}`}
                      language="typescript"
                      fileName="App.tsx"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-700 mb-2">JavaScript:</p>
                    <CodeBlock 
                      code={`import { SpeedInsights } from '@vercel/speed-insights/react';

export default function App() {
  return (
    <div>
      {/* ... your app content ... */}
      <SpeedInsights />
    </div>
  );
}`}
                      language="javascript"
                      fileName="App.jsx"
                    />
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded p-4 text-sm text-blue-900">
                  <p>
                    <strong>✨ Tip:</strong> The component should be placed in your root layout or main app component to ensure it's initialized on all pages.
                  </p>
                </div>
              </StepCard>

              {/* Step 4 */}
              <StepCard number={4} title="Deploy your app to Vercel">
                <p>You can deploy your app to Vercel's global <a href="/docs/cdn" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">CDN</a> by running the following command from your terminal:</p>
                <CodeBlock code="vercel deploy" language="bash" fileName="terminal" />
                <p>Alternatively, you can <a href="/docs/git#deploying-a-git-repository" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">connect your project's git repository</a>, which will enable Vercel to deploy your latest pushes and merges to main.</p>
                <p>Once your app is deployed, it's ready to begin tracking performance metrics.</p>
                <div className="bg-amber-50 border border-amber-200 rounded p-4 text-sm text-amber-900">
                  <p>
                    <strong>💡 Note:</strong> If everything is set up correctly, you should be able to find the <code className="bg-amber-100 px-2 py-1 rounded">/_vercel/speed-insights/script.js</code> script inside the body tag of your page.
                  </p>
                </div>
              </StepCard>

              {/* Step 5 */}
              <StepCard number={5} title="View your data in the dashboard">
                <p>Once your app is deployed, and users have visited your site, you can view the data in the dashboard.</p>
                <p>To do so, go to your <a href="/dashboard" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">dashboard</a>, select your project, and click the <strong>Speed Insights</strong> tab.</p>
                <p>After a few days of visitors, you'll be able to start exploring your metrics. For more information on how to use Speed Insights, see the official Vercel documentation.</p>
              </StepCard>
            </div>
          </div>
        </section>

        {/* Framework-Specific Notes */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">Framework-Specific Notes</h2>
            </FadeIn>

            <div className="space-y-6">
              <FadeIn delay={0.1}>
                <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Next.js (App Router)</h3>
                  <p className="text-slate-700 mb-4">For Next.js 13.5+, add the component to your root layout:</p>
                  <CodeBlock 
                    code={`import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}`}
                    language="typescript"
                    fileName="app/layout.tsx"
                  />
                  <p className="text-sm text-slate-600 mt-4">For versions older than 13.5, create a dedicated client component and pass the <code className="bg-slate-200 px-2 py-1 rounded">route</code> prop with the pathname.</p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Vue / Nuxt</h3>
                  <p className="text-slate-700 mb-4">Add the component to your main layout file:</p>
                  <CodeBlock 
                    code={`<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>

<template>
  <SpeedInsights />
</template>`}
                    language="vue"
                    fileName="App.vue"
                  />
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Svelte / SvelteKit</h3>
                  <p className="text-slate-700 mb-4">Call the injection function in your root layout:</p>
                  <CodeBlock 
                    code={`import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";

injectSpeedInsights();`}
                    language="typescript"
                    fileName="src/routes/+layout.ts"
                  />
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Other Frameworks</h3>
                  <p className="text-slate-700 mb-4">For other frameworks, import and call the injection function in your client-side entry point:</p>
                  <CodeBlock 
                    code={`import { injectSpeedInsights } from "@vercel/speed-insights";

injectSpeedInsights();`}
                    language="javascript"
                    fileName="main.js"
                  />
                  <p className="text-sm text-slate-600 mt-4"><strong>Important:</strong> This should only be called once in your app, and must run on the client.</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Privacy and Customization */}
        <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-slate-100/50">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">Privacy and Customization</h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="bg-white rounded-xl p-8 border border-slate-200 mb-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">beforeSend Hook</h3>
                <p className="text-slate-700 mb-4">You can remove sensitive information from URLs or customize data before sending to Vercel by implementing a <code className="bg-slate-200 px-2 py-1 rounded text-sm">beforeSend</code> function:</p>
                <CodeBlock 
                  code={`<script is:inline>
  function speedInsightsBeforeSend(data) {
    // Remove sensitive query parameters
    if (data.url) {
      data.url = data.url.split('?')[0];
    }
    return data;
  }
  window.speedInsightsBeforeSend = speedInsightsBeforeSend;
</script>`}
                  language="javascript"
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Privacy Compliance</h3>
                <p className="text-blue-900">Vercel Speed Insights is designed with privacy in mind. For detailed information about privacy and compliance standards, visit the <a href="/docs/speed-insights/privacy-policy" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">Vercel Privacy Policy</a>.</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Next Steps */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">Next Steps</h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FadeIn delay={0.1}>
                <a href="#" className="group bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-xl p-8 border border-slate-200 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <Code className="text-primary" size={28} />
                    <ArrowRight className="text-slate-400 group-hover:text-primary transition-colors" size={20} />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Package Documentation</h3>
                  <p className="text-sm text-slate-600">Learn about all available options and APIs in the @vercel/speed-insights package.</p>
                </a>
              </FadeIn>

              <FadeIn delay={0.2}>
                <a href="#" className="group bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-xl p-8 border border-slate-200 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <Code className="text-primary" size={28} />
                    <ArrowRight className="text-slate-400 group-hover:text-primary transition-colors" size={20} />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Understanding Metrics</h3>
                  <p className="text-sm text-slate-600">Understand Core Web Vitals and other performance metrics tracked by Speed Insights.</p>
                </a>
              </FadeIn>

              <FadeIn delay={0.3}>
                <a href="#" className="group bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-xl p-8 border border-slate-200 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <Code className="text-primary" size={28} />
                    <ArrowRight className="text-slate-400 group-hover:text-primary transition-colors" size={20} />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Troubleshooting</h3>
                  <p className="text-sm text-slate-600">Get help with common issues and learn how to debug Speed Insights implementation.</p>
                </a>
              </FadeIn>

              <FadeIn delay={0.4}>
                <a href="#" className="group bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-xl p-8 border border-slate-200 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <Code className="text-primary" size={28} />
                    <ArrowRight className="text-slate-400 group-hover:text-primary transition-colors" size={20} />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Pricing & Limits</h3>
                  <p className="text-sm text-slate-600">Learn about Speed Insights pricing, request limits, and usage patterns.</p>
                </a>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ready to track your performance?</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg text-slate-600 mb-8">Deploy your application to Vercel and start monitoring your metrics in real-time.</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <a 
                href="https://vercel.com/dashboard" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Go to Vercel Dashboard
                <ArrowRight size={20} />
              </a>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
