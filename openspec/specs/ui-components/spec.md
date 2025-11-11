# ui-components Specification

## Purpose
TBD - created by archiving change scaffold-basic-menu-ui-tidy. Update Purpose after archive.
## Requirements
### Requirement: Consistent Code Formatting
All UI components SHALL follow consistent code formatting rules for maintainability.

#### Scenario: Semicolon usage
- **WHEN** code is written in components
- **THEN** semicolons SHALL be used consistently (either all with or all without, per project convention)

#### Scenario: Import organization
- **WHEN** imports are defined
- **THEN** external package imports SHALL be grouped separately from internal module imports
- **AND** imports SHALL be sorted logically

### Requirement: Component Styling Consistency
UI components SHALL use consistent Tailwind CSS patterns and shadcn/ui component variants.

#### Scenario: Spacing consistency
- **WHEN** components use spacing utilities
- **THEN** spacing SHALL follow consistent patterns (e.g., gap-2, p-4, m-2)
- **AND** responsive spacing SHALL be applied consistently

#### Scenario: Component variant usage
- **WHEN** shadcn/ui components are used
- **THEN** variant props SHALL be used consistently (e.g., Button variants, Card structures)

### Requirement: Navigation Component Consistency
Sidebar and header navigation components SHALL render menu items consistently and handle active states uniformly.

#### Scenario: Active state handling
- **WHEN** a route is active
- **THEN** both sidebar and header navigation SHALL highlight the active item using the same visual pattern

#### Scenario: Nested menu rendering
- **WHEN** menu items have sub-items
- **THEN** both sidebar and header SHALL render nested items using appropriate UI patterns (collapsible in sidebar, dropdown in header)

