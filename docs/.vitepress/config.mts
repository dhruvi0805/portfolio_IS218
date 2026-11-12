import { defineConfig } from 'vitepress'

const repository = 'https://github.com/dhruvi0805/portfolio_IS218'
const research = [
  { text: 'Employer research', link: '/employers' },
  { text: 'Career comparison', link: '/comparison' },
  { text: 'Portfolio plan', link: '/portfolio' },
  { text: 'Peer review', link: '/review' }
]

export default defineConfig({
  title: 'IS 218 Career Research',
  description: 'A comparison of career paths across engineering, UX, and AI-enabled operations.',
  base: '/portfolio_IS218/',
  themeConfig: {
    nav: [
      { text: 'Research', link: '/employers' },
      { text: 'Portfolio plan', link: '/portfolio' }
    ],
    sidebar: [{ text: 'Review 1 · Career research', items: research }],
    search: { provider: 'local' },
    socialLinks: [{ icon: 'github', link: repository }],
    editLink: {
      pattern: repository + '/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  }
})
