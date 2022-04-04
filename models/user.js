const { Schema } = require('mongoose')
const jwt = require("jsonwebtoken")
const { isEmail } = require("validator")

const User = new Schema (
    {
        userName : { type: String, 
            required: true, 
        },
        email: {type: String, 
            required: true, 
        },
        password : {type: String,
             required: true, 
            },
        profilePic : {type: String, default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"},
        posts : [{
            type: Schema.Types.ObjectId,
            ref: "comments"}]
        },
    {timestamps: true}
)

User.methods.generateAuthToken = function () {
    const token = jwt.sign({_id: this._id, userName: this.userName, profilePic: this.profilePic}, process.env.JWTPRIVATEKEY, {
        expiresIn: "6h",
    })
    return token
}


module.exports = User