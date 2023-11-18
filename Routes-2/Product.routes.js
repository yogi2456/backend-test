import Router from "express";
import { AddProducts, GetAllProducts } from "../Controllers/product.controllers.js";

const router = Router();

router.use("/get-all-product", GetAllProducts)
router.use("/add-product", AddProducts)

export default router;