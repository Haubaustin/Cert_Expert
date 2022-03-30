import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


const Resources = () => {
    const { id } = useParams()
    const [rec, setRec] = useState([])
    const [data, setData] = useState({
        displayName: "",
        url: "",
    })
   
const handleDataChange = (e) => {
    const value = e.target.value
    setData({
        ...data,
        [e.target.name]: value
    })
}

const handleSubmit = (e) => {
    e.preventDefault()
    const study = {
        displayName: data.displayName,
        url: data.url
    }
    axios.post(`http://localhost:3001/api/post/${id}`, study).then((response) => {
        console.log(response.status);
        console.log(response.data);
      })
    }
       
useEffect(()=> {
    const getStudyResults = async () => {
        const study = await axios.get(`http://localhost:3001/api/posts/${id}`)
        setRec(study.data.rec)
        console.log(study.data.rec)
    }
    getStudyResults()
}, [])

    return (
        <div>
            <ul className="recList">
                {rec.map((result) => (
                    <li>
                        <a href={result.url} target="_blank" rel="noreferrer">{result.displayName}</a>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleSubmit} className="Resources">
                <input 
                type="text"
                name="displayName"
                placeholder="Display Name"
                value={data.displayName}
                onChange={handleDataChange}
                />
                <input 
                type="url"
                name="url"
                placeholder="URL"
                value={data.url}
                onChange={handleDataChange}
                />
                <button type="submit">Post</button>
            </form>
            
        </div>
    )
}

export default Resources