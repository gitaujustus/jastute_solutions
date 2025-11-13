import ContactSection from "@/components/contacts/ContactSection";
import HeroSection from "@/components/contacts/HeroSection";

export const metadata = {
  title: "Contact Us - Get In Touch with JASTUTE Solutions",
  description: "Contact JASTUTE Solutions for web design, graphic design, IT consultancy, and digital solutions. Located in Nairobi, Kenya. Email: jastutesolutions@gmail.com, Phone: +2547-29-144-533",
  keywords: ["contact JASTUTE Solutions", "web design Kenya contact", "Nairobi digital agency", "get quote", "project inquiry"],
  openGraph: {
    title: "Contact JASTUTE Solutions - Start Your Project Today",
    description: "Ready to transform your business? Contact us for professional web design, graphic design, and digital solutions in Kenya.",
    url: '/contacts',
  },
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#E0F0DF]"
    style={{
      backgroundColor: '#dfefdf',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%238573a1' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`
    }}
    >
      <HeroSection />
      <ContactSection />
    </main>
  );
}