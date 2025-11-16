'use client';
import { motion } from 'framer-motion';
import { FaStar, FaArrowRight } from 'react-icons/fa';

export default function BrandingCTA() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#063837] to-[#063837]/90">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-[#FCB043]/20 rounded-full px-6 py-3 mb-6">
            <FaStar className="w-5 h-5 text-[#FCB043]" />
            <span className="text-[#FCB043] font-semibold">Professional Design</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Make Your Brand Unforgettable
          </h2>
          
          <p className="text-xl text-[#E0F0DF] mb-8 leading-relaxed">
            Stand out. Be remembered. Grow faster.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="text-[#FCB043] text-2xl font-bold mb-2">
              🎨 Complete Brand Solutions Available
            </div>
            <p className="text-[#E0F0DF]">
              From logo design to full brand kits and marketing materials
            </p>
          </div>
          
          <div className="flex justify-center">
            <button 
              onClick={() => window.open('mailto:jastutesolutions@gmail.com?subject=Branding%20%26%20Design%20Consultation%20Request&body=Hello%20JASTUTE%20Solutions!%20I\'m%20interested%20in%20your%20branding%20and%20graphic%20design%20services.%20Please%20send%20me%20a%20consultation%20and%20quote.', '_blank')}
              className="bg-[#FCB043] text-[#063837] px-8 py-4 rounded-full font-semibold hover:bg-[#FCB043]/90 transition-colors text-lg flex items-center gap-2 justify-center"
            >
              Get Your Free Design Consultation
              <FaArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}