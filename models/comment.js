const { Schema } =require('mongoose')

const Comment = new Schema (
    {
        name: { type: String, required: true },
        comments: { type: String, required: true}
    },
    {timestamps: true }
)

module.exports = Comment