'use client';
import { motion } from 'framer-motion';
import { FaServer, FaGlobe, FaShieldAlt } from 'react-icons/fa';

export default function HostingHero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-[#E0F0DF] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
             <motion.div 
                            className="flex items-center gap-2 bg-white rounded-full px-4 py-2 w-fit"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                          >
                            <FaServer className="w-5 h-5 text-[#063837]" />
                            <span className="text-[#242B29] text-sm font-medium">Hosting & Domains</span>
                          </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#063837] mb-6 leading-tight">
              Website Hosting & Domain Registration
            </h1>
            
            <p className="text-xl text-[#242B29] mb-8 leading-relaxed">
              Reliable, fast, and secure — we handle your domain and hosting from start to finish so your website is always online, protected, and ready to grow.
            </p>
            
            <div className="flex justify-start">
              <button 
                onClick={() => window.open('mailto:jastutesolutions@gmail.com?subject=Hosting%20%26%20Domain%20Quote%20Request&body=Hello%20JASTUTE%20Solutions!%20I\'m%20interested%20in%20your%20hosting%20and%20domain%20services.%20Please%20send%20me%20a%20quote.', '_blank')}
                className="bg-gradient-to-r from-[#063837] to-[#FCB043] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-shadow text-lg"
              >
                Get Your Free Quote →
              </button>
            </div>
          </motion.div>
          
          {/* Visual Elements */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-6">
              <motion.div 
                className="bg-white p-6 rounded-2xl shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <FaServer className="w-12 h-12 text-[#FCB043] mb-4" />
                <h3 className="font-semibold text-[#063837] mb-2">Fast Hosting</h3>
                <p className="text-sm text-[#242B29]">99.9% uptime with SSD servers</p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-2xl shadow-lg mt-8"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <FaGlobe className="w-12 h-12 text-[#FCB043] mb-4" />
                <h3 className="font-semibold text-[#063837] mb-2">Domain Expert</h3>
                <p className="text-sm text-[#242B29]">Perfect domain research & registration</p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-2xl shadow-lg -mt-4"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <FaShieldAlt className="w-12 h-12 text-[#FCB043] mb-4" />
                <h3 className="font-semibold text-[#063837] mb-2">Secure Setup</h3>
                <p className="text-sm text-[#242B29]">SSL certificates & DDoS protection</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}