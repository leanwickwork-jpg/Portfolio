export interface Skill {
  name: string;
  category: 'Marketing' | 'Creative Tools' | 'AI Tools' | 'Soft Skills';
  level: number; // For visualization
}

export interface Experience {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  details: string[];
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  metrics: ProjectMetric[];
  tags: string[];
  imageUrl: string;
  category: string;
  challenge?: string;
  strategy?: string;
  aiImplementation?: string;
  takeaway?: string;
}

export interface Achievement {
  id: string;
  title: string;
  metric: string;
  description: string;
  category: string;
  iconName: string;
}

export interface WorkflowStep {
  id: number;
  title: string;
  englishTitle: string;
  description: string;
  icon: string;
  details: string[];
  highlight: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  skillsDemonstrated: string[];
}

export interface MarketingCasePoint {
  icon: 'challenge' | 'strategy' | 'result' | 'insight';
  content: string;
}

// ── Case Detail Data types (for the full-page detail view) ──────────────────

export interface CompetitorRow {
  brand: string;
  contentChoice: string;
  customerPsych: string;
  systemResult: string;
  isHighlight?: boolean;
}

export interface CaseFramework {
  id: 'pratfall' | 'brandFunnel' | 'ugc' | 'noScript' | 'generic';
  name: string;
  concept: string;
  formula?: string;
  uiNote: string;
}

export interface CaseBenchmark {
  title: string;
  period: string;
  story: string;
  lesson: string;
}

export interface CasePlaybookStep {
  step: number;
  title: string;
  description: string;
}

export interface CaseKpi {
  label: string;
  abbr: string;
  description: string;
}

export interface MarketingCaseDetailData {
  heroTitle: string;
  brand: string;
  opponents: string;
  industry: string;
  coreProblem: string;
  models: string[];
  hook: string;
  contextInsight: string;
  coreInsight: string;
  kfcSolution: string;
  competitorRows: CompetitorRow[];
  frameworks: CaseFramework[];
  benchmark?: CaseBenchmark;
  playbook: CasePlaybookStep[];
  kpis: CaseKpi[];
  conclusion: string;
}

export interface MarketingCase {
  id: string;
  brand: string;
  title: string;
  industry: string;
  period: string;
  description: string;
  points: MarketingCasePoint[];
  tags: string[];
  coverGradient: string;
  frameworks: string[];
  detailSlug?: string;
  detail?: MarketingCaseDetailData;
  pdfUrl?: string;   // optional PDF download/preview
}
