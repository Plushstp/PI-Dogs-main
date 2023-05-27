const { Router } = require("express");
const { getDogsHandler, getDogByNameHandler, getDogIdHandler, createDogHandler } = require("../handlers/dogsHandlers");
const dogsRouter = Router();

const validate = (req, res, next) => {
    const { name, image, weight, height, life_span } = req.body;
    if(!name) return res.status(400).json({ error: "Missing name" });
    if(!image) return res.status(400).json({ error: "Missing image" });
    if(!weight) return res.status(400).json({ error: "Missing weight" });
    if(!height) return res.status(400).json({ error: "Missing height" });
    if(!life_span) return res.status(400).json({ error: "Missing life_span" });
    next();
};

dogsRouter.get("/", getDogsHandler);
dogsRouter.get("/name", getDogByNameHandler);
dogsRouter.get("/:id", getDogIdHandler);

dogsRouter.post("/", validate, createDogHandler);


module.exports = dogsRouter;