import { describe, expect, it } from 'vitest';
import { contacts, profile, projects, skills } from '@/data/projects';

describe('profile', () => {
  it('has a non-empty name and bio', () => {
    expect(profile.name.length).toBeGreaterThan(0);
    expect(profile.bio.length).toBeGreaterThan(0);
  });

  it('does not contain placeholder text', () => {
    expect(profile.bio.toLowerCase()).not.toContain('placeholder');
  });

  it('does not mention django in bio', () => {
    expect(profile.bio.toLowerCase()).not.toContain('django');
  });
});

describe('projects', () => {
  it('contains the five expected projects in order', () => {
    expect(projects.map((p) => p.title)).toEqual([
      'Claude + Ollama',
      'RAG Playground',
      'MTG OCR',
      'Daglint',
      'Sudoku',
    ]);
  });

  it('every project has a title, description, and absolute URL', () => {
    for (const project of projects) {
      expect(project.title.length).toBeGreaterThan(0);
      expect(project.description.length).toBeGreaterThan(0);
      expect(project.url).toMatch(/^https?:\/\//);
    }
  });
});

describe('skills', () => {
  it('contains at least one skill', () => {
    expect(skills.length).toBeGreaterThan(0);
  });

  it('does not include django or vite', () => {
    const lowerSkills = skills.map((s) => s.toLowerCase());
    expect(lowerSkills).not.toContain('django');
    expect(lowerSkills).not.toContain('vite');
  });
});

describe('contacts', () => {
  it('includes LinkedIn and GitHub', () => {
    const labels = contacts.map((c) => c.label);
    expect(labels).toContain('LinkedIn');
    expect(labels).toContain('GitHub');
  });

  it('every contact has an https url', () => {
    for (const contact of contacts) {
      expect(contact.url).toMatch(/^https:\/\//);
    }
  });
});
