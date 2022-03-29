import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

const Certificatedetails = () => {
const [cert, Setcert]=useState({})
const { id } = useParams()

useEffect(()=> {
    const getCertResults = async () => {
        const certs = await axios.get(`http://localhost:3001/api/id/${id}`)
        Setcert(certs.data.id[0])
        console.log(certs.data.id[0].field)
    }
    getCertResults()
}, [id])

    return (
        <div className="certDet">
            <h1 className="certTitle">{cert.organization} {cert.name}</h1>
            <div className="certResult">
                <div className="crLeft">
                <img src={cert.image} alt = '' />
                <p>Price ${cert.examPrice}</p>
                <p>Description: {cert.description}</p>
                </div>
                <div className="crRight">
                <p>Difficulty: {cert.difficulty}</p>
                <p>Learning Resources: {cert.learningresources}</p>
                <p>cloudcomputing {cert.field.cloudcomputing}</p>
                

                </div>
            </div>
        </div>
    )
}

export default Certificatedetails