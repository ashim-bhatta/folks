import React from 'react'
import image from '../../img/hero.jpg'
import './shoppingCartCard.css'
import { AiFillDelete } from 'react-icons/ai'
const ShoppingCartCard = ( { product }) => {
    const { img, name, price } = product
    return(
        <div className="shopping-cart-card">
            <div className="shopping-cart-card-img">
                <img src={img} alt=""/>
            </div>



            <div className="shopping-cart-card-name">
                <h3>
                    {name}
                </h3>

                <p>Quantity</p>
                <div className="product-quantity">
                    <div className="product-minus">
                        -
                    </div>
                    <h4> 1 </h4>
                    <div className="product-plus">
                        +
                    </div>
                </div>
            </div>



            <div className="product-extra">
                <AiFillDelete className='delete-icon' />
                <h5>{price} * 2 = <span>{price * 2} $ </span></h5>
            </div>
        </div>
    )
}

export default ShoppingCartCard