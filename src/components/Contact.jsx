import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: <HiMail />,
    label: "Email",
    value: "kcdurga691@gmail.com",
    href: "mailto:kcdurga691@gmail.com?subject=Hello%20from%20your%20portfolio&body=I%20would%20like%20to%20connect%20with%20you...",
  },
  {
    icon: <HiPhone />,
    label: "Phone",
    value: "+977 9814555889",
    href: "tel:+9779814555889",
  },
  {
    icon: <HiLocationMarker />,
    label: "Location",
    value: "Kathmandu, Nepal",
    href: null,
  },
];

const socials = [
  { icon: <FaGithub />, href: "https://github.com/DurgaKc", label: "GitHub", color: "#333" },
  { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/durga-khanal/", label: "LinkedIn", color: "#0a66c2" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/durga42772/", label: "Instagram", color: "#E4405F" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false); // ✅ Added state

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_tkw7kcc",
        "template_unsdxpl",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "J5dVuUtvBEFC2bq6W"
      );

      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 3000);
    } catch (error) {
      alert("Failed to send message");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-28 bg-[#e8eeff] dark:bg-[#0a0f2e] relative overflow-hidden">
      <div className="absolute top-40 -left-24 w-80 h-80 bg-indigo-400/20 dark:bg-indigo-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4A90E2]/20 dark:bg-[#4A90E2]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 mb-4">
            <span className="text-[#a5a9a9]">Get In Touch</span>
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-[#4A90E2] mb-4">Let's Work Together</h2>
          <p className="text-base text-slate-600 dark:text-slate-400 max-w-md mx-auto">
            Have a project in mind or just want to say hi? My inbox is always open!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left info column */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-5"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {contactInfo.map((c, i) => (
              <motion.div
                key={i}
                className="relative flex items-center gap-4 p-4 bg-white dark:bg-[#111827] border border-indigo-100 dark:border-indigo-900/30 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1 w-full"
                  style={{ background: i === 0 ? "#6366f1" : i === 1 ? "#4A90E2" : "#5DD3B6" }}
                />
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 text-lg group-hover:scale-110 transition-transform duration-300">
                  {c.icon}
                </div>
                <div>
                  <div className="text-xs text-slate-400 dark:text-slate-500 font-medium">{c.label}</div>

                  {/* ✅ Phone copy functionality */}
                  {c.label === "Phone" ? (
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <a
                          href={c.href}
                          className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                          title="Click to call"
                        >
                          {c.value}
                        </a>
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(c.value);
                            setCopiedPhone(true);
                            setTimeout(() => setCopiedPhone(false), 3000);
                          }}
                          className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                          title="Copy number"
                        >
                          Copy
                        </button>
                      </div>
                      {copiedPhone && (
                        <span className="text-xs text-green-500 dark:text-green-400 mt-1">
                          Phone number copied!
                        </span>
                      )}
                    </div>
                  ) : c.href ? (
                    <a
                      href={c.href}
                      className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">{c.value}</span>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social links */}
            <div className="flex flex-col gap-3 mt-2">
              <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Follow me</p>
              <div className="flex gap-3">
                {socials.map((s, i) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    title={s.label}
                    className="relative w-11 h-11 flex items-center justify-center rounded-xl bg-white dark:bg-[#111827] border border-indigo-100 dark:border-indigo-900/30 text-slate-600 dark:text-slate-400 hover:text-white transition-all duration-300 overflow-hidden group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className="absolute top-0 left-0 right-0 h-0.5 w-full bg-transparent group-hover:bg-white transition-colors duration-300" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: s.color }} />
                    <span className="relative z-10 text-lg">{s.icon}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right form column - matching ProjectCard styling */}
          <motion.form
            className="lg:col-span-3 relative bg-white dark:bg-[#111827] border border-indigo-100 dark:border-indigo-900/30 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 overflow-hidden group"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Top accent line - matching ProjectCard */}
            <div
              className="absolute top-0 left-0 right-0 h-1 w-full"
              style={{ background: "#6366f1" }}
            />

            {/* Form header with icon - matching ProjectCard image area */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-indigo-50 dark:border-indigo-900/20">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 text-lg">
                <FaPaperPlane />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Send me a message
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0d1433] border border-slate-200 dark:border-indigo-900/30 text-slate-900 dark:text-slate-100 text-sm placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-indigo-400 dark:focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400/20 transition-all duration-200"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="xyz@example.com"
                  className="px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0d1433] border border-slate-200 dark:border-indigo-900/30 text-slate-900 dark:text-slate-100 text-sm placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-indigo-400 dark:focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400/20 transition-all duration-200"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5 mb-5">
              <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0d1433] border border-slate-200 dark:border-indigo-900/30 text-slate-900 dark:text-slate-100 text-sm placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-indigo-400 dark:focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400/20 transition-all duration-200 resize-none"
              />
            </div>

            {/* Tech badges style for form status - matching ProjectCard tech badges */}
            {sent && (
              <motion.div
                className="mb-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border"
                style={{
                  color: "#10b981",
                  borderColor: "#10b98140",
                  background: "#10b98110",
                }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span>✅</span> Message sent successfully!
              </motion.div>
            )}

            <motion.button
              type="submit"
              className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-2xl text-sm font-bold text-white transition-all duration-300 btn-grad hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-500/25"
              whileTap={{ scale: 0.97 }}
            >
              {loading ? (
                "Sending..."
              ) : sent ? (
                "✅ Message Sent!"
              ) : (
                <>
                  <FaPaperPlane className="text-sm" /> Send Message
                </>
              )}{" "}
            </motion.button>

            {/* Bottom accent - matching Projects component link style */}
            <div className="mt-4 text-center">
              <span className="text-xs text-slate-400 dark:text-slate-500">
                I'll get back to you within 24-48 hours
              </span>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
