import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Client from "../api/api.jsx"


const Commentsection = () => {
    const { id } = useParams()
    const [data, setData] = useState([])


useEffect(() => {
    getComments()
}, [])

const getComments = async () => {
    const comment = await Client.get(`/api/comment/${id}`)
    setData(comment.data.com)
    console.log(comment.data.com)
}

    return (
        <div>
            {/* <label>Sort By: </label>
            <select>
                <option>Newest</option>
            </select> */}
            {data.map((com)=> (
            <div key={com._id} className="indivTable">
                <p>
                    <img className="commentPic" src={com.user.profilePic}/>
                </p>
                <p className="indivUser">
                    {com.user.userName} <br></br>
                    {com.createdAt.substring(0,10)}
                </p>
                <p className="indivComment">
                    {com.text}
                </p>
            </div>
            ))}
        </div>
    )
}

export default Commentsection