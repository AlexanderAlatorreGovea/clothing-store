import React from 'react';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../CartIcon/CartIcon';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { selectCurrentUser } from '../../redux/user/user-selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartDropdown from '../CartDropdown/CartDropdown';

import './Header.scss';

import { connect } from 'react-redux';

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/Contact">
                CONTACT
            </Link>
            <Link className="option" to="/Shop">
                SHOP
            </Link>
            {currentUser ? (
                <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> )
                : (
                <Link className="option" to="/SignInAndUp">
                    SIGN IN
                </Link> 
            )}
            <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
  });
  
export default connect(mapStateToProps)(Header);