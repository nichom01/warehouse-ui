# Change: Basic menu, page scaffold and UI tidy

## Why
The application needs a consistent foundation for navigation, page structure, and UI components. Currently, pages and menu items are created ad-hoc without standardized patterns, leading to inconsistencies in code style, component structure, and user experience. This change establishes clear scaffolds and tidies up UI components for maintainability and consistency.

## What Changes
- Establish a standardized menu configuration pattern with clear structure and type safety
- Create a reusable page scaffold/template for consistent page layouts
- Tidy up UI components for consistent styling, spacing, and code formatting
- Ensure consistent use of PageHeader components across all pages
- Standardize code style (semicolons, spacing, imports) across components

## Impact
- Affected specs: `navigation`, `page-scaffold`, `ui-components`
- Affected code: 
  - `src/config/menu.ts` - Menu configuration
  - `src/components/app-sidebar.tsx` - Sidebar navigation
  - `src/components/app-header.tsx` - Header navigation
  - `src/pages/*.tsx` - All page components
  - `src/components/page-header.tsx` - Page header component
  - UI components in `src/components/ui/`

