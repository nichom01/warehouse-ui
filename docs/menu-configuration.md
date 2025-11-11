# Menu Configuration Guide

## Overview

The menu configuration system provides a centralized way to define navigation structure for both sidebar (mobile) and header (desktop) navigation components.

## Location

Menu configuration is defined in `src/config/menu.ts`.

## Menu Item Structure

Each menu item has the following properties:

- **`title`** (required): Display text for the menu item
- **`url`** (required): Route path for internal navigation (relative path)
- **`external`** (optional): External URL (if provided, opens in new tab)
- **`icon`** (optional): Lucide icon component
- **`items`** (optional): Array of nested menu items (for dropdown/collapsible menus)

## Examples

### Simple Menu Item with Icon

```typescript
{
    title: 'Dashboard',
    url: '/',
    icon: Gauge
}
```

### Menu Item with Nested Sub-items

```typescript
{
    title: 'Pages',
    url: '/pages',
    icon: Files,
    items: [
        { title: 'Sample Page', url: '/pages/sample' },
        { title: 'Coming Soon', url: '/pages/feature' }
    ]
}
```

### External Link

```typescript
{
    title: 'Documentation',
    url: '/docs',
    external: 'https://example.com/docs',
    icon: Book
}
```

## Navigation Behavior

- **Sidebar (Mobile)**: Menu items with nested items render as collapsible menus
- **Header (Desktop)**: Menu items with nested items render as dropdown menus
- **External Links**: When `external` property is provided, the link opens in a new tab with `target="_blank"` and `rel="noreferrer"`
- **Active State**: Menu items are automatically highlighted when the current route matches the item's URL

## Type Safety

The menu configuration uses TypeScript types (`MenuItemType` and `MenuType`) to ensure type safety and prevent configuration errors.

