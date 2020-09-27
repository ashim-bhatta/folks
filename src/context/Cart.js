import  React, { useState, createContext } from 'react'
import product from '../product'

export  const CartContext = createContext()

export const CartProvider = ( props ) =>{
    const [ cart, setCart ] = useState([])
    const [ cartLength, setCartLength ] = useState(0)
    // add product
    const addToCart = ( id ) => {

        // filtering product
        const choosen = product.filter(prod => prod.id === id)

        var i;
        for ( i = 0; i <= cart.length; i++) {
            if(cart[i] === choosen){
                alert('yes')
            } 
        }
        

        // adding flitred product to cart
        setCart( prev => prev.concat(choosen) )
        product[id].inCart = true

        // adding cardLength
        setCartLength( cartLength + 1)

    }

    // remove from product
    const removeFromCart = ( id ) => {
        setCart( cart.filter(prod => prod.id !== id) )
        setCartLength( cartLength - 1)

    }

    console.log(cart, cartLength);
    return(
        <CartContext.Provider value={{cart, cartLength, addToCart, removeFromCart}}>
            {
                props.children
            }
        </CartContext.Provider>
    )
}

