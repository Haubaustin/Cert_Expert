import React from 'react'
import { Link } from 'react-router-dom'



const Nav = () => {
    return (
        <div className='Nav'>
            <section className='navLinks'>
            <Link to="/" className='homeLink'>Home</Link>
            <Link to="/search" className='searchLink'>Search</Link>
            </section>
            <span className='title'>
                Cert Expert
            </span>
        </div>
    )
}

export default Nav