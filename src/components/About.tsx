import { motion } from 'framer-motion';
import { languagesKnown } from '../data/portfolioData';
import {
  Compass,
  CheckCircle,
  BrainCircuit,
  Languages,
  Target,
} from 'lucide-react';

export const About: React.FC = () => {
  const competencies = [
    { title: "Data Analytics & EDA", desc: "Uncovering statistical patterns, anomalies, and segment trends from raw transactional datasets." },
    { title: "Database Querying (SQL)", desc: "Authoring performant multi-table joins, subqueries, CTEs, and aggregations in MySQL." },
    { title: "Business Intelligence", desc: "Translating business requirements into intuitive KPI dashboards in Power BI and Tableau." },
    { title: "Data Cleaning & Profiling", desc: "Handling missing values, deduplication, standardizing schemas using Python Pandas and Excel." },
    { title: "Statistical Reasoning", desc: "Leveraging M.Sc. mathematics background in probability, distributions, and hypothesis validation." },
    { title: "Reporting & Decision Support", desc: "Generating clear executive summaries to help stakeholders optimize sales, shipping, and revenue." },
  ];

  const softSkills = [
    "Problem-Solving Mindset",
    "High Attention to Detail",
    "Data Organization",
    "Effective Communication",
    "Collaborative Teamwork",
    "Time Management",
    "Adaptability & Quick Learner",
  ];

  return (
    <section id="about" className="py-24 relative bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Professional Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bridging <span className="text-gradient-cyan">Mathematical Rigor</span> with Practical Data Analytics
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            A fresher data analyst with Master's and Bachelor's degrees in Mathematics, specialized in transforming complex raw datasets into actionable commercial insights.
          </p>
        </div>

        {/* Two-Column Grid: Narrative Story & Key Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-2xl glass-card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-cyan-400" />
                <span>Career Objective & Analytical Philosophy</span>
              </h3>
              
              <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
                <p>
                  As an analytical thinker with an <strong className="text-white">M.Sc. in Mathematics</strong> from Rajah Serfoji Govt. College, my journey into Data Analytics stems from a natural passion for discovering order and value in numbers.
                </p>
                <p>
                  I specialize in the complete data cycle: from extracting raw records using <span className="text-cyan-400 font-mono text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">MySQL</span>, cleaning and transforming messy schemas with <span className="text-cyan-400 font-mono text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">Python (Pandas)</span>, to engineering dynamic dashboards in <span className="text-cyan-400 font-mono text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">Power BI</span> and <span className="text-cyan-400 font-mono text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">Tableau</span>.
                </p>
                <p>
                  In my end-to-end retail sales project analyzing <strong className="text-white">~9,800 transactional entries</strong>, I identified top revenue-driving categories, regional nuances, and seasonal purchasing patterns that inform inventory and sales strategy.
                </p>
              </div>

              {/* Languages Known Box */}
              <div className="mt-8 pt-6 border-t border-slate-800/80">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3 flex items-center gap-2">
                  <Languages className="w-4 h-4 text-cyan-400" />
                  <span>Languages Known</span>
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {languagesKnown.map((lang) => (
                    <div key={lang.name} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                      <span className="text-sm font-semibold text-white">{lang.name}</span>
                      <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-md">
                        {lang.proficiency}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div className="mt-6 pt-6 border-t border-slate-800/80">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                  Key Professional Attributes
                </h4>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-300 text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Core Competencies Grid */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
                <BrainCircuit className="w-4 h-4 text-cyan-400" />
                <span>Core Competencies</span>
              </h3>
              <span className="text-xs font-mono text-slate-400">Strictly Resume-Derived</span>
            </div>

            <div className="space-y-3">
              {competencies.map((comp, idx) => (
                <motion.div
                  key={comp.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="p-4 rounded-xl glass-card border border-slate-800 hover:border-cyan-500/30 transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {comp.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {comp.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
