import { Router } from 'express'
import {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory
} from '../controllers/categoryController'
import {
  createCategoryValidator,
  updateCategoryValidator
} from '../validators/categoryValidators'

const router = Router()

router.post('/', createCategoryValidator, createCategory)
router.get('/', getCategories)
router.get('/:id', getCategoryById)
router.put('/:id', updateCategoryValidator, updateCategory)

export default router