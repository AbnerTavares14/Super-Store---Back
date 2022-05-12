import db from "../db.js";

export async function validateToken(req, res, next) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer", "").trim();
    if (!token) {
        return res.status(401).send("No token.");
    }
    try {
        const session = await db.collection("sessions").findOne({ token });
        if (!session) {
            return res.status(401).send("No session.");
        }
        const user = await db.collection("users").findOne({ _id: session.userId });
        if (!user) {
            return res.sendStatus(404);
        }
        res.locals.user = user;
        next();
    } catch (error) {
        console.log("token", error);
        res.status(500).send("Error checking token.");
    }
}