const { Router } = require('express');
const controllers = require('../controllers')
const router = Router()


router.get('/all', controllers.getAllCert)
router.get('/:organization', controllers.getByOrg )
router.get('/name/:name', controllers.getLikeName)


module.exports=router
