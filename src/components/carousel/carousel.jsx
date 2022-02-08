import React, { Component } from 'react';
import './carousel.css'

class Carousel extends Component {
    constructor() {
        super();

        this.state = {
            imageDisplay: 0,
        };
    }

    nextImage = () => {
        this.setState(prevState => ({
            imageDisplay:
                prevState.imageDisplay === this.props.picture.length - 1
                    ? 0
                    : prevState.imageDisplay + 1,
        }));
    };

    prevImage = () => {
        this.setState(prevState => ({
            imageDisplay:
                prevState.imageDisplay === 0
                    ? this.props.picture.length - 1
                    : prevState.imageDisplay - 1,
        }));
    };

    render() {
        const { imageDisplay } = this.state;

        return (
            <div className="Carrousel " role="dialog">
                <img
                    className="Carrousel-Image"
                    src={this.props.picture[imageDisplay]}
                    alt=""
                />
                {this.props.picture.length > 1 && (
                    <>
                        <button
                            className="Btn-left "
                            onClick={this.prevImage}
                        ></button>
                        <button
                            className="Btn-right"
                            onClick={this.nextImage}
                        ></button>
                    </>
                )}
                
            </div>
        );
    }
}


export default Carousel;