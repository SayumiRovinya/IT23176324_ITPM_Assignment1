// ...existing code...
# IT23176324_ITPM_Assignment1

# Playwright UI Automation Project

This repository contains end-to-end UI automation tests implemented using **Playwright**.  
The project validates core UI functionalities such as language toggling, popups, and user interactions across modern browsers.

---

## Tech Stack

- Playwright
- JavaScript
- Node.js
- Chromium, Firefox, WebKit
- Playwright Test Runner

---

## Repository overview

- tests/ — Playwright test files (e2e).
- pages/ — Page objects or helper modules (if present).
- playwright.config.js — Playwright configuration (projects, timeouts, reporters).
- package.json — scripts and dependencies.

Adjust paths above if your project structure differs.

---

## Prerequisites

- Node.js (v16+ recommended)
- npm (comes with Node.js)
- Git (optional)

---

## Setup (Windows)

1. Open a terminal in the project folder:
   - In VS Code: Terminal > New Terminal
   - Or: Press Win+R, type `cmd` or `powershell`, navigate to project folder

2. Install dependencies:
```bash
npm install
```

3. Install browser binaries required by Playwright:
```bash
npx playwright install
```

---

## Common commands

- Run all tests (headless):
```bash
npx playwright test
```

- Run tests in headed mode (open browser windows):
```bash
npx playwright test --headed
```

- Run tests in a specific browser (example: firefox):
```bash
npx playwright test --project=firefox
```

- Run a single test file:
```bash
npx playwright test tests/example.spec.js
```

- Run a single test by name:
```bash
npx playwright test -g "test name"
```

- Debug tests with Playwright Inspector:
```bash
npx playwright test --debug
```

- Enable tracing for failing tests (set in config or run with):
```bash
npx playwright test --trace on
```

- Generate and open HTML report:
```bash
npx playwright show-report
```

