import React, { useRef, useEffect, useContext } from 'react'
import Nav from '../Nav/Nav';
import product from '../../product'
import { v4 as uuid } from 'uuid';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import {  BsFillHeartFill  } from 'react-icons/bs';
import './singleProduct.css'
import NewArrivals from '../NewArrivals/NewArrivals';
import { CartContext } from '../../context/Cart';



const SingleProduct = ( props ) => {

    const dressName = props.match.params.dressName.replace(/-/g, ' ')
    const thumImage = document.getElementsByClassName('img-thum')
    const active = document.getElementsByClassName('active')
    const wrapperRef = useRef(null)
    const mainImageRef = useRef(null)

    const currentProduct = product.filter(curPro => curPro.name == dressName)
    const mainImage = (currentProduct[0].image[0]);
    const { name, size, del, incart, type,  price, id } = currentProduct[0]
    const { addToCart, removeFromCart } = useContext(CartContext)
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
                    <p>Home &#62; {type} <span style={{wordSpacing : '0.2px'}}> &#62; {name} </span> </p>
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
                                    currentProduct[0].image.map((image, i) => {
                                        return(
                                            <div className="thumnail-image"  key={uuid()}>
                                                <img src={image} alt="thumnail of product"  onMouseOver={e => changeImg(e)} className='img-thum'/>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </div>

                                {/* main product image */}
                        <div className="main-product-image">
                            <img src={mainImage} alt="main product image" ref={mainImageRef} />
                        </div>
                    </div>


                                {/* product details */}
                    <div className="image-details">
                            <BsFillHeartFill className='icon-for-wish-list'/>
                        <div className="titles">
                            <h4>
                                {name}
                            </h4>

                            <p>
                                {del}
                            </p>

                            <span>
                                ${price}
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
                                {
                                    size.map(s => {
                                        return(
                                            <option key={uuid()} value="">{s}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                         
                            { incart?(
                                <button className="btn" > In Cart</button>
                             ):(
                                <button className="btn add" onClick={() => addToCart(id)}> Add to Cart</button>
                             )}
                         
                    </div>
                </div>
            </div>

            <NewArrivals />
        </div>
    )
}

export default SingleProduct