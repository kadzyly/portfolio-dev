# Astro Starter Kit

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |


## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

---
# Template: MultiTerm Astro 🎨⚡️

**MultiTerm** is an Astro blog theme designed for coders who love their color schemes. Easily theme your whole website with your favorite color schemes and have your prose rendered with a nod to the aesthetics of raw markdown.

Check out the [Showing Off Blog Features](https://multiterm.stelclementine.com/projects/showing-off-blog-features) project to see all the exciting MultiTerm capabilites on the [live example site](https://multiterm.stelclementine.com)!


## ✨ Features

- **Amazing Theme Selection**: Personalize your blog's appearance with your favorite editor color scheme. Pick your favorite [Shiki themes](https://expressive-code.com/guides/themes/#available-themes) bundled with Expressive Code.
- **Dark/Light/Auto Theme Mode**: Choose any two Shiki themes and use the standard light/dark/auto model for automatically adapting to your reader's theme preferences with button in the site header.
- **Multiple Theme Mode**: Choose three (or all 59!) Shiki themes and allow your reader to choose their favorite from a dialog menu opened from a button in the header. Every element seamlessly changes color interactively using the magic of CSS variables.
- **GitHub Activity Widget**: Optionally include a statically generated GitHub activity calendar on the homepage that (of course) matches the active color scheme perfectly.
- **Markdown Extensions**: Admonitions, auto-generated TOC that sticks to the side on large screens, emoji shortcodes, KaTeX math, MDX, and reading time estimates. See the example site's [Showing Off Blog Features](https://multiterm.stelclementine.com/projects/showing-off-blog-features) project.
- **RSS Feed and Sitemap**: Built-in support for RSS feeds and sitemap with no extra configuration.
- **Social Links**: Easily include links to common developer platforms including GitHub, Mastodon, Twitter, LinkedIn and E-mail.
- **Responsive Design**: Optimized for all devices from desktops to mobile phones. Built with [Tailwind v4](https://tailwindcss.com/).
- **SEO Optimized**: Boost your site's visibility with built-in SEO best practices and automatically generated social card images for every page via [Satori](https://github.com/vercel/satori).
- **Customizable Build**: Powered by [Astro](https://astro.build/), render as a static site (the default) or generate content dynamically.

Check out the example site [PageSpeed scores](https://pagespeed.web.dev/analysis/https-multiterm-stelclementine-com/qhnp521yci?form_factor=mobile) and [OpenGraph analysis](https://www.opengraph.xyz/url/https%3A%2F%2Fmultiterm.stelclementine.com)

## 🚀 Getting Started

**Clone the Repository**:

```bash
git clone --depth 1 https://github.com/stelcodes/multiterm-astro my-new-blog && cd my-new-blog
```

**Install Dependencies**:

```bash
npm install
```

**Start the Development Server**:

```bash
npm run dev
```

**Build Your Site and View the Results**:

```bash
npm run build && npm run preview
```

## 🛠️ Configuration

Simple configuration is a core feature of MultiTerm. All configuration is done from a single file: `src/site.config.ts`. This is where you can tailor your website to match your vision.

Please take a look at `src/site.config.ts` for more information about the configuration options.

To add your own content, check out the `src/content` directory. Feel free to remove all the example content and replace it with your own!

## 📄 License

This project is licensed under the [MIT License](LICENSE.txt).

## Inspiration

- https://github.com/panr/hugo-theme-terminal
- https://github.com/chrismwilliams/astro-theme-cactus
