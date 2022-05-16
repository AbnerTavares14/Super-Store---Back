import db from "../db.js";

export async function buyProducts(req, res) {
    const { body } = req;

    try {
        const inCart = await db.collection("carts").findOne(body.product.name);
        if (!inCart) {
            return res.sendStatus(404);
        }
        await db.collection("purchases").insertOne(body);
        res.sendStatus(201);
    } catch (err) {
        console.log("Erro ao finalizar a compra!", err);
        res.sendStatus(500);
    }
}

export async function getPurchasedItens(req, res) {
    const user = res.locals.user;
    try {
        const productsPurchased = await db.collection("purchase").find({ userId: user._id }).toArray();
        res.send(productsPurchased);
    } catch (err) {
        console.log("Erro ao enviar os produtos comprados", err);
        res.sendStatus(500);
    }
}