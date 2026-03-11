import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaLinux,
  FaCode,
  FaDatabase,
  FaServer,
} from "react-icons/fa";

const categories = [
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: <FaReact />, level: 95, color: "#4A90E2" },
      { name: "JavaScript", icon: <FaJs />, level: 95, color: "#FFD700" },

      { name: "Tailwind", icon: <FaCss3Alt />, level: 87, color: "#6366f1" },
      { name: "Vite", icon: <FaCode />, level: 88, color: "#a855f7" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, level: 92, color: "#4A90E2" },
      { name: "Express", icon: <FaServer />, level: 90, color: "#50C878" },
    ],
  },
  {
    name: "Database & DevOps",
    skills: [
      { name: "MongoDB", icon: <FaDatabase />, level: 88, color: "#4A90E2" },
      { name: "MySQL", icon: <FaDatabase />, level: 80, color: "#FF8C00" },
      { name: "Git", icon: <FaGitAlt />, level: 95, color: "#6366f1" },
    ],
  },
];

function PieChart({ skills }) {
  const radius = 100;
  const circumference = 2 * Math.PI * radius;
  const total = skills.reduce((sum, s) => sum + s.level, 0);
  let offset = 0;

  return (
    <svg width="250" height="250" viewBox="0 0 250 250">
      <g transform="translate(125,125)">
        {skills.map((s, i) => {
          const arcLength = (s.level / total) * circumference;
          const dashArray = `${arcLength} ${circumference - arcLength}`;
          const dashOffset = offset;
          offset -= arcLength;

          return (
            <motion.circle
              key={s.name}
              r={radius}
              cx={0}
              cy={0}
              fill="transparent"
              stroke={s.color}
              strokeWidth={25}
              strokeDasharray={dashArray}
              strokeDashoffset={dashOffset}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            />
          );
        })}
      </g>
    </svg>
  );
}

function CategoryChart({ category }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center gap-6 w-full"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <motion.h3
        className="text-2xl font-bold text-[#4A90E2]"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {category.name}
      </motion.h3>

      <div className="flex flex-col items-center gap-8">
        <PieChart skills={category.skills} />

        <motion.div
          className="flex flex-col gap-3"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {category.skills.map((s) => (
            <motion.div
              key={s.name}
              className="flex items-center gap-2"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <span
                className="w-3 h-3 rounded-full"
                style={{ background: s.color }}
              />
              <span className="text-sm text-slate-700 dark:text-slate-300 flex items-center gap-1">
                {s.icon} {s.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-28 bg-[#e8eeff] dark:bg-[#0a0f2e] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-16">
        <motion.div
          ref={ref}
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-[#4A90E2] bg-[#4A90E2]/10 border border-[#4A90E2]/30 mb-4">
            My Arsenal
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-[#4A90E2] mb-4">
            Skills & Technologies
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            Tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Horizontal layout for categories */}
        <div className="flex flex-col lg:flex-row gap-12 justify-center items-start">
          {categories.map((cat) => (
            <CategoryChart key={cat.name} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
