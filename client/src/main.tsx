import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// Self-hosted fonts for better LCP/Performance
import "@fontsource/plus-jakarta-sans/latin-400.css";
import "@fontsource/plus-jakarta-sans/latin-ext-400.css";
import "@fontsource/plus-jakarta-sans/latin-600.css";
import "@fontsource/plus-jakarta-sans/latin-ext-600.css";
import "@fontsource/plus-jakarta-sans/latin-700.css";
import "@fontsource/plus-jakarta-sans/latin-ext-700.css";
import "@fontsource/plus-jakarta-sans/latin-800.css";
import "@fontsource/plus-jakarta-sans/latin-ext-800.css";
import './styles/index.css'
import reportWebVitals from './reportWebVitals'

// Session ID for analytics tracking
const getOrCreateSessionId = () => {
  let sessionId = localStorage.getItem("analytics_session_id");
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem("analytics_session_id", sessionId);
  }
  return sessionId;
};

// Initialize session on app load
getOrCreateSessionId();

// Analytics event sender - sends Web Vitals to backend
const sendToAnalytics = (metric: any) => {
  const body = JSON.stringify({
    eventName: "web_vital",
    properties: metric,
    sessionId: localStorage.getItem("analytics_session_id"),
    url: window.location.pathname,
    userAgent: navigator.userAgent,
    timestamp: new Date().toISOString()
  });

  // Use fetch with keepalive to ensure request completes even if tab closes
  // This is critical for metrics like CLS, LCP, FID which happen on page unload
  fetch('/api/analytics/event', {
    body,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    keepalive: true
  }).catch(e => console.error("Analytics error:", e));
};

// Report Web Vitals (LCP, FID, CLS, FCP, TTFB) for performance monitoring
// Defer execution to avoid blocking the critical rendering path
const initAnalytics = () => {
  reportWebVitals(sendToAnalytics);
};

if (typeof window !== "undefined") {
  // Use requestIdleCallback if available, otherwise fallback to setTimeout
  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(initAnalytics);
  } else {
    setTimeout(initAnalytics, 2000);
  }
}

// Render React App
ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)