export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative flex flex-col min-h-screen items-center justify-between p-8">
      {children}
    </main>
  );
}
