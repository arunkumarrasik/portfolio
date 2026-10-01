import { motion } from 'framer-motion';
import { projectsData } from '../data/portfolioData';
import {
  FolderKanban,
  Database,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  BarChart,
  Lightbulb,
  Layers,
} from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <FolderKanban className="w-3.5 h-3.5" />
            <span>Featured Case Study</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Data Analytics <span className="text-gradient-cyan">Projects & Case Studies</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            In-depth exploratory data analysis on a transactional retail dataset of ~9,800 records, executing complete data cleaning, multidimensional profiling, and strategic reporting.
          </p>
        </div>

        {/* Project Case Studies */}
        <div className="space-y-12">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl glass-card border border-slate-800 p-6 sm:p-10 relative overflow-hidden"
            >
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-cyan-500/10 via-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

              {/* Header Info */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8 border-b border-slate-800/80">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-mono">
                      ~9,800 Transactional Records
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {project.title}
                  </h3>
                </div>

                {/* Tools Used */}
                <div className="flex flex-wrap items-center gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-xs font-mono font-semibold text-slate-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Grid: Business Problem & Dataset */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800/90">
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-1.5 font-bold">
                    <Lightbulb className="w-4 h-4" />
                    Business Problem
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.businessProblem}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800/90">
                  <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-2 flex items-center gap-1.5 font-bold">
                    <Database className="w-4 h-4" />
                    Dataset Scope & Attributes
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.datasetInfo}
                  </p>
                </div>
              </div>

              {/* Detailed Analytical Process Steps */}
              <div className="mb-8">
                <h4 className="text-sm font-mono text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2 font-bold">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  Methodology & Execution Pipeline
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {project.process.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/70 hover:border-slate-700 transition-colors"
                    >
                      <div className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-md bg-cyan-500/10 text-cyan-400 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {step}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Documented Key Insights */}
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/20 border border-cyan-500/20 mb-8">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider font-bold mb-4">
                  <TrendingUp className="w-4 h-4" />
                  Key Documented Insights
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.keyInsights.map((insight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                        {insight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action for Live Interactive Showcase */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-800/80">
                <div className="text-xs text-slate-400 font-mono flex items-center gap-2">
                  <BarChart className="w-4 h-4 text-emerald-400" />
                  <span>Interactive charts and SQL query queries available below</span>
                </div>
                <a
                  href="#showcase"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/30 text-xs font-bold transition-all group"
                >
                  <span>Launch Live EDA Dashboard</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
