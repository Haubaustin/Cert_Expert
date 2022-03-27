import React from 'react'
import { Link } from 'react-router-dom'



const Nav = () => {
    return (
        <div className='Nav'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <span className='title'>
                Cert Expert
            </span>
        </div>
    )
}

export default Nav