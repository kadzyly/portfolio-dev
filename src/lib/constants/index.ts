import { GitHubLight, LinkedIn, Twitter } from "developer-icons";

export const NAV_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Articles",
    href: "/articles/",
  },
  {
    label: "Projects",
    href: "/projects/",
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
