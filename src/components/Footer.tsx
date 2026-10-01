import { personalInfo } from '../data/portfolioData';
import { ArrowUp, BarChart2, Mail, Phone, MapPin } from 'lucide-react';
import { LinkedinIcon } from './icons/LinkedinIcon';

interface FooterProps {
  onOpenResumeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResumeModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050811] border-t border-slate-900 py-16 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1.5px]">
                <div className="w-full h-full bg-[#0b1329] rounded-[10px] flex items-center justify-center">
                  <BarChart2 className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Data Analyst with a strong mathematical foundation (M.Sc. Math). Skilled in SQL, Python, Power BI, Tableau, Excel, and Exploratory Data Analysis.
            </p>
            <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400">
              <MapPin className="w-3.5 h-3.5" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Portfolio Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Me & Mathematics</a></li>
              <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Categorized Technical Skills</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Retail Sales EDA Case Study</a></li>
              <li><a href="#showcase" className="hover:text-cyan-400 transition-colors">Interactive EDA Dashboard</a></li>
              <li><a href="#education" className="hover:text-cyan-400 transition-colors">Education & Degrees</a></li>
              <li>
                <button onClick={onOpenResumeModal} className="hover:text-cyan-400 transition-colors text-left">
                  View Full Resume (Print/PDF)
                </button>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Connect Directly
            </h4>
            <div className="space-y-2 text-xs font-mono">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>linkedin.com/in/arunkumar-r-06aa1143b</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personalInfo.email}</span>
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{personalInfo.phone}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All facts supported by resume.
          </div>

          <div className="text-center">
            Built with <span className="text-slate-300">React, TypeScript, Tailwind CSS, Framer Motion & Recharts</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
