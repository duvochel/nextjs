"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AppHeader() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  return (
    <header className="flex gap-3 justify-center">
      {!isHomePage && <Link href="/">Home</Link>}
      <Link href="/bottleList">Bottle List</Link>
    </header>
  );
}
