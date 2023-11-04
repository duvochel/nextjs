import Button from "@/components/button";
import { IBottle } from "@/models/bottleModel";
import Image from "next/image";

interface BottleCardProps {
  bottle: IBottle;
  number: number;
}

export default function BottleCard({ bottle, number }: BottleCardProps) {
  return (
    <div className="w-96 bg-white shadow-md rounded-md overflow-hidden dark:bg-zinc-800">
      <div className="flex items-center justify-between p-6 space-x-4">
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-2">
            <Image
              alt="Wine thumbnail"
              className="w-24 h-24 rounded-full"
              height="150"
              src={bottle.image}
              style={{
                aspectRatio: "150/150",
                objectFit: "cover",
              }}
              width="150"
            />
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              <span className="px-1 mr-1">{number}</span>
              {bottle.name}
            </p>
          </div>
          <p className="mt-1 text-sm text-gray-500 truncate dark:text-zinc-400">
            Type: {bottle.color}
          </p>
          <p className="mt-1 text-sm text-gray-500 truncate dark:text-zinc-400">
            Vintage: {bottle.vintage}
          </p>
          <p className="mt-1 text-sm text-gray-500 truncate dark:text-zinc-400">
            Price: {bottle.price}
          </p>
          <p className="mt-1 text-sm text-gray-500 truncate dark:text-zinc-400">
            In Stock: {bottle.quantity}
          </p>
        </div>
        <svg
          className=" flex-shrink-0 h-5 w-5 text-gray-400 dark:text-zinc-300"
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
          <circle cx="12" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
          <circle cx="5" cy="12" r="1" />
        </svg>
      </div>
      <div className="border-t border-gray-200 dark:border-zinc-700">
        <div className="flex justify-between px-4 py-3 bg-gray-50 dark:bg-zinc-700">
          <Button> Edit</Button>
          <Button> Delete</Button>
        </div>
      </div>
    </div>
  );
}
