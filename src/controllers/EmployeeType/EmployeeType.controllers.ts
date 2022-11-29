import { EmployeeTypeModel } from "../../database/MongoDB/Models/EmployeeType";
import { ICrud, IEmployeeType } from "../../interfaces";
import { EmployeeTypeService } from "../../services/EmployeeType/EmployeeType.service";

export class EmployeeTypeController implements ICrud<IEmployeeType> {
  private EmployeeTypeService = new EmployeeTypeService(EmployeeTypeModel);

  async create(data: IEmployeeType): Promise<IEmployeeType> {
    const validatedData: IEmployeeType = {
      ...data,
      name: String(data.name).toUpperCase(),
    };

    const created = await this.EmployeeTypeService.create(validatedData);
    console.log(created);
    if (created) {
      return created as IEmployeeType;
    }
    throw new Error("Create EmployeeType failed");
  }

  async get(_id: String): Promise<IEmployeeType> {
    const got = await this.EmployeeTypeService.get(_id);
    if (got) return got;
    throw new Error("Get EmployeeType failed");
  }
  async getMany(filters: IEmployeeType): Promise<IEmployeeType[]> {
    const obtainedMany = await this.EmployeeTypeService.getMany(filters);
    if (obtainedMany) return obtainedMany;
    throw new Error("GetMany EmployeeType failed");
  }
  async update(_id: String, data: IEmployeeType): Promise<IEmployeeType> {
    const updated = await this.EmployeeTypeService.update(_id, data);
    if (updated) return updated;
    throw new Error("Update EmployeeType failed");
  }
  async delete(_id: String): Promise<boolean> {
    const deleted = await this.EmployeeTypeService.delete(_id);
    if (deleted) return true;

    throw new Error("Delete EmployeeType failed");
  }
}
