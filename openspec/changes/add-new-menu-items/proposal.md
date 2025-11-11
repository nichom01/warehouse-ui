# Change #4: New Menu Items

## Why
The application needs a warehouse management menu structure to replace the current starter template navigation. The new menu structure will organize warehouse operations into logical sections: Admin, Inbound, Outbound, and Maintenance, with Home as the main entry point. Each menu item requires a dedicated page to support the warehouse management workflow.

## What Changes
- Replace existing menu structure with warehouse management menu items
- Add 5 main navigation items: Home, Admin, Inbound, Outbound, Maintenance
- Add 13 sub-navigation items across the main sections
- Create 18 new page components (1 Home + 5 main sections + 12 sub-items)
- Update routing configuration to support all new pages
- Assign appropriate icons to each menu item using Lucide React icons

**BREAKING**: This replaces the existing Dashboard, Pages, and Error menu items with warehouse-specific navigation.

## Impact
- Affected specs: `navigation` (MODIFIED), `page-scaffold` (new pages)
- Affected code: 
  - `src/config/menu.ts` - Complete menu structure replacement
  - `src/Router.tsx` - Add routes for all new pages
  - `src/pages/` - Create 18 new page components
  - Navigation components will automatically reflect new menu structure

