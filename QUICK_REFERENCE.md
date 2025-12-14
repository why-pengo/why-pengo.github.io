# Quick Reference Guide

## 🚀 Essential Commands

### Development
```bash
# Start development server with hot reload
npm run dev

# Preview production build locally
npm run preview
```

### Building
```bash
# Build for production (output to docs/)
npm run build
```

### Testing
```bash
# Run tests in watch mode
npm test

# Run tests once
npm test run

# Interactive test UI
npm run test:ui

# Generate coverage report
npm run test:coverage
```

### Code Quality
```bash
# Check TypeScript types
npm run type-check

# Check code formatting and linting
npm run lint

# Fix linting issues
npm run lint:fix

# Format all code
npm run format
```

### Complete Verification
```bash
# Run all checks (recommended before committing)
npm run type-check && npm run lint && npm test run && npm run build
```

---

## 📁 Important Files

### Configuration
- `vite.config.ts` - Build configuration
- `vitest.config.ts` - Test configuration
- `tsconfig.json` - TypeScript settings
- `eslint.config.js` - Linting rules
- `.prettierrc` - Formatting rules

### Documentation
- `README.md` - Main documentation
- `CHANGELOG.md` - Version history
- `MIGRATION.md` - Migration guide
- `CONTRIBUTING.md` - How to contribute
- `SUMMARY.md` - Project overview

### Source Code
- `src/index.ts` - Main application entry
- `src/utils.ts` - Utility functions
- `src/test/` - All test files

---

## 🎯 Common Tasks

### Adding a New Feature
1. Create/modify TypeScript files in `src/`
2. Add tests in `src/test/`
3. Run tests: `npm test`
4. Check types: `npm run type-check`
5. Format code: `npm run format`
6. Lint code: `npm run lint`
7. Build: `npm run build`

### Fixing Linting Issues
```bash
# Auto-fix what can be fixed
npm run lint:fix

# Format all files
npm run format
```

### Viewing Test Coverage
```bash
# Generate coverage report
npm run test:coverage

# Open coverage/index.html in browser to see detailed report
open coverage/index.html
```

### Before Committing
```bash
# Run all quality checks
npm run type-check && \
npm run lint && \
npm test run && \
npm run build
```

---

## 🐛 Debugging

### TypeScript Errors
```bash
# Check what TypeScript thinks is wrong
npm run type-check

# Look at tsconfig.json settings
cat tsconfig.json
```

### Build Issues
```bash
# Clean build and try again
rm -rf docs/ node_modules/
npm install
npm run build
```

### Test Failures
```bash
# Run tests in watch mode to see failures
npm test

# Run with UI for better debugging
npm run test:ui
```

---

## 📊 Metrics

### Check Current Status
```bash
# Show test coverage
npm run test:coverage

# Count lines of code
find src -name "*.ts" | xargs wc -l

# Show build size
ls -lh docs/
```

---

## 🔧 Maintenance

### Update Dependencies
```bash
# Check for updates
npm outdated

# Update all to latest
npm update

# Update specific package
npm install package-name@latest
```

### Security Audit
```bash
# Check for vulnerabilities
npm audit

# Fix what can be automatically fixed
npm audit fix
```

### Clean Project
```bash
# Remove build artifacts
rm -rf docs/ coverage/

# Clean install
rm -rf node_modules/
npm install
```

---

## 🎨 VSCode Setup

### Recommended Extensions
1. **ESLint** - Code linting
2. **Prettier** - Code formatting
3. **Vitest** - Test explorer

### Settings
- Format on save: Enabled ✅
- Auto-fix on save: Enabled ✅
- TypeScript validation: Enabled ✅

---

## 🚢 Deployment

### GitHub Pages
The project auto-deploys via GitHub Actions when you push to `main`.

**Manual steps:**
1. Ensure `docs/` is built: `npm run build`
2. Commit the `docs/` folder
3. Push to GitHub
4. GitHub Pages will serve from `docs/`

### Verify Deployment
```bash
# Check build output
ls -la docs/

# Preview locally
npm run preview
```

---

## 📈 Performance

### Build Times
- Development server start: ~1s
- Hot Module Replacement: <100ms
- Production build: ~31ms
- Type checking: ~1s

### Bundle Sizes
- HTML: 3.70 kB (gzipped: 1.15 kB)
- JS: 0.88 kB (gzipped: 0.51 kB)
- Total: ~4.58 kB (gzipped: ~1.66 kB)

---

## 💡 Tips

### Speed Up Development
- Keep dev server running: `npm run dev`
- Use test watch mode: `npm test`
- Format on save (VSCode)

### Best Practices
- Run tests before committing
- Keep coverage >90%
- Follow TypeScript strict mode
- Format code consistently
- Write descriptive commit messages

### Useful Aliases (optional)
Add to your shell profile:
```bash
alias dev='npm run dev'
alias test='npm test'
alias build='npm run build'
alias check='npm run type-check && npm run lint && npm test run'
```

---

## 🆘 Getting Help

1. Check **README.md** for detailed docs
2. Review **MIGRATION.md** for technical details
3. See **CONTRIBUTING.md** for workflow
4. Open an issue on GitHub
5. Check Vite/Vitest documentation

---

**Quick Start**: `npm install && npm run dev`  
**Full Check**: `npm run type-check && npm run lint && npm test run && npm run build`  
**Deploy**: Push to `main` branch (auto-deploys via GitHub Actions)

