import { useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { PageHeader, PageHeaderHeading } from '@/components/page-header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { productService } from '@/services/product-service'
import type { Product } from '@/types/product'
import { Search } from 'lucide-react'

export default function Product() {
    const navigate = useNavigate()
    const [products, setProducts] = useState<Product[]>([])
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        loadProducts()
    }, [])

    const loadProducts = () => {
        setProducts(productService.getAll())
    }

    const filteredProducts = useMemo(() => {
        if (!searchQuery.trim()) return products
        const query = searchQuery.toLowerCase()
        return products.filter(p => 
            p.productCode.toLowerCase().includes(query) ||
            p.name.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query)
        )
    }, [products, searchQuery])

    const handleRowClick = (productId: string) => {
        navigate(`/admin/products/${productId}`)
    }

    return (
        <>
            <PageHeader>
                <PageHeaderHeading>Products</PageHeaderHeading>
            </PageHeader>
            <Card>
                <CardHeader>
                    <div>
                        <CardTitle>Product Management</CardTitle>
                        <CardDescription>Manage product information and details</CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="mb-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground size-4" />
                            <Input
                                placeholder="Search products by code, name, or description..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-9"
                            />
                        </div>
                    </div>
                    {filteredProducts.length === 0 ? (
                        <p className="text-muted-foreground text-center py-8">
                            {searchQuery ? 'No products match your search.' : 'No products found. Product data will appear here once available.'}
                        </p>
                    ) : (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>ID</TableHead>
                                    <TableHead>Product Code</TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Description</TableHead>
                                    <TableHead>Carton Qty</TableHead>
                                    <TableHead>Pallet Qty</TableHead>
                                    <TableHead>Height</TableHead>
                                    <TableHead>Width</TableHead>
                                    <TableHead>Depth</TableHead>
                                    <TableHead>Weight</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredProducts.map((product) => (
                                    <TableRow 
                                        key={product.id}
                                        onClick={() => handleRowClick(product.id)}
                                        className="cursor-pointer"
                                    >
                                        <TableCell className="font-medium">{product.id}</TableCell>
                                        <TableCell>{product.productCode}</TableCell>
                                        <TableCell>{product.name}</TableCell>
                                        <TableCell>{product.description}</TableCell>
                                        <TableCell>{product.cartonQty}</TableCell>
                                        <TableCell>{product.palletQty}</TableCell>
                                        <TableCell>{product.height}</TableCell>
                                        <TableCell>{product.width}</TableCell>
                                        <TableCell>{product.depth}</TableCell>
                                        <TableCell>{product.weight}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </CardContent>
            </Card>
        </>
    )
}

