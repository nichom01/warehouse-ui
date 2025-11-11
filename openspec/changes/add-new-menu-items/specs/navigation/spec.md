## MODIFIED Requirements

### Requirement: Menu Configuration Structure
The application SHALL provide a centralized menu configuration system that defines navigation structure with support for icons, nested items, and external links.

The menu structure SHALL include:
- Home: Main entry point for the application
- Admin: Warehouse administration section with sub-items (warehouse, zone, location, user, customer)
- Inbound: Inbound operations section with sub-items (purchase order, goods received, put-away)
- Outbound: Outbound operations section with sub-items (sales orders, picking, packing, shipping)
- Maintenance: Maintenance operations section with sub-items (cycles, stock take, replenishment)

#### Scenario: Menu item with icon
- **WHEN** a menu item is configured with an icon property
- **THEN** the icon SHALL be displayed in both sidebar and header navigation

#### Scenario: Nested menu items
- **WHEN** a menu item has sub-items defined
- **THEN** the navigation SHALL display a collapsible/dropdown menu with the sub-items

#### Scenario: External links
- **WHEN** a menu item has an external link property
- **THEN** the link SHALL open in a new tab/window

#### Scenario: Warehouse menu structure
- **WHEN** the application loads
- **THEN** the menu SHALL display 5 main navigation items (Home, Admin, Inbound, Outbound, Maintenance)
- **AND** Admin SHALL have 5 sub-items (warehouse, zone, location, user, customer)
- **AND** Inbound SHALL have 3 sub-items (purchase order, goods received, put-away)
- **AND** Outbound SHALL have 4 sub-items (sales orders, picking, packing, shipping)
- **AND** Maintenance SHALL have 3 sub-items (cycles, stock take, replenishment)

