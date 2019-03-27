module.exports = {
    title: 'akr0n1m',
    description: 'a place for blogs and articles',
    markdown: {
      // options for markdown-it-anchor
      anchor: { permalink: false },
      // options for markdown-it-toc
      toc: { includeLevel: [1, 2] },
      config: md => {
        // use more markdown-it plugins!
        md.use(require('markdown-it-mermaid').default);
      }
    },
    themeConfig: {
      logo: '/img/logo.png',
      sidebar: 'auto',
      repo: 'akr0n1m/web',
      nav: [{ text: 'Home', link: '/' }],
    }
  };
  