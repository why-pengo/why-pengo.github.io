# Jon Morgan - Portfolio Website

🚀 Modern portfolio website built with TypeScript, Vite, and deployed on GitHub Pages.

Visit: [https://why-pengo.github.io/](https://why-pengo.github.io/)

## 🛠️ Tech Stack

- **Build Tool**: Vite 6.0
- **Language**: TypeScript 5.7
- **Testing**: Vitest 2.1 with jsdom
- **Styling**: Bootstrap 5.3 + Custom CSS
- **Code Quality**: ESLint + Prettier
- **CI/CD**: GitHub Actions

## 📋 Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server with hot module replacement:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Building

Build the production-ready static site:

```bash
npm run build
```

The built files will be output to the `docs/` directory for GitHub Pages deployment.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 🧪 Testing

### Run Tests

```bash
npm test
```

### Run Tests with UI

```bash
npm run test:ui
```

### Generate Coverage Report

```bash
npm run test:coverage
```

Coverage reports are generated in the `coverage/` directory.

## 📝 Code Quality

### Format Code

```bash
npm run format
```

### Lint Code

```bash
npm run lint
```

### Fix Linting Issues

```bash
npm run lint:fix
```

### Type Check

```bash
npm run type-check
```

## 🚢 Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

### Manual Deployment

1. Build the project: `npm run build`
2. The output in `docs/` folder is served by GitHub Pages
3. Commit and push the changes

### GitHub Actions

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:
- Runs tests
- Performs type checking
- Lints code
- Builds the project
- Deploys to GitHub Pages

## 📁 Project Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions deployment workflow
├── src/
│   ├── test/
│   │   ├── setup.ts          # Vitest setup
│   │   └── index.test.ts     # Unit tests
│   └── index.ts              # Main entry point
├── public/                   # Static assets (copied to docs/)
│   ├── favicon.ico
│   ├── index.css
│   ├── profile.png
│   ├── robots.txt
│   └── separator.svg
├── docs/                     # Build output (GitHub Pages serves this)
├── index.html               # Main HTML file
├── vite.config.ts           # Vite configuration
├── vitest.config.ts         # Vitest configuration
├── tsconfig.json            # TypeScript configuration
├── eslint.config.js         # ESLint configuration
├── .prettierrc              # Prettier configuration
└── package.json             # Dependencies and scripts
```

## 🎨 Features

- **Responsive Design**: Mobile-first approach with Bootstrap 5
- **Animated Background**: CSS-based animated circles
- **Profile Showcase**: Animated profile image
- **Project Links**: Direct links to various projects:
  - Angular Sudoku (v18)
  - Python Sprinkler Control
  - Three.js WebGL Playground
  - Phaser Game Development
- **Modern Build**: Optimized with Vite for fast builds and HMR
- **Type Safety**: Full TypeScript support
- **Test Coverage**: Comprehensive Vitest test suite
- **CI/CD**: Automated testing and deployment

## 🔧 Configuration

### Vite

Configuration is in `vite.config.ts`. Key settings:
- Output directory: `docs/` (for GitHub Pages)
- Base URL: `/` (root path)
- Source maps enabled in production

### TypeScript

Modern TypeScript configuration with:
- Strict mode enabled
- ES2020 target
- Bundler module resolution

### ESLint

Flat config format with TypeScript support and recommended rules.

### Prettier

Consistent code formatting with sensible defaults.

## 📄 License

MIT

## 👤 Author

**Jon Morgan**
- LinkedIn: [jon-p-morgan](https://www.linkedin.com/in/jon-p-morgan)
- GitHub: [@why-pengo](https://github.com/why-pengo)

## 🤝 Contributing

This is a personal portfolio project, but suggestions and improvements are welcome!

## 📊 Best Practices Implemented

- ✅ Modern build tooling (Vite)
- ✅ TypeScript for type safety
- ✅ Comprehensive test suite with Vitest
- ✅ Code quality tools (ESLint, Prettier)
- ✅ Automated CI/CD with GitHub Actions
- ✅ Semantic HTML and accessibility
- ✅ Responsive design
- ✅ Optimized assets and build output
- ✅ Security headers and best practices
- ✅ Git ignored files properly configured


