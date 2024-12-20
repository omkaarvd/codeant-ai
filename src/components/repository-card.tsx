import { ClockIcon, Database } from "lucide-react";
import Link from "next/link";

interface RepositoryCardProps {
  name: string;
  language: string;
  size: string;
  updatedAt: string;
  isPublic: boolean;
}

export function RepositoryCard({
  name,
  language,
  size,
  updatedAt,
  isPublic,
}: RepositoryCardProps) {
  return (
    <Link href={`/repository/${name}`}>
      <div className="border-t p-4 hover:bg-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold">{name}</h3>
            <span className="rounded-full px-2 py-0.5 text-xs bg-blue-50 border border-blue-600 text-blue-600">
              {isPublic ? "Public" : "Private"}
            </span>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-blue-500"></span>
            {language}
          </div>
          <div className="flex items-center gap-1">
            <Database className="size-3" />
            <span>{size}</span>
          </div>
          <div className="flex items-center gap-1">
            <ClockIcon className="size-3" />
            <span>Updated {updatedAt}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
