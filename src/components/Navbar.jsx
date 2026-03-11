import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { HiSun, HiMoon, HiMenu, HiX, HiSparkles, HiChip } from "react-icons/hi";
import { useTheme } from "../App";

const navLinks = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Experience", to: "experience" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isHovered, setIsHovered] = useState(false);
  const isDark = theme === "dark";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Your original color palette
  const colors = {
    light: {
      cream: "#F4F0E4",
      teal: "#44A194",
      steel: "#537D96",
      coral: "#EC8F8D",
      text: "#2C3E50",
      textLight: "#44A194",
    },
    dark: {
      cream: "#1a1f2e",
      teal: "#5EC8B9",
      steel: "#8B9EB7",
      coral: "#FFB6B5",
      text: "#E5E7EB",
      textLight: "#5EC8B9",
    },
  };

  const currentColors = isDark ? colors.dark : colors.light;

  // Name animation variants
  const letterVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: {
      scale: 1.2,
      color: currentColors.coral,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.9 },
  };

  const name = "Durga".split("");

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-2" : "py-6"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="relative rounded-2xl transition-all duration-500 overflow-hidden"
            style={{
              // Base styles for glass morphism
              backgroundColor: scrolled
                ? isDark
                  ? "rgba(26, 31, 46, 0.7)"
                  : "rgba(244, 240, 228, 0.7)"
                : isDark
                  ? "rgba(26, 31, 46, 0.4)"
                  : "rgba(244, 240, 228, 0.4)",
              // Critical: This is what creates the glass effect
              backdropFilter: "blur(12px) saturate(180%)",
              WebkitBackdropFilter: "blur(12px) saturate(180%)",
              border: `1px solid ${isDark ? "rgba(94, 200, 185, 0.15)" : "rgba(68, 161, 148, 0.2)"}`,
              boxShadow: scrolled
                ? `0 10px 30px -10px ${isDark ? "rgba(0,0,0,0.5)" : "rgba(68, 161, 148, 0.2)"}`
                : `0 4px 20px -8px ${isDark ? "rgba(0,0,0,0.3)" : "rgba(68, 161, 148, 0.1)"}`,
            }}
          >
            {/* Glass enhancement layers - these add depth without breaking the glass effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Subtle gradient overlay for depth */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(105deg, 
                                        ${isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.1)"} 0%, 
                                        transparent 40%,
                                        ${isDark ? "rgba(94,200,185,0.02)" : "rgba(68,161,148,0.03)"} 100%)`,
                }}
              />

              {/* Floating orbs - very subtle */}
              <motion.div
                className="absolute w-[500px] h-[500px] rounded-full"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${currentColors.teal}10, transparent 70%)`,
                  top: "-200px",
                  left: "-200px",
                  filter: "blur(60px)",
                }}
                animate={{
                  x: [0, 50, 0],
                  y: [0, 30, 0],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute w-[500px] h-[500px] rounded-full"
                style={{
                  background: `radial-gradient(circle at 70% 70%, ${currentColors.coral}10, transparent 70%)`,
                  bottom: "-200px",
                  right: "-200px",
                  filter: "blur(60px)",
                }}
                animate={{
                  x: [0, -50, 0],
                  y: [0, -30, 0],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Light reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
            </div>

            {/* Main navbar content */}
            <div className="relative px-6 py-3 flex items-center justify-between gap-6 z-10">
              {/* Logo with animated name */}
              <Link
                to="hero"
                smooth
                duration={600}
                className="flex items-center gap-2 cursor-pointer select-none group"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity"
                    animate={{
                      background: [
                        `linear-gradient(45deg, ${currentColors.teal}, ${currentColors.steel})`,
                        `linear-gradient(225deg, ${currentColors.teal}, ${currentColors.coral})`,
                        `linear-gradient(45deg, ${currentColors.teal}, ${currentColors.steel})`,
                      ],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <div
                    className="relative p-2.5 rounded-xl"
                    style={{
                      background: `linear-gradient(135deg, ${currentColors.teal}, ${currentColors.steel})`,
                      boxShadow: `0 4px 15px ${currentColors.teal}40`,
                    }}
                  >
                    <HiChip className="text-white text-xl" />
                  </div>
                </motion.div>

                {/* Animated name */}
                <div className="flex items-center">
                  {name.map((letter, index) => (
                    <motion.span
                      key={index}
                      className="text-2xl font-bold tracking-tight inline-block"
                      style={{
                        color: currentColors.text,
                        textShadow: isHovered
                          ? `0 0 10px ${currentColors.coral}`
                          : "none",
                      }}
                      variants={letterVariants}
                      initial="initial"
                      animate="animate"
                      whileHover="hover"
                      whileTap="tap"
                      custom={index}
                      transition={{
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 300,
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </div>

                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <HiSparkles
                    style={{ color: currentColors.coral }}
                    className="text-sm"
                  />
                </motion.div>
              </Link>

              {/* Desktop Links */}
              <ul className="hidden lg:flex items-center gap-1 list-none">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.to}
                      smooth
                      duration={600}
                      spy
                      offset={-80}
                      onSetActive={() => setActiveSection(link.to)}
                      className="relative px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transition-all duration-300 overflow-hidden group"
                      style={{
                        color:
                          activeSection === link.to
                            ? currentColors.teal
                            : currentColors.text,
                      }}
                    >
                      {/* Active indicator */}
                      {activeSection === link.to && (
                        <motion.div
                          className="absolute bottom-0 left-2 right-2 h-0.5"
                          layoutId="activeIndicator"
                          transition={{
                            type: "spring",
                            bounce: 0.2,
                            duration: 0.6,
                          }}
                          style={{
                            background: `linear-gradient(90deg, ${currentColors.teal}, ${currentColors.coral})`,
                          }}
                        />
                      )}

                      {/* Hover effect */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                        style={{
                          background: isDark
                            ? `linear-gradient(135deg, ${currentColors.teal}15, ${currentColors.coral}15)`
                            : `linear-gradient(135deg, ${currentColors.teal}10, ${currentColors.coral}10)`,
                          backdropFilter: "blur(5px)",
                        }}
                      />

                      <span className="relative z-10">{link.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Right Actions */}
              <div className="flex items-center gap-2">
                {/* Theme Toggle - with glass effect */}
                <motion.button
                  onClick={toggleTheme}
                  className="relative w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden group"
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  title="Toggle theme"
                  style={{
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    backgroundColor: isDark
                      ? "rgba(255,255,255,0.05)"
                      : "rgba(255,255,255,0.2)",
                    border: "none",
                  }}
                >
                  <div className="relative z-10">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={theme}
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center justify-center"
                        style={{ color: currentColors.teal }}
                      >
                        {isDark ? <HiSun size={26} /> : <HiMoon size={26} />}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </motion.button>

                {/* Hamburger - with glass effect */}
                <motion.button
                  className="lg:hidden relative w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden"
                  onClick={() => setMenuOpen((o) => !o)}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    backgroundColor: isDark
                      ? "rgba(255,255,255,0.05)"
                      : "rgba(255,255,255,0.2)",
                    border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(68,161,148,0.2)"}`,
                  }}
                >
                  <div
                    className="relative z-10"
                    style={{ color: currentColors.teal }}
                  >
                    {menuOpen ? <HiX size={18} /> : <HiMenu size={18} />}
                  </div>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu - with glass effect */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed top-[72px] left-0 right-0 z-40 lg:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                className="relative rounded-xl shadow-xl overflow-hidden"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                style={{
                  backgroundColor: isDark
                    ? "rgba(26, 31, 46, 0.8)"
                    : "rgba(244, 240, 228, 0.8)",
                  backdropFilter: "blur(16px) saturate(180%)",
                  WebkitBackdropFilter: "blur(16px) saturate(180%)",
                  border: `1px solid ${isDark ? "rgba(94, 200, 185, 0.2)" : "rgba(68, 161, 148, 0.2)"}`,
                }}
              >
                {/* Glass enhancement for mobile menu */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(105deg, 
                                            ${isDark ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.1)"} 0%, 
                                            transparent 50%)`,
                  }}
                />

                <div className="relative p-3 flex flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.03 }}
                    >
                      <Link
                        to={link.to}
                        smooth
                        duration={600}
                        offset={-80}
                        onClick={() => setMenuOpen(false)}
                        className="relative block px-4 py-3 rounded-lg font-medium transition-all duration-200 group"
                        style={{
                          color:
                            activeSection === link.to
                              ? currentColors.teal
                              : currentColors.text,
                        }}
                      >
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg"
                          style={{
                            background: isDark
                              ? `linear-gradient(135deg, ${currentColors.teal}15, ${currentColors.coral}15)`
                              : `linear-gradient(135deg, ${currentColors.teal}10, ${currentColors.coral}10)`,
                            backdropFilter: "blur(5px)",
                          }}
                        />
                        <span className="relative z-10 flex items-center justify-between">
                          {link.name}
                          {activeSection === link.to && (
                            <motion.span
                              className="text-sm"
                              style={{ color: currentColors.coral }}
                            >
                              ●
                            </motion.span>
                          )}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
