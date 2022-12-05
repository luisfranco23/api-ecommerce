const {Router} = require('express')
const login = require('../auth/login.controller')
const { newUser } = require('../controllers/users.controller')

const router = Router()

router.post('/',newUser)
router.post('/auth/login',login)

module.exports = router