import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'      
import './styles/index.css'
import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

const sendToAnalytics = (metric: any) => {
  const body = JSON.stringify({
    eventName: "web_vital",
    properties: metric,
    sessionId: localStorage.getItem("analytics_session_id")
  });
  
  // Use fetch with keepalive to ensure request completes even if tab closes
  fetch('/api/analytics/event', { 
    body, 
    method: 'POST', 
    headers: { 'Content-Type': 'application/json' }, 
    keepalive: true 
  }).catch(e => console.error("Analytics error:", e));
}

reportWebVitals(sendToAnalytics);