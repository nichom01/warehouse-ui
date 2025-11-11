import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { PageHeader, PageHeaderHeading } from '@/components/page-header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { productService } from '@/services/product-service'
import type { Product, ProductFormData } from '@/types/product'

export default function ProductDetail() {
    const navigate = useNavigate()
    const { id } = useParams<{ id: string }>()
    const [product, setProduct] = useState<Product | null>(null)
    const [formData, setFormData] = useState<ProductFormData>({
        productCode: '',
        name: '',
        description: '',
        cartonQty: 0,
        palletQty: 0,
        height: 0,
        width: 0,
        depth: 0,
        longDesc: '',
        weight: 0,
    })
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [isSaving, setIsSaving] = useState(false)
    const [saveSuccess, setSaveSuccess] = useState(false)

    useEffect(() => {
        if (!id) {
            navigate('/admin/products')
            return
        }

        const productData = productService.getById(id)
        if (!productData) {
            navigate('/admin/products')
            return
        }

        setProduct(productData)
        setFormData({
            productCode: productData.productCode,
            name: productData.name,
            description: productData.description,
            cartonQty: productData.cartonQty,
            palletQty: productData.palletQty,
            height: productData.height,
            width: productData.width,
            depth: productData.depth,
            longDesc: productData.longDesc || '',
            weight: productData.weight,
        })
    }, [id, navigate])

    const validateForm = (): boolean => {
        const newErrors: Record<string, string> = {}

        if (!formData.productCode || !formData.productCode.trim()) {
            newErrors.productCode = 'Product code is required'
        }

        if (!formData.name || !formData.name.trim()) {
            newErrors.name = 'Name is required'
        }

        if (!formData.description || !formData.description.trim()) {
            newErrors.description = 'Description is required'
        }

        if (isNaN(Number(formData.cartonQty)) || Number(formData.cartonQty) <= 0) {
            newErrors.cartonQty = 'Carton quantity is required and must be a valid positive number'
        }

        if (isNaN(Number(formData.palletQty)) || Number(formData.palletQty) <= 0) {
            newErrors.palletQty = 'Pallet quantity is required and must be a valid positive number'
        }

        if (isNaN(Number(formData.height)) || Number(formData.height) <= 0) {
            newErrors.height = 'Height is required and must be a valid positive number'
        }

        if (isNaN(Number(formData.width)) || Number(formData.width) <= 0) {
            newErrors.width = 'Width is required and must be a valid positive number'
        }

        if (isNaN(Number(formData.depth)) || Number(formData.depth) <= 0) {
            newErrors.depth = 'Depth is required and must be a valid positive number'
        }

        if (isNaN(Number(formData.weight)) || Number(formData.weight) <= 0) {
            newErrors.weight = 'Weight is required and must be a valid positive number'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault()
        
        if (!validateForm() || !id) {
            return
        }

        setIsSaving(true)
        setSaveSuccess(false)

        try {
            productService.update(id, formData)
            setSaveSuccess(true)
            
            // Navigate back to list after a brief delay
            setTimeout(() => {
                navigate('/admin/products')
            }, 1000)
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'An error occurred'
            setErrors({ general: errorMessage })
        } finally {
            setIsSaving(false)
        }
    }

    const handleCancel = () => {
        navigate('/admin/products')
    }

    const handleNumericChange = (field: keyof ProductFormData, value: string) => {
        const numValue = value === '' ? 0 : Number(value)
        setFormData({ ...formData, [field]: numValue })
        if (errors[field]) {
            setErrors({ ...errors, [field]: '' })
        }
    }

    const handleStringChange = (field: keyof ProductFormData, value: string) => {
        setFormData({ ...formData, [field]: value })
        if (errors[field]) {
            setErrors({ ...errors, [field]: '' })
        }
    }

    if (!product) {
        return null
    }

    return (
        <>
            <PageHeader>
                <PageHeaderHeading>Product Details</PageHeaderHeading>
            </PageHeader>
            <Card>
                <CardHeader>
                    <CardTitle>Edit Product</CardTitle>
                    <CardDescription>Update product information</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSave}>
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="productCode">Product Code *</Label>
                                <Input
                                    id="productCode"
                                    value={formData.productCode}
                                    onChange={(e) => handleStringChange('productCode', e.target.value)}
                                    aria-invalid={errors.productCode ? 'true' : 'false'}
                                />
                                {errors.productCode && (
                                    <p className="text-sm text-destructive">{errors.productCode}</p>
                                )}
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="name">Name *</Label>
                                <Input
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => handleStringChange('name', e.target.value)}
                                    aria-invalid={errors.name ? 'true' : 'false'}
                                />
                                {errors.name && (
                                    <p className="text-sm text-destructive">{errors.name}</p>
                                )}
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="description">Description *</Label>
                                <Input
                                    id="description"
                                    value={formData.description}
                                    onChange={(e) => handleStringChange('description', e.target.value)}
                                    aria-invalid={errors.description ? 'true' : 'false'}
                                />
                                {errors.description && (
                                    <p className="text-sm text-destructive">{errors.description}</p>
                                )}
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="cartonQty">Carton Quantity *</Label>
                                    <Input
                                        id="cartonQty"
                                        type="number"
                                        min="1"
                                        value={formData.cartonQty}
                                        onChange={(e) => handleNumericChange('cartonQty', e.target.value)}
                                        aria-invalid={errors.cartonQty ? 'true' : 'false'}
                                    />
                                    {errors.cartonQty && (
                                        <p className="text-sm text-destructive">{errors.cartonQty}</p>
                                    )}
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="palletQty">Pallet Quantity *</Label>
                                    <Input
                                        id="palletQty"
                                        type="number"
                                        min="1"
                                        value={formData.palletQty}
                                        onChange={(e) => handleNumericChange('palletQty', e.target.value)}
                                        aria-invalid={errors.palletQty ? 'true' : 'false'}
                                    />
                                    {errors.palletQty && (
                                        <p className="text-sm text-destructive">{errors.palletQty}</p>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="height">Height *</Label>
                                    <Input
                                        id="height"
                                        type="number"
                                        min="0.01"
                                        step="0.01"
                                        value={formData.height}
                                        onChange={(e) => handleNumericChange('height', e.target.value)}
                                        aria-invalid={errors.height ? 'true' : 'false'}
                                    />
                                    {errors.height && (
                                        <p className="text-sm text-destructive">{errors.height}</p>
                                    )}
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="width">Width *</Label>
                                    <Input
                                        id="width"
                                        type="number"
                                        min="0.01"
                                        step="0.01"
                                        value={formData.width}
                                        onChange={(e) => handleNumericChange('width', e.target.value)}
                                        aria-invalid={errors.width ? 'true' : 'false'}
                                    />
                                    {errors.width && (
                                        <p className="text-sm text-destructive">{errors.width}</p>
                                    )}
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="depth">Depth *</Label>
                                    <Input
                                        id="depth"
                                        type="number"
                                        min="0.01"
                                        step="0.01"
                                        value={formData.depth}
                                        onChange={(e) => handleNumericChange('depth', e.target.value)}
                                        aria-invalid={errors.depth ? 'true' : 'false'}
                                    />
                                    {errors.depth && (
                                        <p className="text-sm text-destructive">{errors.depth}</p>
                                    )}
                                </div>
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="weight">Weight *</Label>
                                <Input
                                    id="weight"
                                    type="number"
                                    min="0.01"
                                    step="0.01"
                                    value={formData.weight}
                                    onChange={(e) => handleNumericChange('weight', e.target.value)}
                                    aria-invalid={errors.weight ? 'true' : 'false'}
                                />
                                {errors.weight && (
                                    <p className="text-sm text-destructive">{errors.weight}</p>
                                )}
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="longDesc">Long Description (Optional)</Label>
                                <Input
                                    id="longDesc"
                                    value={formData.longDesc || ''}
                                    onChange={(e) => handleStringChange('longDesc', e.target.value)}
                                />
                            </div>

                            {errors.general && (
                                <div className="text-sm text-destructive">{errors.general}</div>
                            )}

                            {saveSuccess && (
                                <div className="text-sm text-green-600">Product updated successfully! Redirecting...</div>
                            )}

                            <div className="flex gap-2 justify-end">
                                <Button type="button" variant="outline" onClick={handleCancel}>
                                    Cancel
                                </Button>
                                <Button type="submit" disabled={isSaving}>
                                    {isSaving ? 'Saving...' : 'Save Changes'}
                                </Button>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </>
    )
}

