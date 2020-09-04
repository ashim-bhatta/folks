import React from 'react'
import Header from '../component/Header/Header'
import Nav from '../component/Nav/Nav'
import Catalogue from '../component/Catalogue/Catalogue'
import NewArrivals from '../component/NewArrivals/NewArrivals'
import DiscountCard from '../component/DiscountCard/DiscountCard'
import About from '../component/About/About'
import WhyUs from '../component/WhyUs/WhyUs'
import Newsletter from '../component/Newsletter/Newsletter'
import Footer from '../component/Footer/Footer'

const Home = ( ) => {
    return(
        <div>
            <Nav />
            <Header />
            <Catalogue />
            <NewArrivals />
            <DiscountCard />
            <About />
            <WhyUs />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Home