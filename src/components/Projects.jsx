import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss } from 'react-icons/si'

const techIcons = {
  React: <SiReact />, 'Node.js': <SiNodedotjs />, MongoDB: <SiMongodb />, 'Tailwind CSS': <SiTailwindcss />,
}

const projects = [
  {
    title: 'FoodRecipe — MERN Application',
    desc: 'Full-stack MERN platform for user signup/login (including Google authentication), sharing recipes, and exploring community-created dishes.',
    category: 'fullstack',
    color: '#6366f1', // Indigo
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/DurgaKc/FoodRecipe-mern-', // replace with actual repo
    live: 'https://foodrecipe-mern.onrender.com/',
    featured: true,
  },
  {
    title: 'Online Food Order System — MERN Application',
    desc: 'Restaurant ordering system where customers place orders from their table, and admins manage menus and track orders in real time.',
    category: 'fullstack',
    color: "#4A90E2",
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/DurgaKc/OnlineFoodOrder', // replace with actual repo
    live: 'https://onlinefoodorder-bye1.onrender.com/',
    featured: true,
  },
  {
    title: 'Real Time Chat App — MERN Application',
    desc: 'Real-time chat application where users sign up, connect with each other, and message instantly.',
    category: 'fullstack',
     color: '#5DD3B6', // Purple
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/DurgaKc/RealTime-Chat-App', // replace with actual repo
    live: 'https://real-time-chat-app-d.vercel.app/',
    featured: true,
  },
  {
    title: 'College Portal — Frontend Project',
    desc: 'Responsive static web portal for campus announcements, staff updates, and academic program information, with GitHub-based authentication.',
    category: 'frontend',
    color: '#64748b', // Slate gray accent
    tech: ['React', 'Tailwind CSS'],
    github: 'https://github.com/DurgaKc/College-Portal', // replace with actual repo
    live: 'https://collegee-portal.netlify.app/',
    featured: false,
  },
  {
    title: 'Weather-App Project',
    desc: 'A React-based weather app for checking real-time conditions and viewing detailed 24-hour forecasts.',
    category: 'frontend',
    color: '#44A194', // Slate gray accent
    tech: ['React', 'Tailwind CSS'],
    github: 'https://github.com/DurgaKc/Weather-App', // replace with actual repo
    live: 'https://weather-appinreact.netlify.app/',
    featured: false,
  },
]

const filters = ['all', 'frontend', 'backend', 'fullstack']

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      className="relative flex flex-col bg-white dark:bg-[#111827] border border-indigo-100 dark:border-indigo-900/30 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 group"
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Top accent line */}
      <div className="h-1 w-full" style={{ background: project.color }} />

      {/* Image area */}
      <div
        className="h-44 flex items-center justify-center relative overflow-hidden"
        style={{ background: `${project.color}15` }}
      >
        <span className="text-6xl opacity-80 group-hover:scale-110 transition-transform duration-300" style={{ color: project.color }}>
          {techIcons[project.tech[0]] || <SiReact />}
        </span>
        {project.featured && (
          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold text-white" style={{ background: project.color }}>
            ✨ Featured
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">{project.title}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1">{project.desc}</p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map(t => (
            <span key={t} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border"
              style={{ color: project.color, borderColor: `${project.color}40`, background: `${project.color}10` }}>
              {techIcons[t] && <span className="text-sm">{techIcons[t]}</span>}
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-1 border-t border-indigo-50 dark:border-indigo-900/20">
          <a href={project.github} target="_blank" rel="noreferrer"
            className="flex items-center gap-1.5 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-150">
            <FaGithub /> Code
          </a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer"
              className="flex items-center gap-1.5 text-sm font-semibold transition-colors duration-150 ml-auto"
              style={{ color: project.color }}>
              <FaExternalLinkAlt size={11} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [active, setActive] = useState('all')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const filtered = projects.filter(p => active === 'all' || p.category === active)

  return (
    <section id="projects" className="py-28 bg-[#e8eeff] dark:bg-[#0a0f2e] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
         <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 mb-4">
  <span className="text-[#a5a9a9]">Portfolio</span>
</span>
          <h2 className="text-4xl lg:text-5xl font-black text-[#4A90E2] mb-4">Personal Projects</h2>
          <p className="text-base text-slate-600 dark:text-slate-400 max-w-md mx-auto">
            Deployed applications showcasing my MERN and frontend development skills
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-2.5 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 capitalize ${active === f
                ? 'text-white btn-grad border-transparent shadow-md shadow-indigo-500/25'
                : 'text-slate-600 dark:text-slate-400 border-indigo-200 dark:border-indigo-900/30 bg-white dark:bg-[#111827] hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-400'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
