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

    const bottles = await Bottle.find().skip(skip).limit(limit).lean().exec();

    const results = bottles.length;

    return {
      bottles: bottles,
      page,
      limit,
      results,
    };
  } catch (error) {
    return { error };
  }
}
