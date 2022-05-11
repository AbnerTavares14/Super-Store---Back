import db from "../db.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from 'uuid';
import joi from "joi";

export async function signUp(req, res) {
    const { body } = req;
    const userSchema = joi.object({
        name: joi.string().required(),
        email: joi.string().email().required(),
        password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        repeat_password: joi.ref('password')
    });
    const validation = userSchema.validate(body, { abortEarly: true });
    if (validation.error) {
        console.log(validation.error.details);
        return res.sendStatus(422);
    }
    try {
        const emailJaCadastrado = await db.collection("users").find({ email: body.email }).toArray();
        if (emailJaCadastrado.length > 0) {
            return res.status(409).send("Esse email já está cadastrado");
        }
        const senhaCriptografada = bcrypt.hashSync(body.password, 10);

        await db.collection("users").insertOne({ name: body.name, email: body.email, password: senhaCriptografada });
        res.sendStatus(201);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export async function signIn(req, res) {
    const { body } = req;
    const userSchema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    });
    const validation = userSchema.validate(body, { abortEarly: true });
    if (validation.error) {
        console.log(validation.error.details);
        return res.sendStatus(422);
    }
    try {
        const user = await db.collection("users").findOne({ email: body.email });
        if (user && bcrypt.compareSync(body.password, user.password)) {
            const token = uuid();
            await db.collection('sessions').insertOne({ userId: user._id, token });
            res.send(token);
        } else {
            res.sendStatus(406);
        }
    } catch (error) {
        console.log("Algo de errado não está certo!", error);
        res.sendStatus(500);
    }
}