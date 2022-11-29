export interface ICrud<Entity> {
  create: (data: Entity) => Promise<Entity>;
  get?: (_id: String) => Promise<Entity>;
  getMany?: (filters: Entity) => Promise<Entity[]>;
  update?: (_id: String, data: Entity) => Promise<Entity>;
  delete?: (_id: String) => Promise<boolean>;
}
