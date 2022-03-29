const { Schema } = require('mongoose')

const Certification = new Schema(
  {
    name: { type: String, required: true },
    organization: {type: String, required: true},
    examPrice: { type: String, required: true },
    description: { type: String, required: true },
    image: {type: String, required: true},
    learningresources: {type: String, required: true},
    difficulty: {type: String, required: true},
  
  },
  { timestamps: true }
)




module.exports = Certification