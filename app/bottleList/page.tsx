import connectDB from "@/lib/connect-db";
import Bottle from "@/models/bottleModel";

export default async function BottleList() {
  await connectDB();
  const bottles = await Bottle.find().limit(10);
  return (
    <div className="flex flex-col center">
      <h2>Bottle List</h2>
      <ul>
        {bottles &&
          bottles.map((bottle) => <li key={bottle.id}>{bottle.name}</li>)}
      </ul>
    </div>
  );
}
