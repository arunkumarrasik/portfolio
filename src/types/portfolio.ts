export interface PersonalInfo {
  name: string;
  role: string;
  subtitles: string[];
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  photoUrl: string;
  summary: string;
  availableForWork: boolean;
  statusBadge: string;
}

export interface MetricSnapshot {
  label: string;
  value: string;
  subtext: string;
  iconName: string;
}

export interface SkillItem {
  name: string;
  level: 'Intermediate' | 'Working Knowledge' | 'Familiar';
  description: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  color: string;
  skills: SkillItem[];
}

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  tools: string[];
  datasetInfo: string;
  businessProblem: string;
  process: string[];
  keyFeatures: string[];
  keyInsights: string[];
  visualizations: {
    title: string;
    type: string;
    description: string;
  }[];
  learningOutcomes: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  score: string;
  focus: string[];
  highlights: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  skillsCovered: string[];
  credentialStatus: string;
}

export interface WorkflowStep {
  step: number;
  title: string;
  description: string;
  tools: string[];
  techniques: string[];
}

export interface ProfileLink {
  platform: string;
  handle: string;
  url: string;
  description: string;
  iconName: string;
}
