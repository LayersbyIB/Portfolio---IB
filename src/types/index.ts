export interface ProjectDetails {
  intro: string;
  heroImage: string;
  secondaryText: string;
  grid2Up: [string, string];
  fullWidthImage1: string;
  productStrategy: {
    title: string;
    description: string;
  };
  fullWidthImage2: string;
  userFlow: {
    title: string;
    description: string;
  };
  fullWidthImage3: string;
  typographySystem: {
    title: string;
    description: string;
  };
  complexGrid: {
    vertical3: [string, string, string];
    fullWidth: string;
    square2: [string, string];
  };
}

export interface WorkItem {
  id: string;
  title: string;
  role: string;
  description: string;
  tags: string[];
  link?: string;
  details?: ProjectDetails;
}

export interface ProjectItem {
  id: string;
  title: string;
  role: string;
  description: string;
  tags: string[];
  link?: string;
  details?: ProjectDetails;
}
