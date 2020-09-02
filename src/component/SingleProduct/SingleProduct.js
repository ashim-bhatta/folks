import React, { useRef, useEffect } from 'react'
import Nav from '../Nav/Nav';

import product1 from '../../img/product-1.png';
import product2 from '../../img/product-2.png';
import product3 from '../../img/product-3.png';
import product4 from '../../img/product-4.png';
import product5 from '../../img/product-5.png';

import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import {  BsFillHeartFill  } from 'react-icons/bs';


import './singleProduct.css'
import NewArrivals from '../NewArrivals/NewArrivals';
const SingleProduct = ( ) => {
    const thumImage = document.getElementsByClassName('img-thum')
    const active = document.getElementsByClassName('active')
    const wrapperRef = useRef(null)
    const mainImageRef = useRef(null)

    const images = [
        product1,
        product2,
        product3,
        product4,
        product5,
    ]

    // sliding thumnail image
    const changePos = ( sign ) => {
        console.log(wrapperRef.current.scrollLeft);
        if(sign === '-'){
            wrapperRef.current.scrollTop -= 110
        }else{
            wrapperRef.current.scrollTop += 110
        }
    }

    // changing main image from thumnail
   const changeImg = ( e ) => {
        // changing image
       const image = e.currentTarget.src;
       mainImageRef.current.src = image

    //    removing active class from prev image
    if (active.length > 0){
        active[0].classList.remove('active')
    }

        // adding active class to current main image
        e.currentTarget.classList.add('active')
   }


    //    giving active class to first thumnail image
    useEffect(() =>{
        thumImage[0].classList.add('active')
    }, [])

    return(
        <div className='single-product'>
            <Nav />
            
            <div className="single-product-content main-padding">
                <div className="address">
                    <p>Home &#62; Women <span> &#62; Dresses </span> </p>
                </div>

                <div className="product-container">

                    {/* thumnails and main image */}
                    <div className="image-container">
                        <div className="thumnail-container">

                            <div className="up-btn" onClick={() => changePos('-')} >
                                <RiArrowUpSLine className='icon-arrow' />
                            </div>
                            <div className="down-btn" onClick={() => changePos('+')}>
                                <RiArrowDownSLine className='icon-arrow' />
                            </div>

                            {/* thumnail images */}
                            <div className="thumnail-wrapper" ref={wrapperRef}>
                                {
                                    images.map((image, i) => {
                                        return(
                                            <div className="thumnail-image">
                                                <img src={image} alt="thumnail of product"  onMouseOver={e => changeImg(e)} className='img-thum'/>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </div>

                                {/* main product image */}
                        <div className="main-product-image">
                            <img src={images[0]} alt="main product image" ref={mainImageRef} />
                        </div>
                    </div>


                                {/* product details */}
                    <div className="image-details">
                            <BsFillHeartFill className='icon-for-wish-list'/>
                        <div className="titles">
                            <h4>
                                Cool Image Name
                            </h4>

                            <p>
                                This model Is wearing something Cool of Size M
                            </p>

                            <span>
                                $29
                            </span>
                        </div>
                        

                        <div className="colors">
                            <h4>Colors</h4>
                            <div className="color" style={{backgroundColor: `var(--color-three)`}}>

                            </div>
                        </div>

                        <div className="size">
                            
                            <select name="select size" id="">
                                <option value="">Select Size</option>
                                <option value="Xl">XL</option>
                                <option value="l">L</option>
                                <option value="S">S</option>
                            </select>
                        </div>
                         <button className="btn"> Add to Cart</button>
                    </div>
                </div>
            </div>

            <NewArrivals />
        </div>
    )
}

export default SingleProduct