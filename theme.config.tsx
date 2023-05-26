import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Web3全栈开发</span>,
  project: {
    link: 'https://github.com/ethaninmel/fullstack-web3',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/ethaninmel/fullstack-web3',
  footer: {
    text: 'Web3全栈开发',
  },
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'zh', text: '中文' },
  ]
}

export default config
