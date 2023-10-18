import connectDB from "@/lib/connect-db";
import Bottle from "@/models/bottleModel";

export default async function BottleList() {
  await connectDB();

  const bottles = await Bottle.find().skip(10).limit(20);

  return (
    <div className="flex flex-col items-center h-screen">
      <h2>Bottle List</h2>
      <ul>
        {bottles &&
          bottles.map((bottle) => <li key={bottle.id}>{bottle.name}</li>)}
      </ul>
    </div>
  );
}
