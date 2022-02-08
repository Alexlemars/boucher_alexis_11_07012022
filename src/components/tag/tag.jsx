import React, { Component } from 'react';
import './tag.css'

class Tag extends Component {
    render() {

        const{tag} = this.props
        return (
            <div className='tag'>
                {tag.map((tags,index)=>{
                 return <li key={index}>{tags}</li>
                })}
                
            </div>
        );
    }
}

export default Tag;