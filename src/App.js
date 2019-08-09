import React from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { Switch, Route } from 'react-router-dom';
import Shop from './pages/Shop/Shop';


function App() {
  return (
    <div className="App">
      <Switch >
        <Route  exact path="/" component={ HomePage }/>
        <Route  exact path="/Shop" component={ Shop }/>
      </Switch>
    </div>
  );
}

export default App;
