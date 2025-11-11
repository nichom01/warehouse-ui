import { PageHeader, PageHeaderHeading } from '@/components/page-header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Location() {
    return (
        <>
            <PageHeader>
                <PageHeaderHeading>Location</PageHeaderHeading>
            </PageHeader>
            <Card>
                <CardHeader>
                    <CardTitle>Location Management</CardTitle>
                    <CardDescription>Manage storage locations within the warehouse</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Location management content will be displayed here.</p>
                </CardContent>
            </Card>
        </>
    )
}

