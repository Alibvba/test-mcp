import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the main heading', () => {
    render(<App />);
    const headingElement = screen.getByText(/gregory-theodore/i);
    expect(headingElement).toBeInTheDocument();
  });

  it('renders the about section', () => {
    render(<App />);
    const aboutHeading = screen.getByText(/Qui suis-je/i);
    expect(aboutHeading).toBeInTheDocument();
  });

  it('renders the skills section', () => {
    render(<App />);
    const skillsHeading = screen.getByText(/Compétences/i);
    expect(skillsHeading).toBeInTheDocument();
  });
}); 