import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen w-full justify-center items-center">
      <div className="max-w-md w-full border border-solid border-gray-400 rounded-xl px-10 pt-5 pb-8">
        <div className="flex flex-col gap-8 items-center">
          <h1 className="font-bold text-2xl text-orange-600">
            Hmm...this page doesn’t exist. Try searching for something else.
          </h1>
          <Link href="/">
            Go to home
          </Link>
        </div>
      </div>
    </main>
  );
}
