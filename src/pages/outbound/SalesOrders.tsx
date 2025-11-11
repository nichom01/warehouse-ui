import { PageHeader, PageHeaderHeading } from '@/components/page-header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function SalesOrders() {
    return (
        <>
            <PageHeader>
                <PageHeaderHeading>Sales Orders</PageHeaderHeading>
            </PageHeader>
            <Card>
                <CardHeader>
                    <CardTitle>Sales Order Management</CardTitle>
                    <CardDescription>Create and manage sales orders</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Sales order management content will be displayed here.</p>
                </CardContent>
            </Card>
        </>
    )
}

