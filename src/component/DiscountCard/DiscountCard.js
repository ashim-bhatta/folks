import React from 'react'
import './discountCard.css'
import { Link } from 'react-router-dom'

const DiscountCard = ( ) => {
    return(
        <div className="discount-card main-padding">
            <h2>
                summer sale
            </h2>
            <p>
                up to 70% of all product
            </p>
            <Link to='/shop' className="btn">
                shop now
            </Link>
        </div>
    )
}

export default DiscountCard