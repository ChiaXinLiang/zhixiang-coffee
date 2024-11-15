import { auth } from "@/auth";
import { CreateAccount } from "@/components/create-account";
import { SignIn } from "@/components/sign-in";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { redirect } from "next/navigation";

export default async function SignInPage({
  searchParams,
}: {
  searchParams: { callbackUrl?: string };
}) {
  const session = await auth();
  if (session) {
    // Validate the callback URL to prevent redirect loops
    const callbackUrl = searchParams.callbackUrl && !searchParams.callbackUrl.includes("/sign-in")
      ? searchParams.callbackUrl
      : "/";
    
    redirect(callbackUrl);
  }

  return (
    <div className="min-h-screen grid place-items-center p-4">
      <div className="w-full max-w-sm space-y-4">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">Welcome</h1>
          <p className="text-muted-foreground">Sign in or create an account to continue</p>
        </div>
        
        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="create">Create Account</TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <SignIn />
          </TabsContent>
          <TabsContent value="create">
            <CreateAccount />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
