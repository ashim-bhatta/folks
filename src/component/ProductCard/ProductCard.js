import React from 'react'
import './productCard.css'

const ProductCard = ( product ) => {
    const { img, name, description, price, latest, size, colors } = product.product;


    return(
        <div className="product-card">
            <div className={latest?'badge show':'badge'}>
                <span>New</span>
            </div>
            <div className="img">
                <img className='product-card-img' src={img}  alt=""/>
                <div className="img-bg">
                    <a href="#" className='btn'>view details</a>
                </div>
            </div>
            <div className="product-card-details">
                <div className="product-card-title">
                    <h4>
                        {
                            name
                        }
                    </h4>
                    <br/>
                    <p>
                        {
                            description
                        }
                    </p>
                    <span>
                        ${
                            price
                        }
                    </span>
                </div>

                <div className="extra-details">
                    <div className="size">
                        <h4>
                            SIZES
                        </h4>
                        <p>
                            {
                                size.map( s => {
                                    return(
                                        <h6 key={s} >{s}</h6>
                                    )
                                })
                            }
                        </p>
                    </div>

                    <div className="colors">
                        <h4>
                            COLORS
                        </h4>
                        <p>
                            {
                                colors.map( color => {
                                    return(
                                        <div className="color-circle" key={color} style={{background: color}}>

                                        </div>
                                    )
                                })
                            }
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ProductCard