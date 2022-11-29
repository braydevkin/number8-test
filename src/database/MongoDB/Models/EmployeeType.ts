import mongoose, { Schema, Model } from "mongoose";
import { IEmployeeType } from "../../../interfaces";

const EmployeeTypeSchema = new Schema<IEmployeeType>(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      auto: true,
    },
    name: {
      type: String,
      required: true,
      enum: ["MANAGER", "ACCOUNTANT", "CLERK"],
    },
    salary: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

export const EmployeeTypeModel = (mongoose.models.EmployeeType ||
  mongoose.model("EmployeeType", EmployeeTypeSchema)) as Model<IEmployeeType>;
