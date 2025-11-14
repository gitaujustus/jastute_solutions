'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function OptimizedImage({ src, alt, width, height, className = '', priority = false, style, ...props }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      {/* lightweight shimmer placeholder */}
      <div
        aria-hidden
        className={`absolute inset-0 transition-opacity duration-500 ${loaded ? 'opacity-0' : 'opacity-100'}`}
      >
        <div className="w-full h-full bg-gradient-to-r from-[#E0F0DF] via-white/60 to-[#E0F0DF] animate-pulse" />
      </div>

      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        onLoadingComplete={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        className={`relative z-10 w-full h-full object-cover ${loaded ? 'opacity-100 transition-opacity duration-300' : 'opacity-0'}`}
        {...props}
      />
    </div>
  );
}
