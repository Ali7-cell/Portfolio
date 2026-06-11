import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

interface Project {
  image: string;
  title: string;
  tags: string[];
  description: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    image: '/assets/images/social_connect_app.png',
    title: 'Social Connect App',
    tags: ['Flutter', 'Node.js', 'MongoDB', 'Firebase'],
    description:
      'Full-featured networking platform with user profiles, real-time messaging, and social sharing.',
    github: 'https://github.com/Ali7-cell/social-connect-app.git',
  },
  {
    image: '/assets/images/captigen_app.png',
    title: 'CaptiGen — AI Caption',
    tags: ['Flutter', 'OpenAI SDK', 'FastAPI'],
    description:
      'AI-powered image caption generator with English and Urdu support using GPT models.',
    github: 'https://github.com/Ali7-cell/CaptiGen',
  },
  {
    image: '/assets/images/tech_feed_app.png',
    title: 'Tech Feed App',
    tags: ['Flutter', 'Node.js', 'REST APIs'],
    description:
      'Real-time technology news aggregator delivering latest industry updates.',
    github: 'https://github.com/Ali7-cell/tech_new_feged_app.git',
  },
  {
    image: '/assets/images/finora_app.png',
    title: 'Finora Class Flow',
    tags: ['TypeScript', 'Node.js', 'MongoDB', 'Express'],
    description:
      'Modern class management and workflow system for academic schedules and performance tracking.',
    github: 'https://github.com/Ali7-cell/Finora',
  },
  {
    image: '/assets/images/law_agent_app.png',
    title: 'Law Agent',
    tags: ['LangChain', 'VectorDB', 'FastAPI'],
    description:
      'Legal AI assistant mapping Pakistani law cases to PPC sections using RAG systems.',
    github: 'https://github.com/Ali7-cell/Law_agent.git',
  },
  {
    image: '/assets/images/scholarship_alert_1770081762642.png',
    title: 'Scholarship Alert',
    tags: ['PHP', 'MySQL', 'JavaScript'],
    description:
      'Eligibility-based notification platform for local and international scholarships.',
    github: 'https://github.com/Ali7-cell/scholarship_alert.git',
  },
  {
    image: '/assets/images/todo_manager_1770081740913.png',
    title: 'To-Do Task Manager',
    tags: ['Flutter', 'Firebase', 'Firestore'],
    description:
      'Daily task management app with cloud sync and user authentication.',
    github: 'https://github.com/Ali7-cell/Daily-Task-Manager',
  },
  {
    image: '/assets/images/rps_game_1770081790911.png',
    title: 'Cyber RPS Game',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    description:
      'Interactive browser-based Rock Paper Scissors with neon animations.',
    github: 'https://github.com/Ali7-cell/stone-paper-scissor.git',
  },
  {
    image: '/assets/images/truck_dealership_app.png',
    title: 'AI Truck Dealership',
    tags: ['Python', 'AI'],
    description:
      'An intelligent platform for truck dealership management and analytics.',
    github: 'https://github.com/Ali7-cell/AI_truck_dealership',
  },
  {
    image: '/assets/images/hospital_management_app.png',
    title: 'Hospital Management',
    tags: ['Python'],
    description:
      'Comprehensive hospital management system handling patient data and appointments.',
    github: 'https://github.com/Ali7-cell/hospital_management',
  },
  {
    image: '/assets/images/business_assistant_app.png',
    title: 'Business Assistant',
    tags: ['HTML', 'CSS'],
    description:
      'A digital assistant interface for modern business operations.',
    github: 'https://github.com/Ali7-cell/bussiness-asistent',
  },
  {
    image: '/assets/images/factory_qc_app.png',
    title: 'Factory QC',
    tags: ['PHP'],
    description:
      'Quality control and assurance system for manufacturing.',
    github: 'https://github.com/Ali7-cell/factory_qc',
  },
  {
    image: '/assets/images/daily_updates_agent.png',
    title: 'Daily Updates AI Agent',
    tags: ['Python', 'AI', 'Automation'],
    description:
      'An autonomous agent that aggregates, filters, and summarizes daily updates and news.',
    github: 'https://github.com/Ali7-cell/Daily_updates-Agent',
  },
  {
    image: '/assets/images/job_agent.png',
    title: 'AI Job Assistant Agent',
    tags: ['Python', 'LangChain', 'AI'],
    description:
      'An intelligent system designed to automate resume tailoring and job matching.',
    github: 'https://github.com/Ali7-cell/job_agent',
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 px-4" style={{ zIndex: 1 }}>
      <div className="max-w-[1200px] mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="font-['Space_Grotesk'] text-3xl md:text-4xl font-semibold text-center mb-4"
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="text-[#a0a0b8] text-center max-w-[600px] mx-auto mb-12 text-sm md:text-base"
        >
          Here are some of my latest projects. I enjoyed building them, and I
          hope you enjoy exploring them too!
        </motion.p>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              className="glass rounded-xl overflow-hidden transition-all duration-300 hover:border-[rgba(124,77,255,0.3)] hover:shadow-[0_0_30px_rgba(124,77,255,0.1)] group"
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden bg-[#0f1629]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-0.5 rounded-full bg-[rgba(124,77,255,0.1)] text-[#b388ff]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h4 className="font-['Space_Grotesk'] text-base font-medium text-white mb-2">
                  {project.title}
                </h4>

                {/* Description */}
                <p className="text-[#a0a0b8] text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#a0a0b8] hover:text-[#7c4dff] transition-colors duration-300"
                      aria-label="GitHub Repository"
                    >
                      <FiGithub size={18} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#a0a0b8] hover:text-[#7c4dff] transition-colors duration-300"
                      aria-label="Live Demo"
                    >
                      <FiExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="glass rounded-2xl p-6 md:p-8 max-w-[900px] mx-auto mb-12 flex flex-col items-center"
        >
          <h3 className="font-['Space_Grotesk'] text-xl font-medium text-white mb-6 text-center">
            GitHub Contributions
          </h3>
          <div className="w-full overflow-x-auto py-2 flex justify-center">
            <img
              src="https://ghchart.rshah.org/7c4dff/Ali7-cell"
              alt="Ali7-cell's GitHub Contributions"
              className="min-w-[700px] md:w-full object-contain filter brightness-110 contrast-120 opacity-95 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex justify-center"
        >
          <a
            href="https://github.com/Ali7-cell"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#7c4dff] text-white font-semibold rounded-full text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(124,77,255,0.4)]"
          >
            <FiGithub size={18} />
            Check My GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
