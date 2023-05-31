import React from 'react';
import style from './Navbar.module.css';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={style.nav}>
      
        <div>
          <Link to='/home' className={style.links}>Home</Link>
          <Link to='/create' className={style.links}>Form</Link>
        </div>
    </nav>
  );
}
