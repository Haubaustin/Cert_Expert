const { Cert } = require("../models")


const getAllCert = async (req, res) => {
    try {
        const certs = await Cert.find({})
        return res.status(200).json({ certs })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllCert
}