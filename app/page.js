import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import HeroSection from '@/components/home/HeroSection';

// Lazy load components that are below the fold
const ServicesSection = dynamic(() => import('@/components/home/ServicesSection'), {
  loading: () => <div className="h-96 bg-[#E0F0DF] animate-pulse" />
});

const Portfolio = dynamic(() => import('@/components/Portfolio'), {
  loading: () => <div className="h-96 bg-[#063837] animate-pulse" />
});

const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  loading: () => <div className="h-96 bg-[#E0F0DF] animate-pulse" />
});

const ScrollToTop = dynamic(() => import('@/components/home/ScrollToTop'));

export const metadata = {
  title: 'JASTUTE Solutions - Smart Digital Solutions for Growth',
  description: 'JASTUTE Solutions delivers innovative digital experiences that drive growth. We combine strategic thinking with creative execution to help your business thrive through web design, branding, and IT consultancy.',
  keywords: ['web design', 'graphic design', 'IT consultancy', 'branding', 'digital solutions', 'system design', 'Kenya digital agency'],
  authors: [{ name: 'JASTUTE Solutions' }],
  openGraph: {
    title: 'JASTUTE Solutions - Smart Digital Solutions',
    description: 'We help brands stand out through smart digital solutions. Transform your business with our web design, branding, and consultancy services.',
    type: 'website',
    locale: 'en_US',
    siteName: 'JASTUTE Solutions',
    images: ['/assets/webp/jastute-logo-v.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JASTUTE Solutions - Smart Digital Solutions',
    description: 'We help brands stand out through smart digital solutions.',
    images: ['/assets/webp/jastute-logo-v.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#E0F0DF]">
      <HeroSection />
      <Suspense fallback={<div className="h-96 bg-[#E0F0DF] animate-pulse" />}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-[#063837] animate-pulse" />}>
        <Portfolio />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-[#E0F0DF] animate-pulse" />}>
        <Testimonials />
      </Suspense>
      <ScrollToTop />
    </div>
  );
}
