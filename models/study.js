const { Schema } =require('mongoose')

const Study = new Schema (
    {
        displayName : { type: String, required: true},
        url : {type: String, required: true},
        cert : {type: Schema.Types.ObjectId,
            ref: "certifications"}
        
        },
    {timestamps: true}
)

module.exports = Study