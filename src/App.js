import React from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { Switch, Route } from 'react-router-dom';
import Shop from './pages/Shop/Shop';
import Header from './components/Header/Header';
import SignInAndUp from './pages/SignInAndUp/SignInAndUp';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch >
        <Route  exact path="/" component={ HomePage }/>
        <Route  exact path="/Shop" component={ Shop }/>
        <Route  exact path="/SignInAndUp" component={ SignInAndUp }/>
      </Switch>
    </div>
  );
}

export default App;
