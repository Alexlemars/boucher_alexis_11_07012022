import React, { Component } from 'react';
import './dropdown.css'
import {ReactComponent as ChevronUp} from '../../asset/chevron-up.svg'


class Dropdown extends Component {

    constructor() {
        super();

        this.state = { open: false };
    }

    drop = () => {
        this.setState({
            open: !this.state.open,
        });
    };

    render() {
        return (
            <article className={this.props.className} >

                <div onClick={this.drop} className='Dropdown-title' >
                <p className='Drowpdown-title_title'>{this.props.title}</p>
                <ChevronUp className={`Dropdown-chevrondown ${this.state.open ? 'close' : 'open'}`}/>
                </div >
                <div className={`Dropdown-content ${this.state.open ? 'open' : 'close'}`}>
                <p>{this.props.content}</p>
                
                </div>
               
            </article>
        );
    }
}

export default Dropdown;