import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { JSDOM } from 'jsdom';
import { beforeAll, describe, expect, it } from 'vitest';
import { contacts, profile, projects, skills } from '@/data/projects';
import Index from '@/pages/index.astro';

let doc: Document;

beforeAll(async () => {
  const container = await AstroContainer.create();
  const html = await container.renderToString(Index);
  doc = new JSDOM(html).window.document;
});

describe('homepage', () => {
  it('renders the profile name as the page heading', () => {
    const h1 = doc.querySelector('h1');
    expect(h1?.textContent).toBe(profile.name);
  });

  it('renders the bio text', () => {
    expect(doc.body.textContent).toContain(profile.bio);
  });

  it('renders Projects, Skills, and Contact section headings in order', () => {
    const labels = Array.from(doc.querySelectorAll('.section-label')).map((n) => n.textContent);
    expect(labels).toEqual(['Projects', 'Skills', 'Contact']);
  });

  it('renders a project card per project in projects.ts', () => {
    const cards = doc.querySelectorAll('.projects .project');
    expect(cards.length).toBe(projects.length);
  });

  it('renders a chip per skill', () => {
    const chips = doc.querySelectorAll('.chips .chip');
    expect(chips.length).toBe(skills.length);
  });

  it('contact links point to the right urls', () => {
    const anchors = Array.from(doc.querySelectorAll<HTMLAnchorElement>('.contact a'));
    const hrefs = anchors.map((a) => a.href);
    for (const c of contacts) {
      expect(hrefs).toContain(c.url);
    }
  });
});
