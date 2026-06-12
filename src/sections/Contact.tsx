import { motion } from 'framer-motion';
import {
  FiMail,
  FiMapPin,
  FiLinkedin,
  FiGithub,
  FiSend,
  FiExternalLink,
  FiCode,
} from 'react-icons/fi';
import { FaKaggle } from 'react-icons/fa';

const GOOGLE_FORM_EMBED =
  'https://docs.google.com/forms/d/e/1FAIpQLSd2RTxf2l29RDf4IrnKZDzepB74V33x2l-I6EZFm8sV34lJxw/viewform?embedded=true';

const GOOGLE_FORM_LINK =
  'https://forms.gle/W3P6WRmX5BZftMNr7';

const socialLinks = [
  {
    icon: FiLinkedin,
    href: 'https://linkedin.com/in/muhammad-ali-2989b92a8',
    label: 'LinkedIn',
  },
  {
    icon: FiGithub,
    href: 'https://github.com/Ali7-cell',
    label: 'GitHub',
  },
  {
    icon: FiCode,
    href: 'https://leetcode.com/u/ale_7/',
    label: 'LeetCode',
  },
  {
    icon: FiSend,
    href: 'https://huggingface.co/alee-7',
    label: 'Hugging Face',
  },
  {
    icon: FaKaggle,
    href: 'https://www.kaggle.com/aleekhan7',
    label: 'Kaggle',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-32 px-4" style={{ zIndex: 1 }}>
      <div className="max-w-[1200px] mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="font-['Space_Grotesk'] text-3xl md:text-4xl font-semibold text-center mb-4"
        >
          Get In <span className="text-gradient">Touch</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="text-[#a0a0b8] text-center max-w-[500px] mx-auto mb-10 md:mb-12 text-sm md:text-base"
        >
          Have a project in mind or want to collaborate? Fill out the form below
          or reach out directly.
        </motion.p>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10">
          {/* ── Left: Contact Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="md:col-span-2 space-y-6 md:space-y-8"
          >
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl glass flex items-center justify-center flex-shrink-0">
                <FiMail className="text-[#7c4dff]" size={20} />
              </div>
              <div>
                <p className="text-[#a0a0b8] text-sm mb-0.5">Email</p>
                <a
                  href="mailto:aliliaqat22731279@gmail.com"
                  className="text-white hover:text-[#7c4dff] transition-colors duration-300 text-sm break-all"
                >
                  aliliaqat22731279@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl glass flex items-center justify-center flex-shrink-0">
                <FiMapPin className="text-[#7c4dff]" size={20} />
              </div>
              <div>
                <p className="text-[#a0a0b8] text-sm mb-0.5">Location</p>
                <p className="text-white">Faisalabad, Pakistan</p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-[#a0a0b8] text-sm mb-3">Connect With Me</p>
              <div className="flex gap-3 flex-wrap">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-11 h-11 rounded-full glass flex items-center justify-center text-white transition-all duration-300 hover:bg-[#7c4dff] hover:shadow-[0_0_20px_rgba(124,77,255,0.4)] active:scale-90 touch-manipulation"
                  >
                    <link.icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Open form in new tab button */}
            <a
              href={GOOGLE_FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-[rgba(124,77,255,0.35)] text-white font-medium rounded-full text-sm transition-all duration-300 hover:bg-[rgba(124,77,255,0.15)] active:scale-95 touch-manipulation"
            >
              <FiExternalLink size={15} />
              Open Form in New Tab
            </a>
          </motion.div>

          {/* ── Right: Google Form Embed ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            className="md:col-span-3"
          >
            <div className="glass rounded-2xl overflow-hidden">
              {/* Header bar */}
              <div className="flex items-center gap-2 px-5 py-3 border-b border-[rgba(124,77,255,0.12)]">
                <span className="w-2 h-2 rounded-full bg-[#7c4dff] animate-pulse" />
                <span className="text-white text-sm font-medium font-['Space_Grotesk']">
                  Send a Message
                </span>
              </div>

              {/* Embedded Google Form */}
              <iframe
                src={GOOGLE_FORM_EMBED}
                title="Contact Form"
                className="w-full"
                style={{
                  height: '520px',
                  border: 'none',
                  background: 'transparent',
                  colorScheme: 'dark',
                }}
                loading="lazy"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
