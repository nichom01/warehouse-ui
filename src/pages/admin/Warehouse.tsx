import { PageHeader, PageHeaderHeading } from '@/components/page-header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Warehouse() {
    return (
        <>
            <PageHeader>
                <PageHeaderHeading>Warehouse</PageHeaderHeading>
            </PageHeader>
            <Card>
                <CardHeader>
                    <CardTitle>Warehouse Management</CardTitle>
                    <CardDescription>Manage warehouse configurations and settings</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Warehouse management content will be displayed here.</p>
                </CardContent>
            </Card>
        </>
    )
}

