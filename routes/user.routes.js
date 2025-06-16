const Router = require('express')

const router = new Router()

const userControler = require('../controller/user.controler')

router.post('/user', userControler.createUser)
router.get('/user', userControler.getUsers)
router.get('/user/:id', userControler.getOneUser)
router.put('/user', userControler.updatePassword)
router.delete('/user/:id', userControler.deleteUser)
router.post('/user/login', userControler.loginUser)

module.exports = router