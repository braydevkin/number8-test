import mongoose, { Schema, Model } from "mongoose";
import { IShop } from "../../../interfaces";

const ShopSchema = new Schema<IShop>(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      auto: true,
    },
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    telephone: {
      type: Number,
      required: true,
    },
    employees: [
      { type: Schema.Types.ObjectId, ref: "Employee", required: false },
    ],
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

export const ShopModel = (mongoose.models.Shop ||
  mongoose.model("Shop", ShopSchema)) as Model<IShop>;
