import { PageHeader, PageHeaderHeading } from '@/components/page-header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function GoodsReceived() {
    return (
        <>
            <PageHeader>
                <PageHeaderHeading>Goods Received</PageHeaderHeading>
            </PageHeader>
            <Card>
                <CardHeader>
                    <CardTitle>Goods Received</CardTitle>
                    <CardDescription>Record and manage received goods</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Goods received management content will be displayed here.</p>
                </CardContent>
            </Card>
        </>
    )
}

