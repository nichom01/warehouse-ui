import { Link } from 'react-router-dom'
import { PageHeader, PageHeaderHeading } from '@/components/page-header'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardDescription } from '@/components/ui/card'

export default function NotMatch() {
    return (
        <>
            <PageHeader>
                <PageHeaderHeading>Page Not Found</PageHeaderHeading>
            </PageHeader>
            <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                    <h2 className="text-8xl mb-4">404</h2>
                    <CardDescription className="text-lg mb-4">
                        Oops! Page not found
                    </CardDescription>
                    <p className="text-sm text-muted-foreground mb-6">
                        We are sorry, but the page you requested was not found
                    </p>
                    <Link to="/" className={buttonVariants()}>
                        Back to Home
                    </Link>
                </CardContent>
            </Card>
        </>
    )
}
