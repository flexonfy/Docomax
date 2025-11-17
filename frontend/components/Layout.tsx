import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import BottomNavigation from './BottomNavigation';
import OfflineIndicator from './OfflineIndicator';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50/50 flex flex-col">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:z-50 focus:fixed focus:top-0 focus:left-0 focus:bg-blue-600 focus:text-white focus:p-2 focus:rounded-b"
      >
        Skip to main content
      </a>
      <Header />
      <OfflineIndicator />
      <main id="main-content" className="flex-1" role="main">
        <div className="w-full">
          {children}
        </div>
      </main>
      <Footer />
      {!isHomePage && <BottomNavigation />}
    </div>
  );
}
