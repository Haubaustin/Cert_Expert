const res = require("express/lib/response");
const { Cert, Study } = require("../models");


const getAllCert = async (req, res) => {
    try {
        const certs = await Cert.find({})
        return res.status(200).json({ certs })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getByOrg = async (req, res) => {
    try {
        const organization = await Cert.find({ organization: req.params.organization})
        return res.status(200).json({ organization })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getLikeName = async (req, res) => {
    try {
    const name = await Cert.find({'name': {'$regex': `${req.params.name}`, '$options': 'i'}}) 
        return res.status(200).json({ name })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getId = async (req, res) => {
    try {
    const id = await Cert.find({ _id: req.params._id }) 
        return res.status(200).json({ id })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const postStudy = async (req, res) => {
    try {
        const id = req.params._id
        const study = new Study({
            displayName: req.body.displayName,
            url: req.body.url,
            cert: id,
        })
        await study.save()
        // const relatedCert = await Cert.findById({ _id: req.params._id })
        //     console.log(relatedCert)
        //     relatedCert.learningresources.push(study)
        // await relatedCert.save()
        return res.status(200).json({ study })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getStudyResource = async (req, res) => {
    try {
        const rec = await Study.find({ "cert" : req.params._id})
            return res.status(200).json({ rec })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const delStudyResource = async (req, res) => {
    try {
        const del = await Study.find({ "displayName" : req.params.name }).deleteOne().exec()
            return res.status(200).json({ del })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const recentUpdates = async (req,res) => {
    try {
        const recent = await Study.find().sort({created_at: -1})
            return res.status(200).json({ recent })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllCert,
    getByOrg,
    getLikeName,
    getId,
    postStudy,
    getStudyResource,
    delStudyResource,
    recentUpdates
}