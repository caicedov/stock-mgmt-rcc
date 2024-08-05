import { body } from 'express-validator'

export const createProductValidator = [
  body('name').notEmpty().withMessage('Name is required'),
  body('quantity').isInt({ gt: 0 }).withMessage('Quantity must be a positive integer'),
  body('arrivalDate').isISO8601().toDate().withMessage('Invalid arrival date'),
  body('categoryId').isInt().withMessage('Category ID must be an integer')
]

export const updateProductValidator = [
  body('name').optional().notEmpty().withMessage('Name is required'),
  body('quantity').optional().isInt({ gt: 0 }).withMessage('Quantity must be a positive integer'),
  body('arrivalDate').optional().isISO8601().toDate().withMessage('Invalid arrival date'),
  body('categoryId').optional().isInt().withMessage('Category ID must be an integer')
]