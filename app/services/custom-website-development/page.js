import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import CustomWebDevHero from './components/CustomWebDevHero';

const CustomWebDevContent = dynamic(() => import('./components/CustomWebDevContent'));
const CustomWebDevProcess = dynamic(() => import('./components/CustomWebDevProcess'));
const CustomWebDevCTA = dynamic(() => import('./components/CustomWebDevCTA'));

export const metadata = {
  title: 'Custom Website Development Services | JASTUTE Solutions Kenya',
  description: 'Custom website development built for serious business growth. Fast, reliable, SEO-friendly websites designed around your goals, not templates.',
  keywords: [
    'custom website development Kenya',
    'web development services',
    'business website development',
    'custom web development Nairobi',
    'professional web development',
    'scalable website development',
    'CMS development Kenya',
    'SEO website development',
    'responsive web development',
    'custom web applications'
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
    title: 'Custom Website Development Services | JASTUTE Solutions',
    description: 'Custom website development built for serious business growth. Fast, reliable, SEO-friendly websites designed around your goals.',
    type: 'website',
    locale: 'en_US',
    siteName: 'JASTUTE Solutions',
    images: ['/Assets/Services/Web Development.jpeg'],
    url: '/services/custom-website-development',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Website Development Services | JASTUTE Solutions',
    description: 'Custom website development built for serious business growth. Fast, reliable, SEO-friendly websites.',
    images: ['/Assets/Services/Web Development.jpeg'],
  },
  alternates: {
    canonical: '/services/custom-website-development',
  },
};

export default function CustomWebsiteDevelopmentPage() {
  return (
    <div className="min-h-screen">
      <CustomWebDevHero />
      <Suspense fallback={<div className="h-96 bg-white animate-pulse" />}>
        <CustomWebDevContent />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-[#E0F0DF] animate-pulse" />}>
        <CustomWebDevProcess />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-[#063837] animate-pulse" />}>
        <CustomWebDevCTA />
      </Suspense>
    </div>
  );
}