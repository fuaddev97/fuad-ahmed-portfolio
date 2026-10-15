# Fuad Ahmed | Frontend portfolio

React 19 + Vite + TypeScript, styled with plain CSS (no CSS framework, no CSS-in-JS).

## Run it
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
npm run lint
```

## Fill in your details
- `src/data/site.ts`: name, GitHub, LinkedIn, email.
- `public/Fuad-Ahmed-CV.pdf`: replace with your real CV.
- `src/data/projects.ts`: project copy. Add a project and it gets a card, a `/work` entry and a case-study page.
- `src/sections/Journey.tsx`: add education, certifications and client work.

## Structure
```
src/
  components/  Header, Footer, Button, Reveal, ProjectCard, Shard, icons...
  sections/    Hero, Snapshot, Projects, Capabilities, TechStack, Process, Journey, About, Contact
  pages/       Home, WorkIndex (/work), CaseStudy (/work/:slug)
  hooks/       useDeck (card shuffle), useReveal, useHeroParallax, useMagnetic, ...
  data/        site, projects, content
  styles/      one plain CSS file per area, imported in main.tsx
```

## Deploy
`vercel.json` rewrites every path to `index.html`, so `/work/delmela` works on refresh.
