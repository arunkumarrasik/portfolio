import { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo, educationList, certificationsList, projectsData } from '../data/portfolioData';
import { X, Printer, Check, Copy, FileText, Mail, Phone, MapPin } from 'lucide-react';
import { LinkedinIcon } from './icons/LinkedinIcon';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
ARUNKUMAR R
Data Analyst
Velachery, Chennai, Tamil Nadu • 6381641778 • arunkumarrasik@gmail.com • linkedin.com/in/arunkumar-r-06aa1143b

PROFESSIONAL SUMMARY
${personalInfo.summary}

SKILLS
• Programming: Python, Pandas, NumPy, Matplotlib, Seaborn, Plotly Express, OOPs, Web Scraping
• SQL: MySQL, SQL Queries, Joins, Subqueries, Aggregate Functions, GROUP BY, HAVING, CASE
• Microsoft Excel: Data Cleaning, Sorting, Filtering, VLOOKUP, Pivot Tables, Pivot Charts, Charts, Dashboards
• Power BI: Data Modeling, Dashboard Development, DAX, Slicers, Interactive Reports, Report Building, Data Visualization
• Tableau: Dashboard Development, Calculated Fields, Filters, Parameters, Interactive Visualizations
• Data Analysis: Data Cleaning, EDA, Data Aggregation, KPI Analysis, Business Insights, Reporting
• Statistics: Descriptive Statistics, Probability, Hypothesis Testing
• Analytical & Soft Skills: Data organization, problem-solving, attention to detail, communication, teamwork, time management, adaptability
• Core Competencies: Data Analytics, Business Intelligence, Data Visualization, Data Cleaning, Report Generation, Dashboard Design, KPI Tracking, Database Querying, Exploratory Data Analysis

PROJECTS
Retail Sales Exploratory Data Analysis (EDA) • Python, Pandas, Matplotlib
• Performed end-to-end EDA on a retail sales dataset (~9,800 records), cleaning missing values and duplicates and standardizing column formats.
• Analyzed sales trends across Category, Region, Segment, and Ship Mode to identify key revenue drivers.
• Identified top-performing products, cities, states, and customers by total sales.
• Built monthly and yearly time-series analysis to detect seasonal sales patterns.
• Visualized insights using bar, line, and histogram charts to support business reporting.

EDUCATION
M.Sc. in Mathematics — Rajah Serfoji Govt. College, Thanjavur • 2023 – 2025 • 70%
B.Sc. in Mathematics — Rajah Serfoji Govt. College, Thanjavur • 2020 – 2023 • 78.53%

CERTIFICATIONS
• Course Completion Certificate — Login360 (Data Analytics), 2026

LANGUAGES KNOWN
Languages: Tamil (Native), English (Professional Proficiency)
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-[#0b1329] border border-slate-700 w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden"
      >
        {/* Modal Top Toolbar */}
        <div className="px-6 py-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white font-bold">
            <FileText className="w-5 h-5 text-cyan-400" />
            <span>Resume Preview — {personalInfo.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Content */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-[#090f20] text-slate-300 print:text-black print:bg-white text-sm">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
                {personalInfo.name}
              </h1>
              <div className="text-base font-semibold text-cyan-400 font-mono mt-0.5">
                Data Analyst
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 mt-3 font-mono">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-cyan-400" />
                  {personalInfo.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-cyan-400" />
                  {personalInfo.phone}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3 h-3 text-cyan-400" />
                  {personalInfo.email}
                </span>
                <span>•</span>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-cyan-400 hover:underline"
                >
                  <LinkedinIcon className="w-3 h-3" />
                  linkedin.com/in/arunkumar-r-06aa1143b
                </a>
              </div>
            </div>

            <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-cyan-500/40 shrink-0 self-start sm:self-center hidden sm:block">
              <img src={personalInfo.photoUrl} alt="Arunkumar R" className="w-full h-full object-cover object-top" />
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-cyan-400 mb-2">
              Professional Summary
            </h2>
            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
              {personalInfo.summary}
            </p>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-cyan-400 mb-3">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs text-slate-300">
              <p><strong className="text-white">Programming:</strong> Python, Pandas, NumPy, Matplotlib, Seaborn, Plotly Express, OOPs, Web Scraping</p>
              <p><strong className="text-white">SQL:</strong> MySQL, SQL Queries, Joins, Subqueries, Aggregate Functions, GROUP BY, HAVING, CASE</p>
              <p><strong className="text-white">Microsoft Excel:</strong> Data Cleaning, Sorting, Filtering, VLOOKUP, Pivot Tables, Pivot Charts, Charts, Dashboards</p>
              <p><strong className="text-white">Power BI:</strong> Data Modeling, Dashboard Development, DAX, Slicers, Interactive Reports, Report Building, Data Visualization</p>
              <p><strong className="text-white">Tableau:</strong> Dashboard Development, Calculated Fields, Filters, Parameters, Interactive Visualizations</p>
              <p><strong className="text-white">Data Analysis:</strong> Data Cleaning, EDA, Data Aggregation, KPI Analysis, Business Insights, Reporting</p>
              <p><strong className="text-white">Statistics:</strong> Descriptive Statistics, Probability, Hypothesis Testing</p>
              <p><strong className="text-white">Analytical & Soft Skills:</strong> Data organization, problem-solving, attention to detail, communication, teamwork, time management, adaptability</p>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-cyan-400 mb-3">
              Data Analytics Projects
            </h2>
            {projectsData.map((proj) => (
              <div key={proj.id} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="text-sm font-bold text-white">{proj.title}</h3>
                  <span className="text-xs font-mono text-cyan-400">Python, Pandas, Matplotlib</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                  <li>Performed end-to-end EDA on a retail sales dataset (~9,800 records), cleaning missing values and duplicates and standardizing column formats.</li>
                  <li>Analyzed sales trends across Category, Region, Segment, and Ship Mode to identify key revenue drivers.</li>
                  <li>Identified top-performing products, cities, states, and customers by total sales.</li>
                  <li>Built monthly and yearly time-series analysis to detect seasonal sales patterns.</li>
                  <li>Visualized insights using bar, line, and histogram charts to support business reporting.</li>
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-cyan-400 mb-3">
              Education
            </h2>
            <div className="space-y-3">
              {educationList.map((edu) => (
                <div key={edu.degree} className="flex flex-col sm:flex-row sm:items-center justify-between text-xs border-b border-slate-800/60 pb-2">
                  <div>
                    <span className="font-bold text-white text-sm">{edu.degree}</span>
                    <span className="text-slate-400"> — {edu.institution}, {edu.location}</span>
                  </div>
                  <div className="font-mono text-cyan-300 font-semibold mt-1 sm:mt-0">
                    {edu.duration} • Score: {edu.score}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-cyan-400 mb-2">
              Certifications
            </h2>
            {certificationsList.map((cert) => (
              <div key={cert.title} className="text-xs text-slate-300">
                • <strong className="text-white">{cert.title}</strong> — {cert.issuer}, {cert.year}
              </div>
            ))}
          </div>

          {/* Languages */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-cyan-400 mb-1">
              Languages Known
            </h2>
            <div className="text-xs text-slate-300">
              Languages: Tamil (Native), English (Professional Proficiency)
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};
