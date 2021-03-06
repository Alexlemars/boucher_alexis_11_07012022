import React, { Component } from 'react';
import './error-404.css'
import {Link} from 'react-router-dom'

class Error extends Component {
    render() {
        return (
            
                <main className="Error404">
                <div className="Content-error-404">
                    <span className="Number-error-404">404</span>
                    <p className="Text-error-404">
                        Oups ! La page que vous demandez n'existe pas
                    </p>
                </div>
                <Link className="Back-Home" to="/">
                    Retourner sur la page d'accueil
                </Link>
            </main>
                
        );
    }
}

export default Error;