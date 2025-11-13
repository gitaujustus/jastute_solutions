'use client';
import { motion } from 'framer-motion';
import AboutAnimatedBackground from './AboutAnimatedBackground';

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6 bg-[#E0F0DF] relative overflow-hidden">
      <AboutAnimatedBackground />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-white rounded-full px-4 py-2 flex items-center gap-2 shadow-sm w-fit mb-8">
          <span className="text-[#242B29] text-sm font-medium">Who We Are</span>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl  2xl:text-7xl  font-bold text-[#063837] leading-tight">
              We Build Brands That Stand the Test of Time
            </h1>
            
            <div className="space-y-6 text-[16px] md:text-[18px] 2xl:text-[20px] text-[#242B29] leading-relaxed">
              <p>
                JASTUTE Solutions is a Kenyan creative and technology company that helps brands and businesses grow through design, development, and digital strategy.
              </p>
              <p>
                We specialize in branding, web design, graphic design, system development, and IT consultancy, serving both startups and established businesses looking to scale their presence and impact.
              </p>
              <p>
                Since our founding, we&apos;ve worked with individuals, SMEs, and institutions — building everything from e-commerce platforms and management systems to complete brand identities. Our goal is simple: to help businesses attract attention, make an impact, and grow sustainably through thoughtful, strategic design.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <img 
                src="/Assets/aboutUS.jpeg" 
                alt="JASTUTE Solutions" 
                className="w-full max-w-md rounded-3xl shadow-lg object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#FCB043] rounded-full opacity-80"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#063837] rounded-full opacity-60"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}