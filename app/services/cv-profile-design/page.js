import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import CVHero from './components/CVHero';
import CVContent from './components/CVContent';

const CVProcess = dynamic(() => import('./components/CVProcess'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />
});

const CVCTA = dynamic(() => import('./components/CVCTA'), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse" />
});

export const metadata = {
  title: 'CV & Profile Design | JASTUTE Solutions',
  description: 'Professional CV design, LinkedIn optimization, and personal branding services. Stand out with ATS-friendly CVs and compelling profiles that get you noticed.',
  keywords: 'CV design Kenya, resume writing, LinkedIn optimization, ATS-friendly CV, Europass CV, professional profile, personal branding, job application',
  openGraph: {
    title: 'CV & Profile Design | JASTUTE Solutions',
    description: 'Professional CV design, LinkedIn optimization, and personal branding services. Stand out with ATS-friendly CVs and compelling profiles that get you noticed.',
    type: 'website',
    url: 'https://jastutesolutions.co.ke/services/cv-profile-design',
    images: [
      {
        url: '/assets/webp/Resume Writing.webp',
        alt: 'JASTUTE Solutions - CV & Profile Design'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CV & Profile Design | JASTUTE Solutions',
    description: 'Professional CV design, LinkedIn optimization, and personal branding services. Stand out with ATS-friendly CVs and compelling profiles that get you noticed.',
    images: ['/assets/webp/Resume Writing.webp']
  },
  alternates: {
    canonical: 'https://jastutesolutions.co.ke/services/cv-profile-design'
  }
};

export default function CVProfileDesignPage() {
  return (
    <main>
      <CVHero />
      <CVContent />
      <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
        <CVProcess />
      </Suspense>
      <Suspense fallback={<div className="h-64 bg-gray-100 animate-pulse" />}>
        <CVCTA />
      </Suspense>
    </main>
  );
}