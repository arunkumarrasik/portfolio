import React from 'react';
import { motion } from 'framer-motion';
import { educationList } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2, BookOpen } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-medium mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient-cyan">Mathematical Foundation</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Rigorous mathematical training from Rajah Serfoji Govt. College providing the statistical, numerical, and logical foundation required for advanced data analytics.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical connecting line */}
          <div className="absolute left-4 sm:left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-slate-800" />

          <div className="space-y-12">
            {educationList.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-12 sm:pl-20"
              >
                {/* Timeline node icon */}
                <div className="absolute left-1 sm:left-5 top-1.5 w-7 h-7 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-md shadow-cyan-500/30">
                  <GraduationCap className="w-3.5 h-3.5" />
                </div>

                {/* Card Container */}
                <div className="p-6 sm:p-8 rounded-2xl glass-card border border-slate-800 hover:border-cyan-500/30 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {edu.degree}
                    </h3>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-mono font-bold w-fit">
                      <Award className="w-3.5 h-3.5" />
                      <span>Score: {edu.score}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs font-mono text-slate-400 mb-6">
                    <span className="text-slate-300 font-semibold">{edu.institution}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-cyan-400" />
                      {edu.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-slate-300">
                      <Calendar className="w-3 h-3 text-indigo-400" />
                      {edu.duration}
                    </span>
                  </div>

                  {/* Quantitative Subjects */}
                  <div className="mb-4">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5 font-semibold">
                      <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                      Relevant Mathematical & Statistical Coursework:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.focus.map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-700/80 text-xs text-slate-200 font-mono"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-4 border-t border-slate-800/70 text-xs text-slate-400">
                    {edu.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
