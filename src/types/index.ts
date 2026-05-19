export interface WorkItem {
  id: string;
  title: string;
  role: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  role: string;
  description: string;
  tags: string[];
  link?: string;
}
