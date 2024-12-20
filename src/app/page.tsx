import { RepositoryCard } from "@/components/repository-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RefreshCw, Plus } from "lucide-react";

const repositories = [
  {
    name: "design-system",
    language: "React",
    size: "7320 KB",
    updatedAt: "1 day ago",
    isPublic: true,
  },
  {
    name: "codeant-ci-app",
    language: "Javascript",
    size: "5871 KB",
    updatedAt: "2 days ago",
    isPublic: false,
  },
  {
    name: "analytics-dashboard",
    language: "Python",
    size: "4521 KB",
    updatedAt: "5 days ago",
    isPublic: false,
  },
  {
    name: "mobile-app",
    language: "Swift",
    size: "3096 KB",
    updatedAt: "3 days ago",
    isPublic: true,
  },
  {
    name: "e-commerce-platform",
    language: "Java",
    size: "6210 KB",
    updatedAt: "6 days ago",
    isPublic: false,
  },
  {
    name: "blog-website",
    language: "HTML/CSS",
    size: "1876 KB",
    updatedAt: "4 days ago",
    isPublic: true,
  },
  {
    name: "social-network",
    language: "PHP",
    size: "5432 KB",
    updatedAt: "7 days ago",
    isPublic: false,
  },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen">
      <main className="flex-1">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">Repositories</h1>
                <p className="text-sm text-gray-500">33 total repositories</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Refresh All
                </Button>
                <Button size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Repository
                </Button>
              </div>
            </div>
            <div className="relative">
              <Input
                type="search"
                placeholder="Search Repositories"
                className="max-w-xl"
              />
            </div>
            <div className="divide-y rounded-lg border">
              {repositories.map((repo) => (
                <RepositoryCard key={repo.name} {...repo} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
