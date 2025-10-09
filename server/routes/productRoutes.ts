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





//INUTILISEE POUR LE MOMENT =>

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



export default productRouter;
