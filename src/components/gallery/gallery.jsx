import React, { Component } from 'react';
import AccomodationList from '../accomodationList/accomodationList';
import './gallery.css'

class Gallery extends Component {
    render() {
const {accommodations} = this.props

        
        return (
            <section className='Gallery'>
                
                {accommodations.map((accommodation)=>(
                    <AccomodationList className='AccomodationList'
                    key={accommodation.id}
                    id={accommodation.id}
                    cover={accommodation.cover}
                    title={accommodation.title}
                    location={accommodation.location}/>  
                ))}
                
            </section>
        );
    }
}

export default Gallery;