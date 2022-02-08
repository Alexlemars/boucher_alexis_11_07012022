import React, { Component } from 'react';
import './footer.css'
import LogoFooter from'../../asset/logo-footer.svg'

class Footer extends Component {
    render() {
        return (
            <footer>
                <img className='Footer-logo' src ={LogoFooter} alt='Logo kasa'/>
                <p className='Footer-title'>© 2021 Kasa. Tous droits réservés</p>
            </footer>
        );
    }
}

export default Footer;