import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './accomodationList.css'



class AccomodationList extends Component {
    
    
    render() {

        const { cover, location, title, id } = this.props;

        return (
            <Link to={`/accommodations/${id}`}>
                <article className="accomodation">
                    <img
                        className="accomodation-Cover"
                        src={cover}
                        alt={`Une location située en ${location}`}
                    />
                    <div className="accomodation-Mask"></div>
                    <h2 className="accomodation-Title">{title}</h2>
                    
                </article>
                </Link>
        );
    }
}

export default AccomodationList;