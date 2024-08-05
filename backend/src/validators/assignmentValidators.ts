import { body } from 'express-validator';

export const createAssignmentValidator = [
  body('productId').isInt().withMessage('Product ID must be an integer'),
  body('technicianId').isInt().withMessage('Technician ID must be an integer'),
  body('quantity').optional().isInt({ gt: 0 }).withMessage('Quantity must be a positive integer'),
  body('date').isISO8601().toDate().withMessage('Invalid date'),
  body('serial').optional().isString().withMessage('Serial must be a string'),
]