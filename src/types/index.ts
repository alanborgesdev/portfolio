// Navigation
export interface NavLink {
  name: string;
  href: string;
}

// Social Links
export interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
  color?: string;
  label?: string;
}

// Skills
export interface SkillCategory {
  title: string;
  skills: string[];
}

// Projects
export interface Project {
  title: string;
  description: string;
  tags: string[];
  demo?: string;
  repo: string;
  image: string;
}

// About Highlights
export interface Highlight {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Form Data
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

// Theme
export type Theme = 'light' | 'dark' | 'system';

// Notification
export type NotificationType = 'success' | 'error' | 'info' | 'warning';

export interface Notification {
  show: boolean;
  type: NotificationType;
  title: string;
  message: string;
}
