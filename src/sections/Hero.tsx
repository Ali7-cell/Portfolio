import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center px-4 pt-20"
      style={{ zIndex: 1 }}
    >
      {/* Profile Video */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mb-6 sm:mb-8"
      >
        <div
          className="relative w-[150px] h-[150px] sm:w-[170px] sm:h-[170px] md:w-[200px] md:h-[200px] rounded-full overflow-hidden"
          style={{
            border: '3px solid rgba(124, 77, 255, 0.4)',
            animation: 'float 3s ease-in-out infinite, pulse-glow 3s ease-in-out infinite',
            willChange: 'transform, box-shadow',
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
            style={{ willChange: 'auto' }}
          >
            <source src="/assets/images/Ali.mp4" type="video/mp4" />
          </video>
        </div>
      </motion.div>

      {/* Greeting */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-[#a0a0b8] text-base sm:text-lg md:text-xl mb-1 sm:mb-2"
      >
        Hi, I'm
      </motion.p>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="font-['Space_Grotesk'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gradient text-center mb-3"
      >
        Muhammad Ali
      </motion.h1>

      {/* Title */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="font-['Space_Grotesk'] text-base sm:text-lg md:text-2xl text-[#7c4dff] font-medium text-center mb-2 sm:mb-3"
      >
        AI Engineer
      </motion.p>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="text-[#a0a0b8] text-xs sm:text-sm md:text-base italic text-center mb-7 sm:mb-8 px-4 max-w-[360px] sm:max-w-none leading-relaxed"
      >
        Architecting Autonomous AI Agents &amp; Scalable Full-Stack Systems
        <br />
        From Design to Deployment
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.55 }}
        className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-14 sm:mb-16"
      >
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="px-6 sm:px-8 py-3 sm:py-3.5 bg-[#7c4dff] text-white font-semibold rounded-full text-sm md:text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(124,77,255,0.4)] active:scale-95 touch-manipulation"
        >
          Get In Touch
        </a>
        <a
          href="/assets/images/muhammad_ali_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 sm:px-8 py-3 sm:py-3.5 border border-[rgba(124,77,255,0.3)] text-white font-semibold rounded-full text-sm md:text-base transition-all duration-300 hover:bg-[rgba(124,77,255,0.15)] hover:border-[rgba(124,77,255,0.5)] active:scale-95 touch-manipulation"
        >
          My Resume
        </a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.65 }}
        className="flex flex-col items-center gap-2"
        style={{ animation: 'bounce 1.5s ease-in-out infinite' }}
      >
        <span className="text-[#a0a0b8] text-xs sm:text-sm">Scroll</span>
        <FiChevronDown className="text-[#a0a0b8]" size={18} />
      </motion.div>
    </section>
  );
}
