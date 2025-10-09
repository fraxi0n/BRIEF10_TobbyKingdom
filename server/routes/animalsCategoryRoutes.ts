import { Router } from "express";
import { AnimalsCategoryController } from "../controllers/AnimalsCategoryController";

const animalsCategoryRouter = Router();

// BROWSE
animalsCategoryRouter.get("/", (request, response) => {
  const controller = new AnimalsCategoryController(request, response);
  controller.browseAnimalsCategory();
});


// READ
// productRouter.get("/target/:id", (request, response) => {
//   const controller = new AnimalsCategoryController(request, response);
//    controller.readProduct();
// });

export default animalsCategoryRouter;
