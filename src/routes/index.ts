import express from "express";

import employeeTypeRoutes from "./EmployeeType.routes";
import employeeRoutes from "./Employee.routes";
import shopRoutes from "./Shop.routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/employee-types", employeeTypeRoutes);
app.use("/employees", employeeRoutes);
app.use("/shops", shopRoutes);

export default app;
