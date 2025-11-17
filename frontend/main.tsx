import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { registerServiceWorker } from "./lib/serviceWorker";
import { prefetchCriticalData } from "./lib/dataLoader";

// Register service worker for offline support
if (process.env.NODE_ENV === 'production') {
  registerServiceWorker().catch(() => {
    // Service worker registration failure is silently handled
  });
}

// Prefetch critical data after app loads for better performance
window.addEventListener('load', () => {
  prefetchCriticalData().catch(() => {
    // Data prefetch failure is silently handled
  });
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
