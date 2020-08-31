import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
const Header = ( ) => {
    return(
        <header>
            <div className="main-padding">
                <div className="header-content">
                    <h2>
                        you can be as naughty as <br/> you want
                    </h2>
                    <p>
                        Just don't get caught
                    </p>
                    <Link className='btn white-btn'>
                        shop now
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header