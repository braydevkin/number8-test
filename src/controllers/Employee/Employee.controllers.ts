import { EmployeeModel } from "../../database/MongoDB/Models/Employee";
import { ICrud, IEmployee } from "../../interfaces";
import { EmployeeService } from "../../services/Employee/Employee.service";

export class EmployeeController implements ICrud<IEmployee> {
  private EmployeeService = new EmployeeService(EmployeeModel);

  async create(data: IEmployee): Promise<IEmployee> {
    const created = await this.EmployeeService.create(data);
    if (created) {
      return created;
    }
    throw new Error("Create Employee failed");
  }

  async get(_id: String): Promise<IEmployee> {
    const got = await this.EmployeeService.get(_id);
    if (got) return got;
    throw new Error("Get Employee failed");
  }
  async getMany(filters: IEmployee): Promise<IEmployee[]> {
    const obtainedMany = await this.EmployeeService.getMany(filters);
    if (obtainedMany) return obtainedMany;
    throw new Error("GetMany Employee failed");
  }
  async update(_id: String, data: IEmployee): Promise<IEmployee> {
    const updated = await this.EmployeeService.update(_id, data);
    if (updated) return updated;
    throw new Error("Update Employee failed");
  }
  async delete(_id: String): Promise<boolean> {
    const deleted = await this.EmployeeService.delete(_id);
    if (deleted) return true;

    throw new Error("Delete Employee failed");
  }
}
