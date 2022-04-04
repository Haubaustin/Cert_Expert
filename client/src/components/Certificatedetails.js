import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import Resources from "./Resources"
import Newcomment from "./comments/Newcomment"
import Commentsection from "./comments/Commentsection"

const Certificatedetails = (props) => {
    const [cert, Setcert]=useState({})
    const { id } = useParams()
   
useEffect(()=> {
    const getCertResults = async () => {
        const certs = await axios.get(`http://localhost:3001/api/id/${id}`)
        Setcert(certs.data.id[0])
    }
    getCertResults()
}, [id])

    return (
        <div className="certDet">
            <h1 className="certTitle">{cert.organization} {cert.name}</h1>
            <div className="certResult">
                <div className="crLeft">
                    <img src={cert.image} alt = '' />
                </div>
                <div className="crRight">
                    <p>Description: {cert.description}</p>
                    <p>Price ${cert.examPrice}</p>
                </div>
                </div>
                <h2 className="Title">Study Resources</h2>
                <div className="study">
                <Resources />
                </div>
            <h2 className="Title">Comments</h2>
            <div className="comment">
                <Newcomment  />
                <Commentsection />
            </div>
        </div>
    )
}

export default Certificatedetails