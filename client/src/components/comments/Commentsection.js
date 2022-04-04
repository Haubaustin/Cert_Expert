import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const Commentsection = () => {
    const { id } = useParams()
    const [data, setData] = useState([])


useEffect(() => {
    getComments()
})

const getComments = async () => {
    const comment = await axios.get(`http://localhost:3001/api/comment/${id}`)
    setData(comment.data.com)
}

    return (
        <div>
            {data.map((com)=> (
            <div key={com._id} className="indivTable">
                <p className="indivUser">
                {com.userName} <br></br>
                {com.createdAt}
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