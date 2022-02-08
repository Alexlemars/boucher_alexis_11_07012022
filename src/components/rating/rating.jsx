import React, { Component } from 'react';
import {ReactComponent as Star} from '../../asset/group.svg'


class Rating extends Component {
    render() {

        const ratingScale = [1, 2, 3, 4, 5]
        const {rating} = this.props

        return (
            <div>
               {ratingScale.map((filled, index) => (
                    <Star
                        className='accomodation-star'
                        fill={filled <= rating ? '#FF6060' : '#E3E3E3'}
                        key={index}
                    />
                ))}
            </div> 
        
        );
    }
}

export default Rating;