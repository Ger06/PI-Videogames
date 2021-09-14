import React from 'react';
import { Link } from 'react-router-dom';
import image from './LandingPage.module.css';

console.log(image.img)

function Landingpage() {
    return (
        <div  className={image.img}>
            
            <Link to='/home' >
                <button className={image.btn}>
                     Welcome
                </button>
            </Link>
        </div>
    )
}

export default Landingpage;
