import { ObjectId } from "mongoose";
import { IEmployeeType } from "./EmployeeType";

export interface IEmployee {
  _id: String | ObjectId;
  name: String;
  type: IEmployeeType[];
  telephone: Number;
  address: String;
  employmentDate: Date;
}
