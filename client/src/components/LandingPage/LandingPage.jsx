import React from 'react';
import { Link } from 'react-router-dom';
import style from './LandingPage.module.css';

export default function LandingPage() {
  return (
    <div className={style.container}>
      <div className={style.label}>
        <h1>Bienvenido a mi PI Dogs!</h1>
        <Link to="/home">
          <button className={style.button}>INGRESAR</button>
        </Link>
      </div>
    </div>
  );
}
