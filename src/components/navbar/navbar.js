import React from 'react';
import {NavLink} from 'react-router-dom/cjs/react-router-dom.min';
import s from './navbar.module.css';

function Navbar() {
  return (
      <div className = {s.navbar}>
          <NavLink className = {s.link} to = '/' exact activeClassName={s.active}>HOME</NavLink>
          <NavLink className = {s.link} to = '/question' exact activeClassName={s.active}>QUESTION</NavLink>
          <NavLink className = {s.link} to = '/result' exact activeClassName={s.active}>RESULT</NavLink>
          <NavLink className = {s.link} to = '/about' exact activeClassName={s.active}>ABOUT</NavLink>
      </div>
  );
}

export default Navbar;
