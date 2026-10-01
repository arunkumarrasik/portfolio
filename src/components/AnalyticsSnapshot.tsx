import React from 'react';
import { motion } from 'framer-motion';
import { analyticsSnapshots } from '../data/portfolioData';
import { Database, GraduationCap, BarChart3, Award, Sparkles } from 'lucide-react';

export const AnalyticsSnapshot: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Database':
        return <Database className="w-6 h-6 text-cyan-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-indigo-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-emerald-400" />;
      case 'Award':
        return <Award className="w-6 h-6 text-amber-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="analytics" className="py-20 relative bg-[#090f21]/70 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              Quantitative Overview
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Analytics Snapshot & Evidence
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mt-2 md:mt-0 font-mono">
            Every metric reflects verified academic achievements, dataset scopes, and technical certifications.
          </p>
        </div>

        {/* 4 Analytics KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {analyticsSnapshots.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl glass-card relative group overflow-hidden border border-slate-800 hover:border-cyan-500/40"
            >
              {/* Top ambient glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />

              <div className="flex items-center justify-between mb-5">
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 group-hover:border-cyan-500/30 transition-colors">
                  {getIcon(item.iconName)}
                </div>
                <span className="text-[11px] font-mono text-slate-500 font-medium">Metric 0{index + 1}</span>
              </div>

              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight group-hover:text-cyan-300 transition-colors">
                  {item.value}
                </div>
                <div className="text-sm font-semibold text-slate-200">
                  {item.label}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pt-1">
                  {item.subtext}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="mt-5 pt-3 border-t border-slate-800/70 flex items-center justify-between text-[11px] font-mono text-cyan-400/80">
                <span>Verified in Resume</span>
                <span>100% Factual</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
