import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <header className="flex gap-3 justify-center">
        <Link href="/">Home</Link>
        <Link href="/bottleList">Bottle List</Link>
      </header>
      <main className="relative flex flex-col items-center justify-between p-24">
        {children}
      </main>
    </div>
  );
}
