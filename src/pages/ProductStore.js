import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Footer from '../component/Footer/Footer'
import Nav from '../component/Nav/Nav'
import ProductCard from '../component/ProductCard/ProductCard'
import product from '../product'
import './productStore.css'

const ProductStore = ({ match }) => {
    var [ type, setType ] = useState( match.params.store)
    var [ filtredProduct, setfiltredProduct ] = useState([])
    useEffect( () => {
        var tempProduct = []
        if ( type == 'store'){
            tempProduct = product
        }
        else if ( type == 'men'){
            tempProduct  = product.filter(pr => pr.type == type)
        }
        else if ( type == 'women'){
            tempProduct = product.filter(pr => pr.type == type)
        }
        setfiltredProduct(filtredProduct = tempProduct)
    }, [type])

    useEffect(() => {
        setType(match.params.store)
    })

    return(
        <div >
            <Nav />
            <div className="address main-padding">
                <p>Home &#62;   <span> {type}  </span> </p>
            </div>
            <div className='productGrid main-padding' style={{marginBottom :'30px'}}>
                {
                    filtredProduct.map(pro => {
                        return(
                            <ProductCard product={pro} key={pro.name} />
                        )
                    })
                }
            </div>
            <Footer />
        </div>
    )
}

export default ProductStore

