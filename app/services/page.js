import HeroSection from '@/components/services/HeroSection';
import CTASection from '@/components/services/CTASection';
import ServicesGrid from '@/components/services/ServicesGrid';

export const metadata = {
  title: "Our Services - Web Design, Graphic Design & IT Solutions",
  description: "Comprehensive digital services including web design, graphic design, IT consultancy, system design, branding, and CV design. Transform your business with JASTUTE Solutions.",
  keywords: ["web design services", "graphic design Kenya", "IT consultancy", "system design", "branding services", "CV design", "digital solutions"],
  openGraph: {
    title: "Our Services - JASTUTE Solutions",
    description: "Comprehensive digital services to transform your business. Web design, graphic design, IT consultancy, and more.",
    url: '/services',
  },
  // image preview
 images: [
      {
      url: '/assets/webp/Website Redesign.webp',
        width: 736,
        height: 560,
        alt: 'JASTUTE Solutions Website Redesign Overview',
      },
    ]
};

export default function Services() {
  return (
    <div className="min-h-screen bg-[#E0F0DF]">
      <HeroSection />
      <ServicesGrid />
      <CTASection />
    </div>
  );
}