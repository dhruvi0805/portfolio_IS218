import { defineConfig } from 'vitepress'

const repository = 'https://github.com/dhruvi0805/portfolio_IS218'
const research = [
  { text: 'Employer research', link: '/employers' },
  { text: 'Career comparison', link: '/comparison' },
  { text: 'Portfolio plan', link: '/portfolio' },
  { text: 'Peer review', link: '/review' }
]

export default defineConfig({
  title: 'IS 218 Plan Research',
  description: 'Career research and creative programming research for IS 218.',
  base: '/portfolio_IS218/',
  themeConfig: {
    nav: [
      { text: 'Research', link: '/employers' },
      { text: 'Portfolio plan', link: '/portfolio' },
      { text: 'Creative Project', link: '/creative-plan' }
    ],
    sidebar: [
      { text: 'Review 1 · Career research', items: research },
      {
        text: 'Review 1 · Creative Project',
        items: [
          { text: 'Project plan', link: '/creative-plan' },
          { text: 'Evidence and review', link: '/creative-evidence' }
        ]
      }
    ],
    search: { provider: 'local' },
    socialLinks: [{ icon: 'github', link: repository }],
    editLink: {
      pattern: repository + '/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  }
})
