import { Router } from 'express';
import { getProductsOfCart, addToCart, updateQuantity, deleteItemFromCart, deleteCart} from "../controllers/cartController.js";
import { validateToken } from '../middlewares/validate.js';

const cartRouter = Router();

cartRouter.use(validateToken);

cartRouter.post("/add-to-cart", addToCart);
cartRouter.get("/cart", getProductsOfCart);
cartRouter.put("/cart", updateQuantity);
cartRouter.delete("/cart", deleteCart);
cartRouter.delete("/delete-cart-item/:productId", deleteItemFromCart)

export default cartRouter;