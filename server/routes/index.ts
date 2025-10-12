import { Router } from "express";
import productRouter from "./productRoutes";
import animalsCategoryRouter from "./animalsCategoryRoutes";
import orderRouter from "./orderRoutes";

const router = Router();

 router.use('/api/products', productRouter);
 router.use('/api/animals-categories', animalsCategoryRouter);
 router.use('/api/order', orderRouter);


export default router;
