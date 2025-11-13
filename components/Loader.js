'use client';

import { useState, useEffect } from 'react';

export default function Loader({ children }) {
  const [loading, setLoading] = useState(() => {
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem('hasLoaded');
    }
    return true;
  });

  useEffect(() => {
    if (!loading) return;

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem('hasLoaded', 'true');
    }, 2000);

    return () => clearTimeout(timer);
  }, [loading]);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#E0F0DF] flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-12 h-12 border-3 border-[#063837]/20 border-t-[#063837] rounded-full animate-spin mb-3"></div>
          <h2 className="text-[#063837] text-lg font-medium">JASTUTE</h2>
        </div>
      </div>
    );
  }

  return children;
}