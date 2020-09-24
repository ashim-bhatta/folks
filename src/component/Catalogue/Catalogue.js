import React from 'react'
import forHim from '../../img/for_him.jpg'
import forHer from '../../img/for_her.jpg'
import './catalogue.css'
import { Link } from 'react-router-dom'
import { v4 as uuid } from 'uuid';


const Catalogue = ( ) => {
    const types = [
        {
            img : forHim,
            text : 'for him',
            link : '/men'
        },
        {
            img : forHer,
            link : '/women',
            text : 'for her',
        }
    ]

    return(
        <div className="main-padding catalogue">
            <div className="title">
                <h3>
                    Catalogue
                </h3>
            </div>
            <div className="type">
                {
                    types.map(type => {
                        return(
                            <div key={uuid()} className="single-type">
                                <img src={type.img} alt={type.text}/>
                                <Link to={type.link} className='btn catalogue-btn'> {type.text}</Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Catalogue