import React from 'react'

import './newsletter.css'

const Newsletter = ( ) => {
    return(
        <div className="newsletter main-padding">
            <h3 className='title'>
                subscribe to the newsletter
            </h3>

            <form>
                <input type="text" placeholder='Enter your Email'/>
                <button className="btn">subscribe</button>
            </form>
            <span>
                <input type="checkbox"/>
                <p>
                    I accept <a href='#'>newsletter terms</a>
                </p>
            </span>
        </div>
    )
}

export default Newsletter