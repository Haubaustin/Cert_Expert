import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

const Certificatedetails = () => {
const [cert, Setcert]=useState({})
const { name } = useParams()

useEffect(()=> {
    const getCertResults = async () => {
        const certs = await axios.get(`http://localhost:3001/api/name/${name}`)
        Setcert(certs.data.name[0])
        console.log(certs.data.name[0])
    }
    getCertResults()
}, [name])

    return (
        <div>
            <h1>{cert.organization} {cert.name}</h1>
            <div className="certResult">
                <img src={cert.image} alt = '' />
                <p>Price ${cert.examPrice}</p>
                <p>Description: {cert.description}</p>
                <p>Difficulty: {cert.difficulty}</p>
                <p>Learning Resources: {cert.learningresources}</p>
            </div>
        </div>
    )
}

export default Certificatedetails