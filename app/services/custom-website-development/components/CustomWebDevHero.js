'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLaptopCode } from 'react-icons/fa';

export default function CustomWebDevHero() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-32 pb-20 bg-[#E0F0DF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-3">
              <motion.div 
                className="flex items-center gap-2 bg-white rounded-full px-4 py-2 w-fit"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <FaLaptopCode className="w-5 h-5 text-[#063837]" />
                <span className="text-[#242B29] text-sm font-medium">Custom Website Development</span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-[#063837] leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Custom Website Development Built For{' '}
                <span className="text-[#FCB043]">Serious Business Growth</span>
              </motion.h1>
            </div>
            
            <motion.p 
              className="text-lg text-[#242B29]/80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              A website shouldn&apos;t just &quot;exist.&quot; It should work. It should convert. It should represent you with confidence. We build custom websites that are fast, reliable, and built around your goals — not a recycled template with new colors.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <motion.button 
                onClick={() => window.location.href = 'mailto:jastutesolutions@gmail.com?subject=Custom Website Development Inquiry&body=Hello JASTUTE Solutions! I\'m interested in custom website development services. Can we discuss my project?'}
                className="bg-gradient-to-r from-[#063837] to-[#FCB043] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-[#063837]">100+</div>
                <div className="text-sm text-[#242B29]/70">Custom Sites Built</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#063837]">99%</div>
                <div className="text-sm text-[#242B29]/70">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#063837]">3s</div>
                <div className="text-sm text-[#242B29]/70">Load Time</div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative order-1 lg:order-2 mx-auto lg:max-w-none"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative aspect-video lg:aspect-auto">
              <Image 
                src="/Assets/Services/Web Development.jpeg"
                alt="Custom Website Development"
                width={600}
                height={400}
                className="w-full h-full rounded-2xl object-cover shadow-2xl"
              />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#FCB043] rounded-full opacity-70"></div>
              <div className="absolute -top-4 -right-4 w-14 h-14 bg-[#063837] rounded-full opacity-50"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}