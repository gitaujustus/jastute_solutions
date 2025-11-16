'use client';
import { motion } from 'framer-motion';
import { FaPhone, FaLightbulb, FaPalette, FaRocket } from 'react-icons/fa';

export default function BrandingProcess() {
  const steps = [
    {
      icon: <FaPhone className="w-8 h-8" />,
      title: "Discovery Call",
      description: "We learn your brand, goals, and audience to create the perfect foundation.",
      number: "01"
    },
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: "Concept & Moodboard",
      description: "2–3 unique creative directions for you to choose from.",
      number: "02"
    },
    {
      icon: <FaPalette className="w-8 h-8" />,
      title: "Design & Refine",
      description: "You review, we perfect with unlimited revisions until it's exactly right.",
      number: "03"
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "Deliver & Deploy",
      description: "All files + brand guidelines delivered, ready to use across all platforms.",
      number: "04"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#063837] mb-6">
            From Vision to Visual — In 4 Steps
          </h2>
          <p className="text-lg text-[#242B29] max-w-3xl mx-auto">
            Our proven creative process ensures your brand vision becomes a powerful visual reality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative bg-[#E0F0DF] p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
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