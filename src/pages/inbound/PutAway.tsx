import { PageHeader, PageHeaderHeading } from '@/components/page-header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function PutAway() {
    return (
        <>
            <PageHeader>
                <PageHeaderHeading>Put-Away</PageHeaderHeading>
            </PageHeader>
            <Card>
                <CardHeader>
                    <CardTitle>Put-Away Operations</CardTitle>
                    <CardDescription>Manage put-away tasks and assignments</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Put-away management content will be displayed here.</p>
                </CardContent>
            </Card>
        </>
    )
}

