import Navbar from './components/navbar/navbar';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom/cjs/react-router-dom.min';
import Home from './components/main/home/home';
import Question from './components/main/question/question';
import Result from './components/main/result/result';
import About from './components/main/about/about';

function App() {
  return (
    <BrowserRouter>
    <div className = "back">
      <Navbar/>
      <Route exact path ='/' component={Home}/>
      <Route exact path ='/question' component={Question}/>
      <Route path ='/result' component={Result}/>
      <Route path ='/about' component={About}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
