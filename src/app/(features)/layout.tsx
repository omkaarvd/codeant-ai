import { Sidebar } from "@/components/sidebar";

export default function FeaturesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 mt-12 md:ml-[17rem] md:m-4 md:rounded-lg md:border bg-white">
        {children}
      </main>
    </div>
  );
}
