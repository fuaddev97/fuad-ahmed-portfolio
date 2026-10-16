export interface Project {
  slug: string
  name: string
  url: string
  image: string
  type: string
  stack: string[]
  short: string
  purpose: string
  problem: string
  features: string[]
  role: string
}

export interface Capability {
  title: string
  description: string
}

export interface Step {
  title: string
  description: string
}

export interface JourneyItem {
  when: string
  title: string
  org: string
  kind: string
  text?: string
  details?: { label?: string; text: string }[]
  showProjects?: boolean
}
