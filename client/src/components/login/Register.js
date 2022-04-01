import axios from "axios";
import React from "react";
import { useState } from "react";



const Register = () => {
    const [user, setUser] = useState({
        userName: "",
        password: ""
    })
    const handleRegister = (e) => {
        const value = e.target.value
        setUser({
        ...user,
        [e.target.name]: value
        })
    }

    const signUp = () => {
        axios.post("http://localhost:3001/Signup", user)
            .then((response) => {
            console.log(response.status);
            console.log(response.data);
        }
    )
}




    return (
        <div>
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password"/>
                <button type="submit"></button>
            </form>
        </div>
    )
}

export default Register