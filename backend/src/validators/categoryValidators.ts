import { body } from 'express-validator'

export const createCategoryValidator = [
  body('name').isString().notEmpty().withMessage('Name is required and must be a string'),
]

export const updateCategoryValidator = [
  body('name').optional().isString().notEmpty().withMessage('Name must be a string'),
]