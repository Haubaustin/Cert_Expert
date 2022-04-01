import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const Register = () => {
    const [data, setData] = useState({
        userName: "",
        email: "",
        password: ""
    })
    
    const navigate = useNavigate()

    const handleRegister = (e) => {
        const value = e.target.value
        setData({
        ...data,
        [e.target.name]: value
        })
    }

    const handleSignUp = async (e) => {
        axios.post("http://localhost:3001/api/register", data)
            .then((response) => {
            console.log(response.status);
            console.log(response.data);
            navigate("/login")
        }
    )
}

    return (
        <div>
            <div className="welcomeBack">
                <h1>Returning?</h1>
                <Link to="/login">
                <button>Login</button>
                </Link>
            </div>
            <div className="createAcc">
                <h1>Create an Account</h1>
                <form onSubmit={handleSignUp}>
                    <input type="text" placeholder="Username" name="userName" value={data.userName} onChange={handleRegister} />
                    <input type="text" placeholder="Email" name="email" value={data.email} onChange={handleRegister}/>
                    <input type="password" placeholder="Password" name="password" value={data.password} onChange={handleRegister}/>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register