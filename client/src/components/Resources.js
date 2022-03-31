import axios from "axios"
import { useState, useEffect } from "react"
import {  useParams } from "react-router-dom"


const Resources = () => {
    const { id } = useParams()
    const [ show, setShow ] =useState(false)
    const [rec, setRec] = useState([])
    const [data, setData] = useState({
        displayName: "",
        url: "",
    })

const refreshPage = () => {
    window.location.reload(false)
}

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
        console.log(response.status)
        console.log(response.data)
        refreshPage()
      })
    }
       
useEffect(()=> {
    const getStudyResults = async () => {
        const study = await axios.get(`http://localhost:3001/api/posts/${id}`)
        setRec(study.data.rec)
    }
    getStudyResults()
},[id])

const handleDelete = async (e) => {
    const name = e.target.name
    console.log(name)
    await axios.delete(`http://localhost:3001/api/post/${name}`, name).then((response) => {
        console.log(response.status);
        console.log(response.data);
        refreshPage()
      })
    }


    return (
        <div className="Resources">
            <ul className="recList">
                {rec.map((result) => (
                    <li>
                        <a href={result.url} target="_blank" rel="noreferrer">{result.displayName}</a>
                        <form style={{ display : show ? 'block' : 'none'}} className="editForm">
                            <input type="text" value={result.displayName} />
                            <button>Submit</button>
                        </form>
                        <button className="editButton" onClick={()=> setShow((s) => !s)}>[...]</button>
                        <button name={result.displayName} onClick={handleDelete} className="delButton">X</button>
                    </li>
                ))}
            </ul>
            <h4 className="newStudy">Post a study resource</h4>
            <form onSubmit={handleSubmit} >
                <input 
                type="text"
                name="displayName"
                placeholder="Display Name"
                value={data.displayName}
                onChange={handleDataChange}
                className="input"
                />
                <input 
                type="url"
                name="url"
                placeholder="URL eg http://123.com"
                value={data.url}
                onChange={handleDataChange}
                className="input"
                />
                <button className="inputButton" type="submit" >Post</button>
            </form>
            
        </div>
    )
}

export default Resources