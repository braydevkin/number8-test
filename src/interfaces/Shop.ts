import { ObjectId } from "mongoose";
import { IEmployee } from "./Employee";

export interface IShop {
  _id: String | ObjectId;
  name: String;
  address: String;
  telephone: number;
  employees?: IEmployee[];
}
