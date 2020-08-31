import React, { useState } from 'react'
import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import {NavLink} from 'react-router-dom'

import './nav.css'

const Nav = ( ) => {
    const navMenus = [
        'sales',
        'new',
        'woman',
        'men',
        'collections'
    ]

    const [isNavOpen, setIsNavOpen ] = useState(false)
    const [ isSearchBarOpen, setIsSearchBarOpen ] = useState(false)

    const navPosition = ( ) => {
        console.log('a');
    }
    
    return(
        <nav className='main-padding nav' onScroll={navPosition}>
            <div className="logo">
                <a href="/home">FOLKS</a>
            </div>

            <div className={isNavOpen?'menu open':'menu'}>
                <ul className="menu-items">
                    {
                        navMenus.map(menu => {
                            const url = '/'+menu
                            return(
                                <li className="menu-item" key={menu}>
                                    <NavLink to={url} activeClassName="active" href="#" className="menu-link">
                                        {menu}
                                    </NavLink>
                                </li>
                            )
                        }) 
                    }
                </ul>
            </div>

            <div className="action">
                <AiOutlineSearch className='action-icon icon-search' />
                <AiOutlineHeart className='action-icon icon-heart' />
                <AiOutlineShoppingCart className='action-icon icon-cart' />
                <AiOutlineUser className='action-icon icon-user' />

                <div className="toogle-menu" onClick={() => setIsNavOpen(!isNavOpen)}>
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                </div>
            </div>
        </nav>
    )
}

export default Nav