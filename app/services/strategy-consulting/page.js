import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import StrategyHero from './components/StrategyHero';
import StrategyContent from './components/StrategyContent';

const StrategyProcess = dynamic(() => import('./components/StrategyProcess'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />
});

const StrategyCTA = dynamic(() => import('./components/StrategyCTA'), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse" />
});

export const metadata = {
  title: 'Website Strategy & Consulting | JASTUTE Solutions',
  description: 'Transform underperforming websites into powerful business tools. Expert consulting with design audits, performance optimization, and conversion strategies.',
  keywords: 'website strategy, web consulting, design audit, performance optimization, conversion optimization, UX consulting, website analysis Kenya',
  openGraph: {
    title: 'Website Strategy & Consulting | JASTUTE Solutions',
    description: 'Transform underperforming websites into powerful business tools. Expert consulting with design audits, performance optimization, and conversion strategies.',
    type: 'website',
    url: 'https://jastutesolutions.co.ke/services/strategy-consulting',
    images: [
      {
        url: '/assets/webp/web anaysis.jpg',
        // width: 1200,
        // height: 630,
        alt: 'JASTUTE Solutions - Website Strategy & Consulting'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Strategy & Consulting | JASTUTE Solutions',
    description: 'Transform underperforming websites into powerful business tools. Expert consulting with design audits, performance optimization, and conversion strategies.',
    images: ['/assets/webp/web anaysis.jpg']
  },
  alternates: {
    canonical: 'https://jastutesolutions.co.ke/services/strategy-consulting'
  }
};

export default function StrategyConsultingPage() {
  return (
    <main>
      <StrategyHero />
      <StrategyContent />
      <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
        <StrategyProcess />
      </Suspense>
      <Suspense fallback={<div className="h-64 bg-gray-100 animate-pulse" />}>
        <StrategyCTA />
      </Suspense>
    </main>
  );
}