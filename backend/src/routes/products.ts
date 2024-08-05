import { Router } from 'express'
import { createProduct, getProducts, getProductById, updateProduct, deleteProduct } from '../controllers/productController'
import { createProductValidator, updateProductValidator } from '../validators/productValidators'
import { authenticateToken, authorizeAdmin } from '../middleware/auth'

const router = Router()

router.post('/', authenticateToken, authorizeAdmin, createProductValidator, createProduct)
router.get('/', getProducts)
router.get('/:id', getProductById)
router.put('/:id', authenticateToken, authorizeAdmin, updateProductValidator, updateProduct)
router.put('/:id', authenticateToken, authorizeAdmin, deleteProduct)

export default router