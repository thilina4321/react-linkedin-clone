import './App.css';
import HomePage from './components/Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Feedback from './components/feedback/Feedback';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/feedback">
          <Feedback />
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
