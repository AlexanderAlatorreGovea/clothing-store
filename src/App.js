import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { Switch, Route } from 'react-router-dom';
import Shop from './pages/Shop/Shop';
import Header from './components/Header/Header';
import SignInAndUp from './pages/SignInAndUp/SignInAndUp';
import { auth } from './firebase/firebase.utils';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  unsubscribeFromAuth = null;


  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch >
          <Route  exact path="/" component={ HomePage }/>
          <Route  exact path="/Shop" component={ Shop }/>
          <Route  exact path="/SignInAndUp" component={ SignInAndUp }/>
        </Switch>
      </div>
    );
  }
}

export default App;
