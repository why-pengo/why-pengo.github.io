# why-pengo.github.io — Makefile
#
# Wraps pnpm + Astro + Biome commands for common dev tasks.
# Run `make help` to see all available commands.

.PHONY: help \
        install install-dev setup \
        dev build preview \
        test test-file test-cov \
        format lint type-check check \
        ci \
        clean clean-all

# Colors for terminal output
BLUE   := \033[0;34m
GREEN  := \033[0;32m
YELLOW := \033[0;33m
RED    := \033[0;31m
NC     := \033[0m

help: ## Show this help message
	@echo "$(BLUE)why-pengo.github.io$(NC)"
	@echo "==================="
	@echo ""
	@echo "$(GREEN)Available commands:$(NC)"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  $(YELLOW)%-15s$(NC) %s\n", $$1, $$2}'
	@echo ""

# =============================================================================
# Environment
# =============================================================================

install: ## Install dependencies (uses pnpm via corepack)
	@echo "$(BLUE)Installing dependencies...$(NC)"
	@command -v pnpm >/dev/null 2>&1 || (echo "$(YELLOW)pnpm not found — enabling via corepack$(NC)" && corepack enable pnpm)
	pnpm install --frozen-lockfile
	@echo "$(GREEN)Dependencies installed$(NC)"

install-dev: ## First-time setup: enable pnpm, install deps, install git hooks
	@echo "$(BLUE)Enabling pnpm via corepack...$(NC)"
	corepack enable pnpm
	corepack prepare pnpm@latest --activate
	@echo "$(BLUE)Installing dependencies...$(NC)"
	pnpm install
	@echo "$(BLUE)Installing lefthook git hooks...$(NC)"
	pnpm exec lefthook install
	@echo "$(GREEN)Dev environment ready — run make dev to start the dev server$(NC)"

setup: install-dev ## Alias for install-dev

# =============================================================================
# Application
# =============================================================================

dev: ## Start the Astro dev server on http://localhost:4321
	@echo "$(BLUE)Starting dev server...$(NC)"
	pnpm dev

build: ## Build the static site to dist/
	@echo "$(BLUE)Building site...$(NC)"
	pnpm build
	@echo "$(GREEN)Build complete — output in dist/$(NC)"

preview: ## Preview the production build locally
	@echo "$(BLUE)Starting preview server...$(NC)"
	pnpm preview

# =============================================================================
# Testing
# =============================================================================

test: ## Run all tests once (Vitest)
	@echo "$(BLUE)Running tests...$(NC)"
	pnpm test:run
	@echo "$(GREEN)Tests complete$(NC)"

test-file: ## Run a single test file  (usage: make test-file FILE=src/test/projects.test.ts)
ifndef FILE
	@echo "$(RED)Error: FILE not specified$(NC)"
	@echo "Usage: make test-file FILE=src/test/projects.test.ts"
	@exit 1
endif
	@echo "$(BLUE)Running $(FILE)...$(NC)"
	pnpm exec vitest run $(FILE)

test-cov: ## Run tests with v8 coverage report (output: coverage/)
	@echo "$(BLUE)Running tests with coverage...$(NC)"
	pnpm test:coverage
	@echo "$(GREEN)Coverage report: coverage/index.html$(NC)"

# =============================================================================
# Code Quality
# =============================================================================

format: ## Auto-fix formatting, lint issues, and import order (Biome)
	@echo "$(BLUE)Formatting with Biome...$(NC)"
	pnpm lint:fix
	@echo "$(GREEN)Formatting complete$(NC)"

lint: ## Check formatting and lint without mutating (Biome)
	@echo "$(BLUE)Linting with Biome...$(NC)"
	pnpm lint
	@echo "$(GREEN)Lint complete$(NC)"

type-check: ## Type-check Astro + TypeScript (astro check)
	@echo "$(BLUE)Type-checking...$(NC)"
	pnpm type-check
	@echo "$(GREEN)Type check complete$(NC)"

check: lint type-check ## Run lint + type-check (no mutations, no tests)
	@echo "$(GREEN)All checks passed$(NC)"

# =============================================================================
# CI
# =============================================================================

ci: check test ## Full CI pipeline: lint + type-check + tests
	@echo "$(GREEN)CI passed$(NC)"

# =============================================================================
# Cleanup
# =============================================================================

clean: ## Remove build artifacts (dist/, .astro/, coverage/)
	@echo "$(BLUE)Cleaning build artifacts...$(NC)"
	rm -rf dist .astro coverage
	@echo "$(GREEN)Cleanup complete$(NC)"

clean-all: clean ## Remove build artifacts AND node_modules
	@echo "$(YELLOW)Removing node_modules — next install will re-download everything$(NC)"
	rm -rf node_modules
	@echo "$(GREEN)Deep clean complete — run make install to rehydrate$(NC)"
