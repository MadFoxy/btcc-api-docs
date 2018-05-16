module.exports = {
  title: 'BTCC API DOCS',
  description: 'BTCC websocket proxy api',
  head: [
    ['link', { rel: 'icon', href: `/icons/favicon.ico` }],
    ['link', { rel: 'manifest', href: '/icons/site.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon.png` }],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#3eaf7c'
      }
    ],
    [
      'meta',
      { name: 'msapplication-TileImage', content: '/icons/mstile-150x150.png' }
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  themeConfig: {
    repo: 'zcong1993/btcc-api-docs',
    editLinks: true,
    docsDir: 'docs',
    lastUpdated: 'Last Updated',
    sidebar: ['/', '/sign', '/engine'],
    nav: [
      {
        text: 'Examples',
        items: [
          {
            text: 'Javascript',
            link:
              'https://github.com/zcong1993/btcc-api-docs/tree/master/examples/js'
          },
          {
            text: 'NodeJS',
            link:
              'https://github.com/zcong1993/btcc-api-docs/tree/master/examples/nodejs'
          },
          {
            text: 'Python3',
            link:
              'https://github.com/zcong1993/btcc-api-docs/tree/master/examples/python3'
          }
        ]
      }
    ]
  }
}
