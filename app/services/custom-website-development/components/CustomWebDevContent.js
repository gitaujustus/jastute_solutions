'use client';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaCogs, FaRocket, FaCode, FaHeadset, FaSearch } from 'react-icons/fa';

export default function CustomWebDevContent() {
  const features = [
    {
      icon: <FaLaptopCode className="w-6 h-6" />,
      title: "Tailored Business Websites",
      description: "A site designed around your brand, content, workflow, and audience behavior — not a random preset layout."
    },
    {
      icon: <FaCogs className="w-6 h-6" />,
      title: "CMS & Admin Integration", 
      description: "You get a proper dashboard to update content without needing a developer every time."
    },
    {
      icon: <FaRocket className="w-6 h-6" />,
      title: "Speed & Mobile Optimization",
      description: "Clean code and lightweight builds that make your site feel fast on any device."
    },
    {
      icon: <FaCode className="w-6 h-6" />,
      title: "Scalable Codebase",
      description: "We build with growth in mind, so adding new pages, features, or integrations is smooth."
    },
    {
      icon: <FaHeadset className="w-6 h-6" />,
      title: "Ongoing Maintenance & Support",
      description: "Updates, fixes, feature improvements — we stay with you beyond launch."
    }
  ];

  const seoPoints = [
    "Gets you discovered - People actually find you when they search for what you offer, not just your exact business name.",
    "Builds trust instantly - Users trust websites that load fast, look stable, and feel organized. Google trusts them too.",
    "Saves you money on ads - Better organic ranking means you don&apos;t have to constantly spend to stay visible."
  ];

  const benefits = [
    "You want a website that stands out",
    "You need features that templates can&apos;t handle",
    "You want a secure, long-term digital asset",
    "You&apos;re building something serious, not a quick fix",
    "You want full control over how your website works"
  ];

  const results = [
    "A premium, custom-built website",
    "Faster load speeds and smoother navigation",
    "Stronger brand trust",
    "Better conversions and user engagement",
    "A structure that can grow with your business",
    "Full control of your site through an admin dashboard"
  ];

  return (
    <section className="py-20 px-6" style={{
      backgroundColor: '#ffffff',
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23e0f0df' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")`
    }}>
      <div className="max-w-7xl mx-auto">
        {/* What We Do */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#063837] text-center mb-6">
            What We Do
          </h2>
          <p className="text-lg text-[#242B29] text-center mb-12 max-w-4xl mx-auto">
            We create custom SEO friendly websites that look clean, feel smooth, and perform like a machine behind the scenes. Everything is built from scratch with scalability in mind.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-[#E0F0DF] p-6 rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-[#063837] mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#063837] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#242B29] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SEO Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-[#FCB043]/10 rounded-full px-6 py-3 mb-6">
              <FaSearch className="w-6 h-6 text-[#FCB043]" />
              <span className="text-[#063837] font-semibold">SEO-Friendly Development</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#063837] mb-6">
              Built for Visibility
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-lg text-[#242B29] leading-relaxed">
              A good website is pointless if no one can find it. That&apos;s why everything we build is structured for real SEO, not keyword stuffing. Clean code, fast speed, proper tags, clear structure, and mobile-first layouts.
            </p>

            <p className="text-lg text-[#242B29] leading-relaxed">
              Google rewards sites that load quickly and make sense. When yours does that, you rank higher, get more clicks, and attract steady traffic without depending on boosted posts or luck.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
            {seoPoints.map((point, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-[#FCB043] text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {index + 1}
                </div>
                <p className="text-[#242B29] leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Who This Service Fits & Results */}
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#063837] mb-6">
              Who This Service Fits
            </h2>
            <p className="text-lg text-[#242B29] mb-8">
              Perfect for you if:
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#FCB043] text-xl">•</span>
                  <span className="text-[#242B29]">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#063837] mb-6">
              Results You Should Expect
            </h2>
            <ul className="space-y-4">
              {results.map((result, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#FCB043] text-xl">•</span>
                  <span className="text-[#242B29]">{result}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}