import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './navigation.css'

class Navigation extends Component {
    render() {
        return (
            <nav className='navigation'>
                <NavLink className="navigation-link" to="/">
                    Accueil
                </NavLink>
                <NavLink className="navigation-link" to="/a-propos">
                    A propos
                </NavLink>
                
                
            </nav>
        );
    }
}

export default Navigation;