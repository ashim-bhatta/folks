import React from 'react'
import Header from '../component/Header/Header'
import Nav from '../component/Nav/Nav'
import Catalogue from '../component/Catalogue/Catalogue'

const Home = ( ) => {
    return(
        <div>
            <Nav />
            <Header />
            <Catalogue />
        </div>
    )
}

export default Home