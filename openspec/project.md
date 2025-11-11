# Project Context

## Purpose
A modern React + Vite + TypeScript starter template for building web applications with shadcn/ui components. This project provides a foundation with responsive layout, routing, theme management, and a component library setup. It's designed to be customizable and deployable to GitHub Pages.

## Tech Stack
- **Frontend Framework**: React 19.0.0
- **Build Tool**: Vite 6.2.0
- **Language**: TypeScript 5.7.2
- **Styling**: Tailwind CSS 4.0.14 (with CSS variables for theming)
- **UI Components**: shadcn/ui (built on Radix UI primitives)
- **Routing**: React Router DOM 7.3.0
- **Icons**: Lucide React 0.482.0
- **Charts**: Recharts 2.15.4
- **Linting**: ESLint 9.21.0 with TypeScript ESLint and React hooks plugins

## Project Conventions

### Code Style
- **File Naming**: kebab-case for component files (e.g., `app-layout.tsx`, `mode-toggle.tsx`)
- **Component Naming**: PascalCase for React components (e.g., `AppLayout`, `ThemeProvider`)
- **Type Definitions**: TypeScript types defined inline or in type aliases (e.g., `AppConfigType`, `ThemeType`)
- **Path Aliases**: Use `@/*` to reference `src/*` (configured in `tsconfig.json` and `vite.config.ts`)
- **Import Organization**: 
  - External package imports first (react-router-dom, lucide-react, recharts, etc.)
  - Internal module imports second (using `@/` aliases)
  - Group related imports together
- **Quotes**: Use single quotes (`'`) for strings consistently
- **Semicolons**: Do not use semicolons (modern React/TypeScript style)
- **Formatting**: ESLint enforces React hooks rules and TypeScript best practices
- **Indentation**: 4 spaces (visible in code files)

### Architecture Patterns
- **Component Structure**: Functional components with hooks (no class components)
- **State Management**: React Context API for theme management (`ThemeContext`)
- **Routing**: Nested routes using React Router with layout components (`AppLayout` as parent route)
- **Configuration**: Centralized config in `/src/config` directory
- **Custom Hooks**: Reusable hooks in `/src/hooks` directory
- **Utility Functions**: Shared utilities in `/src/lib` directory
- **Component Organization**: 
  - `/src/components` - Application components
  - `/src/components/ui` - shadcn/ui components
  - `/src/pages` - Page/feature components
- **Page Structure**: All pages MUST use PageHeader with PageHeaderHeading and follow the standard scaffold pattern (see `src/pages/_page-template.tsx`)
- **Menu Configuration**: Centralized menu configuration in `src/config/menu.ts` with support for icons, nested items, and external links
- **Theme System**: CSS variables with dark/light/system theme support via `ThemeContext`

### Testing Strategy
- Testing setup not currently configured in the project
- No test files or testing dependencies present
- Consider adding Vitest or React Testing Library for future testing needs

### Git Workflow
- GitHub Actions configured for deployment to GitHub Pages
- Deployment workflow supports both manual (`workflow_dispatch`) and automatic (`push` to main) triggers
- Build script includes GitHub Pages-specific configuration (`build:gh`)

## Domain Context
- This is a starter/template project for building React applications
- Designed to be customizable and extensible
- Supports deployment to GitHub Pages with hash routing option
- Uses shadcn/ui component library with "new-york" style variant
- Theme system supports light, dark, and system preference modes

## Important Constraints
- **Deployment**: Configured for GitHub Pages deployment (requires `VITE_BASE_URL` and optional `VITE_USE_HASH_ROUTE` environment variables)
- **Browser Support**: Modern browsers (ES2020+)
- **Build Output**: Static site generation (SPA)
- **Environment Variables**: Uses Vite's `import.meta.env` for environment configuration
- **TypeScript**: Strict TypeScript configuration with path aliases

## External Dependencies
- **shadcn/ui**: Component library built on Radix UI primitives
- **Radix UI**: Accessible component primitives (Avatar, Collapsible, Dialog, Dropdown Menu, etc.)
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **React Router**: Client-side routing solution
- **Recharts**: Charting library for data visualization
- **Lucide React**: Icon library
- **GitHub Pages**: Deployment target (when using `build:gh` script)
