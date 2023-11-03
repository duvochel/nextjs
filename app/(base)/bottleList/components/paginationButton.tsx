"use client";
import Button from "@/components/button";
import { useRouter } from "next/navigation";

interface PaginationButtonProps {
  page: number;
  total: number;
}

export default function PaginationButton({
  page,
  total,
}: PaginationButtonProps) {
  const router = useRouter();

  const handleNext = () => {
    router.push(`/bottleList?page=${page + 1}`);
  };

  const handlePrevious = () => {
    if (page > 1) {
      router.push(`/bottleList?page=${page - 1}`);
    }
  };

  return (
    <div className="flex items-center justify-center mt-10">
      <Button onClick={handlePrevious} disabled={page < 2}>
        Previous
      </Button>
      <p className="text-gray-800 dark:text-gray-200">
        Page {page} of {total}
      </p>
      <Button onClick={handleNext} disabled={page === total}>Next</Button>
    </div>
  );
}
