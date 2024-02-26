import React from 'react'
import Logo from '../Airbnb-Logo.png'
export default function navbar(params) {
    return(
        <nav className='navigation--bar'>
            <img className="navigation--logo" src={Logo} alt="logo"/>

        </nav>
    )
};
