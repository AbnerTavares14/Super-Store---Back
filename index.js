import express from 'express';
import cors from 'cors';
import authRouter from './src/Routers/authRouter.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use(authRouter);

const PORTA = process.env.PORT || 5000;

app.listen(PORTA, () => {
    console.log("Server running on port " + process.env.PORT);
});