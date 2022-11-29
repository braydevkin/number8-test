import { Request, Response, Router } from "express";
import { EmployeeTypeController } from "../controllers/EmployeeType/EmployeeType.controllers";
import { IEmployeeType } from "../interfaces";

const router = Router();

const employeeTypeController = new EmployeeTypeController();

router.post("/", async (request: Request, response: Response) => {
  const data = request.body;

  const result = await employeeTypeController.create(data);

  if (result) {
    return response.json({
      statusCode: 201,
      data: result,
    });
  }
});

router.get("/:_id", async (request: Request, response: Response) => {
  const params = request.params;

  const result = await employeeTypeController.get(params._id);

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

  const result = await employeeTypeController.getMany(
    query as unknown as IEmployeeType
  );

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

  const result = await employeeTypeController.update(params._id, data);

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

  const deleted = await employeeTypeController.delete(params._id);

  if (deleted) {
    return response.json({
      statusCode: 204,
      data: "Employee Type Deleted Successfully",
    });
  }
  return response.status(400).send({ error: "Delete failed" });
});

export default router;
