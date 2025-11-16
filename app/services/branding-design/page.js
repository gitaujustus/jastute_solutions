import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import BrandingHero from './components/BrandingHero';
import BrandingContent from './components/BrandingContent';

const BrandingShowcase = dynamic(() => import('./components/BrandingShowcase'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />
});

const BrandingProcess = dynamic(() => import('./components/BrandingProcess'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />
});

const BrandingCTA = dynamic(() => import('./components/BrandingCTA'), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse" />
});

export const metadata = {
  title: 'Branding & Graphic Design | JASTUTE Solutions',
  description: 'Professional branding and graphic design services. Custom logos, brand kits, marketing materials, and visual identity design that drives business results.',
  keywords: 'branding Kenya, graphic design, logo design, brand identity, marketing materials, business cards, flyers, brochures, social media graphics',
  openGraph: {
    title: 'Branding & Graphic Design | JASTUTE Solutions',
    description: 'Professional branding and graphic design services. Custom logos, brand kits, marketing materials, and visual identity design that drives business results.',
    type: 'website',
    url: 'https://jastutesolutions.co.ke/services/branding-design',
    images: [
      {
        url: '/assets/og-branding-design.jpg',
        width: 1200,
        height: 630,
        alt: 'JASTUTE Solutions - Branding & Graphic Design'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Branding & Graphic Design | JASTUTE Solutions',
    description: 'Professional branding and graphic design services. Custom logos, brand kits, marketing materials, and visual identity design that drives business results.',
    images: ['/assets/og-branding-design.jpg']
  },
  alternates: {
    canonical: 'https://jastutesolutions.co.ke/services/branding-design'
  }
};

export default function BrandingDesignPage() {
  return (
    <main>
      <BrandingHero />
      <BrandingContent />
      <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
        <BrandingShowcase />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
        <BrandingProcess />
      </Suspense>
      <Suspense fallback={<div className="h-64 bg-gray-100 animate-pulse" />}>
        <BrandingCTA />
      </Suspense>
    </main>
  );
}