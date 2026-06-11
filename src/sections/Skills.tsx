import { useState } from 'react';
import { motion } from 'framer-motion';

type SkillCategory = 'all' | 'frontend' | 'backend' | 'AI' | 'tools';

interface Skill {
  name: string;
  category: SkillCategory;
  level: number;
}

const skills: Skill[] = [
  { name: 'Python for AI/ML', category: 'AI', level: 95 },
  { name: 'LangChain \u0026 RAG', category: 'AI', level: 90 },
  { name: 'Agentic AI Systems', category: 'AI', level: 90 },
  { name: 'OpenAI SDKs', category: 'AI', level: 90 },
  { name: 'Flutter Development', category: 'frontend', level: 90 },
  { name: 'React.js / Next.js', category: 'frontend', level: 85 },
  { name: 'Node.js \u0026 Express', category: 'backend', level: 90 },
  { name: 'FastAPI', category: 'backend', level: 85 },
  { name: 'Firebase \u0026 Firestore', category: 'backend', level: 85 },
  { name: 'MongoDB \u0026 PostgreSQL', category: 'backend', level: 80 },
  { name: 'n8n \u0026 Make.com', category: 'tools', level: 90 },
  { name: 'Git \u0026 GitHub', category: 'tools', level: 90 },
];

const categories: { label: string; value: SkillCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Backend', value: 'backend' },
  { label: 'AI', value: 'AI' },
  { label: 'Tools', value: 'tools' },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease: 'easeOut' as const },
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');

  const filteredSkills =
    activeCategory === 'all'
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-24 md:py-32 px-4" style={{ zIndex: 1 }}>
      <div className="max-w-[1200px] mx-auto">
        {/* Section Title */}
        <motion.h2
          {...fadeInUp}
          className="font-['Space_Grotesk'] text-3xl md:text-4xl font-semibold text-center mb-8"
        >
          My <span className="text-gradient">Skills</span>
        </motion.h2>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.value
                  ? 'bg-[#7c4dff] text-white'
                  : 'text-[#a0a0b8] hover:text-white hover:bg-[rgba(124,77,255,0.1)]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filteredSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: 'easeOut' }}
              className="glass rounded-xl p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-['Space_Grotesk'] text-base font-medium text-white">
                  {skill.name}
                </h4>
                <span className="text-[#a0a0b8] text-sm">{skill.level}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-[rgba(124,77,255,0.15)] overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.1 + i * 0.05 }}
                  className="h-full rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #7c4dff, #b388ff)',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
