const { Schema } =require('mongoose')

const Study = new Schema (
    {
        displayName : { type: String, required: true},
        url : {type: String, required: true},
    },
    {timestamps: true}
)

module.exports = Study