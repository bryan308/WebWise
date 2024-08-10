export type SiteConfig = {
  avatar?: string;
  siteUrl: string;
  siteName: string;
  siteDescription: string;
  siteThumbnail: string;
  nav: Array<{ label: string; href: string }>;
  social?: {
    github?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
};

export type MDXFrontMatter = {
  slug: string;
  title: string;
  description?: string;
  lessonNumber: number;
	lessonGroup: number;
  group: string;
};
