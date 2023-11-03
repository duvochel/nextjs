"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AppHeader() {
  const pathname = usePathname();
  return (
    <header className="w-full p-4 flex items-center justify-between">
      <nav aria-label="Main Navigation" className="w-full h-16 shadow-md flex items-center px-4 md:px-6">
        <div className="flex items-center">
          <h1 className="ml-6 text-2xl font-bold tracking-tighter">WineCellar</h1>
        </div>
        <div className="ml-auto space-x-8 hidden md:flex">
          <Link className={`link ${pathname === '/' ? 'active' : ''} hover:text-zinc-500`} href="/">
            Home
          </Link>
          <Link className="hover:text-zinc-500" href="/bottleList/1">
            My Bottles
          </Link>
          <Link className="hover:text-zinc-500" href="#">
            Testimonials
          </Link>
        </div>
      </nav>
    </header>
  );
}
