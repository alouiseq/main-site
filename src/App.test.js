import { render, screen, within } from '@testing-library/react';
import App from './App';
import experiences from './assets/dataFiles/experiences.json';
import projects from './assets/dataFiles/projects.json';

const sections = ['home', 'journey', 'projects', 'contact'];

test('renders a nav link and a matching section for every section', () => {
  const { container } = render(<App />);
  const nav = screen.getByRole('navigation', { name: /main navigation/i });

  sections.forEach((id) => {
    expect(within(nav).getByRole('link', { name: id })).toHaveAttribute('href', `#${id}`);
    expect(container.querySelector(`section#${id}`)).toBeInTheDocument();
  });
});

test('marks home as the active section on load', () => {
  render(<App />);
  const nav = screen.getByRole('navigation', { name: /main navigation/i });

  expect(within(nav).getByRole('link', { name: 'home' })).toHaveAttribute('aria-current', 'page');
});

test('renders every experience from experiences.json', () => {
  render(<App />);

  experiences.forEach((exp) => {
    expect(screen.getByRole('heading', { name: exp.title })).toBeInTheDocument();
  });
});

test('renders every project from projects.json with its live link', () => {
  render(<App />);

  projects.forEach((project) => {
    expect(screen.getByRole('heading', { name: project.name })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: `Visit ${project.name}` })).toHaveAttribute(
      'href',
      project.liveUrl
    );
  });
});
