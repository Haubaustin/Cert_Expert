import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



const Register = () => {
    const navigate = useNavigate()
    const [response, setResponse] = useState("")
    const [data, setData] = useState({
        userName: "",
        email: "",
        password: ""
    })


    const handleRegister = (e) => {
        const value = e.target.value
        setData({
        ...data,
        [e.target.name]: value
        })
    }

    const handleSignUp = async (e) => {
        e.preventDefault()
        try {
            const {data: res} = await axios.post("http://localhost:3001/api/register", data)
            setResponse(res.message)
            setTimeout(() => {
                navigate("/login")  
            }, 2000);
        }
        catch (error) {
            console.log(error.response)
            console.log(error.response.status)
            setResponse(error.response.data.message)
        }   
        
}

    return (
        <div className="Register">
            <div className="welcomeBack">
                <h1>Returning?</h1>
                <Link to="/login">
                <button className="signInButton">Login</button>
                </Link>
            </div>
            <div className="createAcc">
                <h1>Create an Account</h1>
                <form onSubmit={handleSignUp}>
                    <input type="text" placeholder="Username" name="userName" value={data.userName} onChange={handleRegister} className="textInput"/><br></br>
                    <input type="text" placeholder="Email" name="email" value={data.email} onChange={handleRegister} className="textInput" /><br></br>
                    <input type="password" placeholder="Password" name="password" value={data.password} onChange={handleRegister} className="textInput" /><br></br>
                    <button type="submit" className="signInButton">Register</button>
                </form>
                    <h4 className="response">{response}</h4>
            </div>
        </div>
    )
}

export default Register