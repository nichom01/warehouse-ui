import { PageHeader, PageHeaderHeading } from '@/components/page-header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Customer() {
    return (
        <>
            <PageHeader>
                <PageHeaderHeading>Customer</PageHeaderHeading>
            </PageHeader>
            <Card>
                <CardHeader>
                    <CardTitle>Customer Management</CardTitle>
                    <CardDescription>Manage customer information and accounts</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Customer management content will be displayed here.</p>
                </CardContent>
            </Card>
        </>
    )
}

