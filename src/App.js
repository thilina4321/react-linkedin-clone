import './App.css';
import HomePage from './components/Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Feedback from './components/feedback/Feedback';
import Profile from './components/profile/Profile';

function App() {
  return (
    <div>

    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/feedback">
          <Feedback />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
