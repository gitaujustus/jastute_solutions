'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    <motion.header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      } ${isMenuOpen ? 'bg-white' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
     
      
      {/* Navigation */}
      <nav className="px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Image 
              src="/Assets/jastute-logo.png" 
              alt="JASTUTE Solutions Logo" 
              width={80}
              height={48}
              className="h-12 2xl:h-20 w-auto"
            />
          </motion.div>
          
          {/* Desktop Menu */}
          <motion.div 
            className="hidden md:flex items-center space-x-8 xl:space-x-12 text-[16px] md:text-[18px] 2xl:text-[20px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link href="/" className={`transition-colors ${pathname === '/' ? 'text-[#FCB043] font-semibold' : 'text-[#242B29] hover:text-[#063837]'}`}>Home</Link>
            <Link href="/services" className={`transition-colors ${pathname === '/services' ? 'text-[#FCB043] font-semibold' : 'text-[#242B29] hover:text-[#063837]'}`}>Services</Link>
            <Link href="/about" className={`transition-colors ${pathname === '/about' ? 'text-[#FCB043] font-semibold' : 'text-[#242B29] hover:text-[#063837]'}`}>About</Link>
            <Link href="/contacts" className={`transition-colors ${pathname === '/contacts' ? 'text-[#FCB043] font-semibold' : 'text-[#242B29] hover:text-[#063837]'}`}>Contact</Link>
            <motion.button 
              onClick={() => window.open('https://wa.me/254729144533?text=Hello%20JASTUTE%20Solutions!%20I\'m%20interested%20in%20your%20services%20and%20would%20like%20to%20request%20a%20quote%20for%20my%20project.', '_blank')}
              className="bg-gradient-to-r from-[#063837] to-[#FCB043] text-white px-6 py-2 rounded-full hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get a Quote
            </motion.button>
          </motion.div>
          
          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden text-[#063837]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </motion.button>
        </div>
        
      </nav>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Dark Backdrop */}
            <motion.div 
              className="md:hidden fixed inset-0 top-[80px] bg-black/70 z-40 h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div 
              className="md:hidden fixed left-0 right-0 top-[80px] bg-white z-50 shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 py-8 space-y-6  ">
                <Link href="/" className={`block py-3  text-[16px] md:text-[18px] 2xl:text-[20px] transition-colors ${pathname === '/' ? 'text-[#FCB043] font-semibold' : 'text-[#242B29] hover:text-[#063837]'}`} onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link href="/services" className={`block py-3 text-[16px] md:text-[18px] 2xl:text-[20px] transition-colors ${pathname === '/services' ? 'text-[#FCB043] font-semibold' : 'text-[#242B29] hover:text-[#063837]'}`} onClick={() => setIsMenuOpen(false)}>Services</Link>
                <Link href="/about" className={`block py-3 text-[16px] md:text-[18px] 2xl:text-[20px] transition-colors ${pathname === '/about' ? 'text-[#FCB043] font-semibold' : 'text-[#242B29] hover:text-[#063837]'}`} onClick={() => setIsMenuOpen(false)}>About</Link>
                <Link href="/contacts" className={`block py-3 text-[16px] md:text-[18px] 2xl:text-[20px] transition-colors ${pathname === '/contacts' ? 'text-[#FCB043] font-semibold' : 'text-[#242B29] hover:text-[#063837]'}`} onClick={() => setIsMenuOpen(false)}>Contact</Link>
                <button 
                  onClick={() => {
                    window.open('https://wa.me/254729144533?text=Hello%20JASTUTE%20Solutions!%20I\'m%20interested%20in%20your%20services%20and%20would%20like%20to%20request%20a%20quote%20for%20my%20project.', '_blank');
                    setIsMenuOpen(false);
                  }}
                  className="w-full mt-4 bg-gradient-to-r from-[#063837] to-[#FCB043] text-white px-6 py-3 rounded-full text-center font-semibold text-[16px] md:text-[18px] 2xl:text-[20px]"
                >
                  Get a Quote
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}