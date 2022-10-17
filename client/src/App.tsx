import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { AddList } from './pages/AddList';
import { UpdateList } from './pages/UpdateList';
import { List } from './pages/List';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/add"><AddList /></Route>
          <Route exact path="/:listId"><List /></Route>
          <Route exact path="/update/:listId"><UpdateList /></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
