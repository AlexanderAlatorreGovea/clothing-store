import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Shop from './pages/Shop/Shop';
import SignInAndUp from './pages/SignInAndUp/SignInAndUp';
import CheckOut from './pages/CheckOut/CheckOut';

import Header from './components/Header/Header';


import { selectCurrentUser } from './redux/user/user-selectors';
import { checkUserSession } from './redux/user/user-actions';


class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
 
  render() {
    return (
      <div className="App">
        <Header />
        <Switch >
          <Route  exact path="/" component={ HomePage }/>
          <Route  path="/Shop" component={ Shop } />
          <Route  path="/CheckOut" component={ CheckOut }/>
          <Route
            exact
            path='/SignInAndUp'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndUp />
              )
            }
          />
        </Switch>
      </div>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);