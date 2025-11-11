import { PageHeader, PageHeaderHeading } from '@/components/page-header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Picking() {
    return (
        <>
            <PageHeader>
                <PageHeaderHeading>Picking</PageHeaderHeading>
            </PageHeader>
            <Card>
                <CardHeader>
                    <CardTitle>Picking Operations</CardTitle>
                    <CardDescription>Manage picking tasks and assignments</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Picking management content will be displayed here.</p>
                </CardContent>
            </Card>
        </>
    )
}

