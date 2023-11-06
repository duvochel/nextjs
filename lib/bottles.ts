"use server";
import Bottle, { IBottle } from "../models/bottle";
import connectDB from "./connect-db";

interface BottleFilter {
  page?: number;
  limit?: number;
}

export interface IBottleResponse {
  bottles?: IBottle[];
  totalPages?: number;
  results?: number;
  totalBottles?: number;
  error?: any;
}

export async function getBottles(filter: BottleFilter = {}) {
  try {
    await connectDB();
    const page = filter.page ?? 1;
    const limit = filter.limit ?? 10;
    const skip = (page - 1) * limit;

    const totalBottles = await Bottle.estimatedDocumentCount();
    const totalPages = totalBottles ? Math.ceil(totalBottles / 10) : 0;

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
      vintage: entity.vintage,
      region: entity.region,
      image: entity.image,
    }));
    const results = bottles?.length;

    return { bottles, totalPages, results, totalBottles };
  } catch (error) {
    return { error };
  }
}
