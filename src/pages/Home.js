import React from 'react'
import Header from '../component/Header/Header'
import Nav from '../component/Nav/Nav'
import Catalogue from '../component/Catalogue/Catalogue'
import NewArrivals from '../component/NewArrivals/NewArrivals'

const Home = ( ) => {
    return(
        <div>
            <Nav />
            <Header />
            <Catalogue />
            <NewArrivals />
        </div>
    )
}

export default Home