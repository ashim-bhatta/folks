import React from 'react'

import Nav from '../component/Nav/Nav'
import Footer from '../component/Footer/Footer'
import ShoppingCartCard from '../component/ShoppingCartCard/ShoppingCartCard'

import './shoppingCart.css'

import image from '../img/hero.jpg'

const ShoppingCart = ( ) => {
    const style = {
        'display' : 'flex',
        'flex-direction': 'column',
        'min-height': '100vh',
        'align-content': 'space-between',
    'justify-content': 'space-between'
        
    }

    const products = [
        {
            img: image,
            name: 'Product One',
            price: '308',
        }
       
    ]
    return(
        <div className="shopping-cart" style={style}>
            <Nav />
            <div className="shopping-cart-content main-padding">
                <div className="address">
                        <p>Home <span> &#62; Shopping Cart </span> </p>
                </div>

               <div style={{textAlign : 'center', display:'flex', justifyContent: 'center'}}>
                    <div className="cart-list">
                        <h2 className=''> Card Summary</h2>
                            {
                                products.map(product => {
                                    return(
                                        <ShoppingCartCard key={product.name} product= {product} />
                                    )
                                })
                            }
                        <div className="cart-list-wrapper">

                        </div>
                    </div>
               </div>
            </div>

            <Footer />
        </div>
    )
}

export default ShoppingCart