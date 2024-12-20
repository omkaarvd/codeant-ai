import { RepositoryCard } from "@/components/repository-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, RefreshCw, Search } from "lucide-react";

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
  {
    name: "machine-learning-model",
    language: "Python",
    size: "8765 KB",
    updatedAt: "2 days ago",
    isPublic: true,
  },
  {
    name: "ios-app",
    language: "Swift",
    size: "4321 KB",
    updatedAt: "1 day ago",
    isPublic: false,
  },
  {
    name: "android-app",
    language: "Kotlin",
    size: "5678 KB",
    updatedAt: "3 days ago",
    isPublic: true,
  },
  {
    name: "data-visualization",
    language: "JavaScript",
    size: "3210 KB",
    updatedAt: "4 days ago",
    isPublic: true,
  },
  {
    name: "backend-api",
    language: "Node.js",
    size: "2345 KB",
    updatedAt: "6 days ago",
    isPublic: false,
  },
  {
    name: "frontend-framework",
    language: "TypeScript",
    size: "6789 KB",
    updatedAt: "5 days ago",
    isPublic: true,
  },
  {
    name: "database-migration",
    language: "SQL",
    size: "1234 KB",
    updatedAt: "2 days ago",
    isPublic: false,
  },
  {
    name: "devops-scripts",
    language: "Shell",
    size: "987 KB",
    updatedAt: "1 day ago",
    isPublic: true,
  },
];

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col gap-6 p-4">
        <div className="flex md:flex-row flex-col gap-2 items-start justify-between">
          <div className="flex flex-col items-start gap-1">
            <h1 className="text-2xl font-bold">Repositories</h1>
            <p className="text-sm text-gray-500">
              {repositories.length} total repositories
            </p>
          </div>
          <div className="flex gap-2 flex-row">
            <Button variant="outline" size="sm" className="text-xs">
              <RefreshCw className="size-4" />
              Refresh All
            </Button>
            <Button size="sm" className="text-xs">
              <Plus className="size-4" />
              Add Repository
            </Button>
          </div>
        </div>

        <div className="relative max-w-xl">
          <Input
            type="search"
            placeholder="Search Repositories"
            className="pl-10 pr-4 w-full"
          />
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      <div>
        {repositories.map((repo) => (
          <RepositoryCard key={repo.name} {...repo} />
        ))}
      </div>
    </>
  );
}
