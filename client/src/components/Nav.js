import React from 'react'
import { Link } from 'react-router-dom'



const Nav = () => {
    const handleLogout = () => {
        localStorage.removeItem("token")
        window.location.reload()
    }

    return (
        <div className='Nav'>
            <section className='navLinks'>
            <Link to="/" className='homeLink'>Home</Link>
            <Link to="/search" className='searchLink'>Search</Link>
            </section>
            <span className='logout'>
                <button onClick={handleLogout}>Logout</button>
            </span>
        </div>
    )
}

export default Nav