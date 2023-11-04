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
    <div className="flex flex-col justify-center">
      <InfiniteBottles
        initialBottles={data.bottles ? data.bottles : []}
        fetchNextPage={fetchNextPage}
        totalPages={data.totalPages}
      />
    </div>
  );
}
