import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlay, FiCpu, FiCode, FiMic } from 'react-icons/fi';

const services = [
  {
    icon: FiCpu,
    title: 'AI & Agentic Systems',
    description:
      'Build autonomous AI agents that automate tasks and solve real problems using LangChain, RAG, and OpenAI SDKs.',
  },
  {
    icon: FiCode,
    title: 'Full Stack Development',
    description:
      'From backend APIs to modern UIs — Flutter, React, Node.js, and FastAPI.',
  },
  {
    icon: FiMic,
    title: 'Public Speaking',
    description:
      'Share my journey to inspire others to chase their dreams in tech.',
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: 'easeOut' as const },
};

export default function About() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <section id="about" className="relative py-20 md:py-32 px-4" style={{ zIndex: 1 }}>
      <div className="max-w-[1200px] mx-auto">
        {/* Section Title */}
        <motion.h2
          {...fadeInUp}
          className="font-['Space_Grotesk'] text-3xl md:text-4xl font-semibold text-center mb-12 md:mb-16"
        >
          About <span className="text-gradient">Me</span>
        </motion.h2>

        {/* Video + Bio Row — stacked on mobile, side-by-side on lg */}
        <div className="grid lg:grid-cols-5 gap-8 md:gap-10 mb-12 md:mb-16">
          {/* Video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl overflow-hidden">
              <div className="relative aspect-video bg-[#0f1629] flex items-center justify-center overflow-hidden">
                {isPlaying ? (
                  <video
                    controls
                    autoPlay
                    className="w-full h-full object-cover"
                    playsInline
                  >
                    <source src="/assets/images/Ali.mp4" type="video/mp4" />
                  </video>
                ) : (
                  <>
                    <video
                      className="w-full h-full object-cover opacity-60"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    >
                      <source src="/assets/images/Ali.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={() => setIsPlaying(true)}
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[rgba(124,77,255,0.3)] backdrop-blur-sm flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[rgba(124,77,255,0.5)] hover:scale-110 active:scale-95 touch-manipulation"
                        aria-label="Play Event Video"
                      >
                        <FiPlay className="text-white ml-1" size={26} />
                      </button>
                    </div>
                  </>
                )}
              </div>
              <p className="text-center text-[#a0a0b8] text-xs sm:text-sm py-3">
                Event at NIC
              </p>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-2 flex flex-col justify-center"
          >
            <h3 className="font-['Space_Grotesk'] text-xl md:text-2xl font-medium text-white mb-4">
              AI Software Engineer
            </h3>
            <p className="text-[#a0a0b8] leading-relaxed mb-6 text-sm md:text-base">
              <span className="text-[#7c4dff]">Passionate AI Innovator</span> and Information Technology scholar at the University of Agriculture, focused on architecting state-of-the-art{' '}
              <span className="text-[#7c4dff]">Agentic AI ecosystems</span>. I specialize in designing autonomous workflows, intelligent automation, and{' '}
              <span className="text-[#7c4dff]">scalable full-stack applications</span>{' '}
              that transform complex business challenges into seamless digital experiences. With a core focus on autonomous decision-making systems and robust software architecture, I am dedicated to pushing the boundaries of what's possible in the world of intelligent technology. Outside coding, you'll find me speaking on stage or exploring new AI frontiers.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex-1 sm:flex-none text-center px-6 py-2.5 bg-[#7c4dff] text-white font-semibold rounded-full text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(124,77,255,0.4)] active:scale-95 touch-manipulation"
              >
                Get In Touch
              </a>
              <a
                href="/assets/images/muhammad_ali_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none text-center px-6 py-2.5 border border-[rgba(124,77,255,0.3)] text-white font-semibold rounded-full text-sm transition-all duration-300 hover:bg-[rgba(124,77,255,0.15)] active:scale-95 touch-manipulation"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: 0.1 * i, ease: 'easeOut' }}
              className="glass rounded-xl p-5 sm:p-6 transition-all duration-300 hover:border-[rgba(124,77,255,0.3)] hover:shadow-[0_0_30px_rgba(124,77,255,0.1)]"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[rgba(124,77,255,0.1)] flex items-center justify-center mb-4">
                <service.icon className="text-[#7c4dff]" size={22} />
              </div>
              <h4 className="font-['Space_Grotesk'] text-base sm:text-lg font-medium text-white mb-2">
                {service.title}
              </h4>
              <p className="text-[#a0a0b8] text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
