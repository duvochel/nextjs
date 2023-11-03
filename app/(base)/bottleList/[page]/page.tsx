import { notFound } from "next/navigation";

import { getBottles } from "@/lib/bottles";
import PaginationButton from "../components/paginationButton";

export default async function Page({ params }: { params: { page: string } }) {
  const currentPage = parseInt(params.page);
  const data = await getBottles({ page: currentPage });
  if (!data.bottles) {
    notFound();
  }

  return (
    <>
      <ul>
        {data.bottles?.map((bottle, index) => (
          <li key={index}>{bottle.name}</li>
        ))}
      </ul>
      <PaginationButton page={currentPage} total={data.totalPages} />
    </>
  );
}
