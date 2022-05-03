import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const Commentsection = () => {
    const { id } = useParams()
    const [data, setData] = useState([])


useEffect(() => {
    getComments()
}, [])

const getComments = async () => {
    const comment = await axios.get(`http://localhost:3001/api/comment/${id}`)
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
                <p className="indivUser">
                <img className="commentPic" src={com.user.profilePic}/>
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