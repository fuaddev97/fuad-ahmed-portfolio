import type { Capability, JourneyItem, Step } from '../types'

export const MARQUEE_ITEMS = [
  'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS',
  'Sass', 'Framer Motion', 'Git', 'GitHub', 'Responsive design', 'Deployment',
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
  { title: 'Languages', items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript'] },
  { title: 'Frameworks and libraries', items: ['React', 'Next.js', 'Framer Motion'] },
  { title: 'Styling', items: ['Tailwind CSS', 'Sass', 'Responsive design'] },
  { title: 'Tools and workflow', items: ['Git', 'GitHub', 'Vite', 'Vercel deployment'] },
  { title: 'Currently learning', items: ['Backend web development'] },
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

export const JOURNEY: JourneyItem[] = [
  {
    when: 'Present',
    title: 'Freelance Web Developer',
    org: 'Self-employed · Remote',
    kind: 'Freelance',
    text: 'I build responsive websites for cafés, restaurants and real estate firms, delivering clean, modern interfaces with React, TypeScript and Tailwind CSS.',
    showProjects: true,
  },
  {
    when: 'Present',
    title: 'Logistics Officer',
    org: 'Testi Trading PLC · Addis Ababa, Ethiopia',
    kind: 'Employment',
    details: [
      { text: 'Coordinate shipments and deliveries with suppliers and transporters.' },
      { text: 'Prepare and track logistics documents and delivery schedules.' },
    ],
  },
  {
    when: 'Previously',
    title: 'Sales Representative',
    org: 'Özinan Asansör (elevator manufacturer) · Samsun, Turkey',
    kind: 'Employment',
    text: 'Sold elevator solutions and explained technical details clearly to clients.',
  },
  {
    when: 'Previously',
    title: 'English Teacher',
    org: 'Samsun, Turkey',
    kind: 'Employment',
    details: [
      { label: 'Çözüm Koleji', text: 'led interactive lessons with role-plays, games and group projects.' },
      { label: 'Engin Bilgi', text: 'made grammar fun with songs, quizzes and speaking challenges.' },
      { label: 'American Life English Language Institute', text: 'ran conversation classes built on real-life scenarios to boost fluency.' },
    ],
  },
  {
    when: 'Education',
    title: 'Frontend Software Engineering',
    org: 'Self-directed training · Online',
    kind: 'Self-taught',
    text: 'HTML, CSS, JavaScript, React, TypeScript, Tailwind CSS, Sass and Git.',
  },
  {
    when: 'Education',
    title: 'B.Sc. Mechanical Engineering',
    org: 'Ondokuz Mayıs University · Samsun, Turkey',
    kind: 'Degree',
    text: 'Studied on a scholarship.',
  },
  {
    when: 'Education',
    title: 'High School Diploma',
    org: 'Spring of Knowledge Academy · Addis Ababa, Ethiopia',
    kind: 'School',
  },
]
