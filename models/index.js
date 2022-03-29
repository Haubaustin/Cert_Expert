const mongoose = require('mongoose')
const certSchema = require('./certification')

const Cert = mongoose.model('certifications', certSchema)

module.exports = {
    Cert,
}