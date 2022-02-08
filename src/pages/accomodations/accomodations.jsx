import React from 'react';
import { accommodations } from "../../data/data";
import './accomodations.css'
import Carousel from '../../components/carousel/carousel';
import Profil from '../../components/profil/profil';
import Tag from '../../components/tag/tag';
import Rating from '../../components/rating/rating';
import Dropdown from '../../components/dropdown/dropdown';
import Error from '../error-404/error-404';
import { useParams } from 'react-router-dom';



function Accomodations() {
        
        const param = useParams()
        const rentalUrlId = param.id;
        const rental = accommodations.find((item)=>item.id === rentalUrlId)
        

        
        if(!rental){
            return <Error/>
        }else{
            return (

                
                 <main className='' key={rental.id} >

                                    
                
                    <Carousel picture={rental.pictures}/>

                            <div className='Accomodation'>
                            <div className='Accomodation-description'>
                            <div>
                            <h1 className='accomodation-title'>{rental.title}</h1>
                            <p className='accomodation-location'>{rental.location}</p>
    
                           
                            
                            <Tag className='tag' tag={rental.tags}/>
                            </div>
                            <div className='accomodation-rating'>
                            <Profil name={rental.host.name} photo={rental.host.picture}/>
                            <Rating className='accomodation-star' rating={rental.rating}/>
                           
                            </div>
                            </div>
                            <div className='accomodation-dropdown'>
                            <Dropdown className="dropdown-accomodation" title="Description" content={rental.description} />
                            <Dropdown className="dropdown-accomodation"  title="Equipements" content={rental.equipments.map((eqp,index)=>{
                                return <li key={index}>{eqp}</li>
                            })}/>
                            </div>
                            </div>
                            
    
                    
    
                    
                </main>
                
                
                
            )
                        }
        }
    


export default Accomodations