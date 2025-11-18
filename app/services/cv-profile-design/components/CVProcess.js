'use client';
import { motion } from 'framer-motion';
import { FaClipboardList, FaSearchengin, FaPalette, FaRocket } from 'react-icons/fa';

export default function CVProcess() {
  const steps = [
    {
      icon: FaClipboardList,
      title: "We start with a simple questionnaire",
      description: "We gather your experience, achievements, roles, goals, and everything that makes you stand out."
    },
    {
      icon: FaSearchengin,
      title: "We audit your current CV or profile",
      description: "What's helping you, what's hurting you."
    },
    {
      icon: FaPalette,
      title: "We create your new personal brand",
      description: "CV, portfolio, LinkedIn tone—clean, sharp, and aligned with your career targets."
    },
    {
      icon: FaRocket,
      title: "You get a polished, recruiter-ready package",
      description: "Something you can confidently send anywhere."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#E0F0DF] to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#063837] mb-6">Our Process</h2>
          <p className="text-xl text-[#242B29] max-w-3xl mx-auto">
            A streamlined approach to transform your professional presence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Step Number */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#FCB043] rounded-full flex items-center justify-center z-10">
                <span className="text-[#063837] font-bold text-lg">{index + 1}</span>
              </div>
              
              {/* Card */}
              <motion.div 
                className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <step.icon className="w-8 h-8 text-[#063837] mb-6" />
                <h3 className="text-xl font-semibold text-[#063837] mb-4 leading-tight">
                  {step.title}
                </h3>
                <p className="text-[#242B29] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
              
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#FCB043] transform -translate-y-1/2 z-0" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}