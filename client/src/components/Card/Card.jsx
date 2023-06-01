import style from "./Card.module.css";

export default function Card(props) {

    return (
      <div className={style.card}>
        <p>ID:{props.id}</p>
        <p>Name:{props.name}</p>
        <p>Image:{props.image}</p>
        <p>Weight:{props.weight}</p>
        <p>Height:{props.height}</p>
        <p>Life Span:{props.life_span}</p>
        <p>Temperament:{props.temperament}</p>
      </div>
    );
  }
