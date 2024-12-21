import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUp } from "lucide-react";
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
      <div className="hidden flex-col justify-center items-center border-r p-8 md:flex">
        <div className="relative -mt-36">
          <Card className="z-0 shadow-lg max-w-lg rounded-3xl">
            <CardHeader className="border-b">
              <div className="flex items-center gap-3">
                <Image src="/logo.svg" alt="Logo" width={30} height={30} />
                <h1 className="text-xl font-semibold text-navy-900">
                  AI to Detect & Autofix Bad Code
                </h1>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-xl font-bold text-navy-900">30+</div>
                  <div className="text-gray-600 text-sm mt-1">
                    Language Support
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-navy-900">10K+</div>
                  <div className="text-gray-600 text-sm mt-1">Developers</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-navy-900">100K+</div>
                  <div className="text-gray-600 text-sm mt-1">Hours Saved</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="absolute -bottom-40 -right-6 shadow-lg z-10 rounded-3xl">
            <CardContent className="p-6 flex flex-row justify-between items-start gap-16">
              <div className="flex flex-col items-start gap-2">
                <Image
                  src="/pie-purple.svg"
                  alt="Logo"
                  width={54}
                  height={54}
                />
                <div className="flex items-center justify-between mt-2">
                  <div className="text-sm font-semibold">Issues Fixed</div>
                </div>
                <div className="text-3xl font-bold text-navy-900">500K+</div>
              </div>
              <div>
                <div className="flex items-center text-sm font-bold text-primary">
                  <ArrowUp strokeWidth={3} className="size-4 mr-1" />
                  <span>14%</span>
                </div>
                <p className="text-xs text-gray-600 mt-1">This week</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Image
          src="/large-logo.svg"
          alt="Logo"
          width={126}
          height={126}
          className="absolute bottom-0 left-0 size-64 mb-4"
        />
      </div>

      <div className="container px-4 flex flex-col gap-6 items-center justify-center bg-gray-100">
        <Card className="max-w-xl w-full">
          <Tabs defaultValue="saas">
            <div className="p-6 pb-4 space-y-4 border-b-2">
              <div className="text-center space-y-6">
                <div className="flex items-center justify-center gap-2 whitespace-nowrap">
                  <Image src="/logo.svg" alt="Logo" width={24} height={24} />
                  <span className="text-xl font-semibold">CodeAnt AI</span>
                </div>
                <h1 className="md:text-2xl text-xl font-semibold tracking-tight whitespace-nowrap">
                  Welcome to CodeAnt AI
                </h1>
              </div>

              <TabsList className="grid grid-cols-2 w-full [&>[data-state=active]]:bg-primary [&>[data-state=active]]:text-white p-0 h-fit border">
                <TabsTrigger
                  value="saas"
                  className="font-semibold rounded-md py-3"
                >
                  SAAS
                </TabsTrigger>
                <TabsTrigger
                  value="self-hosted"
                  className="font-semibold rounded-md py-3"
                >
                  Self Hosted
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="p-6 pt-0">
              <TabsContent value="saas">
                <div className="md:px-16 pt-4 space-y-3 flex flex-col">
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
                <div className="md:px-16 pt-4 space-y-3 flex flex-col">
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
            </div>
          </Tabs>
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
