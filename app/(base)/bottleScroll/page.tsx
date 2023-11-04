import { notFound } from "next/navigation";

import { getBottles } from "@/lib/bottles";
import InfiniteBottles from "./infiniteBottles";

export default async function BottleScroll() {
  const data = await getBottles({ limit: 30 });

  const fetchNextPage = async (page: number) => {
    "use server";
    return getBottles({ page: page, limit: 30 });
  };

  if (!data.bottles) {
    notFound();
  }

  return (
    <>
      <div>
        <span className="text-lg my-2">{data.totalBottles} bottles in stock</span>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        <InfiniteBottles
          initialBottles={data.bottles ? data.bottles : []}
          fetchNextPage={fetchNextPage}
          totalPages={data.totalPages}
        />
      </div>
    </>
  );
}
