const { Schema } =require('mongoose')

const Study = new Schema (
    {
        display : { type: String, required: true},
        url : {type: URL, required: true}
    },
    {timestamps: true}
)

module.exports = Study