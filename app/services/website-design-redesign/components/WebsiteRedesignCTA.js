'use client';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa';

export default function WebsiteRedesignCTA() {
  return (
    <section className="py-20 px-6 bg-[#063837]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#E0F0DF] mb-6">
            Ready for a cleaner, modern, results-driven website?
          </h2>
          <p className="text-lg text-[#E0F0DF]/80 mb-8 max-w-2xl mx-auto">
            Let&apos;s redesign your brand&apos;s first impression the right way. Get a website that actually works for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => window.location.href = '/request-a-quote'}
              className="bg-gradient-to-r from-[#FCB043] to-[#FCB043]/80 text-[#063837] px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-shadow flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project Today
            </motion.button>
            
            <motion.button
              onClick={() => window.location.href = '/request-a-quote'}
              className="border-2 border-[#E0F0DF] text-[#E0F0DF] px-8 py-4 rounded-full font-semibold hover:bg-[#E0F0DF] hover:text-[#063837] transition-colors flex items-center gap-3 justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get a Free Quote
              <FaArrowRight className="w-5 h-5" />
            </motion.button>
          </div>


        </motion.div>
      </div>
    </section>
  );
}