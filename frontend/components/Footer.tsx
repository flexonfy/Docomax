import React from 'react';
import { Heart } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <footer className={`bg-white/40 backdrop-blur-md text-center text-sm text-gray-600 py-4 border-t border-gray-200/40 ${!isHomePage ? 'pb-20 md:pb-4' : ''}`}>
      <div className="flex items-center justify-center space-x-1">
        <span>Created by</span>
        <span>by&nbsp;</span>
        <a href="https://x.com/bugingoflexon" target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-600 hover:text-teal-700 hover:underline">
          BUGINGO Flexon
        </a>
      </div>
    </footer>
  );
}
