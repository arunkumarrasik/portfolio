import { useState } from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/portfolioData';
import {
  Database,
  Terminal,
  LayoutDashboard,
  FileSpreadsheet,
  Activity,
  Layers,
  Search,
  CheckCircle,
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', ...skillCategories.map((c) => c.title)];

  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'SQL & Relational Databases':
        return <Database className="w-4 h-4 text-cyan-400" />;
      case 'Python Data Analytics':
        return <Terminal className="w-4 h-4 text-indigo-400" />;
      case 'Business Intelligence & Dashboards':
        return <LayoutDashboard className="w-4 h-4 text-amber-400" />;
      case 'Microsoft Excel & Spreadsheet Analytics':
        return <FileSpreadsheet className="w-4 h-4 text-emerald-400" />;
      case 'Statistical & Analytical Methods':
        return <Activity className="w-4 h-4 text-pink-400" />;
      default:
        return <Layers className="w-4 h-4 text-cyan-400" />;
    }
  };

  // Filter skills
  const filteredCategories = skillCategories
    .filter((cat) => activeCategory === 'All' || cat.title === activeCategory)
    .map((cat) => ({
      ...cat,
      skills: cat.skills.filter(
        (skill) =>
          skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          skill.description.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="py-24 relative bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Technical Repertoire</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Categorized <span className="text-gradient-cyan">Technical Skills</span>
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
              Strictly derived from resume competencies. Categorized qualitatively without arbitrary percentage bars.
            </p>
          </div>

          {/* Quick Search */}
          <div className="mt-6 md:mt-0 relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills (e.g. SQL, DAX)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors font-mono"
            />
          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-slate-800/80">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-2 ${
                activeCategory === cat
                  ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-slate-200 hover:bg-slate-800/70'
              }`}
            >
              {cat !== 'All' && getCategoryIcon(cat)}
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* Skill Groups */}
        <div className="space-y-12">
          {filteredCategories.map((group) => (
            <div key={group.title} className="space-y-4">
              <div className="flex items-center gap-2.5 pb-2">
                <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800">
                  {getCategoryIcon(group.title)}
                </div>
                <h3 className="text-lg font-bold text-white tracking-wide">
                  {group.title}
                </h3>
                <span className="text-xs font-mono text-slate-500 ml-1">
                  ({group.skills.length} skills)
                </span>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -3 }}
                    className="p-4 rounded-xl glass-card border border-slate-800/90 hover:border-cyan-500/35 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-slate-100 text-sm group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </span>
                        <span
                          className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded-full border ${
                            skill.level === 'Intermediate'
                              ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                              : 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30'
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-2.5 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                      <span className="flex items-center gap-1 text-slate-400">
                        <CheckCircle className="w-3 h-3 text-emerald-400" />
                        Hands-on Applied
                      </span>
                      <span>Verified</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

          {filteredCategories.length === 0 && (
            <div className="text-center py-12 bg-slate-900/40 rounded-2xl border border-slate-800">
              <p className="text-slate-400 font-mono text-sm">No skills matching "{searchQuery}".</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
