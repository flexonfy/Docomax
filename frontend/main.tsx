import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { registerServiceWorker } from "./lib/serviceWorker";
import { prefetchCriticalData } from "./lib/dataLoader";

// Register service worker for offline support
if (process.env.NODE_ENV === 'production') {
  registerServiceWorker().catch(error => {
    console.warn('Service Worker registration failed:', error);
  });
}

// Prefetch critical data after app loads for better performance
window.addEventListener('load', () => {
  prefetchCriticalData().catch(error => {
    console.warn('Data prefetch failed:', error);
  });
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
