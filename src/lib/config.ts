export const SITE = {
  pageType: "website",
  author: import.meta.env.PUBLIC_PROJECT_AUTHOR,
  profile: `https://github.com/${import.meta.env.PUBLIC_USERNAME}`,
  desc: "Portfolio",
  title: import.meta.env.PUBLIC_PROJECT_AUTHOR,
  postPerPage: 10,
} as const;
