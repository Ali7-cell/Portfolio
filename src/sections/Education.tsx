import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

interface EducationItem {
  degree: string;
  institution: string;
  details: string;
}

const educationData: EducationItem[] = [
  {
    degree: 'BS Computer Science',
    institution: 'University of Agriculture, Faisalabad',
    details: '2024 – 2028 (Expected) · Current CGPA: 3.0+',
  },
  {
    degree: 'AI, Data Science \u0026 Agentic AI Course',
    institution: 'Saylani Mass IT Training',
    details: '2025 – 2026 · In Progress',
  },
  {
    degree: 'FSc Pre-Medical',
    institution: 'KIPS College',
    details: '2021 – 2023 · Marks: 957/1100 (87%)',
  },
  {
    degree: 'Matric Science',
    institution: 'Sacred Angel School',
    details: '2019 – 2021 · Marks: 1074/1100 (97.6%)',
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-20 md:py-32 px-4" style={{ zIndex: 1 }}>
      <div className="max-w-[700px] mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="font-['Space_Grotesk'] text-3xl md:text-4xl font-semibold text-center mb-12 md:mb-16"
        >
          <span className="text-gradient">Education</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="absolute left-4 md:left-6 top-0 w-px bg-[rgba(160,160,184,0.3)]"
            style={{ zIndex: 0 }}
          />

          <div className="space-y-6 md:space-y-8">
            {educationData.map((item, i) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: i * 0.12, ease: 'easeOut' }}
                className="relative flex gap-3 md:gap-6"
              >
                {/* Icon */}
                <div className="relative z-10 flex-shrink-0 w-9 h-9 md:w-12 md:h-12 rounded-full bg-[rgba(15,22,41,0.8)] border border-[rgba(124,77,255,0.3)] flex items-center justify-center">
                  <FaGraduationCap className="text-[#7c4dff]" size={15} />
                </div>

                {/* Card */}
                <div className="glass rounded-xl p-4 md:p-5 flex-1 border-l-[3px] border-l-[#7c4dff]">
                  <h4 className="font-['Space_Grotesk'] text-sm sm:text-base md:text-lg font-medium text-white mb-1">
                    {item.degree}
                  </h4>
                  <p className="text-[#b388ff] text-xs sm:text-sm mb-1">{item.institution}</p>
                  <p className="text-[#a0a0b8] text-xs sm:text-sm">{item.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
