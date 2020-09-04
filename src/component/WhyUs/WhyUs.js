import React from 'react'

import './whyUs.css'

import { BsArrowRepeat } from 'react-icons/bs'
import { FaShippingFast, FaHeadphones } from 'react-icons/fa'

const WhyUs = ( ) => {
    return(
        <div className="why-us main-padding">
            <h2 className="title">WHY PEOPLE TRUST US</h2>
            <div>
                <div className="point point-1">

                    <FaShippingFast className='icon-shipping icon-why-us' />
                    <h3>
                        shipping
                    </h3>
                    <p>
                        We offer both standard and express shipping choose the service that best meets your needs at checkout.
                    </p>

                </div>


                <div className="point point-2">

                    <BsArrowRepeat className='icon-repeat icon-why-us' />
                    <h3>
                        Return and exchanges
                    </h3>
                    <p>
                        You have 20 days from the delivery date to complete our quick and easy return or exchanges procedure.
                    </p>

                </div>


                <div className="point point-3">

                    <FaHeadphones className='icon-headphone icon-why-us' />
                    <h3>
                        24/7 online support
                    </h3>
                    <p>
                        We provide 24 hour online support to help in solving technical issues that may accure.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WhyUs