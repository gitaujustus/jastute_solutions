'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiMonitor, FaRocket, FaUsers, FaChartLine } from 'react-icons/fi';

export default function WebsiteRedesignHero() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-32 pb-20 bg-[#E0F0DF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-3">
              <motion.div 
                className="flex items-center gap-2 bg-white rounded-full px-4 py-2 w-fit"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <FiMonitor className="w-5 h-5 text-[#063837]" />
                <span className="text-[#242B29] text-sm font-medium">Website Design & Redesign</span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-[#063837] leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Turning Outdated Sites Into{' '}
                <span className="text-[#FCB043]">Brand Assets</span>
              </motion.h1>
            </div>
            
            <motion.p 
              className="text-lg text-[#242B29]/80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Your website is the first thing people judge, even before they call you. If it feels outdated, slow, or confusing, you lose trust. We design and redesign business websites that look clean, load fast, and guide your visitors exactly where you want them to go.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <motion.button 
                onClick={() => window.location.href = 'mailto:jastutesolutions@gmail.com?subject=Website Design & Redesign Inquiry&body=Hello JASTUTE Solutions! I\'m interested in website design and redesign services. Can we discuss my project?'}
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
                <div className="text-2xl font-bold text-[#063837]">50+</div>
                <div className="text-sm text-[#242B29]/70">Websites Built</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#063837]">98%</div>
                <div className="text-sm text-[#242B29]/70">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#063837]">24h</div>
                <div className="text-sm text-[#242B29]/70">Quick Turnaround</div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative order-1 lg:order-2  mx-auto lg:max-w-none"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative aspect-video lg:aspect-auto">
              <Image 
                src="/Assets/Services/Website Redesign.jpeg"
                alt="Website Design & Redesign"
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