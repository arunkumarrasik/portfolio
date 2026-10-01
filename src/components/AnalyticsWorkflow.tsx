import { motion } from 'framer-motion';
import { workflowSteps } from '../data/portfolioData';
import {
  GitFork,
  Database,
  Sliders,
  BarChart,
  Presentation,
  CheckCircle2,
  Cpu,
} from 'lucide-react';

export const AnalyticsWorkflow: React.FC = () => {
  const getStepIcon = (step: number) => {
    switch (step) {
      case 1:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 2:
        return <Database className="w-5 h-5 text-indigo-400" />;
      case 3:
        return <Sliders className="w-5 h-5 text-amber-400" />;
      case 4:
        return <BarChart className="w-5 h-5 text-emerald-400" />;
      case 5:
        return <GitFork className="w-5 h-5 text-pink-400" />;
      case 6:
        return <Presentation className="w-5 h-5 text-cyan-400" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="workflow" className="py-24 relative bg-slate-950/70 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <GitFork className="w-3.5 h-3.5" />
            <span>Structured Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            End-to-End <span className="text-gradient-cyan">Analytics Workflow</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            How I approach data: From scoping business objectives to extracting queries, cleaning records, executing EDA, and delivering actionable dashboards.
          </p>
        </div>

        {/* Workflow Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl glass-card border border-slate-800 hover:border-cyan-500/40 relative flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 group-hover:border-cyan-500/30 transition-colors">
                    {getStepIcon(step.step)}
                  </div>
                  <span className="text-xs font-mono font-bold text-cyan-400 px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                    Phase 0{step.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-800/80">
                {/* Tools */}
                <div>
                  <div className="text-[11px] font-mono text-slate-500 mb-1.5 font-semibold">Core Tools:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {step.tools.map((t) => (
                      <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Techniques */}
                <div>
                  <div className="text-[11px] font-mono text-slate-500 mb-1.5 font-semibold">Techniques:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {step.techniques.map((tech) => (
                      <span key={tech} className="text-[10px] px-2 py-0.5 rounded bg-slate-800/60 text-cyan-300/90 border border-cyan-500/15">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
