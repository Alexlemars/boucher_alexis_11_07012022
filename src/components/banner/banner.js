import React, { Component } from 'react';
import './banner.css'

class Banner extends Component {
    render() {
        const { imgSrc, title, altText ,className } = this.props


        return (
            <section id='Banner' className={className}>
                <img className='Banner-img' src={imgSrc} alt={altText}/>
                <div className="Banner-opacity"></div>
                <h1 className="Banner-title">{title}</h1>
                
            </section>
        );
    }
}

export default Banner;