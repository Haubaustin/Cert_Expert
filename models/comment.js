const { Schema } =require('mongoose')

const Comment = new Schema (
    {
        user : {type: Schema.Types.ObjectId,
            ref: "users"},
        userName : {type: String, required: true},
        text: { type: String, required: true},
        cert: {type: Schema.Types.ObjectId,
            ref: "certifications"}
    },
    {timestamps: true }
)

module.exports = Comment