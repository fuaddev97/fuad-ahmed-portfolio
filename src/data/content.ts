import type { Capability, Step } from '../types'

export const MARQUEE_ITEMS = [
  'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS',
  'Framer Motion', 'Git', 'GitHub', 'Responsive design', 'Accessibility',
]

export const CAPABILITIES: Capability[] = [
  {
    title: 'Reusable interfaces',
    description:
      'Components with clear props and one job each, so a button, card or section can be reused without copy-pasting.',
  },
  {
    title: 'Responsive layouts',
    description:
      'Layouts that start from the phone and scale up, using fluid type and flexible grids rather than a pile of breakpoints.',
  },
  {
    title: 'Interactive functionality',
    description:
      'Scroll-driven reveals, hover states and page transitions that respond to what the visitor does.',
  },
  {
    title: 'API-driven interfaces',
    description: 'Fetching data, then handling loading, empty and error states in React and TypeScript.',
  },
  {
    title: 'Maintainable applications',
    description: 'Readable code, sensible folder structure and Git history that another developer can follow.',
  },
]

export const STACK_GROUPS: { title: string; items: string[] }[] = [
  { title: 'Languages', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript'] },
  { title: 'Frameworks and libraries', items: ['React', 'Next.js', 'Framer Motion'] },
  { title: 'Styling', items: ['CSS', 'Tailwind CSS', 'Responsive design'] },
  { title: 'Development tools', items: ['Git', 'GitHub', 'Vite', 'Vercel'] },
  { title: 'Web fundamentals', items: ['Semantic HTML', 'Accessibility', 'Performance'] },
]

export const STEPS: Step[] = [
  { title: 'Understand the requirements', description: 'I start with who the page is for and what they need to do. Goals and content come before layout.' },
  { title: 'Plan structure and components', description: 'I sketch the page hierarchy, break it into components and decide what is reusable.' },
  { title: 'Build', description: 'I write semantic HTML first, then style it mobile-first, then add behaviour and motion.' },
  { title: 'Test and refine', description: 'I check the layout across screen sizes, test with the keyboard and fix what feels off.' },
  { title: 'Version control', description: 'Small, focused commits on GitHub, so every change can be reviewed or undone.' },
  { title: 'Deploy', description: 'I ship to Vercel, open the live URL on a real phone and fix whatever the preview missed.' },
]

export const EXTRA_PRACTICES: Step[] = [
  { title: 'Documentation', description: 'I write down decisions and setup steps in the README so the next person can pick the project up.' },
  { title: 'Debugging', description: 'I reproduce the bug first, then narrow it down with the browser dev tools before I change any code.' },
  { title: 'AI-assisted development', description: 'I use AI tools to explore options and speed up boilerplate, then read and test every line before it ships.' },
]
