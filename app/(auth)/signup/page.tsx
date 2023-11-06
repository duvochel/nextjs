import Button from "@/components/button";
import Link from "next/link";

export default function Signup() {
  return (
    <div className="flex flex-col px-10 py-5 bg-gray-100 dark:bg-gray-900 max-w-md mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
        Sign Up
      </h1>
      <form className="mt-10 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label
              className="mb-2 text-gray-700 dark:text-gray-300"
              htmlFor="firstname"
            >
              First Name
            </label>
            <input
              className="p-3 rounded shadow appearance-none bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              id="firstname"
              placeholder="John"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="mb-2 text-gray-700 dark:text-gray-300"
              htmlFor="lastname"
            >
              Last Name
            </label>
            <input
              className="p-3 rounded shadow appearance-none bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              id="lastname"
              placeholder="Doe"
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label
            className="mb-2 text-gray-700 dark:text-gray-300"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            className="p-3 rounded shadow appearance-none bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            id="email"
            placeholder="john@example.com"
            type="email"
          />
        </div>
        <div className="flex flex-col">
          <label
            className="mb-2 text-gray-700 dark:text-gray-300"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="p-3 rounded shadow appearance-none bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            id="password"
            placeholder="********"
            type="password"
          />
        </div>
        <Button
          className="w-full p-3 rounded bg-gray-800 text-white"
          type="submit"
        >
          Sign Up
        </Button>
      </form>
      <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
        Already have an account?
        <Link className="text-blue-500 hover:underline ml-1" href="/signin">
          Sign In
        </Link>
      </p>
    </div>
  );
}
