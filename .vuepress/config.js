module.exports = {
    title: 'akr0n1m',
    description: 'some blog',
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
      sidebar: 'auto',
      nav: [{ text: 'Home', link: '/' }]
    }
  };
  