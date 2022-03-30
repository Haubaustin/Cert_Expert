import axios from "axios"
import { useState } from "react"



const Resources = () => {
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
    axios.post("http://localhost:3001/api/posts/new", study).then((response) => {
        console.log(response.status);
        console.log(response.data);
      })
    }
        

    return (
        <div>
            <form onSubmit={handleSubmit}>
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