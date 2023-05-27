const { Sequelize } = require("sequelize");
const { Dog, Temperament } = require("../db.js");
const axios = require("axios");
const { API_KEY } = process.env;

//Funcion para limpiar los datos recibido de la API y devolver un array con todos los perros y solo los datos que necesito
const cleanArray = (arr) => 
    arr.map((elem) => {
        return {
            id: elem.id,
            name: elem.name,
            image: elem.image.url,
            weight: elem.weight.metric,
            height: elem.height.metric,
            life_span: elem.life_span,
            temperament: elem.temperament,
            created: false,
        };
    });

//Funcion para limpiar los datos recibido de la API de un solo perro y devolver solo los datos que necesito
const cleanDog = (obj) => {
    const dogCleaned = {
        id: obj.id,
        name: obj.name,
        image: obj.reference_image_id,
        weight: obj.weight.metric,
        height: obj.height.metric,
        life_span: obj.life_span,
        temperament: obj.temperament,
        created: false,
    }
    return dogCleaned;
};

//Creo un nuevo Perro con los datos recibido por body en tabla Dogs y Temperaments
const createDog = async (name, image, weight, height, life_span, temperament) => {
    const dogExist = await Dog.findOne({ where: { name }, });
    if(!dogExist) {
       const newDog = await Dog.create({ 
            name, 
            image, 
            weight, 
            height, 
            life_span,
            temperament, 
        });
        const temperamentDB = await Temperament.findAll({
            where: { name: temperament },
        });
        newDog.addTemperament(temperamentDB);
        return newDog;
    } else {
        return error= "Dog already exists."
    }
};

const getDogById = async (id, source) => {
    if (source==="api"){
        //Guardo en apiDogRaw al perro por ID del API con todos los datos (en Bruto)
        const apiDogRaw = (await axios.get(`https://api.thedogapi.com/v1/breeds/${id}?api_key=${API_KEY}`)).data
        //Lamo a una funcion para limpiar del API los datos que no necesito y guardo en apiDog
        const apiDog = cleanDog(apiDogRaw);
        return apiDog;
    } else if (source==="bdd") {
        //Traigo el perro por ID que tengo en mi BDD 
        const dog = await Dog.findAll({
            where: { id },
            include: { 
                model: Temperament,
                attributes: ['name'],
                through: {
                    attributes: [],
                },
            }
          });
        return dog;
    }
};

const getAllDogs = async ()=> {
    //Traigo todos los perros que tengo en mi BDD OK
    const databaseDogs = await Dog.findAll({
        include: {
            model: Temperament,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        }
    });
    
    //Guardo en apiDogsRaw a todos los perros del API con todos los datos (en Bruto)
    const apiDogsRaw = (await axios.get(`https://api.thedogapi.com/v1/breeds/?api_key=${API_KEY}`)).data;
    //Lamo a una funcion para limpiar del API los datos que no necesito y guardo en apiDogs 
    const apiDogs = cleanArray(apiDogsRaw);
    //Retorno todos los perros OK
    return [...databaseDogs, ...apiDogs];
};

const searchDogByName = async (name) => {
    //Busqueda inexacta por nombre en BDD funcionando OK
    const databaseDogs = await Dog.findOne({
        where: {
            name: {
                [Sequelize.Op.iLike]: `%${name}%`,
            },
        },
        include: { 
            model: Temperament,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        }
    });
    
    //Guardo en apiDogsRaw a todos los perros del API con todos los datos (en Bruto)
    const apiDogsRaw = (await axios.get(`https://api.thedogapi.com/v1/breeds/?api_key=${API_KEY}`)).data;
    //Lamo a una funcion para limpiar del API los datos que no necesito y guardo en apiDogs
    const apiDogs = cleanArray(apiDogsRaw);

    //Por ultimo hago Busqueda inexacta por nombre en API funcionando OK
    const filteredApi = apiDogs.filter((dog)=> dog.name.toLowerCase().includes(name.toLowerCase()) === name.toLowerCase().includes(name.toLowerCase()));
    //Retorno los resultados de la busqueda inexacta en BDD y API
    return [...[databaseDogs], ...filteredApi];
};

module.exports = { createDog, getDogById, getAllDogs, searchDogByName };