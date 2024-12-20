export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return <div className="text-xl font-semibold p-4">{slug}</div>;
}
