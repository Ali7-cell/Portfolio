import { motion } from 'framer-motion';
import { FiCpu, FiCode, FiMic } from 'react-icons/fi';

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

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-32 px-4" style={{ zIndex: 1 }}>
      <div className="max-w-[1200px] mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="font-['Space_Grotesk'] text-3xl md:text-4xl font-semibold text-center mb-12 md:mb-16"
        >
          About <span className="text-gradient">Me</span>
        </motion.h2>

        {/* Photo + Bio Row — stacked on mobile, side-by-side on lg */}
        <div className="grid lg:grid-cols-5 gap-8 md:gap-10 mb-12 md:mb-16">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl overflow-hidden">
              <div className="relative aspect-video bg-[#0f1629] overflow-hidden">
                <img
                  src="/assets/images/ali_desk.jpg"
                  alt="Muhammad Ali — AI Engineer at coding desk"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                {/* Subtle gradient overlay at bottom */}
                <div
                  className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(10,10,15,0.7), transparent)',
                  }}
                />
                {/* Badge */}
                <div className="absolute bottom-3 left-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#7c4dff] animate-pulse" />
                  <span className="text-white text-xs font-medium bg-[rgba(10,10,15,0.6)] backdrop-blur-sm px-3 py-1 rounded-full">
                    AI Engineer
                  </span>
                </div>
              </div>
              <p className="text-center text-[#a0a0b8] text-xs sm:text-sm py-3 px-4">
                Muhammad Ali · Building the future with Agentic AI
              </p>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.12, ease: 'easeOut' }}
            className="lg:col-span-2 flex flex-col justify-center"
          >
            <h3 className="font-['Space_Grotesk'] text-xl md:text-2xl font-medium text-white mb-4">
              AI Software Engineer
            </h3>
            <p className="text-[#a0a0b8] leading-relaxed mb-6 text-sm md:text-base">
              <span className="text-[#7c4dff]">Passionate AI Innovator</span> and
              Information Technology scholar at the University of Agriculture,
              focused on architecting state-of-the-art{' '}
              <span className="text-[#7c4dff]">Agentic AI ecosystems</span>. I
              specialize in designing autonomous workflows, intelligent automation,
              and{' '}
              <span className="text-[#7c4dff]">scalable full-stack applications</span>{' '}
              that transform complex business challenges into seamless digital
              experiences. With a core focus on autonomous decision-making systems
              and robust software architecture, I am dedicated to pushing the
              boundaries of what's possible in the world of intelligent technology.
              Outside coding, you'll find me speaking on stage or exploring new AI
              frontiers.
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
              transition={{ duration: 0.4, delay: 0.08 * i, ease: 'easeOut' }}
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
