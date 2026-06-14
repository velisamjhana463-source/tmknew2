export type ProjectType = "landing" | "corporate" | "ecommerce" | "refactoring" | "consultation";

export interface LeadForm {
  name: string;
  phone: string;
  contact: string;
  projectType: ProjectType;
  comment: string;
  website: string; // Honeypot
}

export interface PortfolioItem {
  id: string;
  title: string;
  type: string;
  desc: string;
  features: string[];
  techAccent: string;
  colorClass: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  price?: string;
  desc: string;
  features: string[];
  iconName: string;
}

export interface WorkStep {
  stepNumber: string;
  title: string;
  desc: string;
  duration: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
