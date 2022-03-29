const { Router } = require('express');
const controllers = require('../controllers')
const router = Router()


router.get('/all', controllers.getAllCert)
router.get('/:organization', controllers.getByOrg )
router.get('/name/:name', controllers.getLikeName)
router.get('/id/:_id', controllers.getId)
// router.post('/id/:_id/post', controllers.)


module.exports=router
