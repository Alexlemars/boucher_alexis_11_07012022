import React, { Component } from 'react';
import './home.css'
import Banner from '../../components/banner/banner';
import Gallery from '../../components/gallery/gallery';
import Homeimg from '../../asset/img.png'


class Home extends Component {

    render() {
        const {accommodations} = this.props


        return (
            <main className='center'>
                <Banner className='Banner'
                        imgSrc={Homeimg}
                        altText="Paysage de falaises"
                        title="Chez vous, partout et ailleurs"
                    />

                    <Gallery className='Gallery-center' accommodations={accommodations}/>

            </main>
        );
    }
}

export default Home;