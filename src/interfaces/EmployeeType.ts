import { ObjectId } from "mongoose";

export interface IEmployeeType {
  _id?: ObjectId | String;
  name: String;
  salary: number;
}
