const mongoose = require('mongoose')
const certSchema = require('./certification')

const Cert = mongoose.model('certs', certSchema)

module.exports = {
    Cert
}