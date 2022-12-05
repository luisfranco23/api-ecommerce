const {Router} = require('express')
const passport = require('passport')
const { getProducts } = require('../controllers/products.controller')

const router = Router()

router.get('/' ,getProducts)

module.exports = router