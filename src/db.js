import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

let db = null;
const mongoClient = new MongoClient(process.env.MONGO_URI);
try {
    await mongoClient.connect();
    db = mongoClient.db('super_store');
    console.log("Conexão com o MongoDB estabelecida!");
} catch (error) {
    console.log("Não deu certo a conexão!", error);
}

export default db;