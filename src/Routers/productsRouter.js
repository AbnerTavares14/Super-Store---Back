import { Router } from "express";
import { singleProduct, addProducts, getAllProducts , deleteItem} from "../controllers/productsController.js";

const productsRouter = Router();
productsRouter.get("/products/:productId", singleProduct);
productsRouter.post("/products", addProducts);
productsRouter.get("/products", getAllProducts);
productsRouter.delete("/products/:idProduct", deleteItem);


export default productsRouter;
