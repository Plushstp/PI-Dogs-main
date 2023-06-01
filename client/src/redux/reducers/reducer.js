/*import {
    GET_ALL_DOGS,
    DOGS_FILTERED,
    GET_ALL_TEMPERAMENTS,
    ERROR,
    DOG_TEMPERAMENT,
    DOG_RESET,
    ORDER,
    SEARCH_DOG,
  } from '../action-types';*/
  
  /*const initialState = {
    error: false,
    dogs: [],
    allDogs: [],
    temperaments: [],
  };*/
  
  /*const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_ALL_DOGS:
        return {
          ...state,
          dogs: payload,
          allDogs: payload,
        };
  
      case DOGS_FILTERED:
        const myDogs = state.allDogs;
        const dogs =
          payload === 'api'
            ? myDogs.filter((dog) => typeof dog.id === 'number')
            : myDogs.filter((dog) => typeof dog.id === 'string');
  
        const error = payload === 'base de datos' && dogs.length === 0;
        if (!error) {
          return {
            ...state,
            dogs,
          };
        }
  
        return {
          ...state,
          error: true,
        };
  
      case DOG_TEMPERAMENT:
        const dogTemper = state.dogs.filter((dog) =>
          dog.temperament?.includes(payload)
        );
        return {
          ...state,
          allDogs: dogTemper,
        };
  
      case GET_ALL_TEMPERAMENTS:
        return {
          ...state,
          temperaments: payload,
        };
  
      case DOG_RESET:
        return {
          ...state,
          allDogs: state.dogs,
        };
  
      case ERROR:
        return {
          ...state,
          error: false,
        };
  
      case ORDER:
        const parseMetricWeight = (obj) => {
          if (!obj || !obj.metric) {
            return Number.POSITIVE_INFINITY; // To the end of the sorted list
          }
  
          const weight = obj.metric.split(' - ')[0];
          return isNaN(weight) ? Number.POSITIVE_INFINITY : weight;
        };
        return {
          ...state,
          allDogs: [
            ...state.allDogs.sort((a, b) => {
              if (payload === 'ascending breed') {
                return a.name.localeCompare(b.name);
              }
  
              if (payload === 'descending breed') {
                return b.name.localeCompare(a.name);
              }
  
              const aWeight = parseMetricWeight(a.weight);
              const bWeight = parseMetricWeight(b.weight);
              if (payload === 'ascending weight') {
                return aWeight - bWeight;
              }
  
              return bWeight - aWeight;
            }),
          ],
        };
  
      case SEARCH_DOG:
        return {
          ...state,
          allDogs: state.allDogs.filter((dog) => dog.name === payload),
        };
  
      default:
        return state;
    }
  };*/

  
  
  const initialState = {
    dogs: [
      {
        "id": 1,
        "name": "Affenpinscher",
        "image": "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
        "weight": "3 - 6",
        "height": "23 - 29",
        "life_span": "10 - 12 years",
        "temperament": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
        "created": false
      },
      {
        "id": 2,
        "name": "Afghan Hound",
        "image": "https://cdn2.thedogapi.com/images/hMyT4CDXR.jpg",
        "weight": "23 - 27",
        "height": "64 - 69",
        "life_span": "10 - 13 years",
        "temperament": "Aloof, Clownish, Dignified, Independent, Happy",
        "created": false
      },
      {
        "id": 3,
        "name": "African Hunting Dog",
        "image": "https://cdn2.thedogapi.com/images/rkiByec47.jpg",
        "weight": "20 - 30",
        "height": "76",
        "life_span": "11 years",
        "temperament": "Wild, Hardworking, Dutiful",
        "created": false
      },
      {
        "id": 4,
        "name": "Airedale Terrier",
        "image": "https://cdn2.thedogapi.com/images/1-7cgoZSh.jpg",
        "weight": "18 - 29",
        "height": "53 - 58",
        "life_span": "10 - 13 years",
        "temperament": "Outgoing, Friendly, Alert, Confident, Intelligent, Courageous",
        "created": false
      }
    ],
  };

  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      default:
        return { ...state };
    }
  };


  export default rootReducer;