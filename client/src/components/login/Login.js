import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
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
        const {data: res} = await  axios.post("http://localhost:3001/api/login", data)
           try {
            localStorage.setItem("token", res.data)
            window.location = "/"    
        } catch (error) {
            console.log(error.response)
            console.log(error.response.status)
        }
    }
    
    return (
        <div>
            <div>
                <h1>Login to your Account</h1>
                <form onSubmit={handleLogin}>
                    <input type="text" placeholder="Username" name="userName" onChange={handleChange} value={data.userName} />
                    <input type="text" placeholder="Username" name="password" onChange={handleChange} value={data.password} />
                    <button>Login</button>
                </form>
            </div>
            <div>
                <h1>Need Account?</h1>
            </div>
        </div>
    )
}

export default Login