export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  location: string;
  year: string;
  area: string;
  image: string;
  brief: string;
  fullDescription: string;
  palette: { name: string; hex: string }[];
  materials: string[];
  architecturalHighlights: string[];
}

export interface Service {
  number: string;
  title: string;
  summary: string;
  deliverables: string[];
  duration: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  keyMilestones: string[];
}

export interface Testimonial {
  quote: string;
  client: string;
  role: string;
  project: string;
  location: string;
  sampleLabel: string;
}
