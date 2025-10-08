import { Router } from "express";
import productRouter from "./productRoutes";

const router = Router();

 router.use('/api/products', productRouter);


export default router;
