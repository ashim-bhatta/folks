import React from 'react'
import forHim from '../../img/for_him.jpg'
import forHer from '../../img/for_her.jpg'
import './catalogue.css'
import { Link } from 'react-router-dom'

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
                            <div className="single-type">
                                <img src={type.img} alt={type.text}/>
                                <Link className='btn catalogue-btn'> {type.text}</Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Catalogue