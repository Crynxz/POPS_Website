import { useState, useEffect } from "react";

const generateId = () => {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

const getSessionId = () => {
  let sid = localStorage.getItem("analytics_session_id");
  if (!sid) {
    sid = generateId();
    localStorage.setItem("analytics_session_id", sid);
  }
  return sid;
};

export function useExperiment(experimentId: string, variants: string[] = ["control", "variant"]) {

  const [variant, setVariant] = useState<string>(variants[0]);

  useEffect(() => {
    const key = `experiment_${experimentId}`;
    let assigned = localStorage.getItem(key);

    if (!assigned || !variants.includes(assigned)) {
      assigned = variants[Math.floor(Math.random() * variants.length)];
      localStorage.setItem(key, assigned);
      
      // Log assignment
      fetch("/api/analytics/event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventName: "experiment_assigned",
          properties: { experimentId, variant: assigned },
          sessionId: getSessionId()
        })
      }).catch(err => console.error("Failed to log experiment", err));
    }

    setVariant(assigned);
  }, [experimentId, variants]);

  return variant;
}
