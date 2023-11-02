"use client";
import Button from "@/components/button";
import { IBottle } from "@/models/bottleModel";
import { useState } from "react";

interface BottleListPaginationProps {
  bottleList: IBottle[];
}

export default function BottleListPagination({
  bottleList,
}: BottleListPaginationProps) {
  const nbPage = Math.ceil(bottleList.length / 10);

  const [index, setIndex] = useState(0);
  const currentPage = Math.ceil(index / 10);
  const range = 11;
  const visibleList = bottleList.slice(index, index + range);

  const handleNext = () => {
    if (bottleList.length >= index + range) {
      setIndex(index + range);
    }
  };
  const handlePrevious = () => {
    if (index - range >= 0) {
      setIndex(index - range);
    }
  };

  return (
    <div>
      <ul>
        {visibleList.map((bottle: IBottle, index) => (
          <li key={index}>{bottle.name}</li>
        ))}
      </ul>
      <div className="flex items-center justify-center mt-10">
        <Button onClick={handlePrevious}>Previous</Button>
        <p className="text-gray-800 dark:text-gray-200">
          Page {currentPage} of {nbPage}
        </p>
        <Button onClick={handleNext}>Next</Button>
      </div>
    </div>
  );
}
