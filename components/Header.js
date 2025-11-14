'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      } ${isMenuOpen ? 'bg-white' : ''}`}
    >
      {/* Navigation */}
      <nav className="px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image 
              src="/assets/jastute-logo.png" 
              alt="JASTUTE Solutions Logo"
              priority={true}
              width={80}
              height={48}
              className="h-12 2xl:h-20 w-auto"
            />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 xl:space-x-12 text-[16px] md:text-[18px] 2xl:text-[20px]">
            <Link href="/" className={`transition-colors ${pathname === '/' ? 'text-[#073737] font-semibold' : 'text-[#242B29] hover:text-[#FCB043]'}`}>Home</Link>
            <Link href="/services" className={`transition-colors ${pathname === '/services' ? 'text-[#073737] font-semibold' : 'text-[#242B29] hover:text-[#FCB043]'}`}>Services</Link>
            <Link href="/about" className={`transition-colors ${pathname === '/about' ? 'text-[#073737] font-semibold' : 'text-[#242B29] hover:text-[#FCB043]'}`}>About</Link>
            <Link href="/contacts" className={`transition-colors ${pathname === '/contacts' ? 'text-[#073737] font-semibold' : 'text-[#242B29] hover:text-[#FCB043]'}`}>Contact</Link>
            <button 
              onClick={() => window.open('mailto:jastutesolutions@gmail.com?subject=Quote%20Request%20-%20JASTUTE%20SOLUTIONS&body=Hello%20JASTUTE%20SOLUTIONS!%20I\'m%20interested%20in%20your%20services%20and%20would%20like%20to%20request%20a%20quote%20for%20my%20project.', '_blank')}
              className="bg-linear-to-r from-[#063837] to-[#FCB043] text-white px-6 py-2 rounded-full hover:shadow-lg transition-shadow"
            >
              Get a Quote
            </button>
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
      {isMenuOpen && (
        <>
          {/* Dark Backdrop */}
          <div 
            className="md:hidden fixed inset-0 top-20 bg-black/70 z-40 h-full"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <div className="md:hidden fixed left-0 right-0 top-20 bg-white z-50 shadow-lg">
            <div className="px-6 py-8 space-y-6">
              <Link href="/" className={`block py-3 text-[16px] md:text-[18px] 2xl:text-[20px] transition-colors ${pathname === '/' ? 'text-[#073737] font-semibold' : 'text-[#242B29] hover:text-[#FCB043]'}`} onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link href="/services" className={`block py-3 text-[16px] md:text-[18px] 2xl:text-[20px] transition-colors ${pathname === '/services' ? 'text-[#073737] font-semibold' : 'text-[#242B29] hover:text-[#FCB043]'}`} onClick={() => setIsMenuOpen(false)}>Services</Link>
              <Link href="/about" className={`block py-3 text-[16px] md:text-[18px] 2xl:text-[20px] transition-colors ${pathname === '/about' ? 'text-[#073737] font-semibold' : 'text-[#242B29] hover:text-[#FCB043]'}`} onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link href="/contacts" className={`block py-3 text-[16px] md:text-[18px] 2xl:text-[20px] transition-colors ${pathname === '/contacts' ? 'text-[#073737] font-semibold' : 'text-[#242B29] hover:text-[#FCB043]'}`} onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <button 
                onClick={() => {
                  window.open('mailto:jastutesolutions@gmail.com?subject=Quote%20Request%20-%20JASTUTE%20Solutions&body=Hello%20JASTUTE%20Solutions!%20I\'m%20interested%20in%20your%20services%20and%20would%20like%20to%20request%20a%20quote%20for%20my%20project.', '_blank');
                  setIsMenuOpen(false);
                }}
                className="w-full mt-4 bg-linear-to-r from-[#063837] to-[#FCB043] text-white px-6 py-3 rounded-full text-center font-semibold text-[16px] md:text-[18px] 2xl:text-[20px]"
              >
                Get a Quote
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
}