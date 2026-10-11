# Personal Website

Source for [alouisequiatchon.com](https://alouisequiatchon.com), my portfolio site. It is a static React single-page app with four sections: home, journey, projects, and contact.

## Tech Stack

- React 18 (Create React App)
- Sass/SCSS
- framer-motion
- Font Awesome 4.7

## Getting Started

```bash
npm install
npm start
```

The dev server runs at http://localhost:3000 and reloads on change.

`./start-dev.sh` is an optional shortcut that opens a tmux session with the dev server running.

## Scripts

| Command | What it does |
|---|---|
| `npm start` | Runs the dev server |
| `npm run build` | Builds the production bundle into `build/` |
| `npm test` | Runs Jest in watch mode |

## Project Structure

```
src/
├── App.js          # Composes sections, tracks the active section on scroll
├── components/     # Navigation, Hero, Journey, Projects, Contact
├── styles/         # Shared SCSS variables, mixins, typography, animations
├── utils/          # Shared framer-motion variants
└── assets/
    ├── dataFiles/  # experiences.json, projects.json
    ├── illustrations/
    └── images/
```

## Updating Content

Content is data-driven, so most updates need no component changes:

- **Work history**: edit `src/assets/dataFiles/experiences.json`
- **Projects**: edit `src/assets/dataFiles/projects.json` and put screenshots in `src/assets/images/projects/`
- **Page title and social previews**: edit the meta tags in `public/index.html`

## Deployment

Every push to `main` deploys to production through GitHub Actions (`.github/workflows/deploy.yml`):

1. Install with `npm ci` and run the tests
2. Build with `npm run build`
3. Sync `build/` to an S3 bucket
4. Invalidate the CloudFront distribution

The site is served by CloudFront in front of S3, with DNS in Route 53. Content-hashed assets are cached for a year, while `index.html` is always revalidated so new deploys show up immediately.

See [.github/DEPLOYMENT_SETUP.md](.github/DEPLOYMENT_SETUP.md) for the AWS and GitHub secrets setup.
