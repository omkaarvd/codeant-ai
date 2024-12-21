import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";

const SAASSignInBtns = [
  {
    name: "Sign in with Github",
    icon: "/github.svg",
    href: "#",
  },
  {
    name: "Sign in with Bitbucket",
    icon: "/bitbucket.svg",
    href: "#",
  },
  {
    name: "Sign in with Azure Devops",
    icon: "/azure-devops.svg",
    href: "#",
  },
  {
    name: "Sign in with GitLab",
    icon: "/gitlab.svg",
    href: "#",
  },
];

const SelfHostedSignInBtns = [
  {
    name: "Self Hosted GitLab",
    icon: "/gitlab.svg",
    href: "#",
  },
  {
    name: "Sign in with SSO",
    icon: "/sso.svg",
    href: "#",
  },
];

export default function SignInPage() {
  return (
    <div className="grid min-h-screen md:grid-cols-2 grid-cols-1">
      <div className="relative hidden flex-col justify-between border-r bg-white p-10 text-white md:flex">
        <div className="relative z-20">
          <Card className="w-fit border-0 p-6 backdrop-blur shadow-lg">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="CodeAnt AI Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <h2 className="text-lg font-medium">
                AI to Detect & Autofix Bad Code
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold">30+</p>
                <p className="text-sm text-gray-200">Language Support</p>
              </div>

              <div>
                <p className="text-2xl font-bold">10K+</p>
                <p className="text-sm text-gray-200">Developers</p>
              </div>

              <div>
                <p className="text-2xl font-bold">100K+</p>
                <p className="text-sm text-gray-200">Hours Saved</p>
              </div>
            </div>
          </Card>

          <Card className="mt-4 w-fit border-0 p-6 shadow-lg backdrop-blur">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <div className="h-6 w-6 rounded-full bg-primary/90" />
              </div>

              <div>
                <p className="text-sm">Issues Fixed</p>
                <p className="text-2xl font-bold">500K+</p>
              </div>

              <div className="rounded-full bg-green-500/10 px-2 py-1 text-sm text-green-500">
                ↑ 14%
                <span className="ml-1 text-gray-200">This week</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className="container flex flex-col gap-6 items-center justify-center bg-gray-100">
        <Card className="max-w-xl space-y-8 mx-4">
          <div className="px-8 py-6 space-y-4">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 whitespace-nowrap">
                <Image src="/logo.svg" alt="Logo" width={24} height={24} />
                <span className="text-xl font-semibold">CodeAnt AI</span>
              </div>
              <h1 className="md:text-3xl text-2xl font-semibold tracking-tight whitespace-nowrap">
                Welcome to CodeAnt AI
              </h1>
            </div>

            <Tabs defaultValue="saas" className="w-full">
              <TabsList className="grid grid-cols-2 w-full">
                <TabsTrigger value="saas">SASS</TabsTrigger>
                <TabsTrigger value="self-hosted">Self Hosted</TabsTrigger>
              </TabsList>

              <TabsContent value="saas">
                <div className="md:px-16 py-6 space-y-3 flex flex-col">
                  {SAASSignInBtns.map((btn) => (
                    <Button key={btn.name} variant="outline" asChild>
                      <Link href={btn.href}>
                        <Image
                          src={btn.icon}
                          alt={btn.name}
                          width={18}
                          height={18}
                        />
                        {btn.name}
                      </Link>
                    </Button>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="self-hosted">
                <div className="md:px-16 py-6 space-y-3 flex flex-col">
                  {SelfHostedSignInBtns.map((btn) => (
                    <Button key={btn.name} variant="outline" asChild>
                      <Link href={btn.href}>
                        <Image
                          src={btn.icon}
                          alt={btn.name}
                          width={18}
                          height={18}
                        />
                        {btn.name}
                      </Link>
                    </Button>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </Card>

        <p className="text-center text-xs md:text-sm text-muted-foreground">
          By signing up you agree to the{" "}
          <Link
            href="#"
            className="font-semibold underline-offset-4 hover:text-primary"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
