import { useState } from "react"
import {  useParams } from "react-router-dom"
import axios from "axios"



const Newcomment = () => {
    const { id } = useParams()
    const [data, setData] = useState({
        comment: "",
    })

   const handleDataInput = (e) => {
    const value = e.target.value
    setData({
        ...data,
        comment: value
    })
    console.log(data)
}

const handleSubmit = async (e) => {
        e.preventDefault()
        try {
        await axios.post(`http://localhost:3001/api/comment/${id}`, data)
        }    
        catch (error) {
            console.log(error)
            console.log(error.message)
        }
    }

    return (
        <div className="Newcomment">
            <h3 className="commentAuthor">Posting as: </h3>
            <form className="commentForm">
                <div>
                <textarea 
                    name="comment"
                    placeholder="Write your comment here"
                    rows={1}
                    cols={75}
                    onChange={handleDataInput}
                    className="commentSection"
                    value={data.comment}>
                    
                </textarea>
                </div>
                <div>
                <button 
                    onClick={handleSubmit}
                    className="inputButton"
                    hidden={!data.comment}>
                    Post Comment
                </button>
                </div>
            </form>
        </div>
    )
}

export default Newcomment