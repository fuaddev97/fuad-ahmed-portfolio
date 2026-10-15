import type { Project } from '../types'
import nutLounge from '../assets/img/nut-lounge.webp'
import delmela from '../assets/img/delmela.webp'
import granada from '../assets/img/granada.webp'
import toco from '../assets/img/toco.webp'

const role = 'Frontend design and development of the whole site.'

export const PROJECTS: Project[] = [
  {
    slug: 'nut-lounge',
    name: 'NUT Lounge',
    url: 'https://nut-lounge.vercel.app/',
    image: nutLounge,
    type: 'Café website',
    stack: ['React.js', 'Responsive UI'],
    short: 'A refined all-day café, pastry shop and kitchen site in Addis Ababa.',
    purpose:
      'Give a café that serves coffee, pastries, sandwiches, pizza, fresh juice and tea a website that feels as warm and considered as the place itself.',
    problem:
      'A hospitality brand has to communicate atmosphere in seconds, then get out of the way so visitors can find the menu and the details they came for.',
    features: [
      'Full-bleed hero with a clear “Discover” call to action',
      'Component-based React structure',
      'Fluid layout that adapts from phone to desktop',
    ],
    role,
  },
  {
    slug: 'delmela',
    name: 'Delmela',
    url: 'https://delmela-premium-dining-livid.vercel.app/',
    image: delmela,
    type: 'Fine-dining website',
    stack: ['React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    short: 'A premium dining site built around season-led, fire-based cooking and shared tables.',
    purpose:
      'Present a warm, contemporary restaurant with a premium feel and make booking a table the obvious next step.',
    problem:
      'Premium dining sites need atmosphere without sacrificing speed, and they need the reservation action to stay visible throughout.',
    features: [
      'Hero built around a single dish photograph with a “Book a table” action',
      'Motion with Framer Motion to reveal content as it enters',
      'Utility-first styling with Tailwind CSS',
    ],
    role,
  },
  {
    slug: 'granada',
    name: 'Granada Real Estate',
    url: 'https://granada-real-estate.vercel.app/',
    image: granada,
    type: 'Real-estate website',
    stack: ['Responsive UI', 'Frontend'],
    short: 'A private property advisory site for people who want to buy, sell and invest.',
    purpose:
      'Introduce an advisory-style real-estate brand: its properties, its approach and an easy way to start a conversation.',
    problem:
      'Property sites often bury the human side under listings. This one leads with the feeling of a home and a simple route to making contact.',
    features: [
      'Editorial hero with oversized headline over property photography',
      'Clear navigation: Properties, Our Approach, Journal, Contact',
      'Persistent “Start a conversation” call to action',
    ],
    role,
  },
  {
    slug: 'toco',
    name: 'Toco Speciality',
    url: 'https://toco-cafe-vibes.vercel.app/',
    image: toco,
    type: 'Café website',
    stack: ['Responsive UI', 'Frontend'],
    short: 'A modern speciality café in Addis Ababa serving coffee, fresh pastries and all-day plates.',
    purpose:
      'Show a speciality café with a confident, typographic identity and help visitors find the menu and the way to the door.',
    problem:
      'A café site has to feel like the place and still be practical: menu, story, and where to find it, all quickly reachable on a phone.',
    features: [
      'Bold typographic hero over a coffee photograph',
      'Navigation for Menu, About, Journal and Visit, plus a “Find us” action',
      'Layout that stays readable on small screens',
    ],
    role,
  },
]

export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug)
