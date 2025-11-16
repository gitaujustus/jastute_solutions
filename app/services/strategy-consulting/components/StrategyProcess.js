'use client';
import { motion } from 'framer-motion';
import { FaSearch, FaBullseye, FaClipboardList, FaRocket } from 'react-icons/fa';

export default function StrategyProcess() {
  const steps = [
    {
      icon: <FaSearch className="w-8 h-8" />,
      title: "Audit & Analyze",
      description: "We dive deep into your current site performance and user behavior.",
      number: "01"
    },
    {
      icon: <FaBullseye className="w-8 h-8" />,
      title: "Identify Opportunities",
      description: "Uncover quick wins and long-term gains for maximum impact.",
      number: "02"
    },
    {
      icon: <FaClipboardList className="w-8 h-8" />,
      title: "Build Your Plan",
      description: "Clear, prioritized recommendations with ROI projections.",
      number: "03"
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "Implement & Measure",
      description: "Optional hands-on support plus tracking and optimization.",
      number: "04"
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
            Get Results in 4 Phases
          </h2>
          <p className="text-lg text-[#242B29] max-w-3xl mx-auto">
            Our proven methodology transforms websites systematically and strategically.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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