export interface ProjectDetails {
  intro: string;
  heroImage: string;
  secondaryText: string;
  grid2Up: [string, string];
  fullWidthImage1: string;
  brandIdentityText: string;
  fullWidthImage2: string;
  colorPaletteText: string;
  fullWidthImage3: string;
  typographySystem: {
    title: string;
    description: string;
  };
  productStrategy: {
    title: string;
    description: string;
  };
  userFlow?: {
    title: string;
    description: string;
  };
  complexGrid: {
    row1: string;
    row2: [string, string];
    row3: string;
  };
}

export interface WorkItem {
  id: string;
  title: string;
  role: string;
  date?: string;
  description: string;
  tags: string[];
  link?: string;
  tooltip?: string;
  details?: ProjectDetails;
}

export interface ProjectItem {
  id: string;
  title: string;
  role: string;
  date?: string;
  description: string;
  tags: string[];
  link?: string;
  tooltip?: string;
  details?: ProjectDetails;
}
