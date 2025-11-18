'use client';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#063837] text-[#E0F0DF] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Image 
                src="/assets/Jastute-logo-for-dark-bg.png" 
                alt="JASTUTE Solutions Logo" 
                priority={true}
                width={2053}
                height={740}
                className="h-20 xl:h-30 w-auto"
              />
            </div>
            <p className="text-[#E0F0DF]/80 leading-relaxed max-w-md text-[16px] md:text-[18px] 2xl:text-[20px]">
              We turn bold ideas into digital experiences that attract attention, create impact, and drive growth — helping brands connect deeply with their audiences and stand out where it matters most.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 ">
              <div className="flex items-center gap-3 text-[16px] md:text-[18px] 2xl:text-[20px]">
                <svg className="w-5 h-5 text-[#FCB043]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Nairobi, Kenya</span>
              </div>
              
              <div className="flex items-center gap-3 text-[16px] md:text-[18px] 2xl:text-[20px]">
                <svg className="w-5 h-5 text-[#FCB043]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+2547-29-144-533</span>
              </div>
              
              <div className="flex items-center gap-3 text-[16px] md:text-[18px] 2xl:text-[20px]">
                <svg className="w-5 h-5 text-[#FCB043]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>jastutesolutions@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl 2xl:text-2xl font-bold text-[#FCB043] mb-6 md:mt-24">Quick Links</h3>
            <ul className="space-y-3 text-[16px] md:text-[18px] 2xl:text-[20px]">
              <li>
                <Link href="/" className="text-[#E0F0DF]/80 hover:text-[#FCB043] transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#E0F0DF]/80 hover:text-[#FCB043] transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#E0F0DF]/80 hover:text-[#FCB043] transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="text-[#E0F0DF]/80 hover:text-[#FCB043] transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl 2xl:text-2xl font-bold text-[#FCB043] mb-6 md:mt-24">Follow Us</h3>
            <div className="space-y-4 text-[16px] md:text-[18px] 2xl:text-[20px]">
              <a 
                href="https://www.instagram.com/jastutesolutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#E0F0DF]/80 hover:text-[#FCB043] transition-colors duration-300"
              >
                <FaInstagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              
              <a 
                href="https://www.facebook.com/share/19z6gN1oyw/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#E0F0DF]/80 hover:text-[#FCB043] transition-colors duration-300"
              >
                <FaFacebook className="w-5 h-5" />
                <span>Facebook</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/company/jastutesolutions/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#E0F0DF]/80 hover:text-[#FCB043] transition-colors duration-300"
              >
                <FaLinkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              
              <a 
                href="https://wa.me/c/254729144533" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#E0F0DF]/80 hover:text-[#FCB043] transition-colors duration-300"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#E0F0DF]/20 mt-12 pt-8 text-center ">
          <p className="text-[#E0F0DF]/60 text-[16px] md:text-[18px] 2xl:text-[20px]">
            © 2025 JASTUTE Solutions. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}