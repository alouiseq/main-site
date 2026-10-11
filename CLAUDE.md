# Claude AI Development Guide

## Project Overview
Personal portfolio site for Alouise Quiatchon, live at https://alouisequiatchon.com. A static React single-page app (Create React App) with an MCU-inspired dark theme, showcasing experience, projects, and contact links. There is no backend.

## Tech Stack
- **Framework**: React 18 (Create React App, not ejected)
- **Styling**: Sass/SCSS, one stylesheet per component plus shared partials
- **Animation**: framer-motion
- **Icons**: Font Awesome 4.7, plus custom SVGs in `src/assets/illustrations/`
- **Fonts**: Orbitron (headings), Roboto (body), Rajdhani (tech accents), loaded from Google Fonts in `App.scss`
- **Testing**: Jest, React Testing Library

## Project Structure
```
src/
├── App.js                  # Composes sections, tracks the active section on scroll
├── App.scss                # Global styles, font imports, footer
├── components/             # One .js + .scss pair per component
│   ├── Navigation
│   ├── HeroSection
│   ├── JourneySection      # Renders experiences.json
│   ├── ProjectsSection     # Renders projects.json
│   └── ContactSection
├── styles/                 # Shared partials: _variables, _mixins, _typography, _animations
├── utils/
│   └── animationVariants.js  # Shared framer-motion variants
├── assets/
│   ├── dataFiles/          # experiences.json, projects.json
│   ├── illustrations/      # SVG icons and hero art
│   └── images/             # Photos; project screenshots in images/projects/
└── index.js                # React entry point
```

## Design Patterns

### Component Structure
- Four sections, in order: `home`, `journey`, `projects`, `contact`
- The `sections` array in `App.js` is the source of truth; `Navigation` renders its links from it
- Each section component owns its `<section id="...">`, and the id must match the entry in `sections`
- Content is data-driven from the JSON files in `src/assets/dataFiles/`

### Scroll Behavior
- `App.js` attaches a scroll listener, throttled with `requestAnimationFrame`
- The active section is whichever has the most visible height in the viewport
- `activeSection` is passed to `Navigation`, which highlights the link and animates the underline via a shared `layoutId`
- Navigation uses plain `#id` anchor links; there is no programmatic scrolling

### Styling Conventions
- MCU-inspired theme: dark blues, arc-reactor cyan and purple accents, glass morphism, glows
- Use the tokens in `src/styles/_variables.scss` (colors, fonts, spacing, breakpoints, z-index) instead of hardcoded values
- Use the mixins in `src/styles/_mixins.scss` (`glass-morphism`, `glow-effect`, `tech-gradient`, `gradient-text`, `flex-center`, `responsive`)
- Component stylesheets start with `@import '../styles/variables';` and `@import '../styles/mixins';`
- Breakpoints: `$mobile` 768px, `$tablet` 1024px, `$desktop` 1440px
- `@include responsive($mobile)` is a `max-width` query, so styles are written desktop-first

### Animation
- Reuse the variants in `src/utils/animationVariants.js` (`fadeInUp`, `fadeInLeft`, `fadeInRight`, `scaleIn`, `staggerContainer`, `cardVariant`, `hoverScale`, `hoverLift`) before adding new ones

## Code Style

### React Best Practices
- Always add `key` props to mapped elements
- Add ARIA labels for accessibility
- Use semantic HTML (`<nav>`, `<main>`, `<section>`)

### Accessibility
- Keep the skip navigation link in `App.js`
- Add `aria-label` to icon-only links
- Use `aria-hidden="true"` and empty `alt` on decorative icons and images
- Ensure proper heading hierarchy

### CSS/SCSS
- Use `min-height` instead of `height: 100vh` for sections
- Avoid duplicate property declarations

## Common Tasks

### Adding New Experience
Edit `src/assets/dataFiles/experiences.json`:
```json
{
  "title": "Job Title at Company",
  "duration": "Month Year - Present",
  "responsibilities": [
    "Responsibility 1",
    "Responsibility 2"
  ]
}
```

### Adding a Project
Put the screenshot in `src/assets/images/projects/`, then add an entry to `src/assets/dataFiles/projects.json`:
```json
{
  "id": "project-id",
  "name": "Project Name",
  "tagline": "Short tagline",
  "description": "One or two sentences.",
  "image": "screenshot.png",
  "liveUrl": "https://example.com",
  "githubUrl": "https://github.com/alouiseq/project",
  "techStack": {
    "frontend": ["React"],
    "backend": ["FastAPI"]
  },
  "featured": true
}
```
`ProjectsSection` only reads the `techStack` keys `frontend`, `backend`, `deployment`, and `storage`; any other key is silently ignored.

### Changing Sections
1. Update the `sections` array in `App.js`
2. Add a component in `src/components/` whose `<section id>` matches the new entry
3. Render it inside `<main>` in `App.js`

The navigation link appears automatically.

## Development Workflow

### Start Development Server
```bash
npm install      # First time only
npm start        # Runs on localhost:3000
./start-dev.sh   # Alternative: tmux session running npm start
```

### Build for Production
```bash
npm run build  # Creates optimized build/ folder
```

### Running Tests
```bash
npm test  # Interactive watch mode
```
`src/App.test.js` is a smoke test: it renders `<App />` and checks the nav, the sections, and that every entry in the JSON data files renders. `src/setupTests.js` stubs `IntersectionObserver`, which jsdom lacks and framer-motion's `whileInView` needs. For a single non-interactive run use `CI=true npm test -- --watchAll=false`. The deploy workflow does not run tests.

### Package Manager
Use npm only. CI installs with `npm ci`, so `package-lock.json` determines what ships. Do not add a `yarn.lock`.

## Hosting and Deployment
- **Domain**: `alouisequiatchon.com` and `www`, registered with Amazon Registrar, DNS in Route 53
- **Hosting**: S3 bucket behind a CloudFront distribution
- **Deploy**: `.github/workflows/deploy.yml` runs on every push to `main`. It builds, syncs `build/` to S3, and invalidates CloudFront. There is no staging environment, so a push to `main` is a production deploy
- **Caching**: content-hashed assets get a one-year immutable cache; `index.html` and `manifest.json` are always revalidated
- **Secrets**: AWS credentials, bucket name, and distribution ID are GitHub Actions secrets
- **Setup details**: `.github/DEPLOYMENT_SETUP.md`

## Performance Tips
- Optimize images before adding (compress JPGs/PNGs)
- Keep dependencies minimal (remove unused packages)

## SEO Checklist
- Update `public/index.html` meta tags when changing content
- Keep description under 160 characters
- Use descriptive alt text for meaningful images
- Ensure Open Graph tags are current

## Common Issues

### Nav highlight is wrong or stuck
- Check each section `id` matches the `sections` array in `App.js`

### Changes not live after pushing
- Check the Actions tab for the workflow run
- Confirm the push went to `main`

### Responsive issues
- Test at the 768px and 1024px breakpoints
- Check for hardcoded pixel widths

## Future Enhancements
- Add blog/articles section
- Upgrade to Font Awesome 6 or React icons
- Add lazy loading for images
- Implement analytics (GA4)

## Notes for AI Assistants
- This project uses Create React App (no custom webpack config)
- Data lives in JSON files for easy editing
- The MCU-inspired aesthetic is intentional
- Keep mobile experience smooth and readable
- Prioritize accessibility and semantic HTML
- Pushing to `main` deploys to production
