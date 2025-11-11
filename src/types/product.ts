/**
 * Product entity type definition
 */
export interface Product {
    id: string
    productCode: string
    name: string
    description: string
    cartonQty: number
    palletQty: number
    height: number
    width: number
    depth: number
    longDesc?: string
    weight: number
    createdAt: string
    updatedAt: string
}

/**
 * Product form data type (for create/update operations)
 */
export type ProductFormData = Omit<Product, 'id' | 'createdAt' | 'updatedAt'>

