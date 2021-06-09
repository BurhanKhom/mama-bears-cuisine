import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// components
import Home from './components/Home'
import Recipes from './components/Recipes'
import List from './components/List'
import RecipeDetails from './components/RecipeDetails'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/recipes" exact component={Recipes} />
        <Route path="/recipes/list" component={List}/>
        <Route path="/recipes/details/:id" component={RecipeDetails} />
      </Switch>
    </Router>
  );
}

export default App;
