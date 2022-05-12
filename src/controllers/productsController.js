import { ObjectId } from "mongodb";
import db from "../db.js";
import joi from "joi";

export async function singleProduct(req, res) {
    const { productId } = req.params;
    try {
        const product = await db
            .collection("products")
            .findOne({ _id: ObjectId(productId) });

        if (!product) return res.sendStatus(404);

        res.status(200).send(product);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export async function addProducts(req, res) {
    const { body } = req;
    const productsSchema = joi.object({
        name: joi.string().required(),
        type: joi.string().required(),
        description: joi.string().required(),
        price: joi.string().required(),
        image: joi.string().pattern(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/).required()
    })
    const validation = productsSchema.validate(body, { abortEarly: true });
    if (validation.error) {
        console.log(validation.error.details);
        res.sendStatus(406);
    }

    try {
        await db.collection("products").insertOne(body);
        res.sendStatus(201)
    } catch (error) {
        console.log("Falha em adicionar produto", error);
        res.sendStatus(500);
    }
}

export async function getAllProducts(req, res) {
    try {
        const products = await db.collection("products").find({}).toArray();
        res.send(products);
    } catch (err) {
        console.log("Falha em enviar os produtos", err);
        res.sendStatus(500);
    }
}