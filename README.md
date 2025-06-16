# Playwright UI Automation Framework

## Features
- TypeScript support
- Playwright Test Runner
- Page Object Model (POM)
- Parallel cross-browser execution
- Utilities and configuration

## Getting Started

### Install dependencies
```
npm install
```

### Run all tests
```
npx playwright test
```

### Run tests in headed mode
```
npx playwright test --headed
```

### Open Playwright Test Report
```
npx playwright show-report
```

## Running Tests in Different Environments
You can specify the environment (dev, qa, prod) using the ENV variable:

```
ENV=dev npx playwright test           # Run tests against dev environment
ENV=qa npx playwright test            # Run tests against qa environment
ENV=prod npx playwright test          # Run tests against production (default)
```

## Project Structure
```
Pwright/
├── tests/           # Test specs
├── pages/           # Page objects
├── utils/           # Utilities
├── playwright.config.ts
├── tsconfig.json
├── package.json
```

## Example Test
See `tests/example.spec.ts` for a sample test using the Page Object Model. 