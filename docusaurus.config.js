// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Funifier",
  tagline: "Official API Docs",
  url: "https://docs.funifier.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "funifierinc", // Usually your GitHub org/user name.
  projectName: "funifier-docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".

  //defaultLocale: "pt-br",
  // locales: ["pt-br", "en"],
  i18n: {
    defaultLocale: "pt-br",
    locales: ["pt-br"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/funifierinc/funifier-docs/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/funifierinc/funifier-docs/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Funifier",
        logo: {
          alt: "Funifier Logo",
          src: "img/logo.svg",
        },
        items: [
          // {
          //   type: "localeDropdown",
          //   position: "right",
          // },
          { to: "/docs/intro", label: "Intro", position: "left" },
          { to: "/docs/category/api", label: "API", position: "left" },
          { to: "/docs/category/recipes", label: "Recipes", position: "left" },
          { to: "/blog", label: "Dev Blog", position: "left" },
          // {
          //   href: "https://github.com/funifierinc/funifier-docs",
          //   label: "GitHub",
          //   position: "right",
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Learn",
            items: [
              {
                label: "Quickstart",
                to: "/docs/category/quickstart",
              },
              {
                label: "Project Examples & Recipes",
                to: "/docs/category/recipes",
              },
              {
                label: "Gamification Design Course",
                to: "https://join.octalysisprime.com/op-fr/?ref=funifier",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/funifier",
              },
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/invite/docusaurus',
              // },
              {
                label: "Instagram",
                href: "https://www.instagram.com/funifiergamification/",
              },
              // {
              //   label: 'Twitter',
              //   href: 'https://twitter.com/docusaurus',
              // },
              {
                label: "Linkedin",
                href: "https://www.linkedin.com/company/funifier/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Our Cases",
                to: "https://funifier.com/case-studies",
              },
              {
                label: "Gamification Blog",
                to: "https://funifier.com/blog",
              },
              {
                label: "Become a Partner",
                to: "https://funifier.com/contact",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Funifier.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
