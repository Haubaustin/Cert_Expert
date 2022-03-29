const mongoose = require('mongoose')
const certSchema = require('./certification')
const commentSchema = require('./comment')
const studySchema = require('./study')

const Cert = mongoose.model('certifications', certSchema)
const Comm = mongoose.model('comments', commentSchema)
const Study = mongoose.model('studies', studySchema)

module.exports = {
    Cert,
    Comm,
    Study
}