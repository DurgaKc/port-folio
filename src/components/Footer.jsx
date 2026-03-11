import { FaGithub, FaLinkedinIn, FaInstagram, FaFacebookF, FaHeart, FaEnvelope } from 'react-icons/fa'
import { Link } from 'react-scroll'

const links = [
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
]

const socials = [
    { icon: <FaGithub />, href: 'https://github.com/DurgaKc', label: 'GitHub', color: '#333' },
    { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/durga-khanal/', label: 'LinkedIn', color: '#0a66c2' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/durga42772/', label: 'Instagram', color: '#E4405F' },
    { icon: <FaFacebookF />, href: 'https://www.facebook.com/dur.gaa.kc.438763', label: 'Facebook', color: '#1877f2' },
]

export default function Footer() {
    return (
        <footer className="bg-[#e8eeff] dark:bg-[#0a0f2e] border-t border-indigo-200 dark:border-indigo-900/30 relative overflow-hidden">
           
            {/* Decorative blob - subtle */}
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/10 dark:bg-indigo-700/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="max-w-6xl mx-auto px-6 py-10 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
                    {/* Brand - larger column */}
                    <div className="md:col-span-5 flex flex-col gap-3">
                        <div className="flex items-center gap-1 text-xl font-black">
                            <span className="text-[#4A90E2] font-mono">&lt;</span>
                            <span className="text-[#4A90E2]">Durga KC</span>
                            <span className="text-[#4A90E2] font-mono">/&gt;</span>
                        </div>
                        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed max-w-sm font-medium">
                            Full-stack developer crafting beautiful, performant web experiences. Open to freelance & remote work.
                        </p>
                        {/* Small tech tags - matching Projects component style */}
                        <div className="flex flex-wrap gap-1.5 mt-1">
                            {['React', 'Node.js', 'MongoDB'].map(tech => (
                                <span key={tech} className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold border"
                                    style={{ color: '#4A90E2', borderColor: '#4A90E240', background: '#4A90E110' }}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Navigation - compact */}
                    <div className="md:col-span-3 flex flex-col gap-2">
                        <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1">Navigation</h4>
                        <div className="grid grid-cols-2 gap-1">
                            {links.map(l => (
                                <Link
                                    key={l.name}
                                    to={l.to}
                                    smooth
                                    duration={600}
                                    className="text-sm text-slate-700 dark:text-slate-300 hover:text-[#4A90E2] dark:hover:text-[#4A90E2] transition-colors duration-150 cursor-pointer w-fit font-medium"
                                >
                                    {l.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Socials - compact */}
                    <div className="md:col-span-4 flex flex-col gap-3">
                        <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Connect</h4>
                        <div className="flex gap-2">
                            {socials.map(s => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    title={s.label}
                                    className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-white dark:bg-[#111827] border border-indigo-200 dark:border-indigo-900/30 text-slate-600 dark:text-slate-400 hover:text-white transition-all duration-300 overflow-hidden group"
                                >
                                    {/* Top accent line on hover */}
                                    <div className="absolute top-0 left-0 right-0 h-0.5 w-full bg-transparent group-hover:bg-white transition-colors duration-300" />
                                    <div 
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        style={{ background: s.color }}
                                    />
                                    <span className="relative z-10 text-sm">{s.icon}</span>
                                </a>
                            ))}
                        </div>
                        
                        {/* Email with proper icon and more visible text */}
                       <a
  href="mailto:kcdurga691@gmail.com?subject=Hello%20from%20your%20portfolio&body=I%20would%20like%20to%20connect%20with%20you..."
  className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 hover:text-[#4A90E2] dark:hover:text-[#4A90E2] transition-colors duration-200 group font-medium"
>
  <span className="w-7 h-7 flex items-center justify-center rounded-lg bg-white dark:bg-[#111827] border border-indigo-200 dark:border-indigo-900/30 text-[#4A90E2] group-hover:bg-[#4A90E2] group-hover:text-white transition-all duration-200">
    <FaEnvelope className="text-xs" />
  </span>
  <span>kcdurga691@gmail.com</span>
</a>
                        
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-medium">
                            ✦ Available for opportunities ✦
                        </p>
                    </div>
                </div>

                {/* Bottom bar - with more visible text */}
                <div className="pt-6 border-t border-indigo-200 dark:border-indigo-900/20 flex flex-col sm:flex-row items-center justify-between gap-2">
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                        © {new Date().getFullYear()} <span className="text-[#4A90E2] font-bold">Durga KC</span>. All rights reserved.
                    </p>
                    <div className="flex items-center gap-3">
                        <p className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1.5 font-medium">
                            Crafted with <FaHeart className="text-[#4A90E2] text-xs" /> using 
                            <span className="inline-flex items-center gap-1 ml-1">
                                <span className="w-1 h-1 rounded-full bg-[#6366f1]" />
                                <span className="text-[#4A90E2] font-semibold">React</span>
                                <span className="w-1 h-1 rounded-full bg-[#5DD3B6]" />
                                <span className="text-[#4A90E2] font-semibold">Tailwind</span>
                            </span>
                        </p>
                    </div>
                </div>

                {/* Small decorative elements */}
                <div className="flex justify-center gap-2 mt-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4A90E2]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5DD3B6]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4A90E2]" />
                </div>
            </div>
        </footer>
    )
}