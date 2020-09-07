import React from 'react'

import { AiFillInstagram, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai'
import { FaFacebookF, FaGooglePlusG } from 'react-icons/fa'

import './footer.css'
import { Link } from 'react-router-dom'

const Footer = ( ) => {
    const date = new Date
    return(
        <div className='footer main-padding'>
            <h2> 
                <Link to='/home'> Floks </Link>&copy; {date.getFullYear()} All Right Reserved</h2>
            <ul>
                <h3>Shoes</h3>
                 <li>Women</li>
                 <li>Mem</li>
                 <li>BAgs</li>
                 <li>Shoes</li>
            </ul>
            <ul>
                <h3>Help</h3>
                <li>My Account</li>
                <li>Store Locator</li>
                <li>Contact</li>
                <li>Gift Card</li>
            </ul>
            <ul>
                <h3>Join Now</h3>
                <li>Free Delivery for Mohito members?</li>
                <li>Join now and get 10% off your first purchase</li>

                <ul>
                    <li><AiFillInstagram className='icon-social' /> </li>
                    <li> <AiOutlineTwitter className='icon-social' /> </li>
                    <li> <FaGooglePlusG className='icon-social' /> </li>
                    <li> <FaFacebookF className='icon-social' /> </li>
                    <li> <AiFillYoutube className='icon-social' /> </li>
                </ul>
            </ul>
        </div>
    )
}

export default Footer