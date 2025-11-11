import type { Product, ProductFormData } from '@/types/product'

const STORAGE_KEY = 'warehouse_app_products'

/**
 * Generate a unique ID
 */
function generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

/**
 * Get current timestamp as ISO string
 */
function getTimestamp(): string {
    return new Date().toISOString()
}

/**
 * Initialize seed data if storage is empty
 */
function initializeSeedData(): void {
    if (!localStorage.getItem(STORAGE_KEY)) {
        const seedProducts: Product[] = [
            {
                id: generateId(),
                productCode: 'PROD-001',
                name: 'Widget A',
                description: 'Standard widget for general use',
                cartonQty: 24,
                palletQty: 144,
                height: 10,
                width: 8,
                depth: 6,
                longDesc: 'A versatile widget designed for multiple applications. Features durable construction and standard dimensions.',
                weight: 0.5,
                createdAt: getTimestamp(),
                updatedAt: getTimestamp(),
            },
            {
                id: generateId(),
                productCode: 'PROD-002',
                name: 'Gadget B',
                description: 'Premium gadget with enhanced features',
                cartonQty: 12,
                palletQty: 72,
                height: 15,
                width: 12,
                depth: 10,
                weight: 1.2,
                createdAt: getTimestamp(),
                updatedAt: getTimestamp(),
            },
            {
                id: generateId(),
                productCode: 'PROD-003',
                name: 'Component C',
                description: 'Essential component for assembly',
                cartonQty: 48,
                palletQty: 288,
                height: 5,
                width: 5,
                depth: 5,
                longDesc: 'Small but essential component used in various assembly processes. Compact design with high durability.',
                weight: 0.1,
                createdAt: getTimestamp(),
                updatedAt: getTimestamp(),
            },
        ]
        localStorage.setItem(STORAGE_KEY, JSON.stringify(seedProducts))
    }
}

// Initialize on module load
initializeSeedData()

/**
 * Validate product form data
 */
function validateProduct(data: Partial<ProductFormData>): { valid: boolean; errors: string[] } {
    const errors: string[] = []
    
    if (!data.productCode || !data.productCode.trim()) {
        errors.push('Product code is required')
    }
    
    if (!data.name || !data.name.trim()) {
        errors.push('Name is required')
    }
    
    if (!data.description || !data.description.trim()) {
        errors.push('Description is required')
    }
    
    if (data.cartonQty === undefined || data.cartonQty === null || isNaN(Number(data.cartonQty))) {
        errors.push('Carton quantity is required and must be a valid number')
    }
    
    if (data.palletQty === undefined || data.palletQty === null || isNaN(Number(data.palletQty))) {
        errors.push('Pallet quantity is required and must be a valid number')
    }
    
    if (data.height === undefined || data.height === null || isNaN(Number(data.height))) {
        errors.push('Height is required and must be a valid number')
    }
    
    if (data.width === undefined || data.width === null || isNaN(Number(data.width))) {
        errors.push('Width is required and must be a valid number')
    }
    
    if (data.depth === undefined || data.depth === null || isNaN(Number(data.depth))) {
        errors.push('Depth is required and must be a valid number')
    }
    
    if (data.weight === undefined || data.weight === null || isNaN(Number(data.weight))) {
        errors.push('Weight is required and must be a valid number')
    }
    
    return {
        valid: errors.length === 0,
        errors,
    }
}

/**
 * Product Service
 */
export const productService = {
    /**
     * Get all products
     */
    getAll(): Product[] {
        const data = localStorage.getItem(STORAGE_KEY)
        if (!data) return []
        return JSON.parse(data) as Product[]
    },

    /**
     * Get product by ID
     */
    getById(id: string): Product | undefined {
        const products = this.getAll()
        return products.find(p => p.id === id)
    },

    /**
     * Update a product
     */
    update(id: string, data: Partial<ProductFormData>): Product {
        const products = this.getAll()
        const index = products.findIndex(p => p.id === id)
        
        if (index === -1) {
            throw new Error('Product not found')
        }

        // Validate required fields
        const validation = validateProduct(data)
        if (!validation.valid) {
            throw new Error(validation.errors.join(', '))
        }

        // Ensure numeric fields are numbers
        const updateData: Partial<Product> = {
            ...data,
            cartonQty: Number(data.cartonQty),
            palletQty: Number(data.palletQty),
            height: Number(data.height),
            width: Number(data.width),
            depth: Number(data.depth),
            weight: Number(data.weight),
            longDesc: data.longDesc?.trim() || undefined,
        }

        products[index] = {
            ...products[index],
            ...updateData,
            updatedAt: getTimestamp(),
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(products))
        return products[index]
    },
}

