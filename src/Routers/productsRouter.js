import { Router } from "express";
import { singleProduct, addToCart, addProducts, getAllProducts } from "../controllers/productsController.js";

const productsRouter = Router();
productsRouter.get("/products/:productId", singleProduct);
productsRouter.post("/add-to-cart", addToCart);
productsRouter.post("/products", addProducts);
productsRouter.get("/products", getAllProducts);

export default productsRouter;
