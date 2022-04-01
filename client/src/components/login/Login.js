import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
    const [error, setError] = useState("")
    const [data, setData] = useState({
        userName: "",
        password: ""
    })

    const handleChange = (e) => {
        const value = e.target.value
        setData({
        ...data,
        [e.target.name]: value
        })
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
        const {data: res} = await  axios.post("http://localhost:3001/api/login", data)
            localStorage.setItem("token", res.data)
            window.location = "/"    
        } catch (error) {
            console.log(error.response)
            console.log(error.response.status)
            setError(error.response.data.message)
        }
    }
  
    return (
        <div>
            <div>
                <h1>Login to your Account</h1>
                <form >
                    <input type="text" placeholder="Username" name="userName" onChange={handleChange} value={data.userName} />
                    <input type="text" placeholder="Password" name="password" onChange={handleChange} value={data.password} />
                    <button onClick={handleLogin}>Login</button>
                </form>
                <h5>{error}</h5>
            </div>
            <div>
                <h1>Need Account?</h1>
                <Link to="/signup">
                <button>Sign Up!</button>
                </Link>
            </div>
        </div>
    )
}

export default Login