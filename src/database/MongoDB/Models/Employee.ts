import mongoose, { Schema, Model } from "mongoose";

import { IEmployee } from "../../../interfaces";

const EmployeeSchema = new Schema<IEmployee>(
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
    type: [{ type: Schema.Types.ObjectId, ref: "EmployeeType" }],
    telephone: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    employmentDate: {
      type: Date,
      required: true,
      default: Date.now(),
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

export const EmployeeModel = (mongoose.models.Employee ||
  mongoose.model("Employee", EmployeeSchema)) as Model<IEmployee>;
