import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "CutWire Docs",
  tagline: "Documentation for CutWire Studios software.",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  url: "https://docs.cutwire.org",
  baseUrl: "/",

  organizationName: "cutwire",
  projectName: "cutwire-docs",

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  // Preconnect + load the three console faces (Space Grotesk / Inter / JetBrains Mono).
  stylesheets: [
    {
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500;600&family=Space+Grotesk:wght@500;600;700&display=swap",
      type: "text/css",
    },
  ],
  headTags: [
    {
      tagName: "link",
      attributes: { rel: "preconnect", href: "https://fonts.googleapis.com" },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "anonymous",
      },
    },
  ],

  presets: [
    [
      "classic",
      {
        // SwitchX docs live at /switchx. Each product is its own docs space.
        // To add a product, register another docs plugin instance below
        // (see `plugins`) with its own id / path / routeBasePath.
        docs: {
          id: "switchx",
          path: "docs/switchx",
          routeBasePath: "switchx",
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/cutwire/cutwire-docs/tree/main/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  // Future products drop in here as additional docs instances, one per
  // /{software} route — no other changes needed:
  //
  // plugins: [
  //   [
  //     '@docusaurus/plugin-content-docs',
  //     {
  //       id: 'patchwork',
  //       path: 'docs/patchwork',
  //       routeBasePath: 'patchwork',
  //       sidebarPath: './sidebars.ts',
  //     },
  //   ],
  // ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    // Dark theme only — the control-room surface. No light mode, no switch.
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "CutWire",
      logo: {
        alt: "CutWire Docs",
        src: "img/logo.svg",
        href: "/",
      },
      items: [
        { to: "/switchx", label: "SwitchX Docs", position: "left" },
        // Context-aware CTA: links to cutwire.org on the docs home,
        // and to cutwire.org/switchx inside the SwitchX docs.
        { type: "custom-contextualCta", position: "right" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Products",
          items: [{ label: "SwitchX", to: "/switchx" }],
        },
        {
          title: "CutWire Studios",
          items: [
            { label: "cutwire.org", href: "https://cutwire.org" },
            { label: "SwitchX", href: "https://cutwire.org/switchx" },
          ],
        },
        {
          title: "More",
          items: [{ label: "GitHub", href: "https://github.com/cutwire" }],
        },
      ],
      copyright: `CUTWIRE STUDIOS · docs.cutwire.org · BUILD ${new Date().getFullYear()}.0 — wired for live.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
