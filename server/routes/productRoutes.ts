import { Router } from "express";
import { ProductController } from "../controllers/ProductController";

const productRouter = Router();

// BROWSE
productRouter.get("/", (request, response) => {
  const controller = new ProductController(request, response);
  controller.browseProducts();
});

// EDIT

productRouter.post("/edit/:id", (request, response) => {
  const controller = new ProductController(request, response);
  controller.editProductSubmission();
});

// ADD
productRouter.post("/create", (request, response) => {
  const controller = new ProductController(request, response);
  controller.createProductSubmission();
});

// DELETE
productRouter.get("/delete/:id", (request, response) => {
  const controller = new ProductController(request, response);
  controller.deleteProduct();
});

// READ
productRouter.get("/target/:id", (request, response) => {
  const controller = new ProductController(request, response);
  controller.readProduct();
});

export default productRouter;
