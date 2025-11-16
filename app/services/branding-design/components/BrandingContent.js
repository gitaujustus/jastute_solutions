'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaStar, FaPalette, FaFileAlt, FaPrint, FaMobile } from 'react-icons/fa';

export default function BrandingContent() {
  const services = [
    {
      icon: <FaStar className="w-8 h-8" />,
      title: "Logo & Identity Design",
      features: [
        "Custom logos that capture your essence",
        "Scalable across digital, print, and merchandise",
        "Multiple concepts + unlimited revisions until perfect"
      ]
    },
    {
      icon: <FaPalette className="w-8 h-8" />,
      title: "Complete Brand Kits & Guidelines",
      features: [
        "Color palettes, typography, icons, and usage rules",
        "Ensure consistency across all platforms",
        "Ready-to-use files: AI, PNG, SVG, PDF"
      ]
    },
    {
      icon: <FaFileAlt className="w-8 h-8" />,
      title: "Company Profile Design",
      features: [
        "Professional, investor-ready profiles",
        "Storytelling layout with data visualization",
        "Print + digital versions included"
      ]
    },
    {
      icon: <FaPrint className="w-8 h-8" />,
      title: "Marketing Materials That Convert",
      features: [
        "Flyers & Posters — eye-catching, high-impact promotions",
        "Brochures & Magazines — multi-page storytelling that persuades",
        "Business Cards — premium finishes, memorable first impressions",
        "Banners & Signage — large-format designs that stop traffic",
        "Menus & Price Lists — clean, appetizing, and brand-aligned"
      ]
    },
    {
      icon: <FaMobile className="w-8 h-8" />,
      title: "Social Media Visuals",
      features: [
        "Branded templates for Instagram, Facebook, LinkedIn",
        "Post graphics, stories, reels covers, and ad creatives",
        "Consistent look that builds recognition fast"
      ]
    }
  ];

  return (
    <>
    <section className="bg-gray-50">
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Design That Drives Results */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#063837] mb-6">
              Design That Drives Results
            </h2>
            <p className="text-lg text-[#242B29] max-w-4xl mx-auto leading-relaxed">
              90% of first impressions are design-driven. Your visuals seal the deal before your sales team says a word.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:justify-items-center lg:justify-items-start">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="flex flex-col items-start gap-4 py-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4 w-full">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#FCB043]/10 rounded-xl flex items-center justify-center">
                    <div className="text-[#FCB043] text-lg">
                      {service.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#063837] mb-3">
                      {service.title}
                    </h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-[#242B29] text-sm">
                          <span className="text-[#FCB043] mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
    
    {/* Branding Showcase Image */}
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="lg:order-1">
            <h3 className="text-3xl md:text-4xl font-bold text-[#063837] mb-6">
              Professional Branding Solutions
            </h3>
            <div className="relative lg:hidden mb-6">
              <Image
                src="/assets/webp/Branding.webp"
                alt="Professional Branding and Graphic Design Services"
                width={624}
                height={619}
                className="w-full aspect-video object-cover object-top rounded-2xl shadow-lg"
              />
            </div>
            <p className="text-lg text-[#242B29] leading-relaxed">
              From concept to completion, we create visual identities that resonate with your audience and drive business growth. Our comprehensive approach ensures every design element works together to build a strong, memorable brand presence.
            </p>
          </div>
          <div className="relative hidden lg:block lg:order-2">
            <Image
              src="/assets/webp/Branding.webp"
              alt="Professional Branding and Graphic Design Services"
              width={624}
              height={619}
              className="w-full lg:h-80 xl:h-96 h-auto object-cover object-top rounded-2xl shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
}