const { Sequelize } = require("sequelize");
const { Temperament } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;

const getAllTemperaments = async ()=> {
    //Traigo todos los temperamentos de la API y los guardo a la BDD
    const { data } = (await axios.get(`https://api.thedogapi.com/v1/breeds/?api_key=${API_KEY}`));
    const dogs = data
      .map((dog) => dog.temperament)
      .toString()
      .split(',')
      .map((temperament) => temperament.trim())
      .filter((temperament) => temperament.length > 1);
    const temperament = [...new Set(dogs)];
    const dbTemp = await Temperament.bulkCreate(temperament.map((temp) => ({ name: temp })));
    
    return [...dbTemp];
};

module.exports = { getAllTemperaments };