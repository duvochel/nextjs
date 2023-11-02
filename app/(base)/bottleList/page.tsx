import { Suspense } from "react";

import connectDB from "@/lib/connect-db";
import Bottle from "@/models/bottleModel";
import BottleListPagination from "./components/bottleListPagination";
import Spinner from "@/components/spinner";

async function getBottles() {
  "use server";
  await connectDB();
  return Bottle.find();
}

export default async function BottleList() {
  const bottles = await getBottles();

  return (
    <div className="flex flex-col items-center h-screen">
      <h2 className="text-lg text-primary my-2">Bottle List</h2>
      <Suspense fallback={<Spinner />}>
        <BottleListPagination bottleList={bottles} />
      </Suspense>
    </div>
  );
}
