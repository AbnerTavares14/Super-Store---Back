import { Router } from 'express';
import { getProductsOfCart, addToCart, updateQuantity } from "../controllers/cartController.js";
import { validateToken } from '../middlewares/validate.js';

const cartRouter = Router();

cartRouter.use(validateToken);

cartRouter.post("/add-to-cart", addToCart);
cartRouter.get("/cart", getProductsOfCart);
cartRouter.put("/cart", updateQuantity);

export default cartRouter;