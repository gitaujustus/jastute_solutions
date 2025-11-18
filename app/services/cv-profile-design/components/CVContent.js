'use client';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaTimesCircle, FaRobot, FaGlobeEurope, FaLinkedin, FaFileAlt, FaBriefcase, FaComments } from 'react-icons/fa';
import OptimizedImage from '@/components/OptimizedImage';

export default function CVContent() {
  const problems = [
    "CVs that hide your strengths",
    "No achievements or measurable results", 
    "Layouts that confuse recruiters",
    "Non-ATS formatting",
    "Generic descriptions that sound like every other applicant",
    "A LinkedIn profile that doesn't match your CV"
  ];

  const services = [
    {
      icon: FaFileAlt,
      title: "Executive CV Design",
      description: "Modern, clean, ATS-ready. A CV that highlights your achievements and presents your strength clearly."
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn Branding & Optimization",
      description: "We align your page with your CV, tune your headline, rewrite your About section, structure your experience, and position your profile so recruiters can actually discover you."
    },
    {
      icon: FaBriefcase,
      title: "Portfolio Creation",
      description: "For designers, developers, marketers, creatives, and technical roles. We package your work in a way that instantly proves your skill."
    },
    {
      icon: FaComments,
      title: "Cover Letter Design",
      description: "A concise, confident cover letter written in your tone—not those generic paragraphs copied from Google."
    }
  ];

  const targetAudience = [
    "Job seekers who aren't getting callbacks",
    "Professionals upgrading to better roles",
    "Fresh graduates who want a strong start",
    "People applying for international jobs",
    "Creatives who need a portfolio that actually sells their skill"
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Why This Service Exists */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#063837] mb-8 text-center">Why This Service Exists</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-[#242B29] mb-6 leading-relaxed">
                Recruiters skim CVs in seconds. If yours looks generic, cluttered, outdated, or not optimized for the system they&apos;re using, you&apos;re done before your experience is even seen.
              </p>
              <p className="text-lg text-[#242B29] mb-8 font-semibold">Most people lose opportunities because of:</p>
              <div className="space-y-3">
                {problems.map((problem, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <FaTimesCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-[#242B29]">{problem}</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-lg text-[#063837] font-bold mt-6">We fix all of that.</p>
            </div>
            <div className="relative">
              <OptimizedImage
                src="/assets/webp/personal-branding.png"
                alt="Personal Branding Services"
                width={500}
                height={400}
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </motion.section>

        {/* ATS vs Europass */}
        <motion.section 
          className="mb-20 bg-[#E0F0DF] rounded-3xl lg:rounded-3xl p-6 lg:p-12 -mx-6 lg:mx-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#063837] mb-8 text-center">ATS vs Europass — And Why We Work With Both</h2>
          <p className="text-lg text-[#242B29] mb-8 text-center">Most job seekers don&apos;t even know the difference, and that&apos;s where they mess up.</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <FaRobot className="w-8 h-8 text-[#FCB043]" />
                <h3 className="text-2xl font-bold text-[#063837]">ATS (Applicant Tracking System)</h3>
              </div>
              <p className="text-[#242B29] mb-4">
                This is the software companies use to filter CVs. It reads your document like a machine: keywords, layout structure, file type, consistency.
              </p>
              <p className="text-[#242B29] font-semibold">
                ATS CVs are clean, simple, keyword-aligned, and structured to pass digital screening.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <FaGlobeEurope className="w-8 h-8 text-[#FCB043]" />
                <h3 className="text-2xl font-bold text-[#063837]">Europass CV</h3>
              </div>
              <p className="text-[#242B29] mb-4">
                This one is popular for international roles, especially in Europe. It has a standardized format that employers recognize immediately.
              </p>
              <p className="text-[#242B29] font-semibold">
                It&apos;s structured, formal, and detail-heavy.
              </p>
            </motion.div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-lg text-[#063837] font-bold">
              We design both, tailored the right way—ATS CVs for online applications, and solid Europass versions for international job systems.
            </p>
          </div>
        </motion.section>

        {/* What We Offer */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#063837] mb-12 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <service.icon className="w-12 h-12 text-[#FCB043] mb-4" />
                <h3 className="text-xl font-bold text-[#063837] mb-3">{service.title}</h3>
                <p className="text-[#242B29] leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Who This Service Helps */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#063837] mb-8 text-center">Who This Service Helps</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-4 space-y-0 lg:space-y-0">
              {targetAudience.map((audience, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <FaCheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-[#242B29]">{audience}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-xl text-[#063837] font-bold">
              If your CV doesn&apos;t tell your story properly, opportunities slip quietly past you.
            </p>
          </div>
        </motion.section>

      </div>
    </div>
  );
}