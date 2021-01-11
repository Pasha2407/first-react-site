import React from 'react';
import { BrowserRouter, Switch, Route, NavLink} from 'react-router-dom/cjs/react-router-dom.min';
import s from './header.module.css';
import Home from './header-items/home';
import Question from './header-items/question';
import Result from './header-items/result';
import About from './header-items/about';

function Header() {
  return (
    <BrowserRouter>
      <div className = {s.header}>
          <NavLink className = {s.link} to = "/" exact activeClassName={s.active}>HOME</NavLink>
          <NavLink className = {s.link} to = "/question" exact activeClassName={s.active}>QUESTION</NavLink>
          <NavLink className = {s.link} to = "/result" exact activeClassName={s.active}>RESULT</NavLink>
          <NavLink className = {s.link} to = "/about" exact activeClassName={s.active}>ABOUT</NavLink>
      </div>
      <Switch>
      <Route exact path ="/" component={Home}/>
      <Route exact path ="/question" component={Question}/>
      <Route exact path ="/result" component={Result}/>
      <Route exact path ="/about" component={About}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Header;
