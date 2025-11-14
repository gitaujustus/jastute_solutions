import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Jastute Solutions - Digital Design & Development Agency in Kenya",
    template: "%s | JASTUTE Solutions"
  },
  description: "Leading digital design and development agency in Kenya. We help brands stand out through web design, graphic design, IT consultancy, system design, branding, and CV design. Attract. Impact. Grow.",
  keywords: ["web design Kenya", "graphic design", "IT consultancy", "system design", "branding", "CV design", "digital agency Kenya", "Nairobi web design"],
  authors: [{ name: "JASTUTE Solutions" }],
  creator: "JASTUTE Solutions",
  publisher: "JASTUTE Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://jastutesolutions.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "JASTUTE Solutions - Digital Design & Development Agency",
    description: "Leading digital design and development agency in Kenya. We help brands stand out through innovative digital solutions.",
    url: 'https://jastutesolutions.com',
    siteName: 'JASTUTE Solutions',
    images: [
      {
        // Use the webp logo from public assets (lowercase path). Use metadataBase for absolute URL generation.
        url: '/assets/webp/jastute-logo.webp',
        width: 1200,
        height: 630,
        alt: 'JASTUTE Solutions Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "JASTUTE Solutions - Digital Design & Development",
    description: "Leading digital design and development agency in Kenya. Attract. Impact. Grow.",
  // Twitter expects an absolute URL or a path resolvable from the site root
  images: ['/assets/webp/jastute-logo.webp'],
  },
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/jastute-logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#063837" />
        <link rel="preload" href="/assets/webp/hero1.webp" as="image" type="image/webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
