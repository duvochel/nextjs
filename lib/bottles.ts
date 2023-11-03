import Bottle from "../models/bottleModel";
import connectDB from "./connect-db";

interface BottleFilter {
  page?: number;
  limit?: number;
}

export async function getBottles(filter: BottleFilter = {}) {
  try {
    await connectDB();

    const page = filter.page ?? 1;
    const limit = filter.limit ?? 10;
    const skip = (page - 1) * limit;

    const totalBottles = await Bottle.find().estimatedDocumentCount();
    const totalPages = totalBottles ? Math.ceil(totalBottles / 10) : 1;

    const bottlesDocument = await Bottle.find()
      .skip(skip)
      .limit(limit)
      .lean()
      .exec();
      
    const bottles = bottlesDocument.map((entity) => ({
      id: entity.id,
      name: entity.name,
      color: entity.color,
      quantity: entity.quantity,
      price: entity.price,
    }));
    const results = bottles.length;

    return {
      bottles: bottles,
      totalPages,
      results,
    };
  } catch (error) {
    return { error };
  }
}
