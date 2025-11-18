'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from '@/components/OptimizedImage';
import dynamic from 'next/dynamic';

// Load animated background after initial paint to avoid blocking the main bundle.
const AnimatedBackground = dynamic(() => import('./AnimatedBackground'), { ssr: false });

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Portfolio images with their dimensions
  const portfolioImages = [
    { webp: '/assets/webp/hero1.webp', width: 1024, height: 1024 },
    { webp: '/assets/webp/hero3.webp', width: 626, height: 417 },
    { webp: '/assets/webp/hero4.webp', width: 339, height: 508 },
    { webp: '/assets/webp/Bdevelopment.webp', width: 736, height: 552 },
  ];
  

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % portfolioImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [portfolioImages.length]);

  return (
    <section className="min-h-[80vh] md:min-h-screen flex items-center px-6 sm:px-[30px] lg:px-14 py-10 bg-[#E0F0DF] relative overflow-hidden pt-24 md:pt-32">
      <AnimatedBackground />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div 
          className="flex justify-start pb-7"
          initial={{ opacity: 0.5, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="bg-white rounded-full px-4 py-2 flex items-center gap-2 shadow-sm">
            <div className="w-2 h-2 bg-[#063837] rounded-full"></div>
            <span className="text-[#242B29] text-sm font-medium">Attract. Impact. Grow.</span>
          </div>
        </motion.div>
        
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <motion.div 
            className="lg:col-span-3 space-y-8"
            initial={{ opacity: 0.8, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#073737] leading-tight"
              initial={{ opacity: 0.8, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              We help brands stand out through {' '}
              <span className="text-[#FCB043]">smart digital solutions.</span>{' '}
            </motion.h1>
            
            <motion.p 
              className="text-lg text-[#242B29]/80 max-w-2xl"
              initial={{ opacity: 0.8, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              JASTUTE Solutions delivers innovative digital experiences that drive growth. 
              We combine strategic thinking with creative execution to help your business thrive.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0.8, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.button 
                onClick={() => window.open('mailto:jastutesolutions@gmail.com?subject=Quote%20Request%20-%20JASTUTE%20Solutions&body=Hello%20JASTUTE%20Solutions!%20I\'m%20interested%20in%20your%20services%20and%20would%20like%20to%20request%20a%20quote%20for%20my%20project.', '_blank')}
                className="bg-gradient-to-r from-[#063837] to-[#FCB043] text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
              <motion.button 
                className="text-[#063837] font-semibold flex items-center justify-center gap-2 hover:text-[#FCB043] transition-colors px-8 py-4 border-2 border-[#063837] rounded-full hover:border-[#FCB043] sm:px-0 sm:py-0 sm:border-0 sm:rounded-none"
                whileHover={{ x: 5 }}
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Work
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hidden md:block lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-lg border border-[#E0F0DF] relative">
                <div className="sm:aspect-video lg:aspect-square bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden relative">
                  {portfolioImages.map((image, index) => (
                    <motion.div
                      key={index}
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: index === currentSlide ? 1 : 0 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                      <OptimizedImage 
                        src={image.webp} 
                        alt={`Project ${index + 1}`}
                        width={image.width}
                        height={image.height}
                        priority={index === 0}
                        className="w-full h-full object-cover object-top rounded-2xl"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-center mt-4 gap-2">
                {portfolioImages.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-[#FCB043]' : 'bg-gray-300'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}