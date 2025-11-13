'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6" style={{
      backgroundColor: '#dfefdf',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%238573a1' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`
    }}>
      <div className="max-w-4xl mx-auto text-center py-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image 
            src="/Assets/Not Found.png" 
            alt="404 Not Found" 
            width={400}
            height={300}
            className="w-full max-w-md mx-auto mb-8"
          />
          
          <h1 className="text-4xl md:text-6xl font-bold text-[#063837] mb-6">
            Page Not Found
          </h1>
          
          <p className="text-lg text-[#242B29] mb-8 max-w-2xl mx-auto">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved, deleted, or you entered the wrong URL.
          </p>
          
          <Link href="/">
            <motion.button
              className="bg-gradient-to-r from-[#063837] to-[#FCB043] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Back to Home
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}