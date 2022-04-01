import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
    const [login, setLogin] = useState(true)

    useEffect(() => {
        if (props.user) {
            setLogin(false)
        }
    }, [props.user])

    const handleLogout = () => {
        localStorage.removeItem("token")
        window.location.reload()
    }

    return (
        <div className='Header'>
             <h1 className='title'>
                Cert Expert
            </h1>
            <section className='navLinks'>
                <span className='navHome'>
                    <Link to="/" 
                        className='homeLink'>
                            Home
                    </Link>
                </span>
                <span 
                    className='navSearch' 
                    hidden={login}>
                    <Link to="/search" 
                        className='searchLink'>
                            Search
                    </Link>
                </span>
                <button 
                    onClick={handleLogout} 
                    hidden={login} 
                    className="logout">
                        Logout
                </button>
                
            </section>

        </div>
    )
}

export default Header