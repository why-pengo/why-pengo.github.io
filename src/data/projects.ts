export interface Project {
  title: string;
  description: string;
  url: string;
}

export const projects: readonly Project[] = [
  {
    title: 'Claude + Ollama',
    description: 'Two-agent coding harness: Claude Code plans, a local Ollama model executes.',
    url: 'https://github.com/why-pengo/claude_and_ollama',
  },
  {
    title: 'RAG Playground',
    description: 'Local LLM retrieval experiments with LlamaIndex.',
    url: 'https://github.com/why-pengo/llamaIndexPlayground',
  },
  {
    title: 'MTG OCR',
    description: 'Benchmarking four OCR engines on Magic card scans, with fuzzy Scryfall lookup.',
    url: 'https://github.com/why-pengo/mtg_ocr_poc',
  },
  {
    title: 'Daglint',
    description: 'AST-based linting for Apache Airflow DAGs.',
    url: 'https://github.com/why-pengo/daglint',
  },
  {
    title: 'Sudoku',
    description: 'Sudoku web app in Angular v21 using Signals.',
    url: 'https://why-pengo.github.io/angular-sudoku3/',
  },
] as const;

export const skills: readonly string[] = [
  'Python',
  'LLMs',
  'RAG',
  'AI Agents',
  'TypeScript',
  'Apache Airflow',
  'PostgreSQL',
  'Docker',
] as const;

export const contacts: readonly { label: string; url: string }[] = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/jon-p-morgan' },
  { label: 'GitHub', url: 'https://github.com/why-pengo' },
] as const;

export const profile = {
  name: 'Jon Morgan',
  role: 'Remote Developer',
  bio: 'Remote developer working primarily in Python, focused on AI tooling — local LLMs, retrieval, and agent workflows that actually ship. TypeScript and web apps when the job calls for it; games and sensors when it doesn’t.',
  avatar: '/profile.png',
} as const;
