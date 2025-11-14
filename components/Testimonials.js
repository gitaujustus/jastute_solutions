"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [perView, setPerView] = useState(1);

  // Lazy load keen-slider CSS
  useEffect(() => {
    import("keen-slider/keen-slider.min.css");
  }, []);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 32 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 32 },
      },
    },
    centered: true,
    slidesChanged(slider) {
      const slidesPerView = slider.options.slides.perView || 1;
      setPerView(typeof slidesPerView === "function" ? slidesPerView() : slidesPerView);
    },
  });

  // Auto-slide every 16 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 16000);
    return () => clearInterval(interval);
  }, [instanceRef]);

const testimonials = [
 {
  name: "Fatuma Karimi",
  position: "Procurement Lead",
  company: "HealJunction",
  testimonial:
    "Working with JASTUTE made our platform feel more organized and modern. They actually took time to understand how healthcare works on our end, then built something clean and easy for clients to use.",
},
  {
    name: "Patrick Ndwiga",
    position: "Founder",
    company: "StarfiniteX",
    testimonial:
      "I liked how straightforward the whole process was. The website came out solid, functional, and fast… exactly what a young tech startup like ours needed.",
  },
  {
    name: "Emily Rodriguez",
    position: "Founder",
    company: "Creative Studios",
    testimonial:
      "They got the vibe of our brand instantly. Clean work, quick communication, and the final look matched what we had in mind — even better, honestly.",
  },
  {
    name: "Odieny Horine",
    position: "CEO",
    company: "Odinance Prints",
    testimonial:
      "JASTUTE helped us polish our online presence. Nothing over the top, just neat, functional work that makes it easier for clients to check what we offer and reach out.",
  },
  {
    name: "Peterson Kibunja",
    position: "Operations Manager",
    company: "Kibunja Farm",
    testimonial:
      "We needed something simple for showcasing our poultry products online. JASTUTE delivered exactly that. Clean design, easy for customers to understand, and it made our work a bit easier.",
  },
];


  const getCenterSlideIndex = () => {
    if (perView === 1) return currentSlide;
    return (currentSlide + 1) % testimonials.length;
  };

  const isCenter = (index) => {
    const centerIndex = getCenterSlideIndex();
    return index === centerIndex;
  };

  // Get initials from name
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  // Alternate between 2 colors
  const getInitialsBgColor = (index) => {
    return index % 2 === 0 ? 'bg-[#FCB043]' : 'bg-[#063837]';
  };

  const getInitialsTextColor = (index) => {
    return index % 2 === 0 ? 'text-[#063837]' : 'text-[#E0F0DF]';
  };

  return (
    <section className="py-20 px-6 bg-[#E0F0DF]"
     style={{
      backgroundColor: '#dfefdf',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%238573a1' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`
    }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#063837] mb-6">
            What Our Clients Say
          </h2>
          <p className="text-[16px] md:text-[18px] 2xl:text-[20px] text-[#242B29] max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about working with JASTUTE Solutions.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div ref={sliderRef} className="keen-slider">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="keen-slider__slide flex justify-center px-2"
                style={{ minWidth: "300px", maxWidth: "400px" }}
              >
                <motion.div
                  className={`rounded-3xl p-8 shadow-lg bg-white w-full h-full flex flex-col transition-all duration-300 ${
                    isCenter(i) ? "scale-100" : "scale-95 opacity-80"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Quote Icon */}
                  <div className="text-[#FCB043] mb-4">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                    </svg>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-[16px] md:text-[18px] 2xl:text-[20px] text-[#242B29] leading-relaxed mb-6 font-medium flex-grow">
                    &ldquo;{t.testimonial}&rdquo;
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg border-2 border-[#063837]/10 ${getInitialsBgColor(i)} ${getInitialsTextColor(i)}`}>
                      {getInitials(t.name)}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#063837]">{t.name}</h4>
                      <p className="text-sm xl:text-md text-[#242B29]">{t.position}</p>
                      <p className="text-sm xl:text-md text-[#FCB043] font-medium">{t.company}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-[#063837] hover:text-white text-[#063837] transition-all z-10"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-[#063837] hover:text-white text-[#063837] transition-all z-10"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-12 gap-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === idx ? "bg-[#063837] scale-125" : "bg-[#063837]/30"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}