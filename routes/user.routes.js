const Router = require('express')

const router = new Router()

const userController = require('../controller/user.controller')

router.post('/user', userController.createUser)
router.get('/user', userController.getUsers)
router.get('/user/:id', userController.getOneUser)
router.put('/user', userController.updatePassword)
router.delete('/user/:id', userController.deleteUser)
router.post('/user/login', userController.loginUser)

module.exports = router