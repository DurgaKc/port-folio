import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiBriefcase, HiCalendar, HiLocationMarker, HiCheckCircle } from 'react-icons/hi'

const experiences = [
  {
    role: "Junior React Developer",
    company: "DebugSoft Pvt. Ltd",
    location: "Kathmandu, Nepal",
    period: "Nov 2024 – Present",
    type: "Full-time",
    project: "Hemis System & Websites",
    color: "#6366f1", // Indigo
    bgColor: "bg-indigo-100 dark:bg-indigo-500/10",
    textColor: "text-indigo-600 dark:text-indigo-400",
    borderColor: "border-indigo-200 dark:border-indigo-500/30",
    dotGlow: "0 0 20px #6366f160",
    achievements: [
      "Developed end-to-end Signature and Alumni Management modules using React with full CRUD functionality and authentication features",
      "Engineered clean, modern UIs with consistent user experience and high-performance rendering",
      "Integrated RESTful APIs to build reliable data workflows and efficient state management",
      "Assisted in resolving issues and fixing bugs in other modules of the HEMIS system to support overall stability",
    ],
  },
  {
    role: "React Developer (Internship)",
    company: "DebugSoft Pvt. Ltd",
    location: "Kathmandu, Nepal",
    period: "Aug 2024 – Nov 2024",
    type: "Internship",
     project: "Hemis System",
    color: "#a855f7", // Purple
    bgColor: "bg-purple-100 dark:bg-purple-500/10",
    textColor: "text-purple-600 dark:text-purple-400",
    borderColor: "border-purple-200 dark:border-purple-500/30",
    dotGlow: "0 0 20px #a855f760",
    achievements: [
      "Performed QA testing to find and document issues, improving system stability and user experience",
      "Built responsive and reusable React components using Tailwind CSS and Material-UI",
      "Connected frontend with backend through clean and efficient API integration",
      "Created user-friendly UI for login, forms, and data entry following modern UI/UX standards",
      "Used Git for version control and collaborated smoothly with team members",
      "Contributed to small project modules and followed Agile development practices",
    ],
  },
  {
    role: "React Developer (Internship)",
    company: "Ninja Infosys Pvt. Ltd",
    location: "Nepalgunj, Nepal",
    period: "Apr 2024 – Jun 2024",
    type: "Internship",
    project: "Governmental Website",
    color: "#4A90E2", 
    bgColor: "bg-cyan-100 dark:bg-cyan-500/10",
    textColor: "text-cyan-600 dark:text-cyan-400",
    borderColor: "border-cyan-200 dark:border-cyan-500/30",
    dotGlow: "0 0 20px #06b6d460",
    achievements: [
      "Built a governmental web platform for managing officer and local area data with citizen-facing and admin CRUD functionality",
      "Developed frontend with HTML, CSS, JavaScript, Tailwind and backend using Node.js, Express, MongoDB",
      "Implemented a user-friendly interface for citizens and robust admin controls for efficient data management",
      "Enabled real-time data access and updates to ensure accurate and up-to-date information for all users",
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-28 bg-[#e8eeff] dark:bg-[#0a0f2e] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 mb-4">
            Career
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-[#4A90E2] mb-4">Work Experience</h2>
          <p className="text-base text-slate-600 dark:text-slate-400 max-w-md mx-auto">
            My professional journey building products and contributing to impactful projects
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-300 via-purple-300 to-cyan-300 dark:from-indigo-700 dark:via-purple-700 dark:to-cyan-700" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                className={`relative flex flex-col lg:flex-row ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Timeline dot */}
                <div
                  className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full items-center justify-center z-10 text-white text-lg"
                  style={{ background: exp.color, boxShadow: exp.dotGlow }}
                >
                  <HiBriefcase />
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden lg:block flex-1" />

                {/* Card */}
                <div className="flex-1 w-full">
                  <div className={`relative bg-white dark:bg-[#111827] border ${exp.borderColor} rounded-3xl p-6 shadow-lg hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300`}>
                    {/* Top color accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl" style={{ background: exp.color }} />

                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-3 mt-1">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                        <div className="text-sm font-semibold mt-0.5" style={{ color: exp.color }}>{exp.company}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 italic">Project: {exp.project}</div>
                      </div>
                      <span className={`shrink-0 text-xs font-bold px-3 py-1 rounded-full ${exp.bgColor} ${exp.textColor} border ${exp.borderColor}`}>
                        {exp.type}
                      </span>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-500 mb-4">
                      <span className="flex items-center gap-1.5"><HiCalendar className="text-sm" />{exp.period}</span>
                      <span className="flex items-center gap-1.5"><HiLocationMarker className="text-sm" />{exp.location}</span>
                    </div>

                    {/* Achievements */}
                    <ul className="flex flex-col gap-2">
                      {exp.achievements.map((a, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                          <HiCheckCircle className="text-base mt-0.5 shrink-0" style={{ color: exp.color }} />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
