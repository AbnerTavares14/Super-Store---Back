import express from 'express';
import cors from 'cors';
import authRouter from './src/Routers/authRouter.js';
import productsRouter from './src/Routers/productsRouter.js';
import cartRouter from './src/Routers/cartRouter.js';
import catergoryRouter from './src/Routers/categoryRouter.js';
import buyRouter from './src/Routers/buyRouter.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use(authRouter);
app.use(productsRouter);
app.use(catergoryRouter);
app.use(cartRouter);
app.use(buyRouter);

const PORTA = process.env.PORT || 5000;

app.listen(PORTA, () => {
    console.log("Server running on port " + process.env.PORT);
});