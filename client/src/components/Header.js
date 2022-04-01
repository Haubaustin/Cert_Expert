import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
//Image Links
// https://ibb.co/LdM646D
// https://ibb.co/0hXdvnS
// https://ibb.co/GkPBHcX
// https://ibb.co/34cFkcN


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
            <img src="https://i.ibb.co/34cFkcN/Cert-Expert-logos-white.png" alt="Cert-Expert-logos-white" border="0" className='titleImg'/>
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