import React, { Component } from 'react';
import './about.css'
import { about } from '../../data/dataabout';
import AboutImg from '../../asset/montagne.png'
import Banner from '../../components/banner/banner';
import Dropdown from '../../components/dropdown/dropdown';


class About extends Component {
    render() {
        return (
            <main>
                <Banner className="Banner-about"
                        imgSrc={AboutImg}
                        altText="Montagne"
                        title=""/>

                <div className='dropdown'>
                {about.map((data)=>(
                    <Dropdown className="dropdown-about"  key={data.id} title={data.title} content={data.content}/>
                ))}
                    

                </div>        
            </main>
        );
    }
}

export default About;