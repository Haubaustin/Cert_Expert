const { Router } = require('express');
const controllers = require('../controllers')
const router = Router()


router.get('/all', controllers.getAllCert)
router.get('/:organization', controllers.getByOrg )
router.get('/name/:name', controllers.getLikeName)
router.get('/id/:_id', controllers.getId)
router.get("/posts/:_id", controllers.getStudyResource)
router.get('/posts', controllers.recentUpdates)

router.post('/post/:_id', controllers.postStudy)

router.delete('/post/:name', controllers.delStudyResource)

module.exports=router
