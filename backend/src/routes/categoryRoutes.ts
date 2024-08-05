import { Router } from 'express'
import {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory
} from '../controllers/categoryController'
import { authenticateToken, authorizeAdmin } from '../middleware/auth'
import {
  createCategoryValidator,
  updateCategoryValidator
} from '../validators/categoryValidators'

const router = Router()

router.post('/', authenticateToken, authorizeAdmin, createCategoryValidator, createCategory)
router.get('/', getCategories)
router.get('/:id', getCategoryById)
router.put('/:id', authenticateToken, authorizeAdmin, updateCategoryValidator, updateCategory)

export default router