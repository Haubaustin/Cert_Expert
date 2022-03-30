const { Router } = require('express');
const controllers = require('../controllers')
const router = Router()


router.get('/all', controllers.getAllCert)
router.get('/:organization', controllers.getByOrg )
router.get('/name/:name', controllers.getLikeName)
router.get('/id/:_id', controllers.getId)
router.post('/posts/new', controllers.postStudy)


module.exports=router
