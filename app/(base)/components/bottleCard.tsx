import { IBottle } from "@/models/bottleModel";

interface BottleCardProps {
  bottle: IBottle;
  number: number;
}

export default function BottleCard({ bottle, number }: BottleCardProps) {
  return (
    <div className="p-1">
      <span className="px-1 mr-1">{number}</span>
      <span>{bottle.name}</span>
    </div>
  );
}
