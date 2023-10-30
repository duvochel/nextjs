"use client";

export default function Error() {
  return (
    <main className="flex h-full w-full justify-center items-center">
      <div className="max-w-md w-full border border-solid border-gray-400 rounded-xl px-10 pt-5 pb-8">
        <div className="flex flex-col gap-8 items-center">
          <h1 className="font-bold text-3xl text-white">
            Something went wrong!
          </h1>
        </div>
      </div>
    </main>
  );
}
