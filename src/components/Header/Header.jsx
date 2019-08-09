import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './Header.scss';

const Header = () => (
    <div className="header">
        <Link to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/Contact">
                Contact
            </Link>
            <Link className="option" to="/Shop">
                Shop
            </Link>
        </div>
    </div>
);


export default Header;
