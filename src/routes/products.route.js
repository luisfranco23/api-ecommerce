const {Router} = require('express')
const { getProducts, addProduct } = require('../controllers/products.controller')
const { upload } = require('../utils/multer')

const router = Router()

router.get('/' ,getProducts)
router.post('/' , upload.single('image'),addProduct)

module.exports = router