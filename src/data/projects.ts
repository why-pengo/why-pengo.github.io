export interface Project {
  title: string;
  description: string;
  url: string;
}

export const projects: readonly Project[] = [
  {
    title: 'Sudoku',
    description: 'Sudoku web app in Angular v21 using Signals.',
    url: 'https://why-pengo.github.io/angular-sudoku3/',
  },
  {
    title: 'Daglint',
    description: 'AST-based linting for Apache Airflow DAGs.',
    url: 'https://github.com/why-pengo/daglint',
  },
  {
    title: 'Sprinkler ][',
    description: 'Raspberry Pi home irrigation controller.',
    url: 'https://github.com/why-pengo/sprinkler',
  },
  {
    title: 'RAG Playground',
    description: 'Local LLM retrieval experiments with LlamaIndex.',
    url: 'https://github.com/why-pengo/llamaIndexPlayground',
  },
] as const;

export const skills: readonly string[] = [
  'Python',
  'TypeScript',
  'Django',
  'Vite',
  'PostgreSQL',
  'Docker',
  'CSS',
] as const;

export const contacts: readonly { label: string; url: string }[] = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/jon-p-morgan' },
  { label: 'GitHub', url: 'https://github.com/why-pengo' },
] as const;

export const profile = {
  name: 'Jon Morgan',
  role: 'Remote Developer',
  bio: 'Remote developer working primarily in Python and TypeScript. I build web apps by day and tinker with games, sensors, and AI tooling by night.',
  avatar: '/profile.png',
} as const;
