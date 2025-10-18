import { Router } from "express";
import { ProductController } from "../controllers/ProductController";

const productRouter = Router();

// BROWSE
productRouter.get("/", (request, response) => {
  const controller = new ProductController(request, response);
  controller.browseProducts();
});

//browse with race
productRouter.get("/animals-category/:id", (request, response) => {
  const controller = new ProductController(request, response);
  controller.browseProductsFromRace();
});

// READ
productRouter.get("/target/:id", (request, response) => {
  const controller = new ProductController(request, response);
  controller.readProduct();
});


productRouter.get("/new", (request, response) => {
  const controller = new ProductController(request, response);
  controller.browseNewProducts();
});




export default productRouter;
