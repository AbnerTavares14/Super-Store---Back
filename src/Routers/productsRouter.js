import { Router } from "express";
import { singleProduct, addToCart } from "../controllers/productsController.js";

const authRouter = Router();
authRouter.get("/products/:productId", singleProduct);
authRouter.post("/add-to-cart", addToCart);


