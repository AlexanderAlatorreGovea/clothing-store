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

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user-actions';
import { selectCurrentUser } from './redux/user/user-selectors';

class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
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
          <Route  path="/Shop" component={ Shop }/>
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
  setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
