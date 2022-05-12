import { Router } from "express";

import {getGames, 
getHealth, 
getEletro, 
getAccessories, 
getBooks, 
getFashion, 
getHome } 
from "../controllers/catergoryController.js";

const catergoryRouter=Router();

catergoryRouter.get("/games", getGames);
catergoryRouter.get("/health", getHealth);
catergoryRouter.get("/eletro", getEletro);
catergoryRouter.get("/accessories", getAccessories);
catergoryRouter.get("/books", getBooks);
catergoryRouter.get("/fashion", getFashion);
catergoryRouter.get("/home", getHome);

export default catergoryRouter;

