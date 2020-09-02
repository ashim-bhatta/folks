import React, { useRef, useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination,  A11y} from 'swiper'

import product1 from '../../img/product-1.png';
import product2 from '../../img/product-2.png';
import product3 from '../../img/product-3.png';
import product4 from '../../img/product-4.png';
import product5 from '../../img/product-5.png';

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'

import './newArrivals.css'

SwiperCore.use([Navigation, Pagination,  A11y])
const NewArrivals = ( ) => {

    const products = [
        {
            img: product1,
            name: 'Product One',
            description : 'This is Product Detail',
            price: '38',
            latest: true,
            size: ['Xs', 'S', 'L', "XL"],
            colors: ['turquoise', 'red', 'black']
        },
        {
            img: product2,
            name: 'Product Two',
            description : 'This is Product Detail',
            price: '32',
            size: ['L', "XL", 'XLL'],
            colors: ['blue', 'grey', 'pink']
        },
        {
            img: product3,
            name: 'Product Three',
            description : 'This is Product Detail',
            price: '32',
            size: ['Xs', 'S', 'L'],
            colors: ['blue', 'white', 'black']
        },
        {
            img: product4,
            name: 'Product Four',
            description : 'This is Product Detail',
            price: '32',
            size: ['Xs', 'S', 'L', "XLl"],
            colors: ['blue', 'red', 'black', 'green']
        },
        {
            img: product5,
            name: 'Product Five',
            description : 'This is Product Detail',
            price: '32',
            size: ['S', 'L', "XL"],
            colors: ['blue', 'red', 'pink', 'green']
        },
       
    ]


    return(

        <div className="main-padding new-arrivals">
            <div className="title">
                <h3>
                    New Arrivals 
                </h3>
            </div>

            <Swiper
                className='extra-large'
                spaceBetween={30}
                slidesPerView={4}
                navigation
                scrollbar={{draggable: true}}
                
            >
                
                    {
                        products.map(product => {
                            return(
                                <SwiperSlide key={product.name} style={{ display : 'flex', justifyContent: 'center', alignItems: "center"}}>
                                    <ProductCard product={product}/>
                                </SwiperSlide>
                            )
                        })
                    }

            </Swiper>
            <Swiper
                className='large'
                spaceBetween={30}
                slidesPerView={3}
                navigation
                scrollbar={{draggable: true}}
                
            >
                
                    {
                        products.map(product => {
                            return(
                                <SwiperSlide style={{ display : 'flex', justifyContent: 'center', alignItems: "center"}}>
                                    <ProductCard product={product}/>
                                </SwiperSlide>
                            )
                        })
                    }

            </Swiper>
            <Swiper
                className='small'
                spaceBetween={30}
                slidesPerView={1}
                navigation
                scrollbar={{draggable: true}}
                
            >
                
                    {
                        products.map(product => {
                            return(
                                <SwiperSlide style={{ display : 'flex', justifyContent: 'center', alignItems: "center"}}>
                                    <ProductCard product={product}/>
                                </SwiperSlide>
                            )
                        })
                    }

            </Swiper>
            <Swiper
                className='medium'
                spaceBetween={30}
                slidesPerView={2}
                navigation
                scrollbar={{draggable: true}}
                
            >
                
                    {
                        products.map(product => {
                            return(
                                <SwiperSlide style={{ display : 'flex', justifyContent: 'center', alignItems: "center"}}>
                                    <ProductCard product={product}/>
                                </SwiperSlide>
                            )
                        })
                    }

            </Swiper>

        </div>
    )
}

export default NewArrivals