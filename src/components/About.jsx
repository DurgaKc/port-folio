import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaCode,
  FaCoffee,
  FaHeart,
  FaRocket,
  FaDownload,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { Link } from "react-scroll";

const facts = [
  { icon: <FaCode className="text-[#4A90E2]" />, label: "Clean Code Advocate" }, // Blue
  { icon: <FaCoffee className="text-[#A0522D]" />, label: "Fueled by Coffee" }, // Coffee brown
  { icon: <FaHeart className="text-[#E63946]" />, label: "Open Source Lover" }, // Red
  { icon: <FaRocket className="text-[#FF8C00]" />, label: "Always Learning" }, // Orange
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-28 bg-[#e8eeff] dark:bg-[#0a0f2e] relative overflow-hidden"
    >

      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* ── Image column ── */}
          <motion.div className="flex justify-center" variants={itemVariants}>
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              {/* Glow behind avatar */}
              <div className="absolute inset-0 -m-6 bg-[#4A90E2] rounded-full opacity-20 blur-3xl animate-morph" />

              {/* Profile Image */}
              <div className="relative w-full h-full rounded-full bg-[#4A90E2] flex items-center justify-center shadow-2xl shadow-blue-500/30 overflow-hidden">
                <img
                  src="/profile.jpeg" // replace with your actual file name in public folder
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
              </div>

              {/* Floating card — experience */}
              <motion.div
                className="absolute bottom-4 right-4 flex items-center gap-1 px-1 py-1 bg-white dark:bg-[#0d1433] border border-blue-100 dark:border-blue-900/30 rounded-2xl shadow-xl shadow-blue-500/10"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-2xl">🏆</span>
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    2+ Years
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    Experience
                  </div>
                </div>
              </motion.div>

              {/* Floating card — tech */}
              <motion.div
                className="absolute top-4 left-4 flex items-center gap-1 px-1 py-1 bg-white dark:bg-[#0d1433] border border-blue-100 dark:border-blue-900/30 rounded-2xl shadow-xl shadow-blue-500/10"
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <span className="text-2xl">⚡</span>
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    15+ Tech
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    Stack
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ── Text column ── */}
          <div className="flex flex-col gap-4">
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-[#4A90E2] bg-[#4A90E2]/10 border border-[#4A90E2]/30">
                About Me
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl lg:text-5xl font-black leading-tight text-[#4A90E2]"
              variants={itemVariants}
            >
              Passionate Developer
              <br />
              &amp; Problem Solver
            </motion.h2>

            <motion.p
              className="text-slate-600 dark:text-slate-400 leading-relaxed text-base"
              variants={itemVariants}
            >
              I'm a full-stack developer with{" "}
              <strong className="text-[#4A90E2] font-semibold">
                2+ years of experience
              </strong>{" "}
              building scalable web applications. I specialize in React,
              Node.js, and modern cloud infrastructure.
            </motion.p>

            <motion.p
              className="text-slate-600 dark:text-slate-400 leading-relaxed text-base"
              variants={itemVariants}
            >
              My journey started with curiosity about how websites work, and it
              evolved into a passion for crafting exceptional digital
              experiences. I love turning complex problems into elegant
              solutions.
            </motion.p>

            {/* Fact chips */}
            <motion.div
              className="flex flex-wrap gap-2.5"
              variants={itemVariants}
            >
              {facts.map((f, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-slate-600 dark:text-slate-400 bg-white dark:bg-[#111827] border border-blue-100 dark:border-blue-900/30 hover:border-[#4A90E2] hover:text-[#4A90E2] transition-all duration-200"
                >
                  <span className="text-[#4A90E2]">{f.icon}</span>
                  {f.label}
                </span>
              ))}
            </motion.div>

            {/* Action buttons */}
            <motion.div
              className="flex flex-wrap gap-3 pt-1"
              variants={itemVariants}
            >
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold text-white bg-[#4A90E2] hover:bg-[#3A78B8] hover:-translate-y-0.5 transition-all duration-200"
              >
                <FaDownload /> Download CV
              </a>
              <Link
                to="contact"
                smooth
                duration={600}
                className="flex items-center gap-2 px-6 py-2 rounded-2xl text-sm font-bold text-[#4A90E2] border-2 border-[#4A90E2] hover:bg-[#4A90E2] hover:text-white hover:-translate-y-0.5 transition-all duration-200 cursor-pointer select-none"
              >
                <HiMail /> Contact Me
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
