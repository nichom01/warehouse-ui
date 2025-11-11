import {
    ArrowDown,
    ArrowUp,
    ArrowUpCircle,
    Box,
    Building,
    ClipboardCheck,
    Grid,
    Hand,
    Home,
    LucideIcon,
    MapPin,
    Package,
    PackageCheck,
    RefreshCw,
    Settings,
    ShoppingBag,
    ShoppingCart,
    Truck,
    UserCircle,
    Users,
    Warehouse as WarehouseIcon,
    Wrench
} from 'lucide-react'

/**
 * Menu item configuration type
 * 
 * @property title - Display text for the menu item
 * @property url - Route path for internal navigation (relative path)
 * @property external - Optional external URL (if provided, opens in new tab)
 * @property icon - Optional Lucide icon component
 * @property items - Optional array of nested menu items (for dropdown/collapsible menus)
 */
type MenuItemType = {
    title: string
    url: string
    external?: string
    icon?: LucideIcon
    items?: MenuItemType[]
}

/**
 * Menu configuration type - array of menu items
 */
type MenuType = MenuItemType[]

/**
 * Main navigation menu configuration
 * 
 * This configuration is used by both the sidebar (mobile) and header (desktop) navigation.
 * Menu items with nested items will render as collapsible menus in the sidebar
 * and dropdown menus in the header.
 * 
 * @example
 * // Simple menu item with icon
 * {
 *   title: 'Dashboard',
 *   url: '/',
 *   icon: Gauge
 * }
 * 
 * @example
 * // Menu item with nested sub-items
 * {
 *   title: 'Pages',
 *   url: '/pages',
 *   icon: Files,
 *   items: [
 *     { title: 'Sample Page', url: '/pages/sample' }
 *   ]
 * }
 * 
 * @example
 * // External link (opens in new tab)
 * {
 *   title: 'Documentation',
 *   url: '/docs',
 *   external: 'https://example.com/docs',
 *   icon: Book
 * }
 */
export const mainMenu: MenuType = [
    {
        title: 'Home',
        url: '/',
        icon: Home
    },
    {
        title: 'Admin',
        url: '/admin',
        icon: Settings,
        items: [
            {
                title: 'Warehouse',
                url: '/admin/warehouse',
            },
            {
                title: 'Zone',
                url: '/admin/zone',
            },
            {
                title: 'Location',
                url: '/admin/location',
            },
            {
                title: 'User',
                url: '/admin/user',
            },
            {
                title: 'Customer',
                url: '/admin/customers',
            },
            {
                title: 'Product',
                url: '/admin/products',
            },
        ]
    },
    {
        title: 'Inbound',
        url: '/inbound',
        icon: ArrowDown,
        items: [
            {
                title: 'Purchase Order',
                url: '/inbound/purchase-order',
            },
            {
                title: 'Goods Received',
                url: '/inbound/goods-received',
            },
            {
                title: 'Put-Away',
                url: '/inbound/put-away',
            },
        ]
    },
    {
        title: 'Outbound',
        url: '/outbound',
        icon: ArrowUp,
        items: [
            {
                title: 'Sales Orders',
                url: '/outbound/sales-orders',
            },
            {
                title: 'Picking',
                url: '/outbound/picking',
            },
            {
                title: 'Packing',
                url: '/outbound/packing',
            },
            {
                title: 'Shipping',
                url: '/outbound/shipping',
            },
        ]
    },
    {
        title: 'Maintenance',
        url: '/maintenance',
        icon: Wrench,
        items: [
            {
                title: 'Cycles',
                url: '/maintenance/cycles',
            },
            {
                title: 'Stock Take',
                url: '/maintenance/stock-take',
            },
            {
                title: 'Replenishment',
                url: '/maintenance/replenishment',
            },
        ]
    },
]
