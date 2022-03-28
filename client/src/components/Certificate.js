import React from "react"
import { Link } from "react-router-dom"

const Certificate = (props) => {

    return (
        <div className="Certificate">
            <img src={props.img} alt=''/>
            <Link to={props.name}>
            <h4>{props.name}</h4>
            </Link>
            <p>{props.desc}</p>

        </div>
    )
}

export default Certificate