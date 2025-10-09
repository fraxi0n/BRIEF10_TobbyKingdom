import { Router } from "express";
import productRouter from "./productRoutes";
import animalsCategoryRouter from "./animalsCategoryRoutes";

const router = Router();

 router.use('/api/products', productRouter);
 router.use('/api/animals-categories', animalsCategoryRouter);


export default router;
