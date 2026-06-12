import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiMail,
  FiMapPin,
  FiLinkedin,
  FiGithub,
  FiSend,
  FiCode,
  FiCheckCircle,
} from 'react-icons/fi';
import { FaKaggle } from 'react-icons/fa';

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
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio Message from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:aliliaqat22731279@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

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
          </motion.div>

          {/* ── Right: Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            className="md:col-span-3"
          >
            <div className="glass rounded-2xl p-5 sm:p-6 md:p-10">
              {!submitted ? (
                <>
                  <h3 className="font-['Space_Grotesk'] text-lg md:text-xl font-medium text-white text-center mb-6">
                    Send a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="text-[#a0a0b8] text-sm mb-2 block">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="glass-input w-full"
                        placeholder="John..."
                      />
                    </div>
                    <div>
                      <label className="text-[#a0a0b8] text-sm mb-2 block">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="glass-input w-full"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="text-[#a0a0b8] text-sm mb-2 block">
                        Your Message
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="glass-input w-full resize-none"
                        placeholder="Hello Muhammad..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#7c4dff] text-white font-semibold rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(124,77,255,0.4)] active:scale-95 touch-manipulation"
                    >
                      <FiSend size={16} />
                      Send Message
                    </button>
                  </form>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <FiCheckCircle
                    className="text-[#7c4dff] mb-4 animate-bounce"
                    size={48}
                  />
                  <h3 className="font-['Space_Grotesk'] text-xl font-medium text-white mb-2">
                    Message Drafted!
                  </h3>
                  <p className="text-[#a0a0b8] text-sm mb-6 max-w-[300px] mx-auto">
                    Please send the email using your preferred mail app that just opened.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="px-6 py-2.5 border border-[rgba(124,77,255,0.3)] text-white font-medium rounded-full text-sm transition-all duration-300 hover:bg-[rgba(124,77,255,0.15)]"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
