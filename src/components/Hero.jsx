import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FaArrowRight } from 'react-icons/fa'
import { HiCode, HiServer, HiDatabase } from 'react-icons/hi'

const roles = ['Full Stack Developer']

const floatingIcons = [
  { icon: <HiCode size={26} />, top: '22%', left: '6%', delay: 0 },
  { icon: <HiServer size={26} />, top: '62%', left: '4%', delay: 0.6 },
  { icon: <HiDatabase size={26} />, top: '28%', right: '5%', delay: 1.1 },
    { icon: <FaArrowRight size={26} />, top: '66%', right: '6%', delay: 1.5 },
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout
    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(c => c + 1), 70)
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(c => c - 1), 38)
    } else {
      setIsDeleting(false)
      setRoleIndex(i => (i + 1) % roles.length)
    }
    setDisplayed(current.substring(0, charIndex))
    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, roleIndex])

  return (
    <section id="hero" className="relative min-h-screen flex flex-col lg:flex-row justify-center items-center overflow-hidden pt-20 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-[#050816] dark:via-[#0d1433] dark:to-[#050816]">

      {/* Decorative blurred circles */}
      <div className="absolute w-[600px] h-[600px] bg-indigo-300/20 rounded-full blur-3xl top-[-10%] left-[-10%]" />
      <div className="absolute w-[400px] h-[400px] bg-purple-300/20 rounded-full blur-3xl bottom-[-10%] right-[-10%]" />

      {/* Floating tech icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:flex w-14 h-14 items-center justify-center rounded-2xl bg-white dark:bg-[#0d1433] border border-indigo-100 dark:border-indigo-900/30 text-[#281C59] dark:text-[#9CCFFF] shadow-lg shadow-indigo-500/40 backdrop-blur-sm z-10"
          style={{ top: item.top, left: item.left, right: item.right }}
          animate={{ y: [0, -14, 0], scale: [1, 1.1, 1] }}
    transition={{ duration: 3 + i, repeat: Infinity, delay: item.delay, ease: 'easeInOut' }}        >
          {item.icon}
        </motion.div>
      ))}

      {/* Left content */}
      <div className="relative z-10 max-w-2xl px-6 flex flex-col items-start py-12">
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.08] tracking-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Hi, I'm{' '}
          <span className="relative inline-block bg-gradient-to-r from-indigo-700 via-purple-800 to-teal-600 bg-clip-text text-transparent">
            Durga Khanal
            <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-indigo-700 to-teal-600 rounded-full opacity-60" />
          </span>
          <br />
          <span className="flex items-center gap-2 min-h-[1.15em]">
  <span className="italic text-[#4A90E2]">{displayed}</span>
  <span className="inline-block w-[3px] h-[0.85em] bg-[#9CCFFF] rounded-sm animate-blink align-middle" />
</span>


        </motion.h1>

        <motion.p
          className="text-lg text-gray-800 dark:text-[#9CCFFF]/80 max-w-lg leading-relaxed mb-9"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          I build scalable web applications and craft seamless user experiences.
          My focus is on performance, clean architecture, and impactful digital products.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="flex flex-wrap items-center gap-4 mb-9"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
         <Link
  to="projects"
  smooth
  duration={700}
  className="flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold text-white bg-[#4A90E2] hover:bg-[#3A78B8] hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 cursor-pointer select-none"
>
  View Projects <FaArrowRight />
</Link>


        </motion.div>
      </div>
    </section>
  )
}
