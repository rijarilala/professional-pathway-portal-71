
import { createRoot } from 'react-dom/client';
import { Suspense } from 'react';
import App from './App.tsx';
import './i18n';
import './index.css';

// Loading component for suspense fallback
const Loading = () => (
  <div className="h-screen w-screen flex items-center justify-center">
    <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
  </div>
);

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<Loading />}>
    <App />
  </Suspense>
);

