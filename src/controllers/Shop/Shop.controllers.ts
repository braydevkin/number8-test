import { ShopModel } from "../../database/MongoDB/Models/Shop";
import { ICrud, IShop } from "../../interfaces";
import { ShopService } from "../../services/Shop/Shop.service";

export class ShopController implements ICrud<IShop> {
  private shopService = new ShopService(ShopModel);

  async create(data: IShop): Promise<IShop> {
    const created = await this.shopService.create(data);
    if (created) {
      return created;
    }
    throw new Error("Create Employee failed");
  }

  async get(_id: String): Promise<IShop> {
    const got = await this.shopService.get(_id);
    if (got) return got;
    throw new Error("Get Employee failed");
  }
  async getMany(filters: IShop): Promise<IShop[]> {
    const obtainedMany = await this.shopService.getMany(filters);
    if (obtainedMany) return obtainedMany;
    throw new Error("GetMany Employee failed");
  }
  async update(_id: String, data: IShop): Promise<IShop> {
    const updated = await this.shopService.update(_id, data);
    if (updated) return updated;
    throw new Error("Update Employee failed");
  }
  async delete(_id: String): Promise<boolean> {
    const deleted = await this.shopService.delete(_id);
    if (deleted) return true;

    throw new Error("Delete Employee failed");
  }
}
