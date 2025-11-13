// 'use client';
// import { motion } from 'framer-motion';

// export default function ServicesGrid() {
//   const services = [
//     {
//       title: "Web Design",
//       description: "Modern, responsive websites that captivate users and drive conversions with clean, intuitive design.",
//       features: [
//         "Responsive Design",
//         "User Experience (UX) Optimization",
//         "Mobile-First Approach",
//         "SEO-Friendly Structure",
//         "Fast Loading Performance"
//       ],
//       icon: (
//         <svg className="w-8  h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//         </svg>
//       )
//     },
//     {
//       title: "Graphic Design",
//       description: "Visual storytelling through compelling graphics that communicate your brand message effectively.",
//       features: [
//         "Brand Identity Design",
//         "Marketing Materials",
//         "Social Media Graphics",
//         "Print Design",
//         "Digital Illustrations"
//       ],
//       icon: (
//         <svg className="w-8  h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
//         </svg>
//       )
//     },
//     {
//       title: "IT Consultancy",
//       description: "Strategic technology guidance to optimize your digital infrastructure and business processes.",
//       features: [
//         "Technology Strategy",
//         "Digital Transformation",
//         "System Integration",
//         "Security Assessment",
//         "Performance Optimization"
//       ],
//       icon: (
//         <svg className="w-8  h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//         </svg>
//       )
//     },
//     {
//       title: "System Design",
//       description: "Scalable system architectures that grow with your business and ensure optimal performance.",
//       features: [
//         "Architecture Planning",
//         "Database Design",
//         "API Development",
//         "Cloud Solutions",
//         "Scalability Planning"
//       ],
//       icon: (
//         <svg className="w-8  h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
//         </svg>
//       )
//     },
//     {
//       title: "Branding",
//       description: "Complete brand identity development that creates lasting impressions and builds customer loyalty.",
//       features: [
//         "Logo Design",
//         "Brand Guidelines",
//         "Color Palette",
//         "Typography Selection",
//         "Brand Strategy"
//       ],
//       icon: (
//         <svg className="w-8  h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//         </svg>
//       )
//     },
//     {
//       title: "CV & Profile Design",
//       description: "Professional resume and profile designs that showcase your expertise and stand out to employers.",
//       features: [
//         "Professional CV Design",
//         "LinkedIn Optimization",
//         "Portfolio Creation",
//         "Cover Letter Design",
//         "Personal Branding"
//       ],
//       icon: (
//         <svg className="w-8  h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//         </svg>
//       )
//     }
//   ];

//   return (
//     <section className="py-20 px-6 bg-white mx-6 rounded-t-[3rem]">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <motion.div
//               key={service.title}
//               className="bg-[#E0F0DF] p-8 rounded-3xl hover:bg-[#063837] hover:shadow-xl transition-all duration-300 ease-in-out group cursor-pointer"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -8 }}
//             >
//               <div className="text-[#063837] group-hover:text-[#FCB043] transition-colors duration-200 mb-6">
//                 {service.icon}
//               </div>
              
//               <h3 className="text-2xl font-bold text-[#063837] group-hover:text-[#FCB043] transition-colors duration-300 mb-4">
//                 {service.title}
//               </h3>
              
//               <p className="text-[#242B29] group-hover:text-[#E0F0DF] transition-colors duration-300 mb-6 leading-relaxed">
//                 {service.description}
//               </p>
              
//               <ul className="space-y-2">
//                 {service.features.map((feature, idx) => (
//                   <li key={idx} className="flex items-center gap-2 text-[#242B29] group-hover:text-[#E0F0DF] transition-colors duration-300">
//                     <svg className="w-4 h-4 text-[#FCB043]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                     <span className="text-sm">{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';
import { motion } from 'framer-motion';
import { 
  FaLaptopCode, FaServer, FaGlobe, FaCogs, FaPenNib, FaFileAlt, FaChartLine 
} from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { RiLightbulbLine } from "react-icons/ri";
export default function ServicesGrid() {
  const services = [
    // Web Services
    {
      title: "Business Website Design & Redesign",
      description:
        "Your website is more than a link — it’s your brand’s first impression. We design and redesign business websites that look stunning, load fast, and feel effortless to use.",
      features: [
        "Modern, responsive layouts",
        "User-focused redesigns",
        "Improved performance & SEO",
        "Polished UX/UI design",
        "Visual consistency with your brand"
      ],
      icon: <FiMonitor className="w-8  h-8 text-primary" />
    },
    {
      title: "Custom Website Development",
      description:
        "We build high-performing websites tailored to your business goals. Whether it’s a company site, e-commerce, or system portal, our code is clean, scalable, and built to convert.",
      features: [
        "Tailored business websites",
        "CMS & admin integration",
        "Speed & mobile optimization",
        "Scalable codebase",
        "Ongoing maintenance & support"
      ],
      icon: <FaLaptopCode className="w-8  h-8 text-primary" />
    },
    {
      title: "Custom Web Systems",
      description:
        "We develop tailored web-based systems such as POS, CRM, HRM, and Education Management Systems — empowering businesses to automate, monitor, and scale with efficiency.",
      features: [
        "Point of Sale (POS) Systems",
        "Customer Relationship Management (CRM)",
        "Human Resource Management (HRM)",
        "Education & E-learning Platforms",
        "Custom dashboards & automation tools"
      ],
      icon: <FaCogs className="w-8  h-8 text-primary" />
    },
    {
      title: "Website Hosting & Domain Registration",
      description:
        "We provide reliable hosting and assist in domain research, registration, and setup — ensuring your website stays secure, fast, and always accessible.",
      features: [
        "Fast & secure web hosting",
        "Domain name research & suggestions",
        "Professional registration setup",
        "DNS & SSL configuration",
        "Email & renewal management"
      ],
      icon: <FaServer className="w-8  h-8 text-primary" />
    },
    {
      title: "Website Strategy & Consulting",
      description:
        "We help you make smarter digital moves. From design audits to performance reviews, we refine your online presence for better results.",
      features: [
        "Website design audits",
        "Performance optimization",
        "Brand alignment strategy",
        "UX & conversion consulting",
        "Practical improvement plans"
      ],
      icon: <RiLightbulbLine className="w-8  h-8 text-primary" />
    },

    // Graphic Design & Branding
    {
      title: "Branding & Graphic Design",
      description:
        "We craft visuals that define your brand and make it unforgettable. From logos to full brand kits and company profiles, every design is made to connect, attract, and last.",
      features: [
        "Logo & identity design",
        "Complete brand kits & guidelines",
        "Company profile design",
        "Marketing materials",
        "Social media visuals"
      ],
      icon: <FaPenNib className="w-8  h-8 text-primary" />
    },

    // CV & Profile Design
    {
      title: "CV & Profile Design",
      description:
        "We design professional CVs, company profiles, and portfolios that open doors. You bring the skills — we package them to make impact.",
      features: [
        "Executive CV design",
        "Company & business profiles",
        "LinkedIn branding",
        "Portfolio creation",
        "Cover letter design"
      ],
      icon: <FaFileAlt className="w-8  h-8 text-primary" />
    }
  ];

  return (
    <section className="py-20 px-6 bg-white "
    style={{
      backgroundColor: '#ffffff',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23e0f0df' fill-opacity='0.43'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    }}
    >
      <div className="max-w-[95%] lg:max-w-[95%] xl:max-w-[90%] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-[#E0F0DF] p-8 rounded-3xl hover:bg-[#063837] hover:shadow-xl transition-all duration-300 ease-in-out group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="text-[#063837] mt-[-60px] bg-[#FCB043] group-hover:bg-[#063837] w-fit mx-auto p-3 rounded-full group-hover:text-[#FCB043] transition-colors duration-200 mb-4">
                {service.icon}
              </div>
              
              <h3 className="text-2xl text-center font-bold text-[#063837] group-hover:text-[#FCB043] transition-colors duration-300 mb-4">
                {service.title}
              </h3>
              
              <p className="text-[#242B29] text-[16px] md:text-[18px] 2xl:text-[20px] group-hover:text-[#E0F0DF] transition-colors duration-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-[#242B29] group-hover:text-[#E0F0DF] transition-colors duration-300">
                    <svg className="w-4 h-4 text-[#FCB043]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm md:text-md">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
