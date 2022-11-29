import { Model } from "mongoose";
import { ICrud, IShop } from "../../interfaces";

export class ShopService implements ICrud<IShop> {
  private ShopModel: Model<IShop>;

  constructor(shopModel: Model<IShop>) {
    this.ShopModel = shopModel;
  }

  async create(data: IShop): Promise<IShop> {
    const created = await this.ShopModel.create(data);
    if (created) return created;
    throw new Error("Create Shop failed");
  }

  async get(_id: String): Promise<IShop> {
    const got = await this.ShopModel.findById(_id).populate("employees");
    if (got) return got;
    throw new Error("Get Shop failed");
  }

  async getMany(filters: IShop): Promise<IShop[]> {
    const obtainedMany = await this.ShopModel.find(filters).populate(
      "employees"
    );
    if (obtainedMany) return obtainedMany;
    throw new Error("GetMany Shop failed");
  }

  async update(_id: String, data: IShop): Promise<IShop> {
    const updated = await this.ShopModel.findByIdAndUpdate(_id, data, {
      new: true,
    });
    if (updated) return updated;
    throw new Error("Update Shop failed");
  }

  async delete(_id: String): Promise<boolean> {
    const deleted = await this.ShopModel.findOneAndDelete(_id);
    if (deleted) return true;
    throw new Error("Delete Shop failed");
  }
}
