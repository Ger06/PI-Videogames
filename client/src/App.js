import { Route, Switch } from 'react-router-dom';
import './App.css';
import { CreateGame } from './components/CreateGame/CreateGame';
import DetailGame from './components/DetailGame/DetailGame';
import Home from './components/Home/Home';
import Landingpage from './components/LandingPage/LandingPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
        <Switch>
        <Route path='/' exact component={Landingpage}/>
        <Route path='/home' exact component={Home}/>
        <Route path='/addgame' component= {CreateGame}/>
        <Route path='/gamedetail/:id' component= {DetailGame}/>

        </Switch>

    </div>
  );
}

export default App;
