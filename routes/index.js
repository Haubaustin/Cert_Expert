const { Router } = require('express');
const controllers = require('../controllers')
const router = Router()


router.get('/all', controllers.getAllCert)
router.get('/org/:organization', controllers.getByOrg )
router.get('/name/:name', controllers.getLikeName)
router.get('/id/:_id', controllers.getId)
router.get("/posts/:_id", controllers.getStudyResource)
router.get("/new", controllers.recentUpdates)
//Update Study Resource
router.post("/updatepost/:name", controllers.updStudyResource)
//Login/Authorize Routes
router.post("/login", controllers.checkUser)
router.post("/register", controllers.createUser)
//Post new study resource
router.post('/post/:_id', controllers.postStudy)
//Delete Study Resource
router.delete('/post/:name', controllers.delStudyResource)

module.exports=router
