const res = require("express/lib/response");
const { Cert, Study, User, Comm } = require("../models");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


//****************Certificate Searches*****************
//##################################################
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

//****************Study Resources*****************
//##################################################
const postStudy = async (req, res) => {
    try {
        const id = req.params._id
        const study = new Study({
            displayName: req.body.displayName,
            url: req.body.url,
            cert: id,
        })
        await study.save()

        const certificate = await Cert.findById(id)
            certificate.learningresources.push(study)
            await certificate.save()
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
        const recent = await Study.find({}).sort({createdAt: -1}).limit(3)
            console.log(recent)
            return res.status(200).json({ recent })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updStudyResource = async (req, res) => {
    try {
        console.log(req.body.displayName)
        console.log(req.params.name)
        const upd = await Study.findOneAndUpdate({displayName : req.params.name }, {displayName : req.body.displayName})
            upd.save()
            console.log(upd)
            return res.status(200).json({ upd })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

//****************User Login/Create*****************
//##################################################
const createUser = async (req, res) => {
    try {
    const user = await User.findOne({ userName : req.body.userName})
        if (user)
            return res.status(409).send({ message: "Username already in use"})

        if (req.body.password.length < 5) 
            return res.status(409).send({ message: "Password must be at least 5 characters"})

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        await new User({ ...req.body, password: hashPassword }).save();
            return res.status(200).json({ message : "Account Created! Redirecting you to the Login page " })
        }
        catch (error) {
                return res.status(500).send(error.message);
            }
}

const loginUser = async (req, res) => {
    try {
        const user = await User.findOne({ userName: req.body.userName });
		if (!user)
			return res.status(401).send({ message: "Invalid UserName or Password" });

        const pass = await bcrypt.compare(
                req.body.password,
                user.password)
        if (!pass)
            return res.status(401).send({ message: "Invalid Username or Password" })
                
        const token = user.generateAuthToken();
            res.status(200).send({ data: token, message: "logged in successfully" })
        }
    catch (error) {
        return res.status(500).send(error.message);
    }
}

const verifyUser = async (req, res) => {
    try {
        const token = req.params.id
        jwt.verify(token, process.env.JWTPRIVATEKEY, (err, decoded) => {
            if (err) {
                res.send(err.message)
            }
            else {
                res.send(decoded)
            }
        })
    }
    catch {

    }
}

//****************Comment Section*****************
//##################################################
const postComment = async (req, res) => {
    try {
        const id = req.params._id
        const comment = new Comm({
            userName: req.body.userName,
            user: req.body.user,
            text: req.body.comment,
            cert: id,
        })
        await comment.save()

        const user = await User.findById(req.body.user)
            user.posts.push(comment)
            await user.save()
        return res.status(200).json({ comment })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getComments = async (req, res) => {
    try {
        const com = await Comm.find({ "cert" : req.params._id})
        // const user = await User.findById({})
            return res.status(200).json({ com })
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
    recentUpdates,
    updStudyResource,
    createUser,
    loginUser,
    postComment,
    verifyUser,
    getComments
}