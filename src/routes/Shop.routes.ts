import { Request, Response, Router } from "express";
import { ShopController } from "../controllers/Shop/Shop.controllers";
import { IShop } from "../interfaces";

const router = Router();

const shopController = new ShopController();

router.post("/", async (request: Request, response: Response) => {
  const data = request.body;

  const result = await shopController.create(data);

  if (result) {
    return response.json({
      statusCode: 201,
      data: result,
    });
  }
  return;
});

router.get("/:_id", async (request: Request, response: Response) => {
  const params = request.params;

  const result = await shopController.get(params._id);

  if (result) {
    return response.json({
      statusCode: 200,
      data: result,
    });
  }
  return response.status(400).send({ error: "Get failed" });
});

router.get("/", async (request: Request, response: Response) => {
  const query = request.query;

  const result = await shopController.getMany(query as unknown as IShop);

  if (result) {
    return response.json({
      statusCode: 200,
      data: result,
    });
  }
  return response.status(400).send({ error: "GetMany failed" });
});

router.put("/:_id", async (request: Request, response: Response) => {
  const params = request.params;
  const data = request.body;

  const result = await shopController.update(params._id, data);

  if (result) {
    return response.json({
      statusCode: 200,
      data: result,
    });
  }
  return response.status(400).send({ error: "Update failed" });
});

router.delete("/:_id", async (request: Request, response: Response) => {
  const params = request.params;

  const deleted = await shopController.delete(params._id);

  if (deleted) {
    return response.json({
      statusCode: 204,
      data: "Employee Type Deleted Successfully",
    });
  }
  return response.status(400).send({ error: "Delete failed" });
});

export default router;
