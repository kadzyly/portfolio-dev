export const SITE = {
  pageType: "website",
  author: import.meta.env.PUBLIC_PROJECT_AUTHOR,
  profile: `https://github.com/${import.meta.env.PUBLIC_USERNAME}`,
  ogImage: '/og-image.png',
  desc: "Portfolio",
  title: import.meta.env.PUBLIC_PROJECT_AUTHOR,
  postPerPage: 999,
} as const;
