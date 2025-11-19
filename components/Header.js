'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { RiArrowDropDownLine } from 'react-icons/ri';

const services = [
  { name: 'Website Design & Redesign', href: '/services/website-design-redesign' },
  { name: 'Custom Web Development', href: '/services/custom-website-development' },
  { name: 'Web Business Solutions', href: '/services/custom-web-systems' },
  { name: 'Web Hosting & Domains', href: '/services/hosting-domains' },
  { name: 'Web Strategy & Consulting', href: '/services/strategy-consulting' },
  { name: 'Branding & Graphic Design', href: '/services/branding-design' },
  { name: 'CV & Profile Design', href: '/services/cv-profile-design' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      {/* Navigation */}
      <nav className="px-6 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image 
              src="/assets/jastute-logo.png" 
              alt="JASTUTE Solutions Logo"
              priority={true}
              width={2053}
              height={740}
              className="h-12 2xl:h-20 w-auto"
            />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 xl:space-x-12 text-[16px]  2xl:text-[18px]">
            <Link href="/" className={`transition-colors px-3 py-[5px] rounded-lg ${pathname === '/' ? 'text-[#063837] font-semibold bg-[#F0AA44]/60' : 'text-[#242B29] hover:text-[#FCB043]'}`}>Home</Link>
            
            {/* Desktop Services Dropdown */}
            <div className="relative group">
              <Link 
                href="/services"
                className={`transition-colors flex items-center gap-1 px-3 py-[5px] rounded-lg ${pathname.startsWith('/services') ? 'text-[#063837] font-semibold bg-[#F0AA44]/60' : 'text-[#242B29] hover:text-[#FCB043]'}`}
              >
                Services
                <RiArrowDropDownLine className="w-8 h-8 transition-transform group-hover:rotate-180" />
              </Link>
              
              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-4 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-40">
                <div className="py-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className={`block px-4 py-[5px] transition-colors text-sm ${pathname === service.href ? 'text-[#063837] font-bold bg-[#F0AA44]/40' : 'text-[#242B29] hover:bg-[#E0F0DF] hover:text-[#073737]'}`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <Link href="/about" className={`transition-colors px-3 py-[5px] rounded-lg ${pathname === '/about' ? 'text-[#063837] font-semibold bg-[#F0AA44]/60' : 'text-[#242B29] hover:text-[#FCB043]'}`}>About</Link>
            <button 
              onClick={() => {
                window.location.href = '/#portfolio';
              }}
              className="transition-colors px-3 py-[5px] rounded-lg text-[#242B29] hover:text-[#FCB043]"
            >
              Portfolio
            </button>
            <Link href="/contacts" className={`transition-colors px-3 py-[5px] rounded-lg ${pathname === '/contacts' ? 'text-[#063837] font-semibold bg-[#F0AA44]/60' : 'text-[#242B29] hover:text-[#FCB043]'}`}>Contact</Link>
            <Link 
              href="/request-a-quote"
              className="bg-linear-to-r from-[#063837] to-[#FCB043] text-white px-6 py-[5px] rounded-full hover:shadow-lg transition-shadow"
            >
              Get a Quote
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden bg-[#FCB043] text-[#063837] rounded-md p-2 flex items-center justify-center shadow-sm hover:shadow-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            title={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu Overlay */}
      {/* Dark Backdrop */}
      <div 
        className={`md:hidden fixed inset-0 top-16 bg-black/70 z-40 h-full transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      />
      
      {/* Mobile Sidebar (slides from right) */}
      <div className={`md:hidden fixed right-0 top-16 bottom-0 w-3/4 max-w-sm bg-white z-50 shadow-lg overflow-y-auto transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="px-6 py-8 space-y-2">
              <Link href="/" className={`block py-3 px-3 rounded-lg text-[16px] md:text-[18px] 2xl:text-[20px] transition-colors ${pathname === '/' ? 'text-[#063837] font-semibold bg-[#F0AA44]/60' : 'text-[#242B29] hover:text-[#FCB043]'}`} onClick={() => setIsMenuOpen(false)}>Home</Link>
              
              {/* Mobile Services Dropdown */}
              <div>
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`w-full text-left py-3 px-3 rounded-lg text-[16px] md:text-[18px] 2xl:text-[20px] transition-colors flex items-center justify-between ${pathname.startsWith('/services') ? 'text-[#063837] font-semibold bg-[#F0AA44]/60' : 'text-[#242B29] hover:text-[#FCB043]'}`}
                >
                  Services
                  <RiArrowDropDownLine className={`w-8 h-8 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Mobile Services Submenu */}
                {isServicesOpen && (
                  <div className="pl-4 space-y-2 bg-[#E0F0DF]/30 rounded-lg mt-2 py-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className={`block py-2 text-sm transition-colors ${pathname === service.href ? 'text-[#063837] font-bold' : 'text-[#242B29] hover:text-[#073737] hover:font-semibold'}`}
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsServicesOpen(false);
                        }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link href="/about" className={`block py-3 px-3 rounded-lg text-[16px] md:text-[18px] 2xl:text-[20px] transition-colors ${pathname === '/about' ? 'text-[#063837] font-semibold bg-[#F0AA44]/60' : 'text-[#242B29] hover:text-[#FCB043]'}`} onClick={() => setIsMenuOpen(false)}>About</Link>
              <button 
                onClick={() => {
                  window.location.href = '/#portfolio';
                  setIsMenuOpen(false);
                }}
                className="block py-3 px-3 rounded-lg text-[16px] md:text-[18px] 2xl:text-[20px] transition-colors text-[#242B29] hover:text-[#FCB043] text-left w-full"
              >
                Portfolio
              </button>
              <Link href="/contacts" className={`block py-3 px-3 rounded-lg text-[16px] md:text-[18px] 2xl:text-[20px] transition-colors ${pathname === '/contacts' ? 'text-[#063837] font-semibold bg-[#F0AA44]/60' : 'text-[#242B29] hover:text-[#FCB043]'}`} onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <Link 
                href="/request-a-quote"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full mt-4 bg-linear-to-r from-[#063837] to-[#FCB043] text-white px-6 py-3 rounded-full text-center font-semibold text-[16px] md:text-[18px] 2xl:text-[20px]"
              >
                Get a Quote
              </Link>
            </div>
          </div>
    </header>
  );
}