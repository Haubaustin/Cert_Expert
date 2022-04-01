const { Schema } = require('mongoose')

const User = new Schema (
    {
        userName : { type: String, required: true},
        password : {type: String, required: true},
        posts : [{
            type: Schema.Types.ObjectId,
            ref: "comments"}]
        },
    {timestamps: true}
)

module.exports = User