const { Router } = require('express');
const controllers = require('../controllers')
const router = Router()

//All certs
router.get('/all', controllers.getAllCert)
//Get by Publishing Org
router.get('/org/:organization', controllers.getByOrg )
//Regex for searching by name
router.get('/name/:name', controllers.getLikeName)
//Get by Id for displaying expanded details
router.get('/id/:_id', controllers.getId)
//Display study resources for cert
router.get("/posts/:_id", controllers.getStudyResource)
//Homepage get recent updates of study resources
router.get("/new", controllers.recentUpdates)
//Verify Token and Return Basic User Dets
router.get("/checkuser/:id", controllers.verifyUser)
router.get("/comment/:_id", controllers.getComments)
//Update Study Resource
router.post("/updatepost/:name", controllers.updStudyResource)
//Login/Authorize Routes
router.post("/login", controllers.loginUser)
router.post("/register", controllers.createUser)
//Post new study resource
router.post('/post/:_id', controllers.postStudy)
//Post a comment
router.post("/comment/:_id", controllers.postComment)
//Delete Study Resource
router.delete('/post/:name', controllers.delStudyResource)

module.exports=router
