import db from "../db.js";
import { ObjectId } from "mongodb";

export async function addToCart(req, res) {
    const product = req.body;
    const user = res.locals.user;

    try {
        const hasCart = await db.collection("carts").findOne({ userId: user._id, "product.name": product.name });
        if (hasCart) {
            const cartHasProduct = await db.collection("carts").findOne({ _id: new ObjectId(hasCart._id) });
            if (cartHasProduct) {
                await db.collection("carts").updateOne({ _id: new ObjectId(cartHasProduct._id) }, { $inc: { "product.quantity": product.quantity } });
                return res.sendStatus(200);
            }
        }
        await db.collection("carts").insertOne({
            userId: user._id,
            product
        });
        res.sendStatus(201);
    } catch (error) {
        console.log(error);
    }
}

export async function updateQuantity(req, res) {
    const user = res.locals.user;
    const { body } = req;

    try {
        const hasCart = await db.collection("carts").findOne({ userId: user._id, "product.name": body.name });
        if (hasCart) {
            const cartHasProduct = await db.collection("carts").findOne({ _id: new ObjectId(hasCart._id) });
            if (cartHasProduct) {
                await db.collection("carts").updateOne({ _id: new ObjectId(cartHasProduct._id) }, { $inc: { "product.quantity": body.quantity } });
                return res.sendStatus(200);
            }
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.log("Deu erro na atualização da quantidade do item", err);
        res.sendStatus(500);
    }
}

export async function getProductsOfCart(req, res) {
    const user = res.locals.user;
    try {
        const products = await db.collection("carts").find({ userId: user._id }).toArray();;
        res.send(products);
    } catch (err) {
        console.log("Deu erro na obtenção dos produtos no carrinho", err);
        res.sendStatus(500);
    }
}