import db from "../db.js";

export async function addToCart(req, res) {
    const product = req.body;
    const user = res.locals.user;

    try {
        const hasCart = await db.collection("carts").findOne({ userId: user._id });
        if (hasCart) {
            await db
                .collection("carts")
                .updateOne({ userId: user._id }, { $push: { cart: product } });
            return res.sendStatus(201);
        }
        await db.collection("carts").insertOne({
            userId: user._id,
            cart: [product],
        });
        res.sendStatus(201);
    } catch (error) {
        console.log(error);
    }
}

export async function getProductsOfCart(req, res) {
    const user = res.locals.user;
    try {
        const products = await db.collection("carts").find({ userId: user._id }).toArray();
        const datas = { products: products, name: user.name }
        res.send(datas);
    } catch (err) {
        console.log("Deu erro na obtenção dos produtos no carrinho", err);
        res.sendStatus(500);
    }
}