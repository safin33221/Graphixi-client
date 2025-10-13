import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const AdminLogin = () => {
    return (
        <section className="bg-muted h-screen">
            <div className="flex h-full items-center justify-center">
                <div className="flex flex-col items-center gap-6">

                    <div className="min-w-sm border-muted bg-background flex w-full max-w-sm flex-col items-center gap-y-4 rounded-md border px-6 py-8 shadow-md">
                        <h1 className="text-xl font-semibold text-center">Admin Access Portal</h1>
                        <p className="text-sm text-muted-foreground text-center">
                            This section is restricted to system owners and authorized administrators only.
                            Unauthorized access is strictly prohibited.
                        </p>
                        <Input type="email" placeholder="Admin Email" className="text-sm" required />
                        <Input type="password" placeholder="Admin Password" className="text-sm" required />
                        <Button type="submit" className="w-full">
                            Sign In
                        </Button>
                    </div>
                    <div className="text-muted-foreground text-sm text-center max-w-xs">
                        <p>
                            Need access? Contact the system administrator for credentials or authorization.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdminLogin
