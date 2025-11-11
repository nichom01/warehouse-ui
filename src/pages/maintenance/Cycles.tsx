import { PageHeader, PageHeaderHeading } from '@/components/page-header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Cycles() {
    return (
        <>
            <PageHeader>
                <PageHeaderHeading>Cycles</PageHeaderHeading>
            </PageHeader>
            <Card>
                <CardHeader>
                    <CardTitle>Cycle Management</CardTitle>
                    <CardDescription>Manage inventory cycles and counts</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Cycle management content will be displayed here.</p>
                </CardContent>
            </Card>
        </>
    )
}

