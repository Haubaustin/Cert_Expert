import React, {  useState, useEffect } from "react"
import {  useParams } from "react-router-dom"
import axios from "axios"



const Newcomment = () => {
    const token = localStorage.getItem("jwt")
    const [account, setAccount] = useState({})
    const { id } = useParams()
    const [data, setData] = useState({
        user: "",
        comment: "",
    })

    useEffect(()=> {
       verify()
     }, [])

     const verify = async () => {
        const whoami = await axios.get(`http://localhost:3001/api/checkuser/${token}`)
        setAccount(whoami.data)
    }

   const handleDataInput = (e) => {
    const value = e.target.value
    setData({
        ...data,
        user: account._id,
        comment: value
    })
    console.log(data)
}

    const handleSubmit = async (e) => {
        try {
        await axios.post(`http://localhost:3001/api/comment/${id}`, data)
        comment.value = ""
        }    
        catch (error) {
            console.log(error)
            console.log(error.message)
        }
    }

    return (
        <div className="Newcomment">
            <h3 className="commentAuthor">Posting as: <br></br><img src={account.profilePic} alt="" className="profilePic"/><br></br>{account.userName}</h3>
            <form className="commentForm">
                <div>
                <textarea 
                    name="comment"
                    placeholder="Write your comment here"
                    rows={4}
                    cols={75}
                    onChange={handleDataInput}
                    className="commentSection"
                    value={data.comment}>
                    
                </textarea>
                </div>
                <div className="commentButton">
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