import React, { Component } from 'react';

class Profil extends Component {
    render() {

        const {name ,photo} = this.props
        return (
            <div  className='accomodation-profil'>
                <p className='accomodation-name'>{name}</p>
                <img className='accomodation-photo' src={photo} alt=''/>
            </div>
        );
    }
}

export default Profil;