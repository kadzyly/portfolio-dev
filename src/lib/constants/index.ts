import { GitHubLight, LinkedIn, Twitter } from "developer-icons";

export const NAV_LINKS = [
  {
    label: "Home",
    href: import.meta.env.MODE == "production" ? `/${import.meta.env.PUBLIC_BASE_URL}` : "/",
  },
  {
    label: "Articles",
    href: import.meta.env.MODE == "production" ? `/${import.meta.env.PUBLIC_BASE_URL}/articles/` : "/articles/",
  },
  {
    label: "Projects",
    href: import.meta.env.MODE == "production" ? `/${import.meta.env.PUBLIC_BASE_URL}/projects/` : "/projects/",
  },
] as const;

export const SOCIAL_LINKS = [
  {
    name: "Github",
    icon: GitHubLight,
    url: "https://github.com/",
  },
  {
    name: "Linkedin",
    icon: LinkedIn,
    url: "https://www.linkedin.com/",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://x.com/",
  },
];
