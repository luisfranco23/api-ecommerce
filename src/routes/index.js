const {Router} = require('express');
const router = Router();

const routerUsers = require('./users.route')
const routerProducts = require('./products.route');
const verifyToken = require('../middlewares/verifyToken');

router.use('/users',routerUsers)
router.use('/products',verifyToken,routerProducts)

module.exports = router