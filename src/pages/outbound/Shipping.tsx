import { PageHeader, PageHeaderHeading } from '@/components/page-header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Shipping() {
    return (
        <>
            <PageHeader>
                <PageHeaderHeading>Shipping</PageHeaderHeading>
            </PageHeader>
            <Card>
                <CardHeader>
                    <CardTitle>Shipping Management</CardTitle>
                    <CardDescription>Manage shipping operations and tracking</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Shipping management content will be displayed here.</p>
                </CardContent>
            </Card>
        </>
    )
}

