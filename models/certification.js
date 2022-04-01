const { Schema } = require('mongoose')

const Certification = new Schema(
  {
    name: { type: String, required: true },
    organization: {type: String, required: true},
    examPrice: { type: String, required: true },
    description: { type: Array, required: true},
    image: {type: String, required: true},
    learningresources: [{ type: Schema.Types.ObjectId, ref: 'studies' }],
  
  },
  { timestamps: true }
)




module.exports = Certification