import React from 'react'
import './productCard.css'
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';


const ProductCard = ( product ) => {
    const { image, name, del, price, latest, size, type } = product.product;
    const removeSpaceName = name.replace(/\s/g, '-')
    return(
        <div className="product-card">
            <div className={latest?'badge show':'badge'}>
                <span>New</span>
            </div>
            <div className="img">
                <img className='product-card-img' src={image[0]}  alt=""/>
                <div className="img-bg">
                    <Link to={{pathname: `/${type}/${removeSpaceName}`}} className='btn'>view details</Link>
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
                            del
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
                                        <h6 key={uuid()} >{s}</h6>
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