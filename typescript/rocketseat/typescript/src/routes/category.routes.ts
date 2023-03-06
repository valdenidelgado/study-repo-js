import { Router } from "express";
import { listCategoryController } from "../modules/cars/useCases/listCategory";
import { createCategoryController } from "../modules/cars/useCases/createCategory";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) => {
  return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
  return listCategoryController.handle(req, res);
});

export { categoriesRoutes };
