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
        posts : [{
            type: Schema.Types.ObjectId,
            ref: "comments"}]
        },
    {timestamps: true}
)

User.methods.generateAuthToken = function () {
    const token = jwt.sign({_id: this._id}, process.env.JWTPRIVATEKEY, {
        expiresIn: "5d",
    })
    return token
}


module.exports = User