import { PageHeader, PageHeaderHeading } from '@/components/page-header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
    return (
        <>
            <PageHeader>
                <PageHeaderHeading>Home</PageHeaderHeading>
            </PageHeader>
            <Card>
                <CardHeader>
                    <CardTitle>Warehouse Management System</CardTitle>
                    <CardDescription>Welcome to the warehouse management dashboard</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Select a section from the navigation menu to get started.</p>
                </CardContent>
            </Card>
        </>
    )
}

