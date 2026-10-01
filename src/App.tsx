import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AnalyticsSnapshot } from './components/AnalyticsSnapshot';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { VisualizationShowcase } from './components/VisualizationShowcase';
import { AnalyticsWorkflow } from './components/AnalyticsWorkflow';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080d1a] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Top sticky navigation */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero with Photo & Key CTAs */}
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* High-level Factual Analytics Metrics */}
        <AnalyticsSnapshot />

        {/* Narrative & Mathematical Foundation */}
        <About />

        {/* Categorized Technical Skills */}
        <Skills />

        {/* Projects / Case Study */}
        <Projects />

        {/* Interactive Data Visualizations & SQL Playground */}
        <VisualizationShowcase />

        {/* Structured 6-Stage Analytics Workflow */}
        <AnalyticsWorkflow />

        {/* Education Timeline */}
        <Education />

        {/* Professional Certifications */}
        <Certifications />

        {/* Contact Information & Message Form */}
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Interactive Resume View/Print Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}

export default App;
