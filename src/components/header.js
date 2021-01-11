import React from 'react';
import s from './header.module.css';
import {Route} from "react-router-dom";
import Main from './main';
import Question from './header-items/question';
import Result from './header-items/result';
import About from './header-items/about';
import { BrowserRouter} from 'react-router-dom/cjs/react-router-dom.min';


function Header() {
  return (
    <BrowserRouter>
      <div className = {s.header}>
          <a href = "/main">HOME</a>
          <a href = "/question">QUESTION</a>
          <a href = "/result">RESULT</a>
          <a href = "/about">ABOUT</a>
      </div>
      <Route path ="/main" component={Main}/>
      <Route path ="/question" component={Question}/>
      <Route path ="/result" component={Result}/>
      <Route path ="/about" component={About}/>
    </BrowserRouter>
  );
}

export default Header;
