import './App.css';
import React from 'react';
import {
BrowserRouter as Router,
Switch,
Route
} from 'react-router-dom';
import Setting from './Pages/Setting';
import Questions from './Pages/Questions';
import FinalScreen from './Pages/FinalScreen';

function App() {
  return (
  <Router>
    <Switch>
      <Route path='/' exact>
        <Setting />
      </Route>
      <Route path='/questions'>
        <Questions />
      </Route>
      <Route path='/finalScreen'>
        <FinalScreen />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
