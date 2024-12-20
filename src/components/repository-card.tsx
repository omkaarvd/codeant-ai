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
    <div className="border-b p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="font-medium">{name}</h3>
          <span
            className={`rounded-full px-2 py-0.5 text-xs ${
              isPublic
                ? "bg-blue-100 text-blue-700"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {isPublic ? "Public" : "Private"}
          </span>
        </div>
      </div>
      <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-blue-500"></span>
          {language}
        </div>
        <div>{size}</div>
        <div>Updated {updatedAt}</div>
      </div>
    </div>
  );
}
