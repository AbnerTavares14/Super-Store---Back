import { Router } from "express";
import { buyProducts, getPurchasedItens } from "../controllers/buyController.js";
import { validateToken } from '../middlewares/validate.js';

const buyRouter = Router();

buyRouter.use(validateToken);
buyRouter.post("purchases", buyProducts);
buyRouter.get("purchases", getPurchasedItens);

export default buyRouter;