# React + Vite + TypeScript App

A modern React application built with Vite and TypeScript, featuring the latest versions of all libraries.

## Features

- **React 18.3.1** - Latest React version
- **TypeScript 5.7.2** - Full TypeScript support throughout
- **Vite 5.4.21** - Fast build tool and dev server with HMR
- **React Router DOM 6.30.3** - Routing library
- **Axios 1.13.4** - Promise-based HTTP client
- **ESLint 8.57.1** - Code quality with TypeScript support
- **Hot Module Replacement (HMR)** - Instant updates during development

## Project Structure

```
src/
├── main.tsx       # Entry point
├── App.tsx        # Main App component (TypeScript)
├── App.css        # Component styles
├── index.css      # Global styles

Configuration Files:
├── tsconfig.json           # TypeScript configuration
├── tsconfig.node.json      # Vite config TypeScript settings
├── vite.config.ts          # Vite configuration
├── eslint.config.js        # ESLint with TypeScript support
├── package.json            # Dependencies with latest versions
└── index.html              # HTML entry point
```

## Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will open automatically at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Type Checking

```bash
npm run type-check
```

### Linting

```bash
npm run lint
```

## Technologies

| Package | Version | Purpose |
|---------|---------|---------|
| React | 18.3.1 | UI library |
| React DOM | 18.3.1 | React rendering |
| Vite | 5.4.21 | Build tool & dev server |
| TypeScript | 5.7.2 | Type-safe JavaScript |
| React Router DOM | 6.30.3 | Client-side routing |
| Axios | 1.13.4 | HTTP client |
| ESLint | 8.57.1 | Code quality |
| @typescript-eslint | 7.13.0 | TypeScript ESLint support |

## TypeScript Setup

This project is fully configured with TypeScript:
- All source files use `.tsx` extension for React components
- Strict type checking enabled
- Full IDE support and type inference
- Proper typing for React hooks and components
- Type-safe route definitions and API calls

## Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build optimized production bundle
- `npm run preview` - Preview production build locally
- `npm run type-check` - Run TypeScript type checking
- `npm run lint` - Run ESLint and report issues

