import Card from "../Card/Card";
import style from "./CardsContainer.module.css"
import { useSelector } from "react-redux";
export default function CardsContainer() {
  /*const dogs = [{
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
  }]*/

  const dogs = useSelector(state=>state.dogs)

  return (
      <div className={style.container}>
        {dogs.map(dogs=>{
          return <Card 
            id={dogs.id}
            name={dogs.name}
            image={dogs.image}
            weight={dogs.weight}
            height={dogs.height}
            life_span={dogs.life_span}
            temperament={dogs.temperament}
          />
        })}
      </div>
    );
  }