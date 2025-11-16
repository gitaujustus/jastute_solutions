import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import HostingHero from './components/HostingHero';
import HostingContent from './components/HostingContent';

const HostingProcess = dynamic(() => import('./components/HostingProcess'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />
});

const HostingCTA = dynamic(() => import('./components/HostingCTA'), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse" />
});

export const metadata = {
  title: 'Website Hosting & Domain Registration | JASTUTE Solutions',
  description: 'Reliable, fast, and secure web hosting with professional domain registration. 99.9% uptime, SSL certificates, business email, and expert support in Kenya.',
  keywords: 'web hosting Kenya, domain registration, SSL certificates, business email, website hosting, .co.ke domains, .ke domains, hosting services',
  openGraph: {
    title: 'Website Hosting & Domain Registration | JASTUTE Solutions',
    description: 'Reliable, fast, and secure web hosting with professional domain registration. 99.9% uptime, SSL certificates, business email, and expert support in Kenya.',
    type: 'website',
    url: 'https://jastutesolutions.co.ke/services/hosting-domains',
    images: [
      {
        url: '/assets/og-hosting-domains.jpg',
        width: 1200,
        height: 630,
        alt: 'JASTUTE Solutions - Website Hosting & Domain Registration'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Hosting & Domain Registration | JASTUTE Solutions',
    description: 'Reliable, fast, and secure web hosting with professional domain registration. 99.9% uptime, SSL certificates, business email, and expert support in Kenya.',
    images: ['/assets/og-hosting-domains.jpg']
  },
  alternates: {
    canonical: 'https://jastutesolutions.co.ke/services/hosting-domains'
  }
};

export default function HostingDomainsPage() {
  return (
    <main>
      <HostingHero />
      <HostingContent />
      <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
        <HostingProcess />
      </Suspense>
      <Suspense fallback={<div className="h-64 bg-gray-100 animate-pulse" />}>
        <HostingCTA />
      </Suspense>
    </main>
  );
}