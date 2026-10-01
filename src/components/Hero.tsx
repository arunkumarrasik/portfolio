import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import {
  FileText,
  Mail,
  MapPin,
  ArrowRight,
  Database,
  BarChart3,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react';
import { LinkedinIcon } from './icons/LinkedinIcon';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for supported roles
  useEffect(() => {
    const currentTitle = personalInfo.subtitles[titleIndex];
    const typingSpeed = isDeleting ? 30 : 70;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentTitle.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % personalInfo.subtitles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-mesh">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio, Typist, Actions */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-medium mb-6 shadow-sm shadow-cyan-500/10">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>{personalInfo.statusBadge}</span>
            </div>

            {/* Candidate Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-3">
              Hi, I'm <span className="text-gradient-cyan">{personalInfo.name}</span>
            </h1>

            {/* Typewriter Dynamic Title */}
            <div className="h-10 sm:h-12 flex items-center mb-6">
              <span className="text-xl sm:text-3xl font-semibold text-slate-300 font-mono">
                {displayText}
                <span className="inline-block w-1 h-7 ml-1 bg-cyan-400 animate-pulse align-middle" />
              </span>
            </div>

            {/* Location & Contact Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 mb-6 font-mono">
              <span className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                {personalInfo.location}
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-slate-300">M.Sc. Mathematics (2025)</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                Certified in Data Analytics
              </span>
            </div>

            {/* Concise Summary */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              {personalInfo.summary}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all group"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResumeModal}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-100 font-semibold text-sm border border-slate-700/80 hover:border-cyan-500/40 transition-all shadow-sm"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Full Resume</span>
              </button>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/30 transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>

              <a
                href="#contact"
                className="p-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/30 transition-colors"
                title="Contact Arunkumar"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Micro Tech Pills */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 w-full flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
              <span className="text-slate-500 mr-2 font-sans font-semibold">Core Stack:</span>
              {['SQL (MySQL)', 'Python (Pandas)', 'Power BI', 'Tableau', 'Advanced Excel', 'EDA'].map((tech) => (
                <span key={tech} className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Column: User's Actual Photo with Analytics Framing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Outer decorative ring */}
            <div className="relative w-[300px] sm:w-[360px] aspect-[4/5] rounded-3xl p-1 bg-gradient-to-b from-cyan-500/40 via-indigo-500/20 to-transparent shadow-2xl shadow-cyan-500/10">
              <div className="w-full h-full rounded-[22px] overflow-hidden bg-slate-950 relative group">
                {/* Real User Photo */}
                <img
                  src={personalInfo.photoUrl}
                  alt={`${personalInfo.name} - Data Analyst`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback in case of path issues
                    e.currentTarget.src = '/arunkumar.jpg';
                  }}
                />

                {/* Subtle gradient vignette at bottom of picture */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-transparent to-transparent opacity-60" />

                {/* Name Badge overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/60 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-bold text-sm tracking-wide">{personalInfo.name}</div>
                      <div className="text-xs text-cyan-400 font-mono">Data Analyst | M.Sc. Math</div>
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono">
                      <span>Verified</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Chip 1: Dataset analyzed */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -top-4 -left-6 sm:-left-8 p-3 rounded-2xl glass-card flex items-center gap-3 shadow-xl shadow-black/40 border border-cyan-500/30"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/15 flex items-center justify-center text-cyan-400">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Dataset EDA</div>
                  <div className="text-sm font-bold text-white font-mono">9,800+ Records</div>
                </div>
              </motion.div>

              {/* Floating Chip 2: Mathematics Rigor */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute top-1/2 -right-6 sm:-right-8 -translate-y-1/2 p-3 rounded-2xl glass-card flex items-center gap-3 shadow-xl shadow-black/40 border border-indigo-500/30"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/15 flex items-center justify-center text-indigo-400">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Quantitative Edge</div>
                  <div className="text-sm font-bold text-white font-mono">M.Sc. Mathematics</div>
                </div>
              </motion.div>

              {/* Floating Chip 3: BI Toolset */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute -bottom-5 -left-4 p-3 rounded-2xl glass-card flex items-center gap-3 shadow-xl shadow-black/40 border border-emerald-500/30"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-400">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">BI & Dashboards</div>
                  <div className="text-sm font-bold text-white font-mono">Power BI & Tableau</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
