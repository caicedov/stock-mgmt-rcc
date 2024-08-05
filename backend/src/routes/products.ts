import { Router } from 'express'
import { createProduct, getProducts, getProductById, updateProduct, deleteProduct } from '../controllers/productController'
import { createProductValidator, updateProductValidator } from '../validators/productValidators'

const router = Router()

router.post('/', createProductValidator, createProduct)
router.get('/', getProducts)
router.get('/:id', getProductById)
router.put('/:id', updateProductValidator, updateProduct)
router.put('/:id', deleteProduct)

export default router