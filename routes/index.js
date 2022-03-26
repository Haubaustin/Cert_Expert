const { Router } = require('express');
const controllers = require('../controllers')
const router = Router()


router.get('/certificates', controllers.getAllCert)


module.exports=router
