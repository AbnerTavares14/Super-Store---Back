import db from "../db.js";

export async function getGames(req, res){
    try{
        const games=await db
        .collection("products")
        .find({type: "game"})
        .toArray();

        if(!games){
            return res.sendStatus(404);
        }
        res.status(200).send(games);
    } catch(error){
        console.log("deu xabu aqui"+ error);
        res.sendStatus(500);
    }
}

export async function getHealth(req, res){
    try{
        const health=await db
        .collection("products")
        .find({type: "health"})
        .toArray();

        if(!health){
            return res.sendStatus(404);
        }
        res.status(200).send(health);
    } catch(error){
        console.log("deu xabu aqui"+ error);
        res.sendStatus(500);
    }
}

export async function getEletro(req, res){
    try{
        const eletro=await db
        .collection("products")
        .find({type: "eletro"})
        .toArray();

        if(!eletro){
            return res.sendStatus(404);
        }
        res.status(200).send(eletro);
    } catch(error){
        console.log("deu xabu aqui"+ error);
        res.sendStatus(500);
    }
}
export async function getAccessories(req, res){
    try{
        const accessories=await db
        .collection("products")
        .find({type: "accessory"})
        .toArray();

        if(!accessories){
            return res.sendStatus(404);
        }
        res.status(200).send(accessories);
    } catch(error){
        console.log("deu xabu aqui"+ error);
        res.sendStatus(500);
    }
}

export async function getBooks(req, res){
    try{
        const books=await db
        .collection("products")
        .find({type: "book"})
        .toArray();

        if(!books){
            return res.sendStatus(404);
        }
        res.status(200).send(books);
    } catch(error){
        console.log("deu xabu aqui"+ error);
        res.sendStatus(500);
    }
}


export async function getFashion(req, res){
    try{
        const fashion=await db
        .collection("products")
        .find({type: "fashion"})
        .toArray();

        if(!fashion){
            return res.sendStatus(404);
        }
        res.status(200).send(fashion);
    } catch(error){
        console.log("deu xabu aqui"+ error);
        res.sendStatus(500);
    }
}

export async function getHome(req, res){
    try{
        const home=await db
        .collection("products")
        .find({type: "home"})
        .toArray();

        if(!home){
            return res.sendStatus(404);
        }
        res.status(200).send(home);
    } catch(error){
        console.log("deu xabu aqui"+ error);
        res.sendStatus(500);
    }
}


