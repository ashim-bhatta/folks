import React from 'react';

import aboutImage from '../../img/about-image.jpg'

import './about.css'

const About = ( ) => {
    return(
        <div className="about main-padding">
            <div className="about-image">
                <img src={aboutImage} alt="about us image"/>
            </div>

            <div className="about-content">
                <h2 className='title'>who we are</h2>
                <p>
                    We want to enhance your unique and personal style with our fashion collection that are constant renovation
                </p>
                <p>
                    30 years after our birth, we preserve our roots and identity, cultivating the essence that allows us to achieve our best version.
                </p>

                <button className="btn">
                    Read More
                </button>
            </div>
        </div>
    )
}

export default About