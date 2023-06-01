import React from 'react';
import style from './Home.module.css';
import CardsContainer from '../CardsContainer/CardsContainer';


export default function Home() {

    return (
    <div className={style.label}>
        <h1>Este es el HOME DE DOGS</h1>
        <CardsContainer />
    </div>
    )
}