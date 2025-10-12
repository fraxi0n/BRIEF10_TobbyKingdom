import { Router } from "express";
import { ProductController } from "../controllers/ProductController";
import { OrderController } from "../controllers/orderController";

const orderRouter = Router();

// add
orderRouter.post("/create", (request, response) => {
  const controller = new OrderController(request, response);
  controller.createOrder();
});







export default orderRouter;
