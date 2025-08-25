import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  plugins: [
    async function myTailwindPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "study",
        path: "study",
        routeBasePath: "study",
        sidebarPath: "./study-sidebars.ts",
        editUrl: "https://github.com/shlee9999/tech-blossom",
        showLastUpdateTime: true,
        showLastUpdateAuthor: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "terminology",
        path: "terminology",
        routeBasePath: "terminology",
        sidebarPath: "./terminology-sidebars.ts",
        editUrl: "https://github.com/shlee9999/tech-blossom",
        showLastUpdateTime: true,
        showLastUpdateAuthor: true,
      },
    ],
  ],

  title: "Seonghoon's Tech Blossom",
  tagline: "",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://www.techblossom.site",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "shlee9999", // Usually your GitHub org/user name.
  projectName: "tech-blossom", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/shlee9999/tech-blossom",
          path: "project",
          routeBasePath: "project",
          exclude: ["index.md"],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/shlee9999/tech-blossom",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        gtag: {
          trackingID: "G-3PHZK5G85D",
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    //todo Replace with your project's social card
    image: "img/logo.svg",
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
    },
    navbar: {
      title: "Seonghoon's Tech Blossom",
      logo: {
        alt: "Seonghoon's Tech Blossom",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "projectSidebar",
          position: "left",
          label: "Project",
        },
        // { to: '/blog', label: 'Blog', position: 'left' },
        {
          type: "docSidebar",
          sidebarId: "studySidebar",
          position: "left",
          label: "Study",
          docsPluginId: "study",
        },
        {
          type: "docSidebar",
          sidebarId: "terminologySidebar",
          position: "left",
          label: "Terminology",
          docsPluginId: "terminology",
        },
        {
          href: "https://github.com/shlee9999",
          className: "header-github-link",
          "aria-label": "GitHub repository",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      // links: [
      //   {
      //     title: 'Project',
      //     items: [
      //       {
      //         label: 'Project',
      //         to: `/project/ddang`,
      //       },
      //     ],
      //   },
      //   {
      //     title: 'GitHub',
      //     items: [
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/shlee9999',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: '/blog',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} Seonghoon's Tech Blossom. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      defaultLanguage: "tsx",
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
