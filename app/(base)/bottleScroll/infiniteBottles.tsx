"use client";
import { useEffect, useRef, useState } from "react";

import { IBottle } from "@/models/bottle";
import Spinner from "@/components/spinner";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { IBottleResponse } from "@/lib/bottles";
import BottleCard from "../components/bottleCard";

interface InfiniteBottlesProps {
  initialBottles: IBottle[] | [];
  fetchNextPage: (page: number) => Promise<IBottleResponse>;
  totalPages?: number;
}

export default function InfiniteBottles({
  initialBottles,
  fetchNextPage,
  totalPages,
}: InfiniteBottlesProps) {
  const [bottles, setBottles] = useState(initialBottles);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const endOfBottlesRef = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(endOfBottlesRef, {});
  const isVisible = !!entry?.isIntersecting;

  useEffect(() => {
    const updateBottles = async () => {
      if (isLoading || page + 1 === totalPages) {
        return;
      }

      setIsLoading(true);
      const newData = await fetchNextPage(page);
      const newBottles = newData.bottles;
      setIsLoading(false);

      if (newBottles && newBottles.length > 0) {
        setPage(page + 1);
        setBottles([...bottles, ...newBottles]);
      }
    };

    if (isVisible) {
      updateBottles().catch();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap gap-2 justify-center">
        {bottles.map((bottle, index) => (
          <BottleCard key={index} bottle={bottle} number={index} />
        ))}
        <div ref={endOfBottlesRef}></div>
      </div>
      {isLoading && (
        <div className="flex justify-center align-center mt-2">
          <Spinner />
        </div>
      )}
    </div>
  );
}
