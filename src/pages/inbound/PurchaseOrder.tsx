import { PageHeader, PageHeaderHeading } from '@/components/page-header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function PurchaseOrder() {
    return (
        <>
            <PageHeader>
                <PageHeaderHeading>Purchase Order</PageHeaderHeading>
            </PageHeader>
            <Card>
                <CardHeader>
                    <CardTitle>Purchase Order Management</CardTitle>
                    <CardDescription>Create and manage purchase orders</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Purchase order management content will be displayed here.</p>
                </CardContent>
            </Card>
        </>
    )
}

