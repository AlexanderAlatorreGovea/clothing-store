import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './Header.scss';

const Header = ({ currentUser }) => (
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
        </div>
    </div>
);


export default Header;
