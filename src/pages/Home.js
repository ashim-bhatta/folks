import React from 'react'
import Header from '../component/Header/Header'
import Nav from '../component/Nav/Nav'
import Catalogue from '../component/Catalogue/Catalogue'
import NewArrivals from '../component/NewArrivals/NewArrivals'
import DiscountCard from '../component/DiscountCard/DiscountCard'
import About from '../component/About/About'

const Home = ( ) => {
    return(
        <div>
            <Nav />
            <Header />
            <Catalogue />
            <NewArrivals />
            <DiscountCard />
            <About />
        </div>
    )
}

export default Home