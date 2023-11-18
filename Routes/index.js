import { Router } from "express";
import authRoutes from "./../Routes-2/Auth.routes.js";
import productRoutes from "./../Routes-2/Product.routes.js";


const router = Router();

router.use("/auth", authRoutes)
router.use("/product", productRoutes)


export default router;