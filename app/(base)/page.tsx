import Link from "next/link";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/OB3mcqoi51u
 */
export default function Home() {
  return (
    <>
      <section className="w-full py-4 md:py-8 lg:py-12">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter">
              Manage Your Wine Cellar Effortlessly
            </h1>
            <p className="max-w-[600px] mx-auto text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
              Our app provides an intuitive and efficient way to manage your
              wine collection.
            </p>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-light shadow transition-colors hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 dark:focus-visible:ring-zinc-300"
              href="#"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-100 dark:bg-zinc-800">
        <div className="container px-4 md:px-6 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-2 text-center">
            <svg
              className=" mx-auto h-12 w-12 text-zinc-900 dark:text-zinc-50"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect height="5" rx="1" width="20" x="2" y="3" />
              <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
              <path d="M10 12h4" />
            </svg>
            <h2 className="text-lg font-bold">Organize</h2>
            <p className="text-zinc-500 dark:text-zinc-400">
              Keep your collection neatly organized and accessible.
            </p>
          </div>
          <div className="space-y-2 text-center">
            <svg
              className=" mx-auto h-12 w-12 text-zinc-900 dark:text-zinc-50"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <h2 className="text-lg font-bold">Search</h2>
            <p className="text-zinc-500 dark:text-zinc-400">
              Find any bottle in your collection in seconds.
            </p>
          </div>
          <div className="space-y-2 text-center">
            <svg
              className=" mx-auto h-12 w-12 text-zinc-900 dark:text-zinc-50"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="12" x2="12" y1="20" y2="10" />
              <line x1="18" x2="18" y1="20" y2="4" />
              <line x1="6" x2="6" y1="20" y2="16" />
            </svg>
            <h2 className="text-lg font-bold">Analyze</h2>
            <p className="text-zinc-500 dark:text-zinc-400">
              Get insights about your wine preferences over time.
            </p>
          </div>
          <div className="space-y-2 text-center">
            <svg
              className=" mx-auto h-12 w-12 text-zinc-900 dark:text-zinc-50"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
              <polyline points="16 6 12 2 8 6" />
              <line x1="12" x2="12" y1="2" y2="15" />
            </svg>
            <h2 className="text-lg font-bold">Share</h2>
            <p className="text-zinc-500 dark:text-zinc-400">
              Share your collection with friends and fellow wine lovers.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 space-y-12">
          <h2 className="text-3xl font-bold tracking-tighter text-center">
            What Our Customers Say
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <blockquote className="p-4 bg-zinc-100 rounded-lg dark:bg-zinc-800">
              <p className="text-zinc-500 dark:text-zinc-400">
                “This app has revolutionized the way I manage my wine cellar.”
              </p>
              <footer className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">
                - Jane Doe
              </footer>
            </blockquote>
            <blockquote className="p-4 bg-zinc-100 rounded-lg dark:bg-zinc-800">
              <p className="text-zinc-500 dark:text-zinc-400">
                “I love the analytics feature. It&apos;s nice to see my preferences
                visually represented.”
              </p>
              <footer className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">
                - John Smith
              </footer>
            </blockquote>
            <blockquote className="p-4 bg-zinc-100 rounded-lg dark:bg-zinc-800">
              <p className="text-zinc-500 dark:text-zinc-400">
                “Sharing my collection with friends has never been easier.
                Highly recommend!”
              </p>
              <footer className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">
                - Alice Johnson
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
      <footer className="w-full py-6 bg-zinc-900 dark:bg-zinc-50">
        <div className="container px-4 md:px-6 flex items-center justify-between text-zinc-50 dark:text-zinc-900">
          <div>© WineCellar App</div>
          <nav className="flex gap-4">
            <Link href="#">
              <svg
                className=" h-6 w-6"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#">
              <svg
                className=" h-6 w-6"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#">
              <svg
                className=" h-6 w-6"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="sr-only">Instagram</span>
            </Link>
          </nav>
        </div>
      </footer>
    </>
  );
}
