# Warehouse Management System

A modern warehouse management application built with React + Vite + TypeScript and shadcn/ui components.

## Getting Started

```bash
cd my-project
npm install
npm run dev
```

## Getting Done

- [x] Single page app with navigation and responsive layout
- [x] Customizable configuration `/config`
- [x] Warehouse management menu structure
- [x] 18 page components organized by functional area
- [x] GitHub action deploy to GitHub Pages

## Deploy `gh-pages`

- change `basenameProd` in `/vite.config.ts`
- create deploy key `GITHUB_TOKEN` in github `/settings/keys`
- commit and push changes code
- setup gihub pages to branch `gh-pages`
- run action `Build & Deploy`

### Auto Deploy

- change file `.github/workflows/build-and-deploy.yml`
- Comment on `workflow_dispatch`
- Uncomment on `push`

```yaml
# on:
#   workflow_dispatch:
on:
  push:
    branches: ["main"]
```

## Features

- React + Vite + TypeScript
- Tailwind CSS
- [shadcn-ui](https://github.com/shadcn-ui/ui/)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- Warehouse management navigation structure
- Responsive layout with sidebar (mobile) and header (desktop) navigation

## Menu Structure

The application includes a comprehensive warehouse management menu structure:

### Main Navigation

- **Home** - Main dashboard entry point

- **Admin** - Warehouse administration
  - Warehouse
  - Zone
  - Location
  - User
  - Customer

- **Inbound** - Inbound operations
  - Purchase Order
  - Goods Received
  - Put-Away

- **Outbound** - Outbound operations
  - Sales Orders
  - Picking
  - Packing
  - Shipping

- **Maintenance** - Maintenance operations
  - Cycles
  - Stock Take
  - Replenishment

### Navigation Features

- **Responsive Design**: Sidebar navigation on mobile devices, header navigation on desktop
- **Nested Menus**: Main sections with collapsible/dropdown sub-menus
- **Active State**: Menu items automatically highlight when on the corresponding page
- **Icons**: Each menu item includes appropriate Lucide React icons

## Project Structure

```md
warehouse/
├── public/            # Public assets
├── src/               # Application source code
│   ├── components/    # React components
│   │   ├── ui/        # shadcn/ui components
│   │   └── ...       # Application components
│   ├── contexts/      # Context components (Theme)
│   ├── config/        # Configuration files
│   │   └── menu.ts    # Menu configuration
│   ├── hooks/         # Custom hooks
│   ├── lib/           # Utility functions
│   ├── pages/         # Page components
│   │   ├── admin/     # Admin section pages
│   │   ├── inbound/   # Inbound section pages
│   │   ├── outbound/  # Outbound section pages
│   │   ├── maintenance/ # Maintenance section pages
│   │   └── ...        # Other pages
│   ├── App.tsx        # Application entry point
│   ├── index.css      # Main CSS and Tailwind configuration
│   ├── main.tsx       # Main rendering file
│   └── Router.tsx     # Routes component
├── openspec/          # OpenSpec specifications
├── index.html         # HTML entry point
├── tsconfig.json      # TypeScript configuration
└── vite.config.ts     # Vite configuration
```

## Diagrams

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/hayyi2/react-shadcn-starter/blob/main/LICENSE) file for details.
