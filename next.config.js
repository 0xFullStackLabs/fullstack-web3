const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  staticImage: true,
  latex: true,
  flexsearch: {
    codeblocks: true
  },
  defaultShowCopyCode: true,
  latex: true
})

module.exports = withNextra(
  {
    i18n: {
      locales: [ 'zh'],
      defaultLocale: 'zh'
    }
  }
)
