import db from "../db.js";

export async function buyProducts(req, res) {
    const { body } = req;
    console.log("aaaaaaa")
    try {
        const inCart = await db.collection("carts").findOne({ userId: body.userId });
        console.log(inCart)
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
        const productsPurchased = await db.collection("purchase").findOne({ userId: user._id });
        res.send(productsPurchased);
    } catch (err) {
        console.log("Erro ao enviar os produtos comprados", err);
        res.sendStatus(500);
    }
}