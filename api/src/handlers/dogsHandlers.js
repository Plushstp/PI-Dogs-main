const { createDog, getDogById, getAllDogs, searchDogByName } = require("../controllers/dogsController");

const getDogsHandler = async (req, res) => {
    try {
        const results = await getAllDogs();
        res.status(200).json(results);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getDogByNameHandler = async (req, res) => {
    const { name } = req.query;
    if (name.length === 0) {
        return res.status(400).json({ message: 'Must introduce a valid name' });
    }
    try {
        const results = await searchDogByName(name);
        /* FALTA DAR MENSAJE DE ERROR QUE NO ENCONTRO CON NOMBRE
        if (results === [null,null]){
            return res.status(400).json("There are no dogs with that name");
        }
        if (results !== null){    
            return res.status(200).json(results);
        }*/
        return res.status(200).json(results);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getDogIdHandler = async (req, res) => {
    const { id } = req.params;
    const source = isNaN(id) ? "bdd" : "api";
    try {
        const dog = await getDogById(id, source);
        res.status(200).json(dog);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const createDogHandler = async (req, res) => {
    const { name, image, weight, height, life_span, temperament } = req.body;
    try {
        const newDog = await createDog(name, image, weight, height, life_span, temperament);
        res.status(201).json(newDog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getDogsHandler,
    getDogIdHandler,
    getDogByNameHandler,
    createDogHandler,
};