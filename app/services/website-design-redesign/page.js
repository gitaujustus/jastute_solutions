import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import WebsiteRedesignHero from './components/WebsiteRedesignHero';

const WebsiteRedesignContent = dynamic(() => import('./components/WebsiteRedesignContent'));
const WebsiteRedesignProcess = dynamic(() => import('./components/WebsiteRedesignProcess'));
const WebsiteRedesignCTA = dynamic(() => import('./components/WebsiteRedesignCTA'));

export const metadata = {
  title: 'Business Website Design & Redesign Services | JASTUTE Solutions Kenya',
  description: 'Transform your outdated website into a brand asset. Professional website design & redesign services in Kenya. Fast, clean, conversion-focused websites that drive growth.',
  keywords: [
    'website design Kenya',
    'website redesign services',
    'business website design',
    'web design Nairobi',
    'responsive website design',
    'professional web design',
    'website development Kenya',
    'modern website design',
    'website redesign company',
    'custom website design'
  ],
  authors: [{ name: 'JASTUTE Solutions' }],
  creator: 'JASTUTE Solutions',
  publisher: 'JASTUTE Solutions',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Business Website Design & Redesign Services | JASTUTE Solutions',
    description: 'Transform your outdated website into a brand asset. Professional website design & redesign services that drive growth and conversions.',
    type: 'website',
    locale: 'en_US',
    siteName: 'JASTUTE Solutions',
    images: ['/assets/webp/Website Redesign.webp'],
    url: '/services/website-design-redesign',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Website Design & Redesign Services | JASTUTE Solutions',
    description: 'Transform your outdated website into a brand asset. Professional website design & redesign services in Kenya.',
    images: ['/assets/webp/Website Redesign.webp'],
  },
  alternates: {
    canonical: '/services/website-design-redesign',
  },
};

export default function WebsiteDesignRedesignPage() {
  return (
    <div className="min-h-screen">
      <WebsiteRedesignHero />
      <Suspense fallback={<div className="h-96 bg-white animate-pulse" />}>
        <WebsiteRedesignContent />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-[#E0F0DF] animate-pulse" />}>
        <WebsiteRedesignProcess />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-[#063837] animate-pulse" />}>
        <WebsiteRedesignCTA />
      </Suspense>
    </div>
  );
}