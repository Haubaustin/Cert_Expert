const { Schema } = require('mongoose')

const Certification = new Schema(
  {
    name: { type: String, required: true },
    organization: {type: String, required: true},
    examPrice: { type: String, required: true },
    description: { type: String, required: true },
    image: {type: String, required: true},
    learningresources: {type: String, required: false},
    difficulty: {type: String, required: false},
    field: {
        cybersecurity: {type: String, required: false},
        softwaredev: {type: String, required: false},
        itsupport: {type: String, required: false},
        cloudcomputing: {type: String, required: false},
        datamanagement: {type: String, required: false},
        network: {type: String, required: false},
        projectmanagement: {type: String, required: false},
    }
  },
  { timestamps: true }
)

module.exports = Certification