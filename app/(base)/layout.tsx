import AppHeader from "@/components/appHeader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <AppHeader />
      <main className="relative flex flex-col items-center justify-between p-8">
        {children}
      </main>
    </div>
  );
}
