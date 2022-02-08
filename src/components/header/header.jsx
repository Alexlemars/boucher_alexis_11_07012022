import React, { Component } from 'react';
import './header.css'
import {ReactComponent as Logo} from '../../asset/logo.svg'
import Navigation from '../navigation/navigation';
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <header className='header'>
                <Link to="/">
                <Logo className='header_logo'/>
                </Link>
                <Navigation className="header-navigation" />
            </header>
        );
    }
}

export default Header;