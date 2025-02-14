// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');

const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const defaultUrl = 'https://docs.overturemaps.org';
const defaultBaseUrl = '/';

function getFromEnvironment(variableName, defaultValue) {
  const environmentValue = process.env[variableName];
  return environmentValue ? environmentValue : defaultValue;
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Overture Maps Documentation',
  tagline: '',
  favicon: 'img/favicon.png',

  customFields: {
    overtureRelease: '2024-03-12-alpha.0',
  },


  // Set the production url of your site here
  url: getFromEnvironment('DOCUSAURUS_URL', defaultUrl),
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: getFromEnvironment('DOCUSAURUS_BASE_URL', defaultBaseUrl),

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'OvertureMaps', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  trailingSlash: true,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: ["docusaurus-json-schema-plugin"],

  plugins: [
    () => ({
      name: 'custom-docusaurus-plugin',
      configureWebpack() {
        return {
          module: {
            rules: [
              {
                test: /\.pmtiles$/,
                use: 'raw-loader'
              },
            ],
          },
        };
      },
    }),
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/'
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/omf_logo_transparent.png',
      navbar: {
        title: 'Overture Maps',
        logo: {
          alt: 'Overture Maps Foundation Logo',
          src: 'img/omf_logo_transparent.png',
          href: 'https://overturemaps.org'
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            position: 'left',
            label: 'Docs',
          },
          {
            to: 'https://docs.overturemaps.org/schema/',
            label: 'Schema Reference',
            target: '_self'
          },
          {
            to: 'https://overturemaps.org/news-blogs/',
            label: 'Blog',
            target: '_blank',
          },
          {
            to: '/community/',
            label: 'Community',
          }
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Overture Maps Foundation. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['bash', 'diff', 'json'],
      },
    }),
};

module.exports = config;
