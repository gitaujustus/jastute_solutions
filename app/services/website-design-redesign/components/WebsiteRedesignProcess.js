'use client';
import { motion } from 'framer-motion';
import { FaSearch, FaSitemap, FaPalette, FaCode, FaTools, FaRocket } from 'react-icons/fa';

export default function WebsiteRedesignProcess() {
  const steps = [
    {
      icon: <FaSearch className="w-8 h-8" />,
      title: "We audit your current site",
      description: "What works, what drags, what confuses users.",
      number: "01"
    },
    {
      icon: <FaSitemap className="w-8 h-8" />,
      title: "We create a new structure",
      description: "Pages, flow, sections — built around your goals.",
      number: "02"
    },
    {
      icon: <FaPalette className="w-8 h-8" />,
      title: "We design the new look",
      description: "Clean, bold, modern, and on-brand.",
      number: "03"
    },
    {
      icon: <FaCode className="w-8 h-8" />,
      title: "We develop it",
      description: "Fast code, SEO-ready, responsive.",
      number: "04"
    },
    {
      icon: <FaTools className="w-8 h-8" />,
      title: "We refine",
      description: "Based on your feedback.",
      number: "05"
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "We launch and keep it maintained",
      description: "So it stays clean and up-to-date.",
      number: "06"
    }
  ];

  return (
    <section className="py-20 px-6 bg-[#E0F0DF]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#063837] mb-6">
            How We Work
          </h2>
          <p className="text-lg text-[#242B29] max-w-3xl mx-auto">
            We keep it simple with a proven process that delivers results every time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Step Number */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#FCB043] rounded-full flex items-center justify-center">
                <span className="text-[#063837] font-bold text-lg">{step.number}</span>
              </div>

              {/* Icon */}
              <div className="text-[#063837] mb-6">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-[#063837] mb-4">
                {step.title}
              </h3>
              <p className="text-[#242B29] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}