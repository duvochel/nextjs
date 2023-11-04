import mongoose from "mongoose";

export interface IBottle {
  id: mongoose.Schema.Types.ObjectId;
  name: string;
  color: string;
  quantity: string;
  price: string;
  vintage: string;
  region: string;
  image: string;
}

const bottleShema = new mongoose.Schema<IBottle>({
  id: { type: mongoose.Schema.Types.ObjectId, ref: "id" },
  name: {
    type: String,
    default: "unknown",
    required: true,
  },
  color: String,
  quantity: String,
  price: String,
  vintage: String,
  region: String,
  image: String,
});

const Bottle = mongoose.model("Bottle", bottleShema);

export default Bottle;
