'use client';
import { motion } from 'framer-motion';
import { FaFileAlt, FaLinkedin, FaEye } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import OptimizedImage from '@/components/OptimizedImage';

export default function CVHero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-[#E0F0DF] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="relative lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: window.innerWidth < 1024 ? 0 : 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <OptimizedImage
                src="/assets/webp/Resume Writing.webp"
                alt="Professional CV Design Services"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute -top-8 -right-4 bg-white p-4 rounded-xl shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaLinkedin className="w-8 h-8 text-[#0077B5]" />
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-8 -left-4 bg-white p-4 rounded-xl shadow-lg"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <FaEye className="w-8 h-8 text-[#FCB043]" />
            </motion.div>
            
            <motion.div 
              className="absolute -top-10 -left-8 bg-white p-3 rounded-xl shadow-lg"
              animate={{ x: [0, -5, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            >
              <MdVerified className="w-6 h-6 text-green-500" />
            </motion.div>
          </motion.div>
          
          {/* Content */}
          <motion.div
            className="lg:order-1"
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
               <FaFileAlt className="w-5 h-5 text-[#FCB043]" />
             <span className="text-[#063837] font-semibold">CV & Profile Design</span>
             </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#063837] mb-6 leading-tight">
              Stand Out In a Market Where Everyone Looks the Same
            </h1>
            
            <p className="text-xl text-[#242B29] mb-8 leading-relaxed">
              Getting ignored after sending dozens of applications stings. We design modern, professional CVs, portfolios, and branded profiles that help recruiters actually notice you.
            </p>
            
            <div className="flex justify-start">
              <button 
                onClick={() => window.open('mailto:jastutesolutions@gmail.com?subject=CV%20%26%20Profile%20Design%20Consultation%20Request&body=Hello%20JASTUTE%20Solutions!%20I%27m%20interested%20in%20your%20CV%20and%20profile%20design%20services.%20Please%20send%20me%20more%20information.', '_blank')}
                className="bg-gradient-to-r from-[#063837] to-[#FCB043] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-shadow text-lg"
              >
                Get Your Professional CV →
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}