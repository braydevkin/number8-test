import { Model } from "mongoose";
import { ICrud, IEmployeeType } from "../../interfaces";

export class EmployeeTypeService implements ICrud<IEmployeeType> {
  private EmployeeTypeModel: Model<IEmployeeType>;

  constructor(employeeTypeModel: Model<IEmployeeType>) {
    this.EmployeeTypeModel = employeeTypeModel;
  }

  async create(data: IEmployeeType): Promise<IEmployeeType> {
    return await this.EmployeeTypeModel.create(data)
      .then((data) => {
        return data as IEmployeeType;
      })
      .catch((err) => err);
  }

  async get(_id: String): Promise<IEmployeeType> {
    const got = await this.EmployeeTypeModel.findById(_id);
    if (got) return got;
    throw new Error("Get EmployeeType failed");
  }

  async getMany(filters: IEmployeeType): Promise<IEmployeeType[]> {
    const obtainedMany = await this.EmployeeTypeModel.find(filters);
    if (obtainedMany) return obtainedMany;
    throw new Error("GetMany EmployeeType failed");
  }

  async update(_id: String, data: IEmployeeType): Promise<IEmployeeType> {
    const updated = await this.EmployeeTypeModel.findByIdAndUpdate(_id, data, {
      new: true,
    });
    if (updated) return updated;
    throw new Error("Update EmployeeType failed");
  }

  async delete(_id: String): Promise<boolean> {
    const deleted = await this.EmployeeTypeModel.findOneAndDelete(_id);
    if (deleted) return true;
    throw new Error("Delete EmployeeType failed");
  }
}
