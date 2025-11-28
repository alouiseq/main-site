# Claude AI Development Guide

## Project Overview
Personal portfolio website built with React (CRA), featuring a comic book-inspired design showcasing professional experience and contact information.

## Tech Stack
- **Framework**: React 18 (Create React App)
- **Styling**: Sass/SCSS
- **Icons**: Font Awesome 4.7
- **Testing**: Jest, React Testing Library

## Project Structure
```
src/
├── App.js              # Main component with sections & scroll logic
├── App.scss            # Global styles & comic theme
├── assets/
│   ├── dataFiles/      # JSON data (experiences.json)
│   └── images/         # Background images & icons
└── index.js            # React entry point
```

## Design Patterns

### Component Structure
- Single-page app with three sections: Home, Journey, Contact
- Section-based navigation with smooth scrolling
- Data-driven content from JSON files

### Scroll Behavior
- Use `getCurrentSectionIndex()` helper for consistent section detection
- `SCROLL_THRESHOLD` constant (-100px) determines active section
- `scrollToSection()` centralizes scroll logic

### Styling Conventions
- Comic book theme: Bangers font for headings, bold borders, box shadows
- Responsive breakpoint: 768px for mobile
- Use SCSS variables (e.g., `$path` for images)
- BEM-like naming for clarity

## Code Style

### React Best Practices
- Always add `key` props to mapped elements
- Use `className` (not `class`) for JSX
- Add ARIA labels for accessibility
- Use semantic HTML (`<nav>`, `<main>`, `<section>`)

### Accessibility
- Include skip navigation link for keyboard users
- Add `aria-label` to icon-only links
- Use `aria-hidden="true"` on decorative icons
- Ensure proper heading hierarchy

### CSS/SCSS
- Mobile-first responsive design
- Use `min-height` instead of `height: 100vh` for sections
- `background-size: cover` for responsive images
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

### Updating Images
Place images in `src/assets/images/` and reference in SCSS:
```scss
background-image: url('#{$path}/filename.jpg');
```

### Changing Sections
1. Update `sections` array in `App.js`
2. Add corresponding `<section id="name">` in JSX
3. Add navigation link in `<nav>`

### Adding Dependencies
```bash
npm install package-name
npm start  # Verify it works
```

## Development Workflow

### Start Development Server
```bash
npm install  # First time only
npm start    # Runs on localhost:3000
```

### Build for Production
```bash
npm run build  # Creates optimized build/ folder
```

### Running Tests
```bash
npm test  # Interactive watch mode
```

## Performance Tips
- Optimize images before adding (compress JPGs/PNGs)
- Keep dependencies minimal (remove unused packages)
- Use semantic HTML for better SEO
- Implement lazy loading for images if adding more

## SEO Checklist
- Update `public/index.html` meta tags when changing content
- Keep description under 160 characters
- Use descriptive alt text for images
- Ensure Open Graph tags are current

## Common Issues

### Scroll not working
- Check section IDs match `sections` array
- Verify `SCROLL_THRESHOLD` value

### Images not loading
- Check file paths match exactly (case-sensitive)
- Verify images are in `src/assets/images/`
- Ensure SCSS `$path` variable is correct

### Responsive issues
- Test at 768px breakpoint
- Use browser DevTools mobile emulation
- Check for hardcoded pixel widths

## Future Enhancements
- Add projects section with portfolio items
- Implement dark mode toggle
- Add blog/articles section
- Upgrade to Font Awesome 6 or React icons
- Add lazy loading for images
- Implement analytics (GA4)

## Notes for AI Assistants
- This project uses Create React App (no custom webpack config)
- Data lives in JSON files for easy editing
- Comic book aesthetic is intentional (bold, playful)
- Keep mobile experience smooth and readable
- Prioritize accessibility and semantic HTML
