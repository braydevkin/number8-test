import { Model } from "mongoose";
import { ICrud, IEmployee } from "../../interfaces";

export class EmployeeService implements ICrud<IEmployee> {
  private EmployeeModel: Model<IEmployee>;

  constructor(employeeModel: Model<IEmployee>) {
    this.EmployeeModel = employeeModel;
  }

  async create(data: IEmployee): Promise<IEmployee> {
    const created = await this.EmployeeModel.create(data);
    if (created) return created;
    throw new Error("Create Employee failed");
  }

  async get(_id: String): Promise<IEmployee> {
    const got = await this.EmployeeModel.findById(_id).populate("type");
    if (got) return got;
    throw new Error("Get Employee failed");
  }

  async getMany(filters: IEmployee): Promise<IEmployee[]> {
    const obtainedMany = await this.EmployeeModel.find(filters).populate(
      "type"
    );
    if (obtainedMany) return obtainedMany;
    throw new Error("GetMany Employee failed");
  }

  async update(_id: String, data: IEmployee): Promise<IEmployee> {
    const updated = await this.EmployeeModel.findByIdAndUpdate(_id, data, {
      new: true,
    });
    if (updated) return updated;
    throw new Error("Update Employee failed");
  }

  async delete(_id: String): Promise<boolean> {
    const deleted = await this.EmployeeModel.findOneAndDelete(_id);
    if (deleted) return true;
    throw new Error("Delete Employee failed");
  }
}
