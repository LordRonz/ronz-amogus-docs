/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'ronz-AMOGUS',
  tagline: 'when the impostor is sus 😳',
  url: 'https://ronz-amogus.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',
  favicon: 'img/favicon.ico',
  customFields: {
    users: [],
    version: '1.6.9',
  },
  organizationName: 'LordRonz', // Usually your GitHub org/user name.
  projectName: 'ronz-amogus', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
    },
    algolia: {
      apiKey: '4f433af3046372a46dee279ceba42849',
      indexName: 'ronz-amogus-docs',
      appId: 'SD9I4UTUN1',
      placeholder: 'Search',
    },
    navbar: {
      title: 'ronz-AMOGUS',
      logo: {
        alt: 'amogus',
        src: 'img/amogusnhentai120.png',
        width: 32,
        height: 32,
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: '/invite',
          label: 'Invite',
          position: 'left',
        },
        {
          href: 'https://github.com/LordRonz/ronz-amogus/',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub Repo',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Intro',
              to: '/docs/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/LordRonz/ronz-amogus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} LordRonz, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          path: 'docs',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          path: 'blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
