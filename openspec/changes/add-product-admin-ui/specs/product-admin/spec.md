## ADDED Requirements
### Requirement: Product Entity Definition
The system SHALL define a Product entity with the following fields:
- id: unique identifier (string, auto-generated)
- productCode: product code/identifier (string, REQUIRED)
- name: product name (string, REQUIRED)
- description: product description (string, REQUIRED)
- cartonQty: quantity per carton (number, REQUIRED)
- palletQty: quantity per pallet (number, REQUIRED)
- height: product height in units (number, REQUIRED)
- width: product width in units (number, REQUIRED)
- depth: product depth in units (number, REQUIRED)
- longDesc: long description (string, OPTIONAL)
- weight: product weight in units (number, REQUIRED)

#### Scenario: Required fields validation
- **WHEN** a product is saved without productCode, name, description, cartonQty, palletQty, height, width, depth, or weight
- **THEN** validation SHALL prevent save and display field-specific errors

#### Scenario: Optional long description
- **WHEN** a product is saved with an empty longDesc
- **THEN** the product SHALL be saved successfully with longDesc as empty string or null

### Requirement: Products List View
The application SHALL provide a Products page displaying a table of products and a search filter.

#### Scenario: Display product table
- **WHEN** the Products page loads
- **THEN** a table SHALL display id, productCode, name, description, cartonQty, palletQty, height, width, depth, weight, and longDesc (if present) for each product

#### Scenario: Filter products by search query
- **WHEN** the user types into the search input
- **THEN** the table SHALL filter rows by case-insensitive match on productCode, name, or description fields
- **AND** clearing the input SHALL restore the full list

#### Scenario: Empty state
- **WHEN** no products match the filter or dataset is empty
- **THEN** the page SHALL display an informative empty state

### Requirement: Product Detail Update
The application SHALL allow drilling into a single product to update fields.

#### Scenario: Drill into product
- **WHEN** the user clicks a row in the Products table
- **THEN** the application SHALL navigate to a Product detail view for that id
- **AND** the form SHALL be pre-filled with the product's data

#### Scenario: Update and persist product
- **WHEN** the user edits fields and clicks Save
- **THEN** inputs SHALL be validated (per required fields)
- **AND** numeric fields (cartonQty, palletQty, height, width, depth, weight) SHALL accept only valid numbers
- **AND** the update SHALL be persisted
- **AND** the user SHALL see a success confirmation

#### Scenario: Cancel without changes
- **WHEN** the user clicks Cancel
- **THEN** changes SHALL not be saved and the user SHALL return to the Products list

### Requirement: Data Persistence (Products)
Product data SHALL be persisted using localStorage with seed data on first load.

#### Scenario: Seed data on first run
- **WHEN** the application loads and no products are present
- **THEN** a small set of sample products SHALL be seeded into localStorage

#### Scenario: Persistence across reloads
- **WHEN** a product is updated
- **THEN** the change SHALL be written to localStorage and restored on page reload

