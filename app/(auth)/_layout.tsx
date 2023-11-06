export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <main className="relative flex flex-col items-center justify-between p-8">
        {children}
      </main>
    </div>
  );
}
