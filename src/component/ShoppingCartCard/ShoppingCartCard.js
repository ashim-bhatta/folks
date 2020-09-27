import React, { useContext } from 'react'
import './shoppingCartCard.css'
import { AiFillDelete } from 'react-icons/ai'
import { CartContext } from '../../context/Cart'
const ShoppingCartCard = ( { product }) => {
    const { image, name, price, id } = product
    const { removeFromCart } = useContext(CartContext)
    return(
        <div className="shopping-cart-card">
            <div className="shopping-cart-card-img">
                <img src={image[0]} alt="image"/>
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
                <AiFillDelete className='delete-icon' onClick={() => removeFromCart(id)}/>
                <h5>{price} * 2 = <span>{price * 2} $ </span></h5>
            </div>
        </div>
    )
}

export default ShoppingCartCard