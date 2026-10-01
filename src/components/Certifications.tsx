import { motion } from 'framer-motion';
import { certificationsList } from '../data/portfolioData';
import { Award, CheckCircle, ShieldCheck, Calendar, BookCheck } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section className="py-20 relative bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-medium mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Professional Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Industry <span className="text-gradient-cyan">Certification</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Formal technical training validating end-to-end competencies across the modern analytics stack.
          </p>
        </div>

        {/* Certification Cards */}
        <div className="max-w-2xl mx-auto">
          {certificationsList.map((cert) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-3xl glass-card border border-slate-800 hover:border-amber-500/30 transition-all relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform" />

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 text-sm font-mono text-slate-400">
                      <span className="text-amber-300 font-semibold">{cert.issuer}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-slate-300">
                        <Calendar className="w-3 h-3 text-cyan-400" />
                        {cert.year}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono font-medium self-start">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{cert.credentialStatus}</span>
                </div>
              </div>

              {/* Curriculum / Modules Covered */}
              <div className="space-y-2 pt-4 border-t border-slate-800/80">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5 font-semibold">
                  <BookCheck className="w-3.5 h-3.5 text-cyan-400" />
                  Core Data Analytics Domains Covered:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {cert.skillsCovered.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
