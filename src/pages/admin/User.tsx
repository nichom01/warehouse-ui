import { PageHeader, PageHeaderHeading } from '@/components/page-header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function User() {
    return (
        <>
            <PageHeader>
                <PageHeaderHeading>User</PageHeaderHeading>
            </PageHeader>
            <Card>
                <CardHeader>
                    <CardTitle>User Management</CardTitle>
                    <CardDescription>Manage system users and their permissions</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>User management content will be displayed here.</p>
                </CardContent>
            </Card>
        </>
    )
}

