'use client';
import { motion } from 'framer-motion';
import { FaStar, FaArrowRight } from 'react-icons/fa';

export default function StrategyCTA() {
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
            <span className="text-[#FCB043] font-semibold">Free Strategy Session</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Level Up Your Website?
          </h2>
          
          <p className="text-xl text-[#E0F0DF] mb-8 leading-relaxed">
            Book a free 30-minute strategy session.<br />
            We&apos;ll review your site live and give you 3 immediate improvements — no strings attached.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="text-[#FCB043] text-2xl font-bold mb-2">
              🎯 Most clients see 20–40% uplift in conversions within 90 days
            </div>
            <p className="text-[#E0F0DF]">
              Data-driven strategies that deliver measurable results
            </p>
          </div>
          
          <div className="flex justify-center">
            <button 
              onClick={() => window.location.href = '/request-a-quote'}
              className="bg-[#FCB043] text-[#063837] px-8 py-4 rounded-full font-semibold hover:bg-[#FCB043]/90 transition-colors text-lg flex items-center gap-2 justify-center"
            >
              Schedule Your Free Audit
              <FaArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}