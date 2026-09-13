export interface Project {
  id: string;
  code: string; // e.g. "PRJ-01"
  title: string;
  subtitle: string;
  tag: string;
  category: 'FLAGSHIP' | 'IoT / MOBILE' | 'FULL-STACK';
  description: string;
  longDescription?: string;
  architectureHighlights: string[];
  cvBullets?: string[];
  techStack: string[];
  link?: string;
  isFlagship?: boolean;
  metrics?: string;
  status: 'LIVE DEPLOYMENT' | 'OPERATIONAL' | 'COMPLETED';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  status: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface SkillItem {
  name: string;
  level?: number; // 0-100
  note?: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  code: string;
  skills: SkillItem[];
  color: 'cyan' | 'magenta' | 'purple';
}

export interface TerminalLog {
  id: string;
  type: 'input' | 'output' | 'error' | 'success';
  text: string;
}
