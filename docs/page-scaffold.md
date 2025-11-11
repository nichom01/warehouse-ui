# Page Scaffold Pattern

## Overview

All page components should follow a consistent structure for maintainability and consistency across the application.

## Template

A page template is available at `src/pages/_page-template.tsx` that you can copy when creating new pages.

## Standard Page Structure

### 1. Import Organization

Imports should be organized in this order:
1. External package imports (react-router-dom, lucide-react, recharts, etc.)
2. Internal component imports using `@/` aliases

```typescript
// External package imports
import { Link } from 'react-router-dom'
import { Bar, BarChart } from 'recharts'

// Internal component imports (using @/ aliases)
import { PageHeader, PageHeaderHeading } from '@/components/page-header'
import { Card, CardContent } from '@/components/ui/card'
```

### 2. Component Definition

- Use default export
- Function name should be PascalCase and match the file name
- Use functional component with hooks (no class components)

```typescript
export default function PageName() {
    // Component implementation
}
```

### 3. Page Layout Structure

All pages MUST include:
1. **PageHeader** with **PageHeaderHeading** (required)
2. Content wrapped in appropriate Card or container components

```typescript
export default function PageName() {
    return (
        <>
            <PageHeader>
                <PageHeaderHeading>Page Title</PageHeaderHeading>
            </PageHeader>
            <Card>
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card description</CardDescription>
                </CardHeader>
                <CardContent>
                    {/* Page content here */}
                </CardContent>
            </Card>
        </>
    )
}
```

## Code Style

- **Quotes**: Use single quotes (`'`) for strings
- **Semicolons**: Do not use semicolons (consistent with modern React/TypeScript style)
- **Indentation**: Use 4 spaces
- **Spacing**: Consistent spacing around JSX elements

## Examples

See existing pages for reference:
- `src/pages/Dashboard.tsx`
- `src/pages/Sample.tsx`
- `src/pages/ComingSoon.tsx`

## Creating a New Page

1. Copy `src/pages/_page-template.tsx`
2. Rename the file to your page name (kebab-case, e.g., `my-new-page.tsx`)
3. Update the component name to match (PascalCase, e.g., `MyNewPage`)
4. Add the route to `src/Router.tsx`
5. Add menu item to `src/config/menu.ts` if needed

