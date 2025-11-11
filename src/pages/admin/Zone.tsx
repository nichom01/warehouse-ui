import { PageHeader, PageHeaderHeading } from '@/components/page-header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Zone() {
    return (
        <>
            <PageHeader>
                <PageHeaderHeading>Zone</PageHeaderHeading>
            </PageHeader>
            <Card>
                <CardHeader>
                    <CardTitle>Zone Management</CardTitle>
                    <CardDescription>Manage warehouse zones and their configurations</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Zone management content will be displayed here.</p>
                </CardContent>
            </Card>
        </>
    )
}

