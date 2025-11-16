import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import CustomWebSystemsHero from './components/CustomWebSystemsHero';

const CustomWebSystemsContent = dynamic(() => import('./components/CustomWebSystemsContent'));
const CustomWebSystemsProcess = dynamic(() => import('./components/CustomWebSystemsProcess'));
const CustomWebSystemsCTA = dynamic(() => import('./components/CustomWebSystemsCTA'));

export const metadata = {
  title: 'Custom Web Systems Development | POS, CRM, ERP Solutions | JASTUTE Kenya',
  description: 'Custom web-based systems tailored to run your business smoothly. POS, CRM, ERP, education platforms, and automation tools built for your specific needs.',
  keywords: [
    'custom web systems Kenya',
    'POS system development',
    'CRM development Kenya',
    'ERP system development',
    'education platform development',
    'custom business systems',
    'web-based systems Nairobi',
    'business automation tools',
    'custom dashboard development',
    'enterprise software development'
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
    title: 'Custom Web Systems Development | JASTUTE Solutions',
    description: 'Custom web-based systems tailored to run your business smoothly. POS, CRM, ERP, and automation tools built for your specific needs.',
    type: 'website',
    locale: 'en_US',
    siteName: 'JASTUTE Solutions',
    images: ['/Assets/Services/Web Solutions.jpeg'],
    url: '/services/custom-web-systems',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Web Systems Development | JASTUTE Solutions',
    description: 'Custom web-based systems tailored to run your business smoothly. POS, CRM, ERP solutions built for your needs.',
    images: ['/Assets/Services/Web Solutions.jpeg'],
  },
  alternates: {
    canonical: '/services/custom-web-systems',
  },
};

export default function CustomWebSystemsPage() {
  return (
    <div className="min-h-screen">
      <CustomWebSystemsHero />
      <Suspense fallback={<div className="h-96 bg-white animate-pulse" />}>
        <CustomWebSystemsContent />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-[#E0F0DF] animate-pulse" />}>
        <CustomWebSystemsProcess />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-[#063837] animate-pulse" />}>
        <CustomWebSystemsCTA />
      </Suspense>
    </div>
  );
}