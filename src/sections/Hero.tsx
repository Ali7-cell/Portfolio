import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center px-4"
      style={{ zIndex: 1 }}
    >
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mb-8"
      >
        <div
          className="relative w-[180px] h-[180px] md:w-[200px] md:h-[200px] rounded-full overflow-hidden"
          style={{
            border: '3px solid rgba(124, 77, 255, 0.4)',
            animation: 'float 3s ease-in-out infinite, pulse-glow 3s ease-in-out infinite',
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/assets/images/Ali.mp4" type="video/mp4" />
          </video>
        </div>
      </motion.div>

      {/* Greeting */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-[#a0a0b8] text-lg md:text-xl mb-2"
      >
        Hi, I'm
      </motion.p>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="font-['Space_Grotesk'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gradient text-center mb-4"
      >
        Muhammad Ali
      </motion.h1>

      {/* Title */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="font-['Space_Grotesk'] text-lg sm:text-xl md:text-2xl text-[#7c4dff] font-medium text-center mb-3"
      >
        AI Engineer
      </motion.p>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-[#a0a0b8] text-sm md:text-base italic text-center mb-8 px-4"
      >
        Architecting Autonomous AI Agents & Scalable Full-Stack Systems <br /> From Design to Deployment
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="flex flex-wrap gap-4 justify-center mb-16"
      >
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="px-8 py-3.5 bg-[#7c4dff] text-white font-semibold rounded-full text-sm md:text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(124,77,255,0.4)]"
        >
          Get In Touch
        </a>
        <a
          href="/assets/images/muhammad_ali_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3.5 border border-[rgba(124,77,255,0.3)] text-white font-semibold rounded-full text-sm md:text-base transition-all duration-300 hover:bg-[rgba(124,77,255,0.15)] hover:border-[rgba(124,77,255,0.5)]"
        >
          My Resume
        </a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="flex flex-col items-center gap-2"
        style={{ animation: 'bounce 1.5s ease-in-out infinite' }}
      >
        <span className="text-[#a0a0b8] text-sm">Scroll</span>
        <FiChevronDown className="text-[#a0a0b8]" size={20} />
      </motion.div>
    </section>
  );
}
